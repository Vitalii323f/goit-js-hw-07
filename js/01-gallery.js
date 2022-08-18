import { galleryItems } from './gallery-items.js'
// Change code below this line

console.log(galleryItems)

const containerGallery = document.querySelector('.gallery')

const image = document.querySelector('.gallery__image')

// Вешаем слушателя на Div

//containerGallery.addEventListener('click' onClickModal)

// Создаем переменную для добавления разметки

const markupGalleryEl = markupDataArr(galleryItems)
console.log(markupGalleryEl)

function markupDataArr() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class = gallery_item>
         <a class = gallery__link href='${original}'>
      <img
      class= 'gallery__image'
      src= '${preview}'
      data-source= '${original}'
      alt='${description}'
    />
  </a>
</div>`
    })
    .join('')
}

//function onClickModal ()
