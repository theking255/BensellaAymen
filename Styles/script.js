

function openPage(url) {
  window.location.href = url;
}


var d = new Date();
document.getElementById('currentYear').innerText = d.getFullYear();

function showSidebar(){
const sidebar =document.querySelector('.sidebar')
sidebar.style.display ='flex'
}

function hideSidebar(){
const sidebar =document.querySelector('.sidebar')
sidebar.style.display ='none'
}
