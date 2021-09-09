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
        .add(myPolygon)
        .add(new ymaps.Placemark([53.30704688152192,50.28914832598631], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "http://finstroy.tilda.ws/object" target="_blank">Офис отдела продаж и аренды<br>ЖК "Новая Самара"</a><br>' +
            '<span class="description">ООО "СЗ "ФИНСТРОЙ"<br><br><i>Режим работы:</i><br>пн-пт с 09 до 19<br>сб-вс с 09 до 15<br><br><i>Адрес:</i><br><a href="https://yandex.ru/maps/51/samara/?ll=50.289406%2C53.307253&mode=poi&poi%5Bpoint%5D=50.289373%2C53.307363&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D2999599358&z=21">г. Самара, Красноглинский р-н, <br>поселок Мехзавод 1- й квартал, д. 40</a></span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="https://static.tildacdn.com/tild3131-3535-4731-b633-653238653735/office.jpg" height="150" width="300" title="Новая Самара" alt="ЖК Новая Самара"> <br/> ' +           
            '<b><a href = "#popup:zvonok" target="_blank" style="font-size: 14px">➥ <u>Заказать обратный звонок</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Офис продаж ЖК "Новая Самара"'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3661-3365-4466-b332-383331646438/ns_op_oapng.png',
                // Размеры метки.
                iconImageSize: [40, 40],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
;
}
