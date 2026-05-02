/* ===========================
   DAKSHINA KANNADA EXPLORER
   Main JavaScript — Redesigned
=========================== */

// ─── DATA ───────────────────────────────────────────────────────────────────
const data = {
    geography: {
        title: "Geography",
        label: "Landscape & Climate",
        images: ["images/dg1.jpg","images/dg2.jpg","images/dg3.jpg","images/dg4.jpg","images/dg5.jpg","images/dg6.jpg"],
        text: `<p>Dakshina Kannada is a coastal district in the state of Karnataka, located along the western edge of the Indian peninsula. It is uniquely positioned between the vast Arabian Sea on the west and the lush Western Ghats on the east. This geographical setting gives the district a diverse landscape that includes sandy beaches, fertile plains, and forest-covered hills. The coastal belt, often referred to as Karavali, is known for its estuaries, backwaters, and scenic shoreline, making it both agriculturally productive and visually striking.</p>
        <p>Moving inland, the terrain gradually rises into the Western Ghats, one of the most important biodiversity hotspots in the world. This region is covered with dense forests, rich wildlife, and numerous rivers and streams. Rivers such as the Netravati River and Gurupura River play a crucial role in supporting agriculture and providing water resources to the district. The combination of high rainfall, fertile soil, and river systems makes Dakshina Kannada ideal for crops like rice, coconut, and areca nut.</p>
        <p>Dakshina Kannada experiences a tropical monsoon climate characterized by heavy rainfall during the southwest monsoon season. The region receives abundant rainfall, especially in areas closer to the Western Ghats, contributing to its lush greenery throughout the year. Humidity levels remain relatively high due to the coastal influence, while temperatures are generally moderate compared to inland regions. This climatic pattern not only shapes the natural environment but also influences the lifestyle, agriculture, and economy of the district.</p>`
    },
    economy: {
        title: "Economy",
        label: "Trade & Industry",
        images: ["images/de1.jpg","images/de2.jpg","images/de3.jpg","images/de4.jpg","images/de5.jpg"],
        text: `<p>Dakshina Kannada has a strong and diverse economy that combines traditional agriculture with modern industrial and service sectors. Agriculture continues to play an important role, with crops such as paddy, coconut, areca nut, and cashew being widely cultivated due to the region's fertile soil and abundant rainfall. The coastal location also supports a thriving fishing industry, making seafood production a major contributor to local livelihoods. Rural areas are largely dependent on these primary activities, which form the backbone of the district's economy.</p>
        <p>In addition to agriculture, Dakshina Kannada has seen significant growth in the industrial and service sectors. The district is home to several small and medium-sized enterprises (SMEs) that operate in various industries, including manufacturing, textiles, and food processing. The presence of Mangalore Port has facilitated trade and commerce, allowing for the export of agricultural products and manufactured goods. The service sector, particularly education and healthcare, has also expanded, with numerous institutions attracting students and professionals from across the region.</p>
        <p>Dakshina Kannada is one of the key industrial hubs in the state of Karnataka. The city of Mangaluru serves as the economic center, hosting major industries such as petrochemicals, fertilizers, and port-based trade. Important establishments like Mangalore Refinery and Petrochemicals Limited (MRPL) and New Mangalore Port play a vital role in boosting exports and industrial growth. These industries not only contribute significantly to the district's revenue but also generate employment opportunities for thousands of people.</p>`
    },
    culture: {
        title: "Culture",
        label: "Yakshagana & Traditions",
        images: ["images/dc1.jpg","images/dc2.jpg","images/dc3.jpeg","images/dc4.png","images/dc5.jpeg","images/dc6.jpg"],
        text: `<p>Dakshina Kannada is culturally vibrant, shaped by a rich blend of traditions from communities such as Tulu, Kannada, Konkani, and Beary. This diversity is reflected in the languages spoken, customs followed, and everyday life of the people. The region, often referred to as part of Tulu Nadu, preserves its unique identity through folklore, rituals, and community practices that have been passed down through generations. Despite modernization, traditional values remain deeply rooted in society, creating a harmonious balance between the old and the new.</p>
        <p>One of the most prominent cultural expressions in Dakshina Kannada is the Yakshagana, a traditional dance-drama that combines music, dance, and dialogue to narrate stories from Hindu epics. This art form is performed during festivals and special occasions, showcasing the region's rich artistic heritage. Additionally, the district celebrates various festivals with great enthusiasm, such as Mangalore Dasara, Karavali Utsav, and Tulu New Year (Bisu Parba), which highlight the community's vibrant cultural life. These festivals not only bring people together but also serve as a platform for preserving and promoting the unique traditions of Dakshina Kannada.</p>
        <p>The cuisine and lifestyle of Dakshina Kannada further highlight its cultural richness. Food habits are influenced by the coastal environment, with rice, coconut, and seafood forming the staple diet. Traditional dishes such as neer dosa, kori rotti, and various seafood delicacies are widely enjoyed. Religious harmony is another key feature, with temples, churches, and mosques coexisting peacefully across the district. This cultural diversity, combined with strong community bonds and artistic heritage, makes Dakshina Kannada one of the most culturally dynamic regions in Karnataka.</p>`
    },
    education: {
        title: "Education",
        label: "Institutions & Heritage",
        images: ["images/dh1.jpg","images/dh2.avif","images/dh3.jpg"],
        text: `<p>Dakshina Kannada is widely recognized as one of the leading educational hubs in the state of Karnataka. The district has a long-standing tradition of valuing education, which is reflected in its high literacy rate and strong academic culture. From primary schools to advanced research institutions, the region offers a wide range of educational opportunities. Families in the district place great importance on learning, contributing to a well-educated population and a steady flow of skilled professionals.</p>
        <p>The district is home to several prestigious educational institutions that attract students from across the country. Mangalore University, established in 1980, offers a variety of undergraduate and postgraduate programs in arts, science, commerce, and management. The National Institute of Technology Karnataka (NITK) in Surathkal is renowned for its engineering and technology courses, consistently ranking among the top technical institutes in India. Additionally, the Kasturba Medical College (KMC) provides high-quality medical education and research opportunities, contributing to the healthcare sector both locally and nationally.</p>
        <p>Apart from higher education, Dakshina Kannada also excels in school-level education and professional training. Many reputed schools follow national and international curricula, ensuring a strong academic foundation for students. The district is also known for its coaching centers, vocational institutes, and skill development programs that prepare students for competitive exams and employment. With a balanced focus on academics, discipline, and innovation, Dakshina Kannada continues to play a significant role in shaping the educational landscape of southern India.</p>`
    },
    tourism: {
        title: "Tourism",
        label: "Beaches & Temples",
        images: ["images/df1.avif","images/df2.png","images/df3.webp","images/df4.webp","images/df5.webp","images/df6.webp"],
        text: `<p>Dakshina Kannada is a popular tourist destination in the state of Karnataka, known for its scenic beauty, cultural richness, and spiritual significance. The coastal city of Mangaluru serves as the main gateway to the district and attracts visitors with its clean beaches, historic temples, and vibrant local life. Beaches such as Panambur, Surathkal, and Ullal offer stunning views of the Arabian Sea and are ideal for relaxation, water sports, and sunset experiences.</p>
        <p>Apart from beaches, Dakshina Kannada is famous for its religious and cultural tourism. Pilgrimage centers like Dharmasthala and Kukke Subramanya Temple attract thousands of devotees every year. Historic sites such as St. Aloysius Chapel, known for its beautiful fresco paintings, and ancient temples like Kadri Manjunatha Temple reflect the region's deep spiritual heritage. These places offer a blend of history, architecture, and religious importance, making the district a significant pilgrimage destination.</p>
        <p>Nature lovers also find plenty to explore in Dakshina Kannada. The nearby Western Ghats provide opportunities for trekking, wildlife exploration, and eco-tourism. Lush green hills, waterfalls, and forest reserves create a peaceful escape from urban life. The district's unique combination of beaches, temples, and natural landscapes ensures a diverse and memorable travel experience for visitors seeking adventure, spirituality, and relaxation.</p>`
    }
};

// ─── SLIDESHOW STATE ─────────────────────────────────────────────────────────
let currentImages = [];
let currentIndex  = 0;
let slideTimer    = null;
let isTransitioning = false;

// ─── OPEN PAGE ───────────────────────────────────────────────────────────────
function openPage(section) {
    const info = data[section];
    if (!info) return;

    // Populate header
    document.getElementById('overlayLabel').textContent = info.label || '';
    document.getElementById('overlayTitle').textContent = info.title;
    document.getElementById('content').innerHTML = info.text;

    // Reset slideshow
    currentImages = info.images || [];
    currentIndex  = 0;

    buildDots();
    showSlide(0, false);

    // Show overlay
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
    overlay.scrollTop = 0;
    document.body.style.overflow = 'hidden';

    // Scroll overlay box to top
    const box = overlay.querySelector('.overlay-box');
    if (box) box.scrollTop = 0;
}

// ─── DOTS ────────────────────────────────────────────────────────────────────
function buildDots() {
    const container = document.getElementById('slideDots');
    container.innerHTML = '';
    currentImages.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'slide-dot' + (i === 0 ? ' active' : '');
        dot.onclick = () => showSlide(i);
        container.appendChild(dot);
    });
}

function updateDots() {
    const dots = document.querySelectorAll('.slide-dot');
    dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
}

// ─── SHOW SLIDE ──────────────────────────────────────────────────────────────
function showSlide(idx, animate = true) {
    if (currentImages.length === 0) return;

    clearTimeout(slideTimer);

    const img = document.getElementById('slideImg');

    if (animate && !isTransitioning) {
        isTransitioning = true;
        img.classList.add('transitioning');

        setTimeout(() => {
            currentIndex = ((idx % currentImages.length) + currentImages.length) % currentImages.length;
            img.src = currentImages[currentIndex];
            img.classList.remove('transitioning');
            isTransitioning = false;
            updateDots();
        }, 400);
    } else {
        currentIndex = ((idx % currentImages.length) + currentImages.length) % currentImages.length;
        img.src = currentImages[currentIndex];
        updateDots();
    }

    // Auto-advance
    slideTimer = setTimeout(() => {
        showSlide(currentIndex + 1);
    }, 4000);
}

// ─── NEXT / PREV ─────────────────────────────────────────────────────────────
function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// ─── CLOSE ───────────────────────────────────────────────────────────────────
function closePage() {
    clearTimeout(slideTimer);
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    document.body.style.overflow = '';
}

function closeOverlay(e) {
    if (e.target.id === 'overlay') {
        closePage();
    }
}

// ─── KEYBOARD NAVIGATION ─────────────────────────────────────────────────────
document.addEventListener('keydown', (e) => {
    const overlay = document.getElementById('overlay');
    if (overlay.style.display !== 'flex') return;

    if (e.key === 'Escape')      closePage();
    if (e.key === 'ArrowRight')  nextSlide();
    if (e.key === 'ArrowLeft')   prevSlide();
});

// ─── SCROLL REVEAL ───────────────────────────────────────────────────────────
function initReveal() {
    const targets = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Stagger child buttons
                const btns = entry.target.querySelectorAll('.explore-btn');
                btns.forEach((btn, i) => {
                    setTimeout(() => {
                        btn.classList.add('revealed');
                    }, i * 80);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    targets.forEach(t => observer.observe(t));
}

// ─── PARTICLES ───────────────────────────────────────────────────────────────
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const count = 20;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.cssText = `
            left: ${Math.random() * 100}%;
            width: ${2 + Math.random() * 4}px;
            height: ${2 + Math.random() * 4}px;
            animation-duration: ${8 + Math.random() * 12}s;
            animation-delay: ${Math.random() * 10}s;
            opacity: 0;
        `;
        container.appendChild(p);
    }
}

// ─── HEADER PARALLAX ─────────────────────────────────────────────────────────
function initParallax() {
    const header = document.querySelector('.header-bg');
    if (!header) return;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        header.style.transform = `translateY(${scrollY * 0.3}px)`;
    }, { passive: true });
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initReveal();
    initParallax();
});
