import { galleryItems } from './gallery-items.js'
// Change code below this line

console.log(galleryItems)

const containerGallery = document.querySelector('.gallery')

const image = document.querySelector('.gallery__image')

// Вешаем слушателя на Div

containerGallery.addEventListener('click', onClickModal)

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

// Вставляем разметку в html
containerGallery.insertAdjacentHTML('afterbegin', markupGalleryEl)
console.log(containerGallery)

//Создаем Лайтбокс
const instance = basicLightbox.create(
  `
    <img src='' width="800" height="600">
`,
  {
    onShow: (instance) => {
      document.addEventListener('keydown', onCloseModalKey)
    },
    onClose: (instance) => {
      document.removeEventListener('keydown', onCloseModalKey)
    },
  },
)

// Отлавливаем клик по фото

function onClickModal(event) {
  event.preventDefault()

  const { target } = event
  if (target.localName !== 'img') {
    return
  }

  const selectedImage = event.target.dataset.source
  instance.element().querySelector('img').src = selectedImage

  instance.show()
}

function onCloseModalKey(event) {
  if (event.code === 'Escape') {
    instance.close()
  }
}
