const container = document.querySelector('.container')
const card = document.querySelector('.card')
let title=document.querySelector('.title')
let desc = document.querySelector('.desc')
let dragon = document.querySelector('.drg')


card.addEventListener('mouseover',(e)=>{
    console.log(e.pageY)
    let Xaxis =(window.innerWidth/2 - e.pageX) / 17
    let Yaxis =(window.innerHeight/2 - e.pageY) / 17
    card.style.transform=`rotateY(${Xaxis}deg) rotateX(${Yaxis}deg)`
})
card.addEventListener('mouseenter',(e)=>{
    card.style.transition='none'
    title.style.transform=`translateZ(180px)`;
    title.style.transition='none'
    desc.style.transform=`translateZ(130px)`;
    desc.style.transition='none'
    dragon.style.transform=`translateZ(190px) rotateY(45deg)`;
})
card.addEventListener('mouseleave',(e)=>{
    card.style.transition='all 0.3s ease-in'
    card.style.transform=`rotateY(0deg) rotateX(0deg)`
    title.style.transform=`translateZ(0px)`
    title.style.transition='all 0.3s ease-in'
    desc.style.transform=`translateZ(0px)`
    desc.style.transition='all 0.3s ease-in'
    dragon.style.transform=`translateZ(0px) rotateX(0deg)`
})