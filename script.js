// script.js – full functionality with improved about section support

// ---------- PRICE DATABASE (includes xerox) ----------
const servicePrices = {
    print: {
        title: { en: "🖨️ Printing prices", tl: "🖨️ Presyo ng pag-print" },
        items: [
            { nameEn: "Black & white (per page)", nameTl: "Itim at puti (bawat pahina)", price: "₱2.00" },
            { nameEn: "Colored (per page)", nameTl: "May kulay (bawat pahina)", price: "₱5.00" }
        ]
    },
    scan: {
        title: { en: "🔍 Scanning prices", tl: "🔍 Presyo ng scan" },
        items: [
            { nameEn: "Document scan (per page)", nameTl: "Scan ng dokumento (bawat pahina)", price: "₱3.00" },
            { nameEn: "Photo scan (each)", nameTl: "Scan ng litrato (bawat isa)", price: "₱8.00" }
        ]
    },
    xerox: {
        title: { en: "📄 Xerox / photocopy", tl: "📄 Xerox / photocopy" },
        items: [
            { nameEn: "Black & white copy (per page)", nameTl: "Itim at puti na kopya (bawat pahina)", price: "₱1.50" },
            { nameEn: "Colored copy (per page)", nameTl: "May kulay na kopya (bawat pahina)", price: "₱4.00" }
        ]
    },
    id: {
        title: { en: "🪪 Photo ID prices", tl: "🪪 Presyo ng Photo ID" },
        items: [
            { nameEn: "1 pc ID picture (with edit)", nameTl: "1 ID picture (may editing)", price: "₱40.00" },
            { nameEn: "4 pcs (same pose)", nameTl: "4 na piraso (parehong pose)", price: "₱120.00" }
        ]
    },
    laminate: {
        title: { en: "📋 Laminating prices", tl: "📋 Presyo ng laminating" },
        items: [
            { nameEn: "Small ID / card", nameTl: "Maliit na ID / card", price: "₱15.00" },
            { nameEn: "A4 / long size", nameTl: "A4 / mahaba", price: "₱25.00" }
        ]
    }
};

// ---------- TRANSLATIONS (UI text including new about fields) ----------
const translations = {
    en: {
        "nav-home": "Home",
        "nav-services": "Services",
        "nav-about": "About",
        "nav-contact": "Contact",
        "hero-title": "YOUR PRINT, SCAN,<br>LAMINATE & ID HUB",
        "hero-sub": "mabilis • malinis • maasahan",
        "services-title": " Our Premium Services ",
        "service-print": "Printing",
        "service-scan": "Scanning",
        "service-xerox": "Xerox",
        "service-id": "Photo ID",
        "service-lam": "Laminating",
        "about-title": "About",
        "about-sub": "Your trusted neighborhood print shop since 2020",
        "about-fast": "Fast Turnaround",
        "about-fast-desc": "Most orders ready in 15 minutes. Rush available.",
        "about-quality": "Quality Guaranteed",
        "about-quality-desc": "Professional grade prints, crisp scans, durable lamination.",
        "about-price": "Transparent Prices",
        "about-price-desc": "No hidden fees. What you see is what you pay.",
        "about-id": "ID Experts",
        "about-id-desc": "Government-compliant IDs, passport pics, and more.",
        "about-story": "We started with one printer and a dream. Today we serve hundreds of happy customers daily — but we still treat every page like it's our first.",
        "contact-title": "Contact us",
        "contact-visit": "Visit our shop",
        "contact-address": "B35 L16 Malagueña St. Harmony Hills II, Loma De Gato Marilao Bulacan",
        "contact-xerox": "Xerox & photocopy available",
        "hours-title": "Open hours",
        "hours-weekdays": "Mon-Fri: 8:00 AM – 8:00 PM",
        "hours-sat": "Saturday: 8:00 AM – 10:00 PM",
        "hours-sun": "Sunday: closed",
        "send-text": "Send message",
        "form-note": "* We'll reply asap",
        "footer-tag": "Quality Prints, Quality Service"
    },
    tl: {
        "nav-home": "Bahay",
        "nav-services": "Serbisyo",
        "nav-about": "Tungkol",
        "nav-contact": "Kontak",
        "hero-title": "YOUR PRINT, SCAN,<br>LAMINATE & ID HUB",
        "hero-sub": "mabilis • malinis • maasahan",
        "services-title": " Aming Premium na Serbisyo ",
        "service-print": "Pag-print",
        "service-scan": "Pag-scan",
        "service-xerox": "Xerox",
        "service-id": "Photo ID",
        "service-lam": "Laminating",
        "about-title": "Tungkol sa Ben&Ben",
        "about-sub": "Ang iyong pinagkakatiwalaang printing shop mula 2020",
        "about-fast": "Mabilis na Turnaround",
        "about-fast-desc": "Karamihan ng orders handa sa loob ng 15 minuto. Pwedeng magpabilis.",
        "about-quality": "May Kalidad",
        "about-quality-desc": "Propesyonal na print, malinaw na scan, matibay na laminate.",
        "about-price": "Presyong Klaro",
        "about-price-desc": "Walang nakatagong bayad. Kung ano ang kita, yun ang babayaran.",
        "about-id": "Eksperto sa ID",
        "about-id-desc": "ID na sang-ayon sa gobyerno, passport pic, at marami pa.",
        "about-story": "Nagsimula kami sa isang printer at pangarap. Ngayon, daan-daan na ang aming masasayang customers araw-araw — pero tinatrato pa rin namin ang bawat pahina na parang una.",
        "contact-title": "Kontakin kami",
        "contact-visit": "Bisitahin ang aming tindahan",
        "contact-address": "B35 L16 Malagueña St. Harmony Hills II, Loma De Gato Marilao Bulacan",
        "contact-xerox": "May Xerox at photocopy",
        "hours-title": "Oras ng bukas",
        "hours-weekdays": "Lunes-Biyernes: 8:00 AM – 8:00 PM",
        "hours-sat": "Sabado: 8:00 AM – 10:00 PM",
        "hours-sun": "Linggo: sarado",
        "send-text": "Ipadala",
        "form-note": "* Sasagot kami agad",
        "footer-tag": "De Kalidad na Print, De Kalidad na Serbisyo"
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    const texts = translations[lang];
    for (let id in texts) {
        const el = document.getElementById(id);
        if (el) el.innerHTML = texts[id]; // innerHTML for <br> in hero
    }
    document.getElementById('lang-en').classList.toggle('active-lang', lang === 'en');
    document.getElementById('lang-tl').classList.toggle('active-lang', lang === 'tl');
}

document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
document.getElementById('lang-tl').addEventListener('click', () => setLanguage('tl'));

// ---------- THEME TOGGLE ----------
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
});

// ---------- MODAL LOGIC ----------
const modal = document.getElementById('priceModal');
const modalTitle = document.getElementById('modal-title');
const modalContainer = document.getElementById('modal-prices-container');
const closeModal = document.querySelector('.close-modal');

function openModal(serviceKey) {
    const data = servicePrices[serviceKey];
    if (!data) return;
    modalTitle.innerText = data.title[currentLang] || data.title.en;
    modalContainer.innerHTML = '';
    data.items.forEach(item => {
        const row = document.createElement('div');
        row.className = 'modal-price-row';
        row.innerHTML = `<span>${currentLang === 'en' ? item.nameEn : item.nameTl}</span><span>${item.price}</span>`;
        modalContainer.appendChild(row);
    });
    modal.style.display = 'flex';
}

document.querySelectorAll('.service-icon-card').forEach(card => {
    card.addEventListener('click', () => {
        const service = card.dataset.service;
        openModal(service);
    });
});

closeModal.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});

// ---------- EMAIL FORM (UI only) ----------
document.getElementById('email-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert(currentLang === 'en' ? '📨 Demo: message sent (UI demo)' : '📨 Demo: naipadala ang mensahe (UI demo)');
    this.reset();
});

// ---------- ACTIVE NAV LINK ----------
const sections = {
    'nav-home': 'hero',
    'nav-services': 'services-section',
    'nav-about': 'about-section',
    'nav-contact': 'contact-section'
};

Object.keys(sections).forEach(id => {
    const link = document.getElementById(id);
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = sections[id];
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active-link'));
        link.classList.add('active-link');
    });
});

// initialize
setLanguage('en');