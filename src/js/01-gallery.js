// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const refs = {
  divGallery: document.querySelector('.gallery'),
}

refs.divGallery.addEventListener('click', onOpenModal);
const imgGalleryMarkup = galleryColections(galleryItems);
refs.divGallery.insertAdjacentHTML("beforeend", imgGalleryMarkup);

function galleryColections(galleryItems) {
return galleryItems.reduce((acc, {preview, original, description}) => {
      return acc + `<div class="gallery__item">
     <a class="gallery__link" href="${original}">
       <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
       />
     </a>
   </div>`
  },"");

};
// console.log(galleryItems);

let instance = "";
function onOpenModal(evt) {
  evt.preventDefault();
  const clickImgEl = evt.target.classList.contains('gallery__image');
  if (!clickImgEl){
   return;
  }
  instance = basicLightbox.create(`
  <img
         src="${evt.target.dataset.source}" width="1400" height="900">
       />
`);
instance.show();
};

document.addEventListener('keydown', onCloseModal);

function onCloseModal(evt) {
if (evt.code === 'Escape') {
  instance.close();
}
}
