function isSpace(e) {
    if(e.keyCode === 32) {
       if(typeof window.countme === 'undefined')
           window.countme = 0;
       
        var text = document.querySelector('.nonHideableWords').innerText.split(' ');
        e.target.value = text[countme];
        countme++;
    }
}

var input = document.querySelector('.txtInput');
input.addEventListener('keydown', isSpace);
