$(function(){

    var commaSeconds = $('.comma-seconds').val();
    var seconds = $('.seconds').val();
    var seconds10 = $('.seconds10').val();
    var minutes = $('.minutes').val();
    var timerLoop;

    //計測時間をカウントする関数を定義
    function timeCount(){
        
        timerLoop= setInterval(function(){
        commaSeconds++;

        if(commaSeconds>=10){
            seconds++;
            commaSeconds = 0;
        }
        if(seconds>=10){
            seconds10++;
            seconds = 0;
        }

        if(seconds10>=6){
            minutes++;
            seconds10 = 0;
        }

        $('.comma-seconds').text(commaSeconds);
        $('.seconds').text(seconds);
        $('.seconds10').text(seconds10);
        $('.minutes').text(minutes);
        },100);
    }
    //計測を停止する関数を定義
    function stopTimer(){
        clearInterval(timerLoop);
    }

    //計測時間をリセットする関数を定義
    function reset(){
        commaSeconds=seconds=seconds10=minutes=0;
        $('.comma-seconds').text(commaSeconds);
        $('.seconds').text(seconds);
        $('.seconds10').text(seconds10);
        $('.minutes').text(minutes);
    }

    //スタートボタンを押したときの処理
    $('#start').click(function(){
        $(this).css({'opacity':'0.5','pointer-events':'none'});
        $('#stop').css({'opacity':'1','pointer-events':'auto'});
        $('#reset').css({'opacity':'1','pointer-events':'auto'});
        timeCount();
    });

    //ストップボタンを押した時の処理
    $('#stop').click(function(){
        $('#start').css({'opacity':'1','pointer-events':'auto'});
        $(this).css({'opacity':'0.5','pointer-events':'none'});
        stopTimer();
    });

    //リセットボタンを押した時の処理
    $('#reset').click(function(){
        $('#start').css({'opacity':'1','pointer-events':'auto'});
        $('#stop').css({'opacity':'0.5','pointer-events':'none'});
        $(this).css({'opacity':'0.5','pointer-events':'none'});
        reset();
        stopTimer();
    });
});