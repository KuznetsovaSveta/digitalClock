window.addEventListener('load', () => {
    function calculateTime() {
        let currentDate = new Date();
        let year = currentDate.getFullYear();
        let month = currentDate.getMonth() + 1;
        let day = currentDate.getDay();
        let num = currentDate.getDate();
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        let seconds = currentDate.getSeconds();
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        document.querySelector('.clock__date-num').innerHTML = num < 10 ? '0' + num + '.' : num + '.';
        document.querySelector('.clock__date-month').innerHTML = month < 10 ? '0' + month + '.' : month + '.';
        document.querySelector('.clock__date-year').innerHTML = year;
        document.querySelector('.clock__date-day').innerHTML = days[day];

        document.querySelector('.clock__item-hours').innerHTML = hours < 10 ? '0' + hours : hours;
        document.querySelector('.clock__item-minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;
        document.querySelector('.clock__item-seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;

        setTimeout(calculateTime, 1000);
    }
    calculateTime()

    let menuBtn = document.querySelector('.menu__btn');
    let menuWrapper = document.querySelector('.menu__wrapper');
    let menuInputs = document.querySelectorAll('.menu__input');
    let clock = document.querySelector('.clock');
    let clockItems = document.querySelectorAll('.clock__item');
    let inputTextColor = document.querySelector('#textColor');
    let inputBackgroundColor = document.querySelector('#backgroundColor');
    let inputBlocksColor = document.querySelector('#blocksColor');

    //работа с localsorage
    let localTextColor = localStorage.getItem('textColor');
    let localBgColor = localStorage.getItem('bgColor');
    let localBlocksColor = localStorage.getItem('blocksColor');
    if(localTextColor){
        clock.style.color = localTextColor;
        menuInputs.forEach((menuInput) => {
            menuInput.style.borderColor = localTextColor;
        })
    }
    if(localBgColor){
        clock.style.background = localBgColor;
        menuWrapper.style.borderColor = localBgColor;
    }
    if(localBlocksColor){
        menuWrapper.style.background = localBlocksColor;
        clockItems.forEach((clockItem) => {
            clockItem.style.background = localBlocksColor;
        })
    }


    menuBtn.addEventListener('click', () => {
        menuWrapper.classList.toggle('active')
    });

    inputTextColor.addEventListener('input', () => {
        clock.style.color = inputTextColor.value;
        menuInputs.forEach((menuInput) => {
            menuInput.style.borderColor = inputTextColor.value;
        })
        localStorage.setItem('textColor', inputTextColor.value);
    });

    inputBackgroundColor.addEventListener('input', () => {
        clock.style.background = inputBackgroundColor.value;
        menuWrapper.style.borderColor = inputBackgroundColor.value;
        localStorage.setItem('bgColor', inputBackgroundColor.value);
    });

    inputBlocksColor.addEventListener('input', () => {
        menuWrapper.style.background = inputBlocksColor.value;
        clockItems.forEach((clockItem) => {
            clockItem.style.background = inputBlocksColor.value;
        })
        localStorage.setItem('blocksColor', inputBlocksColor.value);
    });
});

