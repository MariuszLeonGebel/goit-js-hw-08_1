// Add imports above this line
import {
  galleryItems
} from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryBox = document.querySelector('div.gallery');

for (const el of galleryItems) {
  const galleryItem = document.createElement('a');
  galleryItem.classList.add('gallery__item');
  galleryItem.href = el.original;

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = el.preview;
  galleryImage.alt = el.description;

  galleryBox.append(galleryItem);
  galleryItem.append(galleryImage);
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionDelay: 250,
});




















// console.log(galleryItems);

// let index = 0;
// const previewRef = document.querySelector('.gallery');

// galleryItems.forEach((image, index) => {
//   previewRef.insertAdjacentHTML(
//     'beforeend',
//     `<li><img class="gallery-image gallery__link" src="${image.preview}" alt="${image.description}" data-fullview="${image.original}" data-index="${index}" width="350"></li>`);
// });

// const imagesSet = document.querySelector(".gallery");
// imagesSet.addEventListener("click", selectImage);

// function selectImage(event) {
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }

//   const instance = basicLightbox.create(`<img src=${event.target.dataset.fullview} width="600" height="400">
// `, {
//     onShow: (instance) => {
//       document.addEventListener('keydown', function (event) {
//         if (event.key === "Escape") {
//           instance.close()
//         }
//       })
//     }
//   })
//   instance.show();
// }