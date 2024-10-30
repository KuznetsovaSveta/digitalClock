window.addEventListener('load', () => {
    function formatNumber(num) {
        return num < 10 ? '0' + num : num;
    }

    function updateClock() {
        const currentDate = new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        document.querySelector('.clock__date-num').textContent = formatNumber(currentDate.getDate()) + '.';
        document.querySelector('.clock__date-month').textContent = formatNumber(currentDate.getMonth() + 1) + '.';
        document.querySelector('.clock__date-year').textContent = currentDate.getFullYear();
        document.querySelector('.clock__date-day').textContent = days[currentDate.getDay()];

        document.querySelector('.clock__item-hours').textContent = formatNumber(currentDate.getHours());
        document.querySelector('.clock__item-minutes').textContent = formatNumber(currentDate.getMinutes());
        document.querySelector('.clock__item-seconds').textContent = formatNumber(currentDate.getSeconds());

        setTimeout(updateClock, 1000); // Update every second
    }
    updateClock();

    const menuBtn = document.querySelector('.menu__btn');
    const menuWrapper = document.querySelector('.menu__wrapper');
    const menuInputs = document.querySelectorAll('.menu__input');
    const clock = document.querySelector('.clock');
    const clockItems = document.querySelectorAll('.clock__item');
    const inputTextColor = document.querySelector('#textColor');
    const inputBackgroundColor = document.querySelector('#backgroundColor');
    const inputBlocksColor = document.querySelector('#blocksColor');
    const quote = document.querySelector('#quote');
    const editText = document.querySelector('#textContent');

    // Load colors from localStorage
    const colors = {
        textColor: localStorage.getItem('textColor'),
        bgColor: localStorage.getItem('backgroundColor'),
        blocksColor: localStorage.getItem('blocksColor'),
    };
    const textContentLocal = localStorage.getItem('textContent');

    if (colors.textColor) {
        clock.style.color = colors.textColor;
        menuInputs.forEach(input => {
            input.style.borderColor = colors.textColor;
            input.style.color = colors.textColor;
        });
        inputTextColor.value = colors.textColor;
    }
    if (colors.bgColor) {
        clock.style.background = colors.bgColor;
        menuWrapper.style.borderColor = colors.bgColor;
        inputBackgroundColor.value = colors.bgColor;
    }
    if (colors.blocksColor) {
        menuWrapper.style.background = colors.blocksColor;
        clockItems.forEach(item => item.style.background = colors.blocksColor);
        inputBlocksColor.value = colors.blocksColor;
    }
    if (textContentLocal) {
        editText.value = textContentLocal;
        quote.textContent = textContentLocal;
    }

    menuBtn.addEventListener('click', () => {
        menuWrapper.classList.toggle('active');
    });
    document.addEventListener('mousedown', (e) => {
        if (!menuWrapper.contains(e.target) && !menuBtn.contains(e.target)) {
            menuWrapper.classList.remove('active');
        }
    })

    function updateColor(input, styleProperty, elements) {
        const colorValue = input.value;
        if(input != inputBlocksColor) clock.style[styleProperty] = colorValue;
        if(input == inputTextColor){
            menuInputs.forEach(menuInput => menuInput.style.borderColor = colorValue);
        }
        if (elements) {
            elements.forEach(element => element.style[styleProperty] = colorValue);
            console.log(elements)
        }
        input.style[styleProperty] = colorValue;
        localStorage.setItem(input.id, colorValue);
    }

    inputTextColor.addEventListener('input', () => {
        updateColor(inputTextColor, 'color', menuInputs);
    });

    inputBackgroundColor.addEventListener('input', () => {
        updateColor(inputBackgroundColor, 'background', [menuWrapper]);
    });

    inputBlocksColor.addEventListener('input', () => {
        updateColor(inputBlocksColor, 'background', clockItems);
    });

    editText.addEventListener('input', () => {
        quote.textContent = editText.value;
        localStorage.setItem('textContent', editText.value);
    });
});
