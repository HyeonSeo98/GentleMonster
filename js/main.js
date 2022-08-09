const ranks = document.querySelectorAll('.rank_box>div')
const rankB = document.querySelector('.rank_box')
const rankL = document.querySelectorAll('.keyword_rank .inner .right>div')
const rankOn = document.querySelector('.keyword_rank .inner .left .rank_box>div.on')

let count = 0
let RankS

function rankC() {
  ranks.forEach((rank) => {
    rank.classList.remove('on')
  })
  rankL.forEach((rankl) => {
    rankl.classList.remove('on')
  })
  ranks[count].classList.add('on')
  rankL[count].classList.add('on')
  count ++
  if(count == 5) {
    count=0
  }
}

function RankL() {
  RankS = setInterval((rankC),2000)
}
RankL()

ranks.forEach((rank,index) => {

  rank.addEventListener('mouseover',() => {
    clearInterval(RankS)
    ranks.forEach((rank) => {
    if(rank.classList.contains('on')) {
      rank.classList.remove('on')
      rankL
    }
    })
    rankL.forEach((rankl) => {
      if(rankl.classList.contains('on')){
        rankl.classList.remove('on')   
        console.log('gd')     
      }
    })
    rankL[index].classList.add('on')
    rank.classList.add('on')
  })



  rank.addEventListener('mouseout',() => {
    RankL()
  })
})


function RankF() {
  rankL.forEach((rankl) => {
    if(rankl.classList.contains('on')){
      rankl.classList.remove('on')
    }
    rankl.classList.add('on')
  })
}




// VISUAL
const visualSwiper = new Swiper(".visual .mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop:true,
  pagination: {
    el: ".visual .swiper-pagination",
  },
  navigation: {
      nextEl: ".visual .swiper-button-next",
      prevEl: ".visual .swiper-button-prev",
    }, 
  autoplay: {
    delay: 3000,
  },
});

const pause = document.querySelector('.play_btn .pause')
const play = document.querySelector('.play_btn .play')

pause.addEventListener('click',() => {
  visualSwiper.autoplay.stop()
  pause.style.display = 'none'
  play.style.display = 'block'
})
play.addEventListener('click', () => {
  visualSwiper.autoplay.start()
  play.style.display = 'none'
  pause.style.display = 'block'
})




// product
var swiper = new Swiper(".product .mySwiper", {

  slidesPerView: "8",
  spaceBetween: 0,
  pagination: {
    el: ".product .swiper-pagination",
    clickable: true,
  },
});

const favCounts = document.querySelectorAll('.product .hover .favorite')
const favCountsOn = document.querySelectorAll('.product .hover .on')
const btnMenuLike = document.querySelector('.btn_menu .like .count')
let cnt = 0
console.log(favCounts)

favCounts.forEach((favCount) => {
  favCount.addEventListener('click',() => {
    if(favCount.classList.contains('on')){
      favCount.classList.remove('on')
      favCount.innerHTML = 'favorite_border'
    }else {
      favCount.classList.add('on')
      favCount.innerHTML = 'favorite'
    }

    if(favCount.classList.contains('on')) {
      cnt++
      console.log('gd')
    }else {
      cnt--
    }

    btnMenuLike.innerHTML = cnt
  })
})


const collaboOn = document.querySelectorAll('.collabo .collabo_box>div')
const collaboBox = document.querySelector('.collabo .collabo_box')
// console.log(collaboOn)

collaboBox.addEventListener('mouseleave',() => {
  collaboOn[0].classList.add('on')
})
collaboOn.forEach((col) => {
  col.addEventListener('mouseover',() =>{

    collaboOn[0].classList.remove('on')
    col.classList.add('on')
  })
})
collaboOn.forEach((col) => {
  col.addEventListener('mouseout',() =>{
    col.classList.remove('on')
  })
})