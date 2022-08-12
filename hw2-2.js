$(function(){
    var operationMode = 'default';
    var dot = 'OFF';
    var dotCount = 0;
    var firstNumber =0;
    var secondNumber =null; 
    

    //入力した数値を計算する関数を定義
    function calculation(){
        switch (operationMode){
            case '+' :
                firstNumber = firstNumber + secondNumber;
                break;
            case '-' :
                firstNumber = firstNumber - secondNumber;
                break;
            case `*` :
                firstNumber = firstNumber * secondNumber;
                break;
            case `/` :
                firstNumber = firstNumber / secondNumber;
                break;
            default :
                break;
        }
    }

    //数値と設定を初期状態に戻す関数を定義
    function clear(){
        operationMode = 'default';
        dot = 'OFF';
        dotCount = 0;
        secondNumber = null;
    }

    //数字ボタンを押した時の処理
    $('.number').click(function(){
        var selectNumber = $(this).val();
        //元の値の整数部分の設定
        if(dot == 'OFF' && operationMode =='default'){
            if(selectNumber === 100){
                firstNumber = firstNumber * 100;
            }else{
                firstNumber = firstNumber * 10 + selectNumber;
            }
            $('#calc').text(firstNumber);
        //計算値の整数部分の設定
        }else if(dot == 'OFF' && operationMode != 'default'){
            if(selectNumber === 100){
                secondNumber = secondNumber*100;
           }else{
                secondNumber = secondNumber*10+selectNumber;
           }
           $('#calc').text((firstNumber)+(operationMode)+(secondNumber));
        //元の値の小数点以下の部分設定
        }else if(dot == 'ON' && operationMode == 'default'){
            if(selectNumber === 100){
                dotCount = dotCount + 2;
            }else{
                dotCount ++;
                firstNumber = firstNumber  + selectNumber * 10 ** (-1*dotCount); 
            }
            $('#calc').text(firstNumber.toFixed(dotCount));
        //計算値の小数点以下の部分の設定
        }else if(dot == 'ON' && operationMode != 'default'){
            if(selectNumber === 100){
                dotCount = dotCount + 2;
            }else{
                dotCount ++;
                secondNumber = secondNumber  + selectNumber * 10 ** (-1*dotCount);
            }
            $('#calc').text((firstNumber)+(operationMode)+(secondNumber).toFixed(dotCount));
        }
    });

    //ドットボタンが押されたときの処理
    $('.dot').click(function(){
        dot = 'ON';
    })

    //四則演算ボタンを押した時の処理
   $('.operation').click(function(){
        if(secondNumber ==null){
            ;
        }else{
            calculation();   
        }
        clear();
        operationMode = $(this).text();
        $('#calc').text((firstNumber)+(operationMode));  
    });

    //ACボタンを押した時の処理
    $('.clear').click(function(){
        clear();
        firstNumber = 0;
        $('#calc').text(firstNumber);
    });

    //イコールボタンを押した時の処理
    $('.equal').click(function(){
        calculation();
        $('#calc').text(firstNumber);
        if(firstNumber%1>0){
            operationMode = 'default';
            dot = 'ON';
            dotCount = firstNumber.toString().split('.')[1].length;
            secondNumber = null;
        }else{  
        clear();
    }
    });
});

