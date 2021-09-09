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
            balloonContentHeader: '<a href = "http://finstroy.tilda.ws/object" target="_blank">г. Самара, пос. Мехзавод, Квартал 1, Дом 33</a><br>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<br><a href = "http://finstroy.tilda.ws/object" target="_blank"><u>Смотреть подробнее</u></a>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: 'ЖК «Новая Самара»',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Дом 33'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3661-3365-4466-b332-383331646438/ns_op_oapng.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }));
}
