import urllib.request
import json
import re
import os

def fetch_json(url):
    req = urllib.request.Request(
        url,
        headers={"User-Agent": "Github-Stats-Updater-Action"}
    )
    with urllib.request.urlopen(req) as response:
        return json.loads(response.read().decode("utf-8"))

def main():
    username = "nil1902"
    
    # 1. Fetch user profile stats
    try:
        user_data = fetch_json(f"https://api.github.com/users/{username}")
        public_repos = user_data.get("public_repos", 0)
        followers = user_data.get("followers", 0)
    except Exception as e:
        print("Error fetching user data:", e)
        return

    # 2. Fetch repos to calculate total stars and forks
    try:
        # Fetch up to 100 repos (since user has 25+ projects, 1 page of 100 is sufficient)
        repos_data = fetch_json(f"https://api.github.com/users/{username}/repos?per_page=100")
        total_stars = sum(repo.get("stargazers_count", 0) for repo in repos_data)
        total_forks = sum(repo.get("forks_count", 0) for repo in repos_data)
    except Exception as e:
        print("Error fetching repos data:", e)
        return

    print(f"Stats fetched - Repos: {public_repos}, Stars: {total_stars}, Forks: {total_forks}, Followers: {followers}")

    # 3. Read README.md
    readme_path = "README.md"
    if not os.path.exists(readme_path):
        print("README.md not found!")
        return

    with open(readme_path, "r", encoding="utf-8") as f:
        readme_content = f.read()

    # Helper function to replace content between comment tags
    def replace_placeholder(content, key, value):
        pattern = rf"(<!-- {key}_START -->)(.*?)(<!-- {key}_END -->)"
        replacement = rf"\g<1>{value}\g<3>"
        return re.sub(pattern, replacement, content)

    # 4. Replace placeholders
    new_content = readme_content
    new_content = replace_placeholder(new_content, "STATS_STARS", total_stars)
    new_content = replace_placeholder(new_content, "STATS_FORKS", total_forks)
    new_content = replace_placeholder(new_content, "STATS_REPOS", public_repos)
    new_content = replace_placeholder(new_content, "STATS_FOLLOWERS", followers)

    # 5. Write back to README.md
    with open(readme_path, "w", encoding="utf-8", newline="\n") as f:
        f.write(new_content)

    print("README.md updated successfully with real stats!")

if __name__ == "__main__":
    main()
