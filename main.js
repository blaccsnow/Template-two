let menuButton = document.getElementById("menu-image");
let mainContent = document.getElementById("main");
let sideNavigation = document.getElementById("sidebar");
let closeButton = document.getElementById("close-btn")

menuButton.addEventListener('click', function() {
 sideNavigation.style.width = "60%";
 sideNavigation.style.overflow = "visible";
 mainContent.style.width = "50%";
});

closeButton.addEventListener('click', function() {
 sideNavigation.style.width = "0";
 sideNavigation.style.overflow = "hidden"
 mainContent.style.width = "100%"
 });
