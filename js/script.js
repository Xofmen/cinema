let link1 = document.querySelector('.link_nav1');
let link2 = document.querySelector('.link_nav2');
let link3 = document.querySelector('.link_nav3');
let link4 = document.querySelector('.link_nav4');
let films = document.querySelector('.films')
let series = document.querySelector('.series')
let collections = document.querySelector('.collections')
let socials = document.querySelector('.socials')
let btn_nav = document.querySelector('.navbar-nav__btn')
let nav_list = document.querySelector('.navbar-nav__list')

function films_src(event){
    event.preventDefault()
    films.scrollIntoView({
        block : "center",
        behavior:"smooth",
        inline : "end"
    })
}
function series_src(event){
    event.preventDefault()
    series.scrollIntoView({
        block : "center",
        behavior:"smooth",
        inline : "end"
    })
}
function collections_src(event){
    event.preventDefault()
    collections.scrollIntoView({
        block : "center",
        behavior:"smooth",
        inline : "end"
    })
}
function socials_src(event){
    event.preventDefault()
    socials.scrollIntoView({
        block : "center",
        behavior:"smooth",
        inline : "end"
    })
}

link1.addEventListener('click',films_src)
link2.addEventListener('click',series_src)
link3.addEventListener('click',collections_src)
link4.addEventListener('click',socials_src)

btn_nav.onclick = () =>{
    if(nav_list.style.transform == 'translateX(-100%)'){
        nav_list.style.transform = 'translateX(0)'
    }else{
        nav_list.style.transform = 'translateX(-100%)'
    }
}




