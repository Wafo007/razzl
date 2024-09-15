let bottle = document.querySelector('.orange');
let orange = document.querySelector('.orange_coupe');
let cola = document.querySelector('.cola');
let limonade = document.querySelector('.limonade');
let trigger = document.getElementById('trigger');
let update = document.querySelector('.update');
let description = document.querySelector('.description');
let reach = document.querySelector('.reach');
let histoire = document.querySelector('.history');
let here = document.getElementById('here');

window.addEventListener('scroll', ()=>{
    const scrollposition = window.scrollY;
    if(scrollposition){
        orange.classList.add('moved');
        bottle.classList.add('moved');
        cola.classList.add('moved');
        description.classList.add('active');
        update.classList.add('down');
    }else{
        bottle.classList.remove('moved');
        orange.classList.remove('moved');
        cola.classList.remove('moved');
        description.classList.remove('active');
        update.classList.remove('down');
    }
});

window.addEventListener('scroll', ()=>{
    const scrollposition = window.scrollY;
    if(scrollposition >= trigger.offsetTop){
        cola.classList.add('moved');
        limonade.classList.add('moved');
        bottle.classList.add('displace');
    }else{
        cola.classList.remove('moved');
        limonade.classList.remove('moved');
        bottle.classList.remove('displace');
    }
});

window.addEventListener('scroll', ()=>{
    const positionscroll = window.scrollY;
    if(positionscroll >= here.offsetTop){
        reach.classList.add('down');
        histoire.classList.add('active');
    }else{
        reach.classList.remove('down');
        histoire.classList.remove('active');
    } 
});




