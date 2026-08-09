//htmlからボタンと箱の要素を取得する
const button = document.getElementById("colorButton");
const box = document.getElementById("myBox");

//現在の箱の状態を記憶しておくフラグ変数(boolean)をつくる
let isTomato = false; //最初はトマト色ではないのでfalse

//ボタンをクリックしたときの処理
button.addEventListener("click", function(){
    if(isTomato === false){
        box.style.backgroundColor = "tomato";
        isTomato = true; //箱の色をトマト色にする
    }else{
        box.style.backgroundColor = "lightblue";
        isTomato = false; //箱の色をライトブルーにする
    }
});
