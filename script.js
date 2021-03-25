let btn = document.querySelector('.fake__circle');
let popUpShare = document.querySelector('.pop-up__share');
let footerShare = document.querySelector('.footer__share');



btn.addEventListener('click', PopDisplay);
function PopDisplay(){
        
    if(popUpShare.style.display === "flex") {
        popUpShare.style.display = "none" 

    } else {
        popUpShare.style.display = "flex";       
    }
}
