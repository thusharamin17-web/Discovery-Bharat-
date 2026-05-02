/* ═══════════════════════════════════════
   MANGALURU EXPLORER — mang.js
   Full redesign with slideshow, reveal, particles, count-up
═══════════════════════════════════════ */
'use strict';

// ─── DATA ────────────────────────────────────────────────────────────────────
const data = {
  history: {
    title:  "History",
    label:  "Dynasties & Colonial Era",
    images: ["images/mh1.jpg","images/mh2.jpg","images/mh3.jpg","images/mh4.jpg","images/mh5.jpg","images/mh6.jpg"],
    text: `<p>Mangaluru has a rich and layered history shaped by multiple dynasties and colonial powers. From the ancient rule of the Mauryas and Kadambas to the powerful Vijayanagara Empire and the Alupa dynasty, the city served as a strategic port and cultural hub for centuries. Its position on the Arabian Sea made it one of the most coveted trading posts on the western coast of India.</p>
    <p>The Portuguese arrived in the 16th century, establishing control over the port and leaving a lasting architectural and religious imprint that is still visible in the city's churches and family names. The city later passed through the hands of the Keladi Nayaks and Hyder Ali's Mysore Sultanate before being annexed by the British in 1799 following the fall of Tipu Sultan at Srirangapatna.</p>
    <p>Under British administration, Mangaluru grew into a modern port city with improved infrastructure, educational institutions, and civic amenities. Today it stands as one of the fastest-growing cities in India, selected under the Smart Cities Mission, honouring its long legacy of trade, resilience, and cultural exchange.</p>`
  },
  geography: {
    title:  "Geography",
    label:  "Coast & Western Ghats",
    images: ["images/mg1.jpg","images/mg2.jpg","images/mg3.jpg","images/mg4.jpg","images/mg5.jpg","images/mg6.jpg"],
    text: `<p>Mangaluru is uniquely positioned along the southwestern coast of Karnataka, nestled between the vast Arabian Sea to the west and the lush Western Ghats to the east. This dramatic geographical setting gives the city a landscape of striking contrasts — golden sandy beaches giving way to rolling laterite hills, which then climb toward dense, misty forests of the Ghats.</p>
    <p>The city is crossed by two major rivers — the Netravati and the Gurupura — which converge near the coast to form a fertile estuary teeming with biodiversity. These rivers are lifelines for agriculture, fishing, and the drinking water supply for the urban population. The surrounding region is known for its rich red laterite soil, which supports coconut groves, areca nut plantations, and paddy fields.</p>
    <p>Mangaluru experiences a tropical monsoon climate with heavy and reliable rainfall from June to September. Temperatures remain moderate throughout the year due to the sea breeze, making the city lush and green. The Western Ghats nearby form one of the world's eight most important biodiversity hotspots, hosting rare wildlife, waterfalls, and trekking trails accessible from the city.</p>`
  },
  economy: {
    title:  "Economy",
    label:  "Port, Trade & Industry",
    images: ["images/me1.jpg","images/me2.jpg","images/me3.jpg","images/me4.jpg","images/me5.jpg","images/me6.jpg"],
    text: `<p>Mangaluru is the economic backbone of Dakshina Kannada and one of Karnataka's most important industrial and trading cities. At the heart of its economy lies the New Mangalore Port, one of the major ports on India's west coast. It handles enormous volumes of cargo including petroleum products, fertilisers, container traffic, and agricultural exports such as coffee, cashew nuts, and spices — commodities for which the Karavali region is internationally renowned.</p>
    <p>The city is home to large-scale industries including Mangalore Refinery and Petrochemicals Limited (MRPL), one of India's top public sector refineries, and Mangalore Chemicals and Fertilizers (MCF). The Special Economic Zone (MSEZ) hosts numerous manufacturing and export-oriented units spanning tiles, chemicals, seafood processing, and garments. Mangaluru tiles, traditionally crafted and fired from local clay, are exported to markets across India and abroad.</p>
    <p>Beyond heavy industry, Mangaluru has a thriving service economy driven by education, healthcare, and banking. The city is notable for its high concentration of banking professionals and has produced a disproportionate share of India's banking leadership. With ongoing infrastructure projects and its inclusion in the Smart Cities Mission, Mangaluru's economy continues to diversify and grow.</p>`
  },
  culture: {
    title:  "Culture",
    label:  "Yakshagana & Traditions",
    images: ["images/mc1.jpg","images/mc2.jpg","images/mc3.jpg","images/mc4.jpg","images/mc5.jpg","images/mc6.jpg"],
    text: `<p>Mangaluru is a melting pot of cultures, home to communities that include Tuluvas, Konkanis, Kannadigas, Bearys, and Mangalorean Catholics, each contributing their own language, cuisine, art, and religious customs to the city's vibrant social fabric. Despite this diversity, there is a remarkable sense of harmony and shared identity that defines life in the city.</p>
    <p>Yakshagana, the region's most iconic art form, is an all-night theatrical performance combining elaborate costumes, percussion music, improvised dialogue, and stylised dance to narrate stories from the Hindu epics. Performed across the coastal belt from October to May, it is both religious offering and popular entertainment. Bhuta Kola, a deeply rooted spirit-worship ritual, is another unique tradition — a dramatic nocturnal ceremony involving elaborate costumes, chanting, and offerings at rural temples.</p>
    <p>Kambala, the traditional buffalo race held in waterlogged paddy fields, draws massive crowds and has become a symbol of coastal Karnataka's rural heritage and sporting spirit. The city also cherishes its folk dances — Pilivesha (tiger dance), Karadi Vesha (bear dance), and Dollu Kunitha — which fill the streets during festival seasons, creating an unforgettable spectacle of colour, rhythm, and tradition.</p>`
  },
  food: {
    title:  "Food",
    label:  "Coastal Flavours",
    images: ["images/mf1.jpg","images/mf2.jpg","images/mf3.jpg","images/mf4.jpg","images/mf5.jpg","images/mf6.jpg"],
    text: `<p>Mangalorean cuisine is one of the most distinctive and celebrated in South India, built on the holy trinity of coconut, tamarind, and locally grown red chillies. The city's coastal geography means that fresh seafood is central to daily life — pomfret, mackerel, tiger prawns, crabs, and clams are prepared with remarkable skill and variety across different community kitchens.</p>
    <p>Among the most iconic dishes is the Mangalorean Fish Curry — a fiery, sour preparation slow-cooked in coconut milk with a signature red masala that is ground fresh each day. Kori Rotti, crisp sun-dried rice wafers soaked in a flavourful chicken curry, is the undisputed king of Tulu Nadu celebrations. Neer Dosa, a delicate lace-thin crepe made from unfermented rice batter, is a staple breakfast paired with coconut chutney or chicken curry.</p>
    <p>Vegetarian delicacies are equally celebrated: Goli Baje (crispy fried fritters), Patrode (colocasia leaves stuffed and steamed with spiced rice paste), and the famous Mangalorean halwa are must-tries. Konkani cuisine brings its own treasures — Alle Belle (coconut and jaggery crepes), Ambade Gashi (hog plum curry) — while Beary biryani and Sulaimani tea reflect the region's Muslim culinary heritage. Every meal in Mangaluru is a cultural experience.</p>`
  },
  transport: {
    title:  "Transport",
    label:  "Air · Rail · Road · Sea",
    images: ["images/mt1.jpg","images/mt2.jpg","images/mt3.jpg","images/mt4.jpg","images/mt5.jpg","images/mt6.jpg"],
    text: `<p>Mangaluru holds the distinction of being the only city in Karnataka served by all four major modes of transport — air, rail, road, and sea — making it one of the best-connected cities on the western coast of India. This multi-modal connectivity has been a key driver of its economic and demographic growth over the decades.</p>
    <p>Mangalore International Airport connects the city to major Indian metros and Gulf destinations, the latter especially important given the large Mangalorean diaspora working across the Middle East. The city sits on the Konkan Railway, one of India's most scenic rail routes, offering direct trains to Mumbai, Goa, and Thiruvananthapuram. National Highway 66 runs through the city, linking it to Goa in the north and Kerala in the south, while NH 275 connects it to Bangalore through the scenic Shiradi Ghats.</p>
    <p>The New Mangalore Port handles millions of tonnes of cargo annually and supports a thriving fishing harbour, an important livelihood for thousands of local families. Within the city, KSRTC and local buses, auto-rickshaws, app-based cabs, and ferries across the Gurupura and Netravati rivers form the daily transport fabric. Plans for a city metro and improved bus rapid transit are underway to prepare Mangaluru for its next phase of growth.</p>`
  }
};

// ─── SLIDESHOW STATE ─────────────────────────────────────────────────────────
let currentImages  = [];
let currentIndex   = 0;
let slideTimer     = null;
let isTransitioning = false;

// ─── OPEN PAGE ───────────────────────────────────────────────────────────────
function openPage(section) {
  const info = data[section];
  if (!info) return;

  // Populate header
  document.getElementById('overlayLabel').textContent = info.label  || '';
  document.getElementById('overlayTitle').textContent = info.title  || '';
  document.getElementById('content').innerHTML        = info.text   || '';

  // Init slideshow
  currentImages = Array.isArray(info.images) ? info.images : [];
  currentIndex  = 0;
  buildDots();
  showSlide(0, false);

  // Show overlay
  const overlay = document.getElementById('overlay');
  overlay.classList.add('open');
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  // Scroll box back to top
  const box = overlay.querySelector('.overlay-box');
  if (box) box.scrollTop = 0;
}

// ─── CLOSE ───────────────────────────────────────────────────────────────────
function closePage() {
  clearTimeout(slideTimer);
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function closeOverlay(e) {
  if (e.target.id === 'overlay') closePage();
}

// ─── DOTS ────────────────────────────────────────────────────────────────────
function buildDots() {
  const container = document.getElementById('slideDots');
  if (!container) return;
  container.innerHTML = '';
  currentImages.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'slide-dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => showSlide(i);
    container.appendChild(dot);
  });
}

function updateDots() {
  document.querySelectorAll('.slide-dot').forEach((d, i) => {
    d.classList.toggle('active', i === currentIndex);
  });
}

// ─── SHOW SLIDE ──────────────────────────────────────────────────────────────
function showSlide(idx, animate = true) {
  if (currentImages.length === 0) return;
  clearTimeout(slideTimer);

  const img = document.getElementById('slideImg');
  if (!img) return;

  const go = () => {
    currentIndex = ((idx % currentImages.length) + currentImages.length) % currentImages.length;
    img.src = currentImages[currentIndex];
    updateDots();
    // Auto-advance
    slideTimer = setTimeout(() => showSlide(currentIndex + 1), 4000);
  };

  if (animate && !isTransitioning) {
    isTransitioning = true;
    img.classList.add('fading');
    setTimeout(() => {
      go();
      img.classList.remove('fading');
      isTransitioning = false;
    }, 420);
  } else {
    go();
  }
}

function nextSlide() { showSlide(currentIndex + 1); }
function prevSlide() { showSlide(currentIndex - 1); }

// ─── KEYBOARD ────────────────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  const overlay = document.getElementById('overlay');
  if (overlay.style.display !== 'flex') return;
  if (e.key === 'Escape')     closePage();
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft')  prevSlide();
});

// ─── SCROLL REVEAL ───────────────────────────────────────────────────────────
function initReveal() {
  const targets = document.querySelectorAll('[data-reveal]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('revealed');

      // Stagger child buttons
      entry.target.querySelectorAll('.explore-btn').forEach((btn, i) => {
        setTimeout(() => btn.classList.add('revealed'), i * 85);
      });

      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

  targets.forEach(t => observer.observe(t));
}

// ─── FACTS COUNT-UP ──────────────────────────────────────────────────────────
function initCountUp() {
  const strip = document.querySelector('.facts-strip');
  if (!strip) return;

  const observer = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;

    document.querySelectorAll('.fact-num[data-target]').forEach(el => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      let start = null;
      const duration = 1400;
      const step = ts => {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target) + (progress < 1 ? '' : '+');
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target + (target > 10 ? '+' : '');
      };
      requestAnimationFrame(step);
    });

    // Text-only facts
    document.querySelectorAll('.fact-num[data-text]').forEach(el => {
      el.textContent = el.getAttribute('data-text');
    });

    observer.unobserve(strip);
  }, { threshold: 0.3 });

  observer.observe(strip);
}

// ─── PARTICLES ───────────────────────────────────────────────────────────────
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 22; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = 2 + Math.random() * 4;
    p.style.cssText = `
      left:${Math.random() * 100}%;
      width:${size}px; height:${size}px;
      animation-duration:${8 + Math.random() * 14}s;
      animation-delay:${Math.random() * 12}s;
    `;
    container.appendChild(p);
  }
}

// ─── HEADER PARALLAX ─────────────────────────────────────────────────────────
function initParallax() {
  const bg = document.querySelector('.header-bg');
  if (!bg) return;
  window.addEventListener('scroll', () => {
    bg.style.transform = `translateY(${window.scrollY * 0.28}px)`;
  }, { passive: true });
}

// ─── SCROLL TO TOP ───────────────────────────────────────────────────────────
function initScrollTop() {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 320);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ─── PAGE FADE-IN ────────────────────────────────────────────────────────────
document.documentElement.style.cssText = 'opacity:0; transition:opacity 0.5s ease;';
window.addEventListener('load', () => { document.documentElement.style.opacity = '1'; });

// ─── INIT ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initReveal();
  initCountUp();
  initParallax();
  initScrollTop();
});
