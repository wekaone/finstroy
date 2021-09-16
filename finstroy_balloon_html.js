ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
            center: [53.30721192564775,50.28714746557643],
            zoom: 16,
            behaviors: ["drag", "dblClickZoom", "rightMouseButtonMagnifier", "multiTouch"]
        }, {
            searchControlProvider: 'yandex#search'
        });
    myMap.geoObjects
        .add(new ymaps.Placemark([53.31005907115121,50.28758199999998], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "/h33" target="_blank">пос. Мехзавод, Квартал 1, Дом 33</a><br>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<br><a href = "/h33" target="_blank"><u>Смотреть подробнее</u></a>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '<br>ЖК «Новая Самара»',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Дом 33'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3331-6533-4632-a432-666666386136/map_icon.png',
                // Размеры метки.
                iconImageSize: [45, 45],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-20, -20],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.309429571120624,50.2854259999999], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "/h33" target="_blank">пос. Мехзавод, Квартал 1, Дом 34</a><br>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<br><a href = "/h34" target="_blank"><u>Смотреть подробнее</u></a>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '<br>ЖК «Новая Самара»',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Дом 34'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3331-6533-4632-a432-666666386136/map_icon.png',
                // Размеры метки.
                iconImageSize: [45, 45],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-20, -20],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))            
        .add(new ymaps.Placemark([53.309537071149855,50.286827499999966], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "/h35" target="_blank">пос. Мехзавод, Квартал 1, Дом 35</a><br>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<br><a href = "/h35" target="_blank"><u>Смотреть подробнее</u></a>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '<br>ЖК «Новая Самара»',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Дом 35'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3331-6533-4632-a432-666666386136/map_icon.png',
                // Размеры метки.
                iconImageSize: [45, 45],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-20, -20],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))            
        .add(new ymaps.Placemark([53.310285071151775,50.285434999999914], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "/h36" target="_blank">пос. Мехзавод, Квартал 1, Дом 36</a><br>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<br><a href = "/h36" target="_blank"><u>Смотреть подробнее</u></a>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '<br>ЖК «Новая Самара»',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Дом 36'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3331-6533-4632-a432-666666386136/map_icon.png',
                // Размеры метки.
                iconImageSize: [45, 45],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-20, -20],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))                  
        .add(new ymaps.Placemark([53.30883807114804,50.28758199999998], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "/h37" target="_blank">пос. Мехзавод, Квартал 1, Дом 37</a><br>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<br><a href = "/h37" target="_blank"><u>Смотреть подробнее</u></a>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '<br>ЖК «Новая Самара»',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Дом 37'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3331-6533-4632-a432-666666386136/map_icon.png',
                // Размеры метки.
                iconImageSize: [45, 45],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-20, -20],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))             
        .add(new ymaps.Placemark([53.308789571119,50.28896549999992], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "/h38" target="_blank">пос. Мехзавод, Квартал 1, Дом 38</a><br>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<br><a href = "/h38" target="_blank"><u>Смотреть подробнее</u></a>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '<br>ЖК «Новая Самара»',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Дом 38'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3331-6533-4632-a432-666666386136/map_icon.png',
                // Размеры метки.
                iconImageSize: [45, 45],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-20, -20],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))  
        .add(new ymaps.Placemark([53.308240571117594,50.28636899999999], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "/h39" target="_blank">пос. Мехзавод, Квартал 1, Дом 39</a><br>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<br><a href = "/h39" target="_blank"><u>Смотреть подробнее</u></a>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '<br>ЖК «Новая Самара»',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Дом 39'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3331-6533-4632-a432-666666386136/map_icon.png',
                // Размеры метки.
                iconImageSize: [45, 45],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-20, -20],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            })) 
        .add(new ymaps.Placemark([53.30721307114389,50.28923449999999], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "/h40" target="_blank">пос. Мехзавод, Квартал 1, Дом 40</a><br>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<br><a href = "/h40" target="_blank"><u>Смотреть подробнее</u></a>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '<br>ЖК «Новая Самара»',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Дом 40'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3331-6533-4632-a432-666666386136/map_icon.png',
                // Размеры метки.
                iconImageSize: [45, 45],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-20, -20],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.30733707114419,50.28610849999995], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "/h53" target="_blank">пос. Мехзавод, Квартал 1, Дом 53</a><br>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<br><a href = "/h53" target="_blank"><u>Смотреть подробнее</u></a>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '<br>ЖК «Новая Самара»',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Дом 53'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3331-6533-4632-a432-666666386136/map_icon.png',
                // Размеры метки.
                iconImageSize: [45, 45],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-20, -20],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.19888807121248,50.14558500000001], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "/h24" target="_blank">улица Дачная, Дом 24</a><br>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<br><a href = "/h24" target="_blank"><u>Смотреть подробнее</u></a>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '<br>ЖК «Дачная»',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Дом 24'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3331-6533-4632-a432-666666386136/map_icon.png',
                // Размеры метки.
                iconImageSize: [45, 45],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-20, -20],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }));
}
