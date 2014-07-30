var sidebarButton = document.querySelector(".menuButton");
var sidebarMenu = document.querySelector(".sidebarMenuContainer");
var header = document.querySelector(".headerContent");

/*This function expands or collapses the sidebar menu when the menuButton is clicked.*/
sidebarButton.addEventListener('click', function() {
    sidebarButton.classList.toggle("dockLeft");
    sidebarButton.classList.toggle("dockRight");

    sidebarMenu.classList.toggle("sidebarInitial");
    sidebarMenu.classList.toggle("sidebarExpanded");
}, false);