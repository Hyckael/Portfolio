// header
const MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-active');
    this.classList.toggle('fa-xmark')
})

let typed = new Typed('.auto-input',
{ strings : ['Front-end Developper!','DataBase Administrator'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
}
)