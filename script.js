const menuIcon = document.getElementById('menuIcon');
const sideBar = document.querySelector('.sideBar');
       
menuIcon.addEventListener('click', function() {
    console.log('Button clicked');
        sideBar.classList.toggle('collapsed');
    });