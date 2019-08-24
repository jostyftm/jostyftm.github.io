window.addEventListener('load', () => {
    
    document.querySelector("#toggle-menu").addEventListener('click', (e) => {

        e.preventDefault();
        document.querySelector("#menu_hello").classList.toggle('hide-mobile');
    });
});