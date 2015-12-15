$(function(){
    $.getJSON(
        'http://api.openweathermap.org/data/2.5/forecast/daily?q=' 
        + 'Lviv' + '&APPID=85dd9ac97b8b9d0cbc5f814a5b96ffa6&cnt=3&units=metric' + '&lang=' + 'ua' + '&callback=?',
        function (data) {
            $('#todayTemp').html(tempNumToStr(data.list[0].temp.day));
            $('#tomorrowTemp').html(tempNumToStr(data.list[1].temp.day));
            $('#afterTomorrowTemp').html(tempNumToStr(data.list[2].temp.day));
            $('#todayPressure').html(data.list[0].pressure);
            $('#tomorrowPressure').html(data.list[1].pressure);
            $('#afterTomorrowPressure').html(data.list[2].pressure);
        }
    );
    function tempNumToStr(temp) {
       return (temp > 0)? 'Тепло' : 'Холодно';
    }
});
