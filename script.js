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

        document.querySelector('.clock__date-num').innerHTML = num + '.';
        document.querySelector('.clock__date-month').innerHTML = month + '.';
        document.querySelector('.clock__date-year').innerHTML = year;
        document.querySelector('.clock__date-day').innerHTML = days[day];

        document.querySelector('.clock__item-hours').innerHTML = hours;
        document.querySelector('.clock__item-minutes').innerHTML = minutes;
        document.querySelector('.clock__item-seconds').innerHTML = seconds;

        setTimeout(calculateTime, 100);
    }
    calculateTime()

    let menuBtn = document.querySelector('.menu__btn');
    let menuWrapper = document.querySelector('.menu__wrapper');

    menuBtn.addEventListener('click', () => {
        menuWrapper.classList.toggle('active')
    })

    let clock = document.querySelector('.clock');
    let clockItems = document.querySelectorAll('.clock__item');
    let inputTextColor = document.querySelector('#textColor');
    let inputBackgroundColor = document.querySelector('#backgroundColor');
    let inputBlocksColor = document.querySelector('#blocksColor');


    inputTextColor.addEventListener('input', () => {
        clock.style.color = inputTextColor.value;
    });
    inputBackgroundColor.addEventListener('input', () => {
        clock.style.background = inputBackgroundColor.value;
        menuWrapper.style.borderColor = inputBackgroundColor.value;
    });
    inputBlocksColor.addEventListener('input', () => {
        menuWrapper.style.background = inputBlocksColor.value;
        clockItems.forEach((clockItem) => {
            clockItem.style.background = inputBlocksColor.value;
        })
    });
});

