const details = document.querySelectorAll('.order .inner .list_box>div')

details.forEach((detail) => {
  detail.addEventListener('click',() => {
    details.forEach((detail)=>{
      if(detail.classList.contains('on')){
        detail.classList.remove('on')
      }
    })
    detail.classList.add('on')
  })
})