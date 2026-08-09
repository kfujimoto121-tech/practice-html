//htmlからボタンと箱の要素を取得する
const button = document.getElementById("colorButton");
const text = document.getElementById("myText");

//外部からデータをロードする非同期関数の定義
async function fetchUserData(){
    text.textContent = "データをロード中です...";
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const userData = await response.json();
        text.textContent = "取得した名前:" + userData.name;
    }catch(error){
        text.textContent = "データの取得に失敗しました。";
    }
}

//ボタンをクリックしたときの処理
button.addEventListener("click", function(){
    fetchUserData();
});
