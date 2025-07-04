function showSidebar() {
    const  mobileNav = document.querySelector('.mobile-nav');
    mobileNav.style.right = "0vw"

}function hideSidebar() {
    const  mobileNav = document.querySelector('.mobile-nav');
    mobileNav.style.right = "-100vw"

}

const scrollContainer = document.getElementById("exp-container");
const leftButton = document.querySelector(".scroll-btn.left");
const rightButton = document.querySelector(".scroll-btn.right");


function scrollLeft() {
    scrollContainer.scrollBy({ left: -400, behavior: 'smooth' });
}


function scrollRight() {
    scrollContainer.scrollBy({ left: 400, behavior: 'smooth' });
}

leftButton.addEventListener("click", scrollLeft);
rightButton.addEventListener("click", scrollRight);

document.querySelectorAll('.exp-title a').forEach(a => {
    a.onclick = (event) => {
        document.querySelector('.loading-spinner').style.display = 'block';
        event.preventDefault();
        const img = document.querySelector('.certificate img');
        img.src = a.getAttribute('href');
        img.onload = () => {
            document.querySelector('.loading-spinner').style.display = 'none';
            document.querySelector('.certificate').style.display = 'block';
        };
    }
});

document.querySelector('.certificate').onclick = (event) => {
    if (!event.target.closest('.cert-img')) {
        document.querySelector('.certificate').style.display = 'none';
    }
};

document.querySelector('.certificate i').onclick =() =>{
    document.querySelector('.certificate').style.display='none';
}
