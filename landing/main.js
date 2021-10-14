window.onload = function() {
    const form = document.getElementById('form');

    const arr = document.getElementsByClassName('go-form-button');

    for (let e of arr) {
        e.addEventListener('click', () => {
           form.scrollIntoView({block: "center", behavior: "smooth"});
        });
    }

};