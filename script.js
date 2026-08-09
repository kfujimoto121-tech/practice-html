//htmlからボタンと箱の要素を取得する
const button = document.getElementById("colorButton");
const text = document.getElementById("myText");

//現在の文字の状態を記憶しておくフラグ変数(boolean)をつくる
let isVisible = true; //最初は表示されているのでtrue

//ボタンをクリックしたときの処理
button.addEventListener("click", function(){
    if(isVisible === false){
        text.style.display = "block";
        
        isVisible = true; //文字を表示にする

        button.textContent = "文字を非表示にする";
    }else{
        text.style.display = "none";
        isVisible = false; //文字を非表示にする
        button.textContent = "文字を表示する";
    }
});
