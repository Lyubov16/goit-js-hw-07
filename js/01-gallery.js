import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imagesContainer = document.querySelector('.gallery');
// console.log(imagesContainer)
const imagesMarkup = createImagesMarkup(galleryItems);
imagesContainer.insertAdjacentHTML('beforeend', imagesMarkup);
console.log(imagesMarkup)

imagesContainer.addEventListener('click', onImagesClick)

function createImagesMarkup(galleryItems) {
    return galleryItems
        .map(({original, preview, description}) => {
        return `<div class="gallery__item">
<a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
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
`, {
        onShow: (instance) => {
        window.addEventListener('keydown', onEscBtnPress);
        // document.body.style.backgroundColor = 'tomato'
    },

        onClose: (instance) => {
            window.removeEventListener('keydown', onEscBtnPress);
            //  document.body.style.backgroundColor = 'green'
        },
    })
    console.dir(instance)
    instance.show();
    const elem = instance.element()
    console.log(elem)
    function onEscBtnPress(evt) {
    if (evt.code === 'Escape') {
            instance.close();
        }
}
}
