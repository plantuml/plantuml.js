(function() {
    // uml diagrams are toggled by default
    if(window.location.pathname.endsWith('docs/main/index.html')){
        document.querySelector('.nav-item[data-depth="0"]:nth-child(2)').classList.add("is-active")
    }
 })();
