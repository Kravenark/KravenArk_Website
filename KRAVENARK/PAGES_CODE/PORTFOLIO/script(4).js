const galleryItems = document.querySelectorAll('.gallery-item');
const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxSubtitle = document.getElementById('lightbox-subtitle');
const lightboxClose = document.getElementById('lightbox-close');

galleryItems.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    const imgSrc = item.getAttribute('data-img');
    const title = item.getAttribute('data-title');
    const subtitle = item.getAttribute('data-subtitle');

    lightboxImage.src = imgSrc;
    lightboxTitle.innerText = title;
    lightboxSubtitle.innerText = subtitle;

    lightboxOverlay.style.display = 'flex';
  });
});

lightboxClose.addEventListener('click', () => {
  lightboxOverlay.style.display = 'none';
});