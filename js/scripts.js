
var tablinks = document.getElementsByClassName('tab_links');
var tabcontents = document.getElementsByClassName('tab_contents');

function opentab(tabname){

    for(tablink of tablinks){
        tablink.classList.remove('active_links');
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active_tabs');
    }

    event.currentTarget.classList.add('active_links');
    document.getElementById(tabname).classList.add('active_tabs');
}



// Responsive Navbar 

var sideBar = document.getElementById('sideMenu');

function closetab(){
    sideBar.style.right="-200px";
}

function opentab(){
    sideBar.style.right="0";
}