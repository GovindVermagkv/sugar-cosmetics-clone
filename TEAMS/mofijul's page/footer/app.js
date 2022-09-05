const productContainers = [...document.querySelectorAll('.product-container')];

const pre_btn = [...document.querySelectorAll('.pre-btn')];

const nxt_btn = [...document.querySelectorAll('.nxt-btn')];

productContainers.forEach((item,i)=>{
    let containerDimension = item.getBoundingClientRect();

    let containerWidth = containerDimension.width;

    nxt_btn[i].addEventListener('click', ()=>{
        item.scrollLeft += containerWidth;

    })

    pre_btn[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth;
    })
})