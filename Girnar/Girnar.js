let toggleIcon = document.querySelector('.toggle-icon');
let closeIcon = document.querySelector('.close-icon');
let respoNav = document.querySelector('.responsive-nav');

toggleIcon.addEventListener('click', () => {
    respoNav.classList.add('responsive-nav-show');
    toggleIcon.style.display = "none";
    closeIcon.style.display = "block";
});

closeIcon.addEventListener('click', () => {
    respoNav.classList.remove('responsive-nav-show');
    toggleIcon.style.display = "block";
    closeIcon.style.display = "none";

});



// console.log()

var a = 0;

document.body.addEventListener("scroll" , ()=> {
        a++;
        console.log(a);
});  

