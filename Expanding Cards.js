const panels = document.querySelectorAll('.panel');

function selectItem(){
    removeActiveClasses();
    this.classList.add('active')
}
function removeActiveClasses() {
    panels.forEach((item)=>item.classList.remove('active'))
}
panels.forEach(item=>item.addEventListener('click',selectItem));

// tabItems.forEach(item=>item.addEventListener('click',selectItem));