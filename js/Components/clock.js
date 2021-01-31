function clock(selector) {
    const DOM = document.querySelector(selector);
    
    let number = parseInt(DOM.innerText);

    const timer = setInterval(function () {
        console.log('tick tock...', number--);
        DOM.innerText = number--;
        if (number < 0) {   // kai pasiekia skaiciu 0, tai skaiciuoja is naujo
            DOM.innerText = 'FINITO';
            clearInterval(timer); // sustabdo funkcijos pasikartijima. (timer) -> kokios funkcijos
        }
    }, 1000);
}



export {clock};