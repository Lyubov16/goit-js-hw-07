import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const imagesContainer = document.querySelector('ul.gallery');
console.log(imagesContainer)
const imagesMarkup = createImagesMarkup(galleryItems);
imagesContainer.insertAdjacentHTML('beforeend', imagesMarkup);

// imagesContainer.addEventListener('click', onImagesClick)

function createImagesMarkup(galleryItems) {
    return galleryItems
        .map(galleryItem => {
        return `<a class="gallery__item" href="${galleryItem.original}">
<img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
</a>`})
        .join('')
};

const galleryELL = new SimpleLightbox('ul.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
