const proS = document.querySelectorAll('.product .content .scroll')
console.log(proS)

window.addEventListener('scroll', () => {
  if(window.scrollY == '1500') {
    // proS.style.display ='block'
    proS.forEach((pro) => {
      pro.style.display = 'block'
    })
    console.log('500!!!')
  }
  console.log(window.scrollY)
})


const allView = document.querySelector('.product .list .all_view')
const catView = document.querySelector('.product .list .cat_view')
const tintView = document.querySelector('.product .list .tint_view')
const circleView = document.querySelector('.product .list .circle_view')
const squareView = document.querySelector('.product .list .square_view')

const viewT = document.querySelector('.product .container .left .view_text')
console.log(viewT)

allView.addEventListener('click',()=> {
  productList.forEach((proL) => {
    proL.style.display = 'block'
  })
  viewT.innerHTML = '전체보기'
})

catView.addEventListener('click',() => {
  productList.forEach((proL) => {
    if(proL.classList.contains('cat')){
      proL.style.display ='block'
    }else {
      proL.style.display = 'none'
    }
  })
  viewT.innerHTML = '캣아이프레임'
})

tintView.addEventListener('click',() => {
  productList.forEach((proL) => {
    if(proL.classList.contains('tint')){
      proL.style.display ='block'
    }else {
      proL.style.display = 'none'
    }
  })
  viewT.innerHTML = '틴트 렌즈'
})

circleView.addEventListener('click',() => {
  productList.forEach((proL) => {
    if(proL.classList.contains('circle')){
      proL.style.display ='block'
    }else {
      proL.style.display = 'none'
    }
  })
  viewT.innerHTML = '원형 프레임'
})

squareView.addEventListener('click',() => {
  productList.forEach((proL) => {
    if(proL.classList.contains('square')){
      proL.style.display ='block'
    }else {
      proL.style.display = 'none'
    }
  })
  viewT.innerHTML = '사각 프레임'
})




const quikView = document.querySelector('.product .container .quik_view')
const basicView = document.querySelector('.product .container .basic_view')
const productList = document.querySelectorAll('.product .content .pro_box')
const productSecond = document.querySelector('.product .second')
console.log(productSecond)

quikView.addEventListener('click',() => {
  quikView.style.display = 'none'
  basicView.style.display ='block'
  productList.forEach((prol) => {
    prol.classList.add('on')
    prol.style.width = '225px'
  })
  // productSecond.outerHTML = productSecond.innerHTML
})

basicView.addEventListener('click',() => {
  quikView.style.display = 'block'
  basicView.style.display ='none'
  productList.forEach((prol) => {
    prol.classList.remove('on')
    prol.style.width = '342.5px'
  })
})


const favCounts = document.querySelectorAll('.product .content .good span')
const btnMenuLike = document.querySelector('.btn_menu .like .count')
// console.log(favCounts.length)
// console.log(btnMenuLike)
let cnt = 0

favCounts.forEach((favCount) => {
  favCount.addEventListener('click',() => {

    if(favCount.classList.contains('on')) {
      favCount.classList.remove('on')
        favCount.innerText = 'favorite_border'
    }else {
      favCount.classList.add('on')
      favCount.innerText = 'favorite'
    }

    if(favCount.classList.contains('on')) {
      cnt++
    }else {
      cnt--
    }
    btnMenuLike.innerText = cnt
  })
})


const color01s = document.querySelectorAll('.color01')
const color02s = document.querySelectorAll('.color02')
const color03s = document.querySelectorAll('.color03')
const color04s = document.querySelectorAll('.color04')
const color05s = document.querySelectorAll('.color05')
const productImgs = document.querySelectorAll('.product .content img')
// console.log(productImgs)

color01s.forEach(function(color01,index) {
  color01.addEventListener('mouseover',() => {
    productImgs[index].src = productImgs[index].src.replace('_01.jpg','_01.jpg')
  })
  color01.addEventListener('mouseout',() => {
    productImgs[index].src = productImgs[index].src.replace('_01.jpg','_01.jpg')
  })
})
color02s.forEach(function(color02, index){
  color02.addEventListener('mouseover',() => {
    productImgs[index].src = productImgs[index].src.replace('_01.jpg','_02.jpg')
  })
  color02.addEventListener('mouseout',() => {
    productImgs[index].src = productImgs[index].src.replace('_02.jpg','_01.jpg')
  })
})
color03s.forEach(function(color03, index){
  color03.addEventListener('mouseover',() => {
    productImgs[index].src = productImgs[index].src.replace('_01.jpg','_03.jpg')
  })
  color03.addEventListener('mouseout',() => {
    productImgs[index].src = productImgs[index].src.replace('_03.jpg','_01.jpg')
  })
})
color04s.forEach(function(color04, index){
  color04.addEventListener('mouseover',() => {
    productImgs[index].src = productImgs[index].src.replace('_01.jpg','_04.jpg')
  })
  color04.addEventListener('mouseout',() => {
    productImgs[index].src = productImgs[index].src.replace('_04.jpg','_01.jpg')
  })
})
color05s.forEach(function(color05, index){
  color05.addEventListener('mouseover',() => {
    productImgs[index].src = productImgs[index].src.replace('_01.jpg','_05.jpg')
  })
  color05.addEventListener('mouseout',() => {
    productImgs[index].src = productImgs[index].src.replace('_05.jpg','_01.jpg')
  })
})


