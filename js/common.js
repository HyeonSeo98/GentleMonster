const headerS = document.querySelector('header .container')
const headerLnb = document.querySelector('header .container .lnb')
const searchBtn = document.querySelector('header .search')
const headerSearch = document.querySelector('header .search_box')


headerLnb.addEventListener('mouseover',() => {
  headerS.classList.add('hover')
})
headerS.addEventListener('mouseout',() => {
  headerS.classList.remove('hover')
})

// 검색
searchBtn.addEventListener('click',() => {
  if(headerSearch.style.height == '0px'){
    headerSearch.style.height = '440px'
    headerS.style.background = '#000'
    console.log('400')
  }else {
    headerSearch.style.height = '0'
    headerSearch.style.borderTop = ""
  }
})

// 장바구니
const cartBtn = document.querySelector('header .cartBtn')
const cartBox = document.querySelector('header .cart')

cartBtn.addEventListener('click',() => {
  if(cartBox.style.right == '-400px'){
    cartBox.style.right = '0'
    cartBox.style.borderTop = '1px solid #fff'
  }else {
    cartBox.style.right = '-400px'
  }
})


//버튼메뉴
const scrollTop = document.querySelector('.btn_menu .scroll_top')

window.addEventListener('scroll',() => {
  if(window.scrollY == 0) {
    scrollTop.style.opacity ='0'
  } else {
    scrollTop.style.opacity ='1'
  }
})
scrollTop.addEventListener('click',() => {
  gsap.to(window, 0.8, { //gsap.to(요소,시간,{애니메이션옵션})
    scrollTo : 0
  })
})