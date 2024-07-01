let MenuBtn = document.getElementById('MenuBtn')
MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})
var typed = new Typed(".auto-input",{
    strings:[":Front-End Developer!",":Freelancer!",":UI Designer", ":Youtuber!"],
    typeSpeed: 150,
    backSpeed: 150,
    backDelay: 2000,
    loop: true,

})

let navlinks = document.querySelectorAll('nav ul li a')

let sections =document.querySelectorAll('section')
window.addEventListener('scroll',function () {
const scrollPos =window.scrollY
sections.forEach(section => {
     if(scrollPos >  section.offsetTop && scrollPos < (section.offsetTop+section.offsetHeight)){
         navlinks.forEach(link => {
             link.classList.remove('active');
             if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                 link.classList.add('active')
             }
         });
     }
});

});

