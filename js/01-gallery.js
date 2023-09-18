import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery")

function createGalleryItem(item) {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>`;
}

const galleryMarkup = galleryItems.map(createGalleryItem).join('');
gallery.innerHTML = galleryMarkup;

gallery.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.tagName === 'IMG') {
      const imageUrl = e.target.dataset.source;

      const lightbox = basicLightbox.create(`
      <img src="${imageUrl}" width="800" height="600">`);

      lightbox.show();
    }
});

console.log(galleryItems);
