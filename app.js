const hamburger = document.querySelector(".hamburger");
const navcontainer = document.querySelector(".navcontainer");
// to open the nav container when clicked on hamburger in mobile
hamburger.addEventListener("click", () => {
    navcontainer.classList.toggle("open");
    hamburger.classList.toggle("clicked"); //to add shadow effect
});

// to close the nav container when clicked on any navigation link in mobile
const navitems = document.querySelectorAll(".navitem");
for (element of navitems){
    element.addEventListener("click", () => {
        navcontainer.classList.toggle("open");
    })
}
