import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryElementMarkup(galleryItems);
    

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick)


function createGalleryElementMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</div>
        `;
    }).join('');
}


function onGalleryContainerClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== "IMG") {
        return
    };

    const urlBigPicture = evt.target.closest('.gallery__link');

    const instance = basicLightbox.create(`
    <img src="${urlBigPicture}" width="800" height="600">
`);
    instance.show();
};


console.log(galleryItems);