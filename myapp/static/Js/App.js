let flag=0
// *** ==== menubar === **** 
const header_menu_NavLinks=document.querySelector('.header_menu_NavLinks')
const Toggle=document.getElementById('Toggle')

Toggle.addEventListener('click' , ()=>{
    header_menu_NavLinks.classList.toggle('show')
})

// ****=== #BtnBack***=== For remove class .header_menu_NavLinks 
document.getElementById('BtnBack').addEventListener('click' , ()=>{
    header_menu_NavLinks.classList.remove('show')
})




                // **** Humbarger &&  _header_menu_NavLinks_Item ***** 
const _Humbarger=document.getElementById('Humbarger')
let _header_menu_NavLinks_Item=document.querySelector('.header_menu_NavLinks_Item')
let _navigationBar=document.querySelector('.navigationBar')

        // *** There gated height of elements *** 
let currentHeight=_header_menu_NavLinks_Item.offsetHeight
let NewHeight=_navigationBar.offsetHeight
_Humbarger.addEventListener('click' , ()=>{
    if( flag % 2 ){
        _header_menu_NavLinks_Item.style.height=(currentHeight + NewHeight)+'px'
    }else{
        _header_menu_NavLinks_Item.style.height=currentHeight+'px'
    }
})


                // ****** .DropMenu **** 
const _DropMenu=document.querySelector('.DropMenu')
let DropMenu_item=document.querySelector('.DropMenu_item')
_DropMenuCurrentHeight= _DropMenu.offsetHeight
DropMenu_itemCurrentHeight=DropMenu_item.offsetHeight
let  _header_menu_NavLinks_ItemCurrenHeight
_DropMenu.addEventListener('click' ,(e)=>{
    if( flag % 2){
        e.target.style.height=(_DropMenuCurrentHeight + DropMenu_itemCurrentHeight)+'px'

          _header_menu_NavLinks_ItemCurrenHeight=_header_menu_NavLinks_Item.offsetHeight
        _header_menu_NavLinks_Item.style.height=(_header_menu_NavLinks_ItemCurrenHeight + DropMenu_itemCurrentHeight) + 'px'
    }else{
        e.target.style.height=_DropMenuCurrentHeight+'px'
        _header_menu_NavLinks_Item.style.height=_header_menu_NavLinks_ItemCurrenHeight+'px'
    }
})
// *** ====end of  menubar === **** 



const Slides=document.getElementsByClassName('slide')
let _PrevBtn=document.querySelector('.prevBtn')
let _NextBtn=document.querySelector('.nextBtn')
let count=0

function active(){
    for(i=0; i<Slides.length; i++){
        Slides[i].style.top='100%'
    }
}

function noActive(){
    for(i=0; i<Slides.length; i++){
        Slides[i].classList.remove('active')
    }
}
_NextBtn.addEventListener('click', ()=>{
    count++
    if(count>Slides.length-1){
        count=0
    }
    active();
    noActive();
    Slides[count].top=0
    Slides[count].classList.add('active')
})

_PrevBtn.addEventListener('click' , ()=>{
    count--;
    if(count<0){
        count=Slides.length-1;
    }
    active();
    noActive();
    Slides[count].top=0
    Slides[count].classList.add('active')
})

setInterval(() => {
    count++
    if(count>Slides.length-1){
        count=0
    }
    active();
    noActive();
    Slides[count].top=0
    Slides[count].classList.add('active')
}, 3000);

// ========================**************** end of header_banner_cards =============== 
const Header=document.getElementById('header')
window.addEventListener('scroll' , ()=>{
    let _ST= window.scrollY
    if( _ST > 10 ){
        Header.classList.add('header_scroll')
    }else{
        Header.classList.remove('header_scroll')
    }
})






// <!-- ======================**** section_total_view *****==================== -->
const _count=document.querySelectorAll('.counter')
window.addEventListener('scroll' , ()=>{
    let _windowHeight=window.innerHeight
    for(i=0; i<_count.length; i++){
        let _ST=_count[i].getBoundingClientRect().top
        if(_ST < _windowHeight){
            Counter()
        }
    }
})

let num=0
function Counter(){
    setInterval(() => {
        if(num < 1900){
            _count[0].innerHTML=num++
        }
        if(num < 1869){
            _count[1].innerHTML=num++
        }
        if(num < 1890){
            _count[2].innerHTML=num++
        }
        if( num < 1700){
            _count[3].innerHTML=num++
        }
    }, 200);
}



// ================*********** .Btnplayer *************===================
const video=document.querySelector('.section_Get_quote_card>video')
const Btnplayer=document.querySelector('.Btnplayer')
Btnplayer.addEventListener('click' , ()=>{
    video.classList.add('show')
})

window.addEventListener('click' , ()=>{
    if(!(flag % 2)){
        video.classList.remove('show')
        video.getAttribute('controls')
    }
    flag++
})
// ================***********End of  .Btnplayer *************============ 

console.log("hello world");
