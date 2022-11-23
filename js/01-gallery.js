import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imagesContainer = document.querySelector('.gallery');
// console.log(imagesContainer)
const imagesMarkup = createImagesMarkup(galleryItems);
imagesContainer.insertAdjacentHTML('beforeend', imagesMarkup);

imagesContainer.addEventListener('click', onImagesClick)

function createImagesMarkup(galleryItems) {
    return galleryItems
        .map(galleryItem => {
        return `<div class="gallery__item">
<a class="gallery__link" href="${galleryItem.original}">
    <img
    class="gallery__image"
    src="${galleryItem.preview}"
    data-source="${galleryItem.original}"
    alt="${galleryItem.description}"
    />
</a>
</div>`})
        .join('')
};

function onImagesClick(evt) {
    evt.preventDefault();

    if (!evt.target.nodeName === 'IMG') {
        return
    }
// console.log(evt.target)
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)
    instance.show();

    imagesContainer.addEventListener('keydown', (evt) => {
        if (evt.code === 'Escape') {
            instance.close();
        }
    });
}
