// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const markup = galleryItems.map(makeMarkup).join(``);

gallery.addEventListener('click', onClick);
gallery.insertAdjacentHTML('beforeend', markup);

function makeMarkup({ original, preview, description }) {
  return `
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
     </a>
`;
}

function onClick(event) {
  event.preventDefault();
  if (event.target.tagName !== `IMG`) return;
  var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}
