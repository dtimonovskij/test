
$(document).ready(function () {
    $(".header__burger").click(function (event) { // задаем функцию при нажатиии на элемент с классом toggle
        $(".header__burger,.header__menu").toggleClass('active'); //  скрываем, или отображаем все элеменnты
        $("body").toggleClass('lock');
    });
});