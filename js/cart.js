const cartBtns = document.querySelectorAll('.product .content .cart_add')
const cartLis = document.querySelector('header .cart .cart_box')
console.log(cartLis)

cartBtns.forEach((cartBtn) => {
  cartBtn.addEventListener('click',addCart)
})

function addCart() {

  let thisPro = this.parentNode.parentNode.parentNode.parentNode.parentNode
  let img = thisPro.querySelector('.product .content img')
  let proName = thisPro.querySelector('.product .content .pro_name>p').textContent
  let price = thisPro.querySelector('.product .pro_box .price').textContent
  console.log(img,proName,price)

  function addList(proName,price,img) {
    return `
      <li>
        <div class="pro_img"><img src=${img.src} alt=""></div>
        <div class="txt">
          <p class="title">${proName}</p>
          <p class="price">${price}</p>
          <div class="pro_cnt">
            <p class="minus">-</p>
            <p class="cnt">1</p>
            <p class="plus">+</p>
          </div>
        </div>
        <p class="delete">삭제</p>
      </li>
    `
  }
  cartLis.innerHTML += addList(proName,price,img)
}
