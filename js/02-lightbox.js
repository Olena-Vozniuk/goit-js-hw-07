import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryElementMarkup(galleryItems);
    

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);


function createGalleryElementMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
        `;
    }).join('');
}


function onGalleryContainerClick(evt) {
    evt.preventDefault();
};

const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionPosition: 'bottom', captionDelay: 250});

console.log(galleryItems);
