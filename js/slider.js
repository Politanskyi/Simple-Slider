function sliderApp() {

    const
        sliderBlock = document.querySelector('.slider-app'),
        imgAll = [
            { img: 'https://cdn0.iconfinder.com/data/icons/unigrid-phantom-halloween/60/030_016_mummy_zombi_horror_halloween-128.png', text: 'Slider-Text 1' },
            { img: 'https://cdn0.iconfinder.com/data/icons/unigrid-phantom-halloween/60/030_002_halloween_pumpkin_jack_horror-128.png', text: 'Slider-Text 2' },
            { img: 'https://cdn0.iconfinder.com/data/icons/unigrid-phantom-halloween/60/030_007_spider_danger_halloween_web-128.png', text: 'Slider-Text 3' },
            { img: 'https://cdn0.iconfinder.com/data/icons/unigrid-phantom-halloween/60/030_014_poison_potion_skull_halloween-128.png', text: 'Slider-Text 4' },
            { img: 'https://cdn0.iconfinder.com/data/icons/unigrid-phantom-halloween/60/030_017_cauldron_pot_halloween_witch-128.png', text: 'Slider-Text 5' },
            { img: 'https://cdn0.iconfinder.com/data/icons/unigrid-phantom-halloween/60/030_006_zombie_hand_rebellion_halloween-128.png', text: 'Slider-Text 6' }
        ];

    //создаем элементы слайдера
    const
        mainSlider = document.createElement('div'),
        minSliderItem = document.createElement('div'),
        bigSliderItem = document.createElement('div'),
        textSliderItem = document.createElement('p'),
        allBtn = document.createElement('div'),
        prevBtn = document.createElement('button'),
        nextBtn = document.createElement('button'),
        resetBtn = document.createElement('button'),
        bigImg = document.createElement('img');

    function sliderCreate() {
        //добавляем классы элементам слайдера
        mainSlider.classList.add('slider-body');
        minSliderItem.classList.add('slider-mini-img');
        bigSliderItem.classList.add('align-center', 'slider-big-img');
        textSliderItem.classList.add('align-center', 'slider-text-img');
        allBtn.classList.add('align-center', 'slider-buttons');
        prevBtn.classList.add('button-primary', 'prev');
        nextBtn.classList.add('button-primary', 'next');
        resetBtn.classList.add('button-primary', 'reset');
        bigImg.classList.add('img-12-max');

        //добавляем названия кнопкам
        prevBtn.textContent = 'Prev';
        nextBtn.textContent = 'Next';
        resetBtn.textContent = 'Reset';

        //добавлям все в slider-app
        bigSliderItem.append(bigImg);
        allBtn.append(prevBtn, resetBtn, nextBtn);
        mainSlider.append(minSliderItem, bigSliderItem, textSliderItem, allBtn);
        sliderBlock.append(mainSlider);

        sliderAddImg();
    }
    sliderCreate();

    //наполняем слайдер миниатюрами;
    function sliderAddImg() {
        let altCount = 1;

        imgAll.forEach(function (items) {
            let imgSingle = document.createElement('img');

            imgSingle.setAttribute('src', items.img);
            imgSingle.setAttribute('alt', `slider-img-${altCount}`);
            imgSingle.setAttribute('data-text', items.text);
            imgSingle.classList.add('img-12-min');
            altCount++;
            minSliderItem.append(imgSingle);
        });
    };

    //регестрируем массив с картинками в слайдере
    const appImg = document.querySelectorAll('.img-12-min');

    //добавляем активный класс первому слайду
    function sliderZero() {
        appImg[0].classList.add('active-img');
    };
    sliderZero();

    //проверка слайда и установка большой картинки и текста
    function sliderChecker() {
        appImg.forEach(function (item) {
            if (item.classList.contains('active-img')) {
                let activeSrc = item.getAttribute('src');
                let activeAlt = item.getAttribute('alt');
                let activeData = item.getAttribute('data-text');
                bigImg.setAttribute('src', activeSrc);
                bigImg.setAttribute('alt', activeAlt);
                textSliderItem.innerHTML = activeData;
            }
        });
    };
    sliderChecker();

    //добавляем функционал кнопкам управления слайдера
    prevBtn.addEventListener('click', sliderPrevBtn);
    nextBtn.addEventListener('click', sliderNextBtn);
    resetBtn.addEventListener('click', sliderResetBtn);

    //создаем счетчик индекса для cлайдов
    let activeImg = 0;

    function sliderChanger() {
        appImg.forEach(function (item) {
            if (appImg[activeImg] != item) {
                item.classList.remove('active-img');
            }
            else {
                item.classList.add('active-img');
            }
        });
    };

    function sliderChangerOnImg() {
        appImg.forEach(function (item, index) {
            item.addEventListener('click', function () {
                activeImg = index;
                sliderChanger();
                sliderChecker();
            });
        });
    };
    sliderChangerOnImg();

    function sliderPrevBtn() {
        if (activeImg <= 0) {
            activeImg = appImg.length - 1;
        }
        else {
            activeImg--;
        }
        sliderChanger();
        sliderChecker();
    };

    function sliderNextBtn() {
        if (activeImg >= appImg.length - 1) {
            activeImg = 0;
        }
        else {
            activeImg++;
        }
        sliderChanger();
        sliderChecker();
    };

    function sliderResetBtn() {
        activeImg = 0;
        sliderChanger();
        sliderChecker();
    };
}
sliderApp();