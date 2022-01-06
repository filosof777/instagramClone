let elFormInput = document.querySelector(".header-form__input");
let elIconSearch = document.querySelector(".header-form__icon-search");
let elIconClose = document.querySelector(".header-form__icon-close"); 
let elPostBtn = document.querySelectorAll('.post__btn');
let elContentList = document.querySelector('.content__list');
let elModalBlog = document.querySelector('.modal-blogs');
let elModalWrapper = document.querySelector('.modal-wrap');



elPostBtn.forEach(item => {
  item.addEventListener('click', () => {
    elPostBtn.forEach(items => {
      items.classList.remove('post__item--active')
    })
    item.classList.add('post__item--active')
  })
});

elFormInput.addEventListener('mouseup', () => {
  elIconSearch.classList = ('d-none')
  elFormInput.style.paddingLeft = '5px'
  elIconClose.style.display = 'block'
});

elFormInput.addEventListener('mouseover', () => {
  elIconSearch.classList = ('d-flex')
  elFormInput.style.paddingLeft = '5px'
  elIconClose.style.display = 'none'
});

elFormInput.addEventListener('keyup', () => {
  console.log(elFormInput.value);
});

arr.forEach(item => {
  if (item.id == 'image') {
    elContentList.innerHTML += `
    <li class="content__item" id="image">
      <div class="content__inner">
        <div class="content__wrapper">
          <span class="content__like">
            <i class="fas fa-heart"></i>${item.likeCount}
          </span>
          <span class="content__coment">
            <i class="fas fa-comment"></i>${item.commentCount}
          </span>
        </div>
      </div>
      <img src="${item.src}" alt="img">
    </li>
    `
  }
  if (item.id == 'video') {
    elContentList.innerHTML += `
    <li class="content__item" id="video">
      <i class="content__icons fas fa-play"></i>
      <div class="content__inner">
        <div class="content__wrapper">
          <span class="content__like">
            <i class="fas fa-heart"></i>${item.likeCount}
          </span>
          <span class="content__coment">
            <i class="fas fa-comment"></i>${item.commentCount}
          </span>
        </div>
      </div>
      <video>
        <source src="${item.src}" type="video/mp4">
      </video>
    </li>
    `
  }
  showModal();
})

function showModal(){
  let elContentItem = document.querySelectorAll('.content__item');

elContentItem.forEach(item => {
  item.addEventListener('click', (e) => {
    if (e.target.id == 'image') {
      let imgSrc = e.target.querySelector('img')
      elModalBlog.innerHTML = `
      <div class="modal-wrap">
        <div class="row">
          <div class="modal-wrap__col px-0 col-7 d-flex align-items-center justify-content-center">
            <img class="modal-wrap__img" src="${imgSrc.src}" alt="img">            
          </div>
          <div class="modal-wrap__col modal-wrap__comments col-5 px-0 ">

          </div>
        </div>
      </div>
      `;
      likeComment()
    }
    if (e.target.id == 'video') {
      let videoSrc = e.target.querySelector('source');
      elModalBlog.innerHTML = `
      <div class="modal-wrap">
        <div class="row">
          <div class="modal-wrap__col px-0 col-7 d-flex align-items-center justify-content-center">
          <video controls>
            <source src="${videoSrc.src}" type="video/mp4">
          </video>          
          </div>
          <div class="modal-wrap__col modal-wrap__comments col-5 px-0 ">

          </div>
        </div>
      </div>
      `;
      likeComment();
    }
  })
})
}

elPostBtn.forEach(item => {
  item.addEventListener('click', (e) => {
    if (e.target.value == 'video') {
      elContentList.innerHTML = "";
      arr.forEach(item => {
        if (item.id == 'video') {
          elContentList.innerHTML += `
          <li class="content__item" id="video">
            <i class="content__icons fas fa-play"></i>
            <div class="content__inner">
              <div class="content__wrapper">
                <span class="content__like">
                  <i class="fas fa-heart"></i>${item.likeCount}
                </span>
                <span class="content__coment">
                  <i class="fas fa-comment"></i>${item.commentCount}
                </span>
              </div>
            </div>
            <video>
              <source src="${item.src}" type="video/mp4">
            </video>
          </li>
          `
        }
      })
      showModal();
    }
    if (e.target.value == 'image') {
      elContentList.innerHTML = "";
      arr.forEach(item => {
        if (item.id == 'image') {
          elContentList.innerHTML += `
          <li class="content__item" id="image">
            <div class="content__inner">
              <div class="content__wrapper">
                <span class="content__like">
                  <i class="fas fa-heart"></i>${item.likeCount}
                </span>
                <span class="content__coment">
                  <i class="fas fa-comment"></i>${item.commentCount}
                </span>
              </div>
            </div>
            <img src="${item.src}" alt="img">
          </li>
          `
        }
        showModal()
      })
    }
    if (e.target.value == 'all-post') {
      createElement()
    }
  })

})

function createElement() {
  elContentList.innerHTML = "";

  arr.forEach(item => {
    if (item.id == 'image') {
      elContentList.innerHTML += `
      <li class="content__item" id="image">
        <div class="content__inner">
          <div class="content__wrapper">
            <span class="content__like">
              <i class="fas fa-heart"></i>${item.likeCount}
            </span>
            <span class="content__coment">
              <i class="fas fa-comment"></i>${item.commentCount}
            </span>
          </div>
        </div>
        <img src="${item.src}" alt="img">
      </li>
      `
    }
    if (item.id == 'video') {
      elContentList.innerHTML += `
      <li class="content__item" id="video">
        <i class="content__icons fas fa-play"></i>
        <div class="content__inner">
          <div class="content__wrapper">
            <span class="content__like">
              <i class="fas fa-heart"></i>${item.likeCount}
            </span>
            <span class="content__coment">
              <i class="fas fa-comment"></i>${item.commentCount}
            </span>
          </div>
        </div>
        <video>
          <source src="${item.src}" type="video/mp4">
        </video>
      </li>
      `
    }
    showModal();
  })
}

createElement()

function likeComment() {
  let elModalComment = document.querySelector('.modal-wrap__comments');
  comment.forEach(item => {
    elModalComment.innerHTML += `
    <div class="mb-4 d-flex align-items-center">
      <img class="modal-wrap__user-img" src="${item.src}" alt="">
      <a class="modal-wrap__user-name" href="#">${item.userName}</a>
      <p class="modal-wrap__comment mb-0">${item.massages}</p>
      <i class="modal-wrap__like fal fa-heart"></i>
    </div>
    `
  })
} 
