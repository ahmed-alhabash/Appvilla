let header = document.querySelector('header .navbar')
let link = document.querySelectorAll('header .navbar .navbar-nav .nav-item .nav-link')
let  btn = document.getElementById('btn')
let newLogo = document.querySelector('header .navbar .logo img')
let navbarToggle = document.querySelectorAll('header .navbar .navbar-toggler p')
// change the header when you scroll 
window.onscroll = ()=>{
if(window.scrollY >= 20){
    
    header.classList.add('scroll-page')
    newLogo.src = 'assets/image/logo/logo.svg'
    link.forEach((e)=>{
        e.classList.add('linksColor')
    })
    navbarToggle.forEach((el)=>{
        el.classList.add('navColor')
    })
}else{
    header.classList.remove('scroll-page')
    link.forEach((e)=>{
        e.classList.remove('linksColor')
    })
    navbarToggle.forEach((el)=>{
        el.classList.remove('navColor')
    })
    newLogo.src = 'assets/image/logo/white-logobasic.svg'

    // btn.classList.remove('btnColor')
    if(window.scrollY > 500){
        btnDown.style.display = 'block'
    }else{
        btnDown.style.display = 'none'
    }
}
}
btn.classList.add('btnColor')
// change the header when you scroll 
let btnDown = document.querySelector('.upDown')
// add class active when you scroll 
let sec = document.querySelectorAll('section')
let links = document.querySelectorAll('header .navbar .navbar-nav .nav-item')
function activeing(){
    let len = sec.length
    while(--len && window.scrollY + 140 < sec[len].offsetTop){}
    links.forEach(lex => lex.classList.remove('active'));
    links[len].classList.add('active')
}
window.addEventListener('scroll', activeing )









// jquery start
// make the button scroll to up 
$(function(){
      'use strict'
      $('.upDown').click(function(e){

 
      $('html , body').animate({

        scrollTop: 0
      },100)
    })
    // make active on links 
    $('header .navbar .navbar-nav .nav-item .nav-link').click(function(e){
       $('body , html').animate({
        scrollTop:$('#' + $(this).data('scroll')).offset().top -100
       })
   
    })
})
// $('header .navbar .navbar-nav .nav-item').click(function(){
//     $(this).addClass('active').siblings()
//     console.log('good')
// })

// jquery end 








