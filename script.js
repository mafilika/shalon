// =========================
// MOBILE MENU (OPTIONAL)
// =========================
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

// =========================
// SMOOTH SCROLL TO CONTACT (for hero buttons)
// =========================
const scrollButtons = document.querySelectorAll('[data-scroll-to]');
scrollButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.querySelector(btn.getAttribute('data-scroll-to'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// =========================
// FORM HANDLING (CONTACT PAGE)
// =========================
const quoteForm = document.querySelector('#quoteForm');

if (quoteForm) {
  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Collect values
    const formData = new FormData(quoteForm);
    const data = Object.fromEntries(formData.entries());

    // Show success or send to backend later
    alert("Thank you! We received your quotation request and will contact you shortly.");

    // Reset form
    quoteForm.reset();

    // OPTIONAL: Here you can integrate WhatsApp message auto-fill
  });
}

// =========================
// WHATSAPP FLOAT BEHAVIOR (optional enhancement)
// =========================
const whatsappBtn = document.querySelector('.whatsapp-float');
if (whatsappBtn) {
  whatsappBtn.addEventListener('click', () => {
    console.log('User clicked WhatsApp button for booking/quote');
  });
  }

// =========================
// GALLERY LIGHTBOX
// =========================

const galleryImages = document.querySelectorAll('.gallery-grid img');

if (galleryImages.length) {
  // Create lightbox container
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  document.body.appendChild(lightbox);

  const imgElement = document.createElement('img');
  lightbox.appendChild(imgElement);

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      imgElement.src = img.src;
      lightbox.classList.add('active');
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });
                         }
