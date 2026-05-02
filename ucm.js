/* ═══════════════════════════════════════
   UCM.JS — University College Mangalore
   Simple JavaScript — BSc CS Level
═══════════════════════════════════════ */


/* ══════════════════════════════════════
   1. HERO SLIDESHOW
   Automatically changes the background
   image every 5 seconds.
══════════════════════════════════════ */

var currentSlide = 0;
var slides = document.querySelectorAll('.hero-slide');
var dots   = document.querySelectorAll('.slide-dot');

function goToSlide(n) {
  // Remove 'active' from current slide and dot
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');

  // Calculate next index (loops back to 0 after last slide)
  currentSlide = (n + slides.length) % slides.length;

  // Add 'active' to new slide and dot
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

// Auto-advance every 5 seconds (5000 ms)
if (slides.length > 0) {
  setInterval(function () {
    goToSlide(currentSlide + 1);
  }, 5000);
}


/* ══════════════════════════════════════
   2. NAVIGATION — change style on scroll
══════════════════════════════════════ */

var nav         = document.getElementById('mainNav');
var scrollBtn   = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', function () {
  // Add 'scrolled' class when page scrolls past 60px
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

  // Show scroll-to-top button after 400px
  if (window.scrollY > 400) {
    scrollBtn.classList.add('visible');
  } else {
    scrollBtn.classList.remove('visible');
  }
});


/* ══════════════════════════════════════
   3. MOBILE MENU
══════════════════════════════════════ */

function toggleMobile() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
}


/* ══════════════════════════════════════
   4. SCROLL REVEAL ANIMATION
   Elements with data-reveal attribute
   fade in when they enter the viewport.
══════════════════════════════════════ */

var revealElements = document.querySelectorAll('[data-reveal]');

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target); // stop watching once revealed
    }
  });
}, { threshold: 0.12 });

revealElements.forEach(function (el) {
  observer.observe(el);
});


/* ══════════════════════════════════════
   5. PHOTO LIGHTBOX (Gallery popup)
   Opens a modal with the clicked image.
══════════════════════════════════════ */

function openLightbox(imageSrc) {
  document.getElementById('lightboxImg').src = imageSrc;
  document.getElementById('lightboxModal').classList.add('open');
  document.body.style.overflow = 'hidden'; // prevent background scroll
}

function closeLightbox(event) {
  // Close if user clicks outside the image, or clicks the X button
  var modal = document.getElementById('lightboxModal');
  if (!event || event.target === modal || event.currentTarget === modal) {
    modal.classList.remove('open');
    document.getElementById('lightboxImg').src = '';
    document.body.style.overflow = '';
  }
}


/* ══════════════════════════════════════
   6. VIDEO MODAL
   VIDEO FILES must be placed in a
   folder called "images/" next to ucm.html
   Example: images/uv1.mp4, images/uv2.mp4
══════════════════════════════════════ */

// Map of video keys to file paths
var videoFiles = {
  uv1: 'images/uv1.mp4',
  uv2: 'images/uv2.mp4',
  uv3: 'images/uv3.mp4'
};

function openVideo(key) {
  var videoSrc = document.getElementById('modalVideoSrc');
  var video    = document.getElementById('modalVideo');
  var modal    = document.getElementById('videoModal');

  videoSrc.src = videoFiles[key]; // set video file path
  video.load();                   // load the new source
  modal.classList.add('open');    // show the modal
  document.body.style.overflow = 'hidden';
}

function closeVideoModal(event) {
  var modal = document.getElementById('videoModal');
  var video = document.getElementById('modalVideo');

  // Close if user clicks outside the video, or clicks the X button
  if (!event || event.target === modal || event.currentTarget === modal) {
    modal.classList.remove('open');
    video.pause();
    document.getElementById('modalVideoSrc').src = '';
    document.body.style.overflow = '';
  }
}


/* ══════════════════════════════════════
   7. KEYBOARD SUPPORT
   Press Escape key to close any open modal
══════════════════════════════════════ */

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    // Close lightbox
    document.getElementById('lightboxModal').classList.remove('open');
    document.getElementById('lightboxImg').src = '';

    // Close video modal and pause video
    document.getElementById('videoModal').classList.remove('open');
    var video = document.getElementById('modalVideo');
    if (video) video.pause();

    document.body.style.overflow = '';
  }
});
