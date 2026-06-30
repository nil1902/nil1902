// --- PROJECTS DATABASE ---
const projects = [
    // Web & Software
    {
        id: "nils-portfolio",
        title: "Nil's Portfolio",
        category: "web",
        categoryLabel: "Web & Software",
        desc: "Modern portfolio with smooth animations, glassmorphic design, and interactive elements. Showcases biography, tech skills, and live project integrations.",
        longDesc: "A high-performance personal portfolio website built with React and Vite. Features advanced glassmorphic styling, smooth transition animations powered by Framer Motion, and a fully responsive grid system. It highlights professional projects, skills, and offers direct contact paths.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
        demo: "https://nilimesh-portfolio.vercel.app/",
        github: "",
        icon: "fa-solid fa-user-tie"
    },
    {
        id: "bengel-bay",
        title: "Bengal Bay",
        category: "web",
        categoryLabel: "Web & Software",
        desc: "Smart restaurant dashboard featuring real-time analytics, kitchen coordination, order tracking, and intuitive chef controls.",
        longDesc: "A complete restaurant operations dashboard. Bengal Bay provides kitchen staff and managers with real-time order status tracking, sales analytics, menu item availability toggles, and seamless staff coordination. Built with React and Firebase for instant data synchronization.",
        tech: ["React", "TypeScript", "Firebase", "Redux", "Material UI", "Chart.js"],
        demo: "https://nil-s-kitchen.vercel.app/",
        github: "",
        icon: "fa-solid fa-utensils"
    },
    {
        id: "lyra-2",
        title: "LYRA 2.0",
        category: "web",
        categoryLabel: "Web & Software",
        desc: "AI-powered voice assistant with real-time speech recognition, natural language processing, and smart voice responses.",
        longDesc: "An interactive, web-based voice assistant that processes voice commands in real-time. Integrating the Gemini API, it provides intelligent responses, performs voice searches, reads out answers, and features a futuristic, animated holographic UI.",
        tech: ["React", "Tailwind CSS", "Gemini API", "Framer Motion", "Web Speech API"],
        demo: "https://lyra2olyr1.vercel.app/",
        github: "",
        icon: "fa-solid fa-wand-magic-sparkles"
    },
    {
        id: "leafwise",
        title: "LeafWise",
        category: "web",
        categoryLabel: "Web & Software",
        desc: "AI-driven plant identifier that uses computer vision to diagnose plant diseases and provide care recommendations.",
        longDesc: "LeafWise leverages artificial intelligence to analyze images of plants, identify their species, detect diseases, and suggest treatment methods. Features a voice-guided assistant and a clean dashboard for plant care tracking.",
        tech: ["React", "Next.js", "Tailwind CSS", "Gemini API", "Framer Motion"],
        demo: "https://plant-identification-web-applicatio.vercel.app/",
        github: "",
        icon: "fa-solid fa-seedling"
    },
    {
        id: "youtube-clone",
        title: "YouTube Clone",
        category: "web",
        categoryLabel: "Web & Software",
        desc: "Fully functional video browsing application with search, video playback, and category-based filtering.",
        longDesc: "A pixel-perfect clone of YouTube. It allows users to browse trending videos, search for specific terms, play videos in an embedded player, and browse channels. Integrates the official YouTube v3 API for real-time data.",
        tech: ["React", "YouTube API", "Material UI", "CSS3", "Responsive Design"],
        demo: "https://tubeyoou.netlify.app/",
        github: "https://github.com/nil1902/youtube-clone-",
        icon: "fa-brands fa-youtube"
    },
    {
        id: "glamourous-girl",
        title: "Glamourous Girl",
        category: "web",
        categoryLabel: "Web & Software",
        desc: "All-in-one makeup companion and product catalog with curated collections, trends, and personalized beauty guides.",
        longDesc: "A responsive frontend web application designed for beauty enthusiasts. Features styled product catalogs, filterable makeup guides, interactive trend sliders, and an elegant layout built entirely with vanilla web technologies.",
        tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "AOS Library"],
        demo: "https://glamourous-girl-git-main-nil1902s-projects.vercel.app/",
        github: "",
        icon: "fa-solid fa-wand-brush"
    },
    
    // Mobile Apps
    {
        id: "quizcraft",
        title: "QuizCraft",
        category: "mobile",
        categoryLabel: "Mobile Application",
        desc: "AI-powered MCQ generator and quiz app for 8 engineering branches with 100+ curated questions and progress tracking.",
        longDesc: "QuizCraft is an educational Progressive Web App (PWA) designed for engineering students. It uses AI to generate topic-wise multiple-choice questions, offers timed exams, provides detailed explanations, and tracks user scores locally.",
        tech: ["React 18", "TypeScript", "Firebase", "Tailwind CSS", "PWA", "Gemini API"],
        demo: "https://quiz-craft-lime.vercel.app/",
        github: "https://github.com/nil1902/QuizCraft-apk-install-for-linkedin",
        icon: "fa-solid fa-graduation-cap"
    },
    {
        id: "lovenest",
        title: "LoveNest",
        category: "mobile",
        categoryLabel: "Mobile Application",
        desc: "Premium boutique hotel booking platform designed for couples, featuring secure payments and map search.",
        longDesc: "A high-end, secure mobile booking application. LoveNest allows users to discover premium hotels, search via interactive maps, book rooms with Razorpay integration, and manage stays. Includes JWT authentication and a robust backend API.",
        tech: ["Flutter", "PostgreSQL", "REST APIs", "JWT Authentication", "Razorpay", "Google Maps"],
        demo: "https://www.linkedin.com/feed/update/urn:li:activity:7434881838025879552/",
        github: "",
        icon: "fa-solid fa-hotel"
    },
    {
        id: "pdffit",
        title: "PDFFit",
        category: "mobile",
        categoryLabel: "Mobile Application",
        desc: "Secure, client-side PDF utility for resizing, compressing, and optimizing documents directly in the browser.",
        longDesc: "An utility web app that lets users compress, scale down, and resize PDF files. Because it processes everything locally on the client's device using pdf-lib, user documents are 100% secure and never uploaded to a server.",
        tech: ["React", "TypeScript", "Vite", "pdf-lib", "Tailwind CSS"],
        demo: "https://pdffit-omega.vercel.app/",
        github: "",
        icon: "fa-regular fa-file-pdf"
    },
    
    // IoT & Embedded Systems
    {
        id: "attendance-system",
        title: "Non-Proxy Attendance System",
        category: "iot",
        categoryLabel: "IoT & Embedded System",
        desc: "NodeMCU-based RFID attendance system that logs records instantly to Google Sheets with physical gates.",
        longDesc: "A secure, smart attendance solution to prevent proxy logging. Using an RFID scanner connected to a NodeMCU, it reads student cards, cross-references credentials, logs attendance directly to a cloud-based Google Sheet via Webhooks, and actuates a servo-controlled physical gate.",
        tech: ["Arduino IDE", "NodeMCU (ESP8266)", "RFID MFRC522", "Google Sheets API", "Servo Motor"],
        demo: "",
        github: "",
        icon: "fa-solid fa-id-card"
    },
    {
        id: "chandrayaan-3",
        title: "IoT-Based Chandrayaan-3",
        category: "iot",
        categoryLabel: "IoT & Embedded System",
        desc: "Bluetooth-controlled lunar rover simulation featuring real-time telemetry and wireless navigation control.",
        longDesc: "A scale-model robotic rover simulating the Chandrayaan-3 mission. Built on Arduino and NodeMCU, the rover is controlled wirelessly via Bluetooth/Blynk and transmits real-time sensor data (distance, orientation, obstacles) back to the dashboard.",
        tech: ["Arduino IDE", "NodeMCU", "Arduino Uno R3", "HC-05 Bluetooth", "Blynk IoT"],
        demo: "",
        github: "",
        icon: "fa-solid fa-space-shuttle"
    },
    {
        id: "car-boat",
        title: "Bluetooth Controlled Car & Boat",
        category: "iot",
        categoryLabel: "IoT & Embedded System",
        desc: "Dual-mode wireless vehicle system featuring custom mobile application controls and motor drivers.",
        longDesc: "A versatile robotics project consisting of a land vehicle (car) and a water vehicle (boat). Utilizes an Arduino Nano and L293D motor drivers to receive commands from a custom-designed Android mobile app over a Bluetooth link.",
        tech: ["Arduino Nano", "L293D Motor Driver", "HC-05 Bluetooth Module", "Custom Mobile App"],
        demo: "",
        github: "",
        icon: "fa-solid fa-ship"
    },
    {
        id: "fire-robot",
        title: "Fire Extinguisher Robot Car",
        category: "iot",
        categoryLabel: "IoT & Embedded System",
        desc: "Autonomous fire-fighting vehicle equipped with flame sensors, water pump, and automatic navigation.",
        longDesc: "An autonomous safety robot designed to detect and extinguish fires. It scans the environment using flame sensors. When a fire is detected, it navigates towards the source, activates an on-board water pump, and sweeps a servo-mounted water nozzle to put out the flames.",
        tech: ["Arduino Uno R3", "Flame Sensor Array", "5V Water Pump", "Servo Motor", "L298N Motor Driver"],
        demo: "",
        github: "",
        icon: "fa-solid fa-fire-extinguisher"
    },
    {
        id: "sight-sense",
        title: "Sight Sense",
        category: "iot",
        categoryLabel: "IoT & Embedded System",
        desc: "AI-powered wearable vision system for visually impaired individuals featuring face recognition and audio feedback.",
        longDesc: "A smart assistive wearable system for the blind. Using a Raspberry Pi and a camera module, it captures the surroundings. Deep learning models (CNN, DeepFace) run locally to recognize faces, detect obstacles, and describe the scene to the user via text-to-speech audio feedback.",
        tech: ["Raspberry Pi", "OpenCV", "Convolutional Neural Networks", "Python3", "DeepFace", "TTS Engine"],
        demo: "",
        github: "",
        icon: "fa-solid fa-glasses"
    },
    {
        id: "rescue-drone",
        title: "AI Auto-Navigated Drone",
        category: "iot",
        categoryLabel: "IoT & Embedded System",
        desc: "Autonomous aerial drone designed for search & rescue operations, using GPS and AI object detection.",
        longDesc: "An advanced flight drone configured with ArduPilot and a Raspberry Pi companion computer. The drone follows pre-programmed GPS coordinates autonomously and uses a camera module to run real-time object detection models to locate survivors in rescue zones.",
        tech: ["ArduPilot", "Raspberry Pi Zero 2", "GPS Module", "Pi Camera", "TensorFlow Lite", "Python"],
        demo: "",
        github: "",
        icon: "fa-solid fa-helicopter"
    },
    {
        id: "security-system",
        title: "Hybrid Security System",
        category: "iot",
        categoryLabel: "IoT & Embedded System",
        desc: "Multi-factor smart door lock incorporating facial recognition, RFID credentials, and Telegram alerts.",
        longDesc: "An enterprise-grade home security system. Access is granted only when both a valid RFID card is scanned and the camera recognizes the user's face. Intruder alerts, including photos of unrecognized individuals, are sent instantly to the owner's Telegram app.",
        tech: ["OpenCV", "DeepFace", "NodeMCU", "RFID Reader", "Telegram Bot API", "Solenoid Lock"],
        demo: "",
        github: "",
        icon: "fa-solid fa-shield-halved"
    },
    {
        id: "safety-device",
        title: "Women Safety Device",
        category: "iot",
        categoryLabel: "IoT & Embedded System",
        desc: "Wearable safety device with heart rate monitoring, GPS tracking, LoRa communication, and emergency SOS alerts.",
        longDesc: "A compact, wearable IoT device designed for personal safety. It monitors heart rate spikes indicating distress, tracks GPS coordinates, and transmits SOS distress messages to nearby receivers using LoRa (Long Range) technology, even in areas without mobile network coverage.",
        tech: ["NodeMCU", "MAX30100 Heart Rate Sensor", "GPS Neo-6M", "LoRa SX1278", "Buzzer & SOS Button"],
        demo: "",
        github: "",
        icon: "fa-solid fa-kit-medical"
    },
    {
        id: "panipuri-machine",
        title: "Hygienic Panipuri Machine",
        category: "iot",
        categoryLabel: "IoT & Embedded System",
        desc: "Contactless food dispensing machine utilizing infrared sensors, liquid pumps, and an LCD counter.",
        longDesc: "A smart, automated food vending machine. When a user places a cup near the nozzle, an infrared sensor triggers a water pump to dispense a precise volume of flavored water. Features an LCD display showing the count of servings and system status.",
        tech: ["Arduino Uno R3", "IR Sensor", "Submersible Water Pump", "16x2 LCD with I2C", "Solenoid Valve"],
        demo: "",
        github: "",
        icon: "fa-solid fa-gears"
    }
];

// --- CODE EDITOR CONTENTS ---
const editorFiles = {
    profile: `// profile.js
const developer = {
  name: <span class="code-string">"Nilimesh Pal"</span>,
  title: <span class="code-string">"Full Stack Developer & IoT Engineer"</span>,
  location: <span class="code-string">"West Bengal, India 🇮🇳"</span>,
  education: <span class="code-string">"B.Tech ECE (9.24 CGPA)"</span>,
  
  expertise: [
    <span class="code-string">"Full Stack Web Development"</span>,
    <span class="code-string">"IoT & Embedded Systems"</span>,
    <span class="code-string">"UI/UX Interface Design"</span>
  ],
  
  currentFocus: <span class="code-string">"AI-driven systems & hardware-software loops"</span>
};

<span class="code-keyword">console</span>.log(<span class="code-string">\`Ready to collaborate! Contact: \${developer.title}\`</span>);`,

    skills: `{
  <span class="code-property">"languages"</span>: [
    <span class="code-string">"JavaScript"</span>, <span class="code-string">"TypeScript"</span>, <span class="code-string">"Python"</span>, <span class="code-string">"C"</span>
  ],
  <span class="code-property">"frontend"</span>: {
    <span class="code-property">"core"</span>: [<span class="code-string">"React"</span>, <span class="code-string">"Next.js"</span>],
    <span class="code-property">"styling"</span>: [<span class="code-string">"Tailwind CSS"</span>, <span class="code-string">"CSS3/HTML5"</span>, <span class="code-string">"Figma"</span>]
  },
  <span class="code-property">"backend"</span>: {
    <span class="code-property">"server"</span>: [<span class="code-string">"Node.js"</span>, <span class="code-string">"Express"</span>, <span class="code-string">"REST APIs"</span>],
    <span class="code-property">"databases"</span>: [<span class="code-string">"PostgreSQL"</span>, <span class="code-string">"MongoDB"</span>, <span class="code-string">"Firebase"</span>]
  },
  <span class="code-property">"hardware_iot"</span>: [
    <span class="code-string">"Arduino"</span>, <span class="code-string">"NodeMCU"</span>, <span class="code-string">"Raspberry Pi"</span>, <span class="code-string">"OpenCV"</span>, <span class="code-string">"VLSI"</span>
  ]
}`,

    philosophy: `<span class="code-comment"># About Nilimesh</span>

I am a creator who lives at the intersection of **Software** and **Hardware**. 

<span class="code-keyword">## Key Highlights</span>
- **Academic Topper**: First Class Honors B.Tech ECE with a <span class="code-number">9.24</span> CGPA.
- **Experienced Builder**: Over <span class="code-number">25+</span> completed projects, ranging from AI voice assistants to autonomous robotics.
- **Problem Solver**: Passionate about leveraging artificial intelligence (like Gemini API, OpenCV, CNNs) to make physical devices smarter.

*Let's build something amazing together!*`
};

// --- BACKGROUND CANVAS PARTICLES ---
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.reset();
    }
    
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.2 + 0.5;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
        this.alpha = Math.random() * 0.5 + 0.2;
        this.decay = Math.random() * 0.002 + 0.001;
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce or warp borders
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        
        // Pulse alpha
        this.alpha -= this.decay;
        if (this.alpha <= 0) {
            this.reset();
        }
    }
    
    draw() {
        ctx.fillStyle = `rgba(167, 139, 250, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    const count = Math.min(Math.floor(window.innerWidth / 15), 120);
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}

// Initialize background
window.addEventListener("resize", () => {
    resizeCanvas();
    initParticles();
});
resizeCanvas();
initParticles();
animateParticles();

// --- TYPING EFFECT ---
const words = ["Full Stack Developer", "IoT & Hardware Engineer", "UI/UX Designer", "AI Enthusiast"];
let wordIdx = 0;
let charIdx = 0;
let isDeleting = false;
const typingTextEl = document.getElementById("typing-text");

function typeEffect() {
    const currentWord = words[wordIdx];
    
    if (isDeleting) {
        typingTextEl.textContent = currentWord.substring(0, charIdx - 1);
        charIdx--;
    } else {
        typingTextEl.textContent = currentWord.substring(0, charIdx + 1);
        charIdx++;
    }
    
    let typeSpeed = isDeleting ? 40 : 85;
    
    if (!isDeleting && charIdx === currentWord.length) {
        typeSpeed = 1800; // Pause at full word
        isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        typeSpeed = 400; // Pause before typing next word
    }
    
    setTimeout(typeEffect, typeSpeed);
}
setTimeout(typeEffect, 1000);

// --- VS CODE EDITOR TABS ---
const editorContentEl = document.getElementById("editor-content");
const tabEls = document.querySelectorAll(".editor-tab");

function loadEditorTab(tabName) {
    const codeText = editorFiles[tabName];
    const lines = codeText.split("\n");
    
    let htmlContent = "";
    lines.forEach((line, index) => {
        htmlContent += `
            <div class="code-line">
                <span class="line-number">${index + 1}</span>
                <span class="line-content">${line}</span>
            </div>
        `;
    });
    
    editorContentEl.innerHTML = htmlContent;
}

tabEls.forEach(tab => {
    tab.addEventListener("click", () => {
        tabEls.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        loadEditorTab(tab.dataset.tab);
    });
});

// Load default tab
loadEditorTab("profile");

// --- SKILLS PROGRESS BARS ANIMATION ON SCROLL ---
const skillBars = document.querySelectorAll(".tech-bar-fill");
const skillsSection = document.getElementById("skills");

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skillBars.forEach(bar => {
                const targetWidth = bar.dataset.width;
                bar.style.width = targetWidth;
            });
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// --- PROJECTS FILTER AND SEARCH ---
const projectsGrid = document.getElementById("projects-grid");
const searchInput = document.getElementById("project-search");
const filterBtns = document.querySelectorAll(".filter-btn");

let activeCategory = "all";
let searchQuery = "";

function renderProjects() {
    projectsGrid.innerHTML = "";
    
    const filtered = projects.filter(p => {
        const matchesCategory = activeCategory === "all" || p.category === activeCategory;
        
        const text = (p.title + " " + p.desc + " " + p.tech.join(" ")).toLowerCase();
        const matchesSearch = text.includes(searchQuery.toLowerCase());
        
        return matchesCategory && matchesSearch;
    });
    
    if (filtered.length === 0) {
        projectsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem; color: var(--text-muted);">
                <i class="fa-regular fa-folder-open" style="font-size: 3rem; margin-bottom: 1.5rem; color: var(--primary);"></i>
                <h3>No projects found</h3>
                <p style="margin-top: 0.5rem;">Try adjusting your keywords or category filters.</p>
            </div>
        `;
        return;
    }
    
    filtered.forEach(p => {
        const card = document.createElement("div");
        card.className = "project-card glass-panel";
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
        
        const techBadges = p.tech.slice(0, 3).map(t => `<span class="project-tag">${t}</span>`).join("");
        const techMore = p.tech.length > 3 ? `<span class="project-tag">+${p.tech.length - 3}</span>` : "";
        
        const githubLink = p.github ? `<a href="${p.github}" target="_blank" class="project-link" title="GitHub Source"><i class="fa-brands fa-github"></i></a>` : "";
        const demoLink = p.demo ? `<a href="${p.demo}" target="_blank" class="project-link" title="Live Demo"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : "";
        
        card.innerHTML = `
            <div class="project-card-header">
                <div class="project-icon-wrapper">
                    <i class="${p.icon || 'fa-solid fa-code'}"></i>
                </div>
                <span class="project-category-tag">${p.categoryLabel}</span>
            </div>
            <div class="project-card-body">
                <h3 class="project-title">${p.title}</h3>
                <p class="project-desc">${p.desc}</p>
                <div class="project-tags">
                    ${techBadges}
                    ${techMore}
                </div>
            </div>
            <div class="project-card-footer">
                <div class="project-link-group">
                    ${githubLink}
                    ${demoLink}
                </div>
                <button class="btn-text" onclick="openProjectModal('${p.id}')">
                    Details <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        `;
        
        projectsGrid.appendChild(card);
        
        // Trigger reflow for animation
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 30);
    });
}

// Search input listener
searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderProjects();
});

// Category tabs listener
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeCategory = btn.dataset.filter;
        renderProjects();
    });
});

// Initial projects render
renderProjects();

// --- PROJECT DETAIL MODAL SYSTEM ---
const modalOverlay = document.getElementById("project-modal");
const modalCategory = document.getElementById("modal-category");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalTechList = document.getElementById("modal-tech-list");
const modalLinks = document.getElementById("modal-links");
const modalClose = document.getElementById("modal-close");

function openProjectModal(projectId) {
    const p = projects.find(item => item.id === projectId);
    if (!p) return;
    
    modalCategory.textContent = p.categoryLabel;
    modalTitle.textContent = p.title;
    modalDesc.textContent = p.longDesc || p.desc;
    
    // Tech badges
    modalTechList.innerHTML = p.tech.map(t => `<span class="modal-tech-badge">${t}</span>`).join("");
    
    // Footer links
    let footerHtml = "";
    if (p.demo) {
        footerHtml += `
            <a href="${p.demo}" target="_blank" class="btn btn-primary">
                Visit Live Site <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
        `;
    }
    if (p.github) {
        footerHtml += `
            <a href="${p.github}" target="_blank" class="btn btn-secondary">
                View Repository <i class="fa-brands fa-github"></i>
            </a>
        `;
    }
    
    if (!p.demo && !p.github) {
        footerHtml += `<span style="color: var(--text-muted); font-size: 0.9rem; font-style: italic;"><i class="fa-solid fa-circle-info"></i> Project repository is private or physical hardware prototype.</span>`;
    }
    modalLinks.innerHTML = footerHtml;
    
    // Open modal
    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Lock scroll
}

function closeProjectModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = ""; // Unlock scroll
}

modalClose.addEventListener("click", closeProjectModal);
modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
        closeProjectModal();
    }
});

// Close modal on Escape
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
        closeProjectModal();
    }
});

// --- HEADER SCROLL EFFECT & ACTIVE NAVIGATION ---
const header = document.getElementById("header");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    // Scroll header background
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
    
    // Scroll spy for active link
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Highlight slightly before the section reaches the middle of the viewport
        if (window.scrollY >= sectionTop - 250) {
            current = section.getAttribute("id");
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").slice(1) === current) {
            link.classList.add("active");
        }
    });
});

// --- MOBILE NAVIGATION MENU ---
const menuToggle = document.getElementById("menu-toggle");
const navLinksUl = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinksUl.classList.toggle("active");
    const icon = menuToggle.querySelector("i");
    if (navLinksUl.classList.contains("active")) {
        icon.className = "fa-solid fa-xmark";
    } else {
        icon.className = "fa-solid fa-bars-staggered";
    }
});

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinksUl.classList.remove("active");
        menuToggle.querySelector("i").className = "fa-solid fa-bars-staggered";
    });
});

// --- FETCH REAL-TIME GITHUB STATS ---
async function fetchGitHubStats() {
    try {
        const response = await fetch('https://api.github.com/users/nil1902');
        if (!response.ok) throw new Error('Failed to fetch GitHub profile');
        const data = await response.json();
        
        const followers = data.followers;
        const publicRepos = data.public_repos;
        const publicGists = data.public_gists || 0;
        
        // Fetch all repositories to calculate total stars and top languages
        const reposResponse = await fetch('https://api.github.com/users/nil1902/repos?per_page=100');
        let stars = 0;
        const langCounts = {};
        let totalValidRepos = 0;
        
        if (reposResponse.ok) {
            const repos = await reposResponse.json();
            repos.forEach(repo => {
                stars += (repo.stargazers_count || 0);
                if (repo.language) {
                    langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
                    totalValidRepos++;
                }
            });
        }
        
        // 1. Update the Main Stats Grid (add Followers & Stars)
        const statsGrid = document.querySelector('.stats-grid');
        if (statsGrid) {
            const followersCard = document.createElement('div');
            followersCard.className = 'stat-card glass-panel';
            followersCard.innerHTML = `
                <div class="stat-icon" style="color: var(--primary);"><i class="fa-solid fa-users"></i></div>
                <div class="stat-number">${followers}</div>
                <div class="stat-label">GitHub Followers</div>
            `;
            
            const starsCard = document.createElement('div');
            starsCard.className = 'stat-card glass-panel';
            starsCard.innerHTML = `
                <div class="stat-icon" style="color: var(--secondary);"><i class="fa-solid fa-star"></i></div>
                <div class="stat-number">${stars}</div>
                <div class="stat-label">GitHub Stars</div>
            `;
            
            statsGrid.appendChild(followersCard);
            statsGrid.appendChild(starsCard);
        }
        
        // 2. Render Profile Statistics in the GitHub Insights Section
        const statsContainer = document.getElementById('github-stats-container');
        if (statsContainer) {
            statsContainer.innerHTML = `
                <div class="github-stats-list" style="display: flex; flex-direction: column; gap: 1.1rem; width: 100%; padding: 0.5rem 0;">
                    <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.6rem;">
                        <span style="color: var(--text-muted); font-size: 0.95rem;"><i class="fa-solid fa-star" style="color: #fbbf24; margin-right: 0.6rem; width: 16px;"></i> Total Stars</span>
                        <span style="font-weight: 600; color: #fff; font-size: 0.95rem;">${stars}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.6rem;">
                        <span style="color: var(--text-muted); font-size: 0.95rem;"><i class="fa-solid fa-code-fork" style="color: #34d399; margin-right: 0.6rem; width: 16px;"></i> Public Repositories</span>
                        <span style="font-weight: 600; color: #fff; font-size: 0.95rem;">${publicRepos}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.6rem;">
                        <span style="color: var(--text-muted); font-size: 0.95rem;"><i class="fa-solid fa-users" style="color: #60a5fa; margin-right: 0.6rem; width: 16px;"></i> Followers</span>
                        <span style="font-weight: 600; color: #fff; font-size: 0.95rem;">${followers}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding-bottom: 0.2rem;">
                        <span style="color: var(--text-muted); font-size: 0.95rem;"><i class="fa-regular fa-file-code" style="color: #f472b6; margin-right: 0.6rem; width: 16px;"></i> Public Gists</span>
                        <span style="font-weight: 600; color: #fff; font-size: 0.95rem;">${publicGists}</span>
                    </div>
                </div>
            `;
        }
        
        // 3. Render Top Languages in the GitHub Insights Section
        const langsContainer = document.getElementById('github-langs-container');
        if (langsContainer && totalValidRepos > 0) {
            const langColors = {
                'JavaScript': '#f1e05a',
                'TypeScript': '#3178c6',
                'Python': '#3572A5',
                'C': '#555555',
                'HTML': '#e34c26',
                'CSS': '#563d7c',
                'Dart': '#00B4AB',
                'Java': '#b07219',
                'C++': '#f34b7d',
                'Shell': '#89e051'
            };
            
            const sortedLangs = Object.entries(langCounts)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 5);
                
            let langsHtml = '<div style="display: flex; flex-direction: column; gap: 1.1rem; width: 100%; padding: 0.5rem 0;">';
            
            sortedLangs.forEach(([lang, count]) => {
                const pct = Math.round((count / totalValidRepos) * 100);
                const color = langColors[lang] || '#a78bfa';
                langsHtml += `
                    <div class="tech-item" style="gap: 0.4rem;">
                        <div class="tech-info" style="font-size: 0.9rem; display: flex; justify-content: space-between;">
                            <span class="tech-name" style="font-weight: 500; color: var(--text-main);"><i class="fa-solid fa-circle" style="color: ${color}; font-size: 0.65rem; margin-right: 0.6rem; vertical-align: middle;"></i> ${lang}</span>
                            <span class="tech-val" style="color: var(--text-muted); font-weight: 500;">${pct}%</span>
                        </div>
                        <div class="tech-bar-bg" style="height: 5px; background: rgba(255,255,255,0.05); border-radius: 10px; overflow: hidden;">
                            <div class="tech-bar-fill" style="width: ${pct}%; height: 100%; border-radius: 10px; background: ${color}; box-shadow: 0 0 5px ${color}33;"></div>
                        </div>
                    </div>
                `;
            });
            
            langsHtml += '</div>';
            langsContainer.innerHTML = langsHtml;
        } else if (langsContainer) {
            langsContainer.innerHTML = `<div style="color: var(--text-muted); font-style: italic; font-size: 0.95rem; text-align: center; padding: 1rem 0;">No language data available</div>`;
        }
    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
    }
}

// --- FETCH REAL-TIME PORTFOLIO VISITS ---
async function fetchVisitorCount() {
    try {
        const response = await fetch('https://api.counterapi.dev/v1/projects/nil1902_portfolio/keys/visits/increment');
        if (!response.ok) throw new Error('Failed to increment visitor counter');
        const data = await response.json();
        const visits = data.value;
        
        // Update the Main Stats Grid with the visits card
        const statsGrid = document.querySelector('.stats-grid');
        if (statsGrid) {
            const visitsCard = document.createElement('div');
            visitsCard.className = 'stat-card glass-panel';
            visitsCard.innerHTML = `
                <div class="stat-icon" style="color: var(--accent);"><i class="fa-solid fa-eye"></i></div>
                <div class="stat-number">${visits.toLocaleString()}</div>
                <div class="stat-label">Profile Visits</div>
            `;
            statsGrid.appendChild(visitsCard);
        }

        // Also update the footer counter if it exists
        const footerVisits = document.getElementById('footer-visits-count');
        if (footerVisits) {
            footerVisits.textContent = visits.toLocaleString();
            const footerVisitsWrapper = document.getElementById('footer-visits-wrapper');
            if (footerVisitsWrapper) {
                footerVisitsWrapper.style.display = 'inline-block';
            }
        }
    } catch (error) {
        console.error('Error fetching visitor count:', error);
    }
}

// Call on load
fetchGitHubStats();
fetchVisitorCount();

