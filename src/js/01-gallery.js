// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const refs = {
  listGallery: document.querySelector('.gallery'),
}

// refs.listGallery.addEventListener('click', onOpenModal);
const imgGalleryMarkup = galleryColections(galleryItems);
refs.listGallery.insertAdjacentHTML("beforeend", imgGalleryMarkup);

function galleryColections(galleryItems) {
return galleryItems.reduce((acc, {preview, original, description}) => {
      return acc + `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
  },"");

};
new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250, enableKeyboard: true, captionPosition: 'bottom', overlay: true,});
