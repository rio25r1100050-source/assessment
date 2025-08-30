
let variableprice =1000;//所持金
let date = 1;//何日目
let random = 100;
let random2 = 100;//売買価格
let kk =100;
let get =0;
let kk2 =100;
let get2 =0;//株保有数
let all =0;//ALL設定
geta =0;
geta2 =0;


     function datebotton() {
    // １日を終えるボタンがクリックされたときに実行する処理
    date =date +1;//次の日にする
    day.innerHTML =date + '日目'
    random = Math.floor( Math.random() * 11 * 100); 
    random2 = Math.floor( Math.random() * 11 * 100);//株価をランダムで変更
    if (random <= 90){
      random = 90;
    }
    if (random2 <= 90){
      random2 = 90;
    }
        kk.innerHTML ='株価' +random + '円';
        kk2.innerHTML ='株価' +random2 + '円';
      }

 
let money, btnAdd;
let  btnAddb;
 
function addCount(){ //買うボタンが押された時
  if (random <= variableprice){
    if (all < 1){
       // 株を一つかう
    get++;
    variableprice = variableprice - random;
    money.innerHTML = '所持金:' + variableprice + '円';
    geta.innerHTML ='保有数:' + get + '株';
    }else{
      // 株をかえるまで買う
       get =get + Math.floor(variableprice / random);
          if (get > 999999999999) {
      get = 999999999999;
       variableprice = variableprice - random * 999999999999;
      }else {
          variableprice = variableprice - random * Math.floor(variableprice / random);
      }
       geta.innerHTML ='保有数:' + get + '株';
      money.innerHTML = '所持金:' + variableprice + '円';
    }
    }
  }
function addCount2(){ //売るボタンが押された時
  if (get > 0){
    if (all < 1){
      //株を一つ売る
    variableprice = variableprice + random;
    money.innerHTML = '所持金:' + variableprice + '円';
    get--;
     geta.innerHTML ='保有数:' + get + '株';
    }else{
      variableprice = variableprice + random * get;
      if (variableprice > 999999999999999) {
      variableprice = 999999999999999;
      }
      money.innerHTML = '所持金:' + variableprice + '円';
      get = 0;
      geta.innerHTML ='保有数:' + get + '株';
    }

  }
}
function addCountall(){ //ALLボタンが押されている時
  if (all < 1){
  all =1;
  }else{
  all =0;
  }
}
function addCountb(){ //買うボタンが押された時
  if (random2 <= variableprice){
    if (all < 1){
       // 株を一つかう
    variableprice = variableprice - random2;
    money.innerHTML = '所持金:' + variableprice + '円';
    get2++;
    geta2.innerHTML ='保有数:' + get2 + '株';
    }else{
      get2 =get2 + Math.floor(variableprice / random2);
      if (get2 > 999999999999) {
      get2 = 999999999999;
       variableprice = variableprice - random2 * 999999999999;
      }else {
     variableprice = variableprice - random2 * Math.floor(variableprice / random2);
      }
      
        money.innerHTML = '所持金:' + variableprice + '円';
      geta2.innerHTML ='保有数:' + get2 + '株';
    }
  }
}
function addCount2b(){ //売るボタンが押された時
  if (get2 > 0){
    if (all < 1){
      //株を一つ売る
    variableprice = variableprice + random2;
    money.innerHTML = '所持金:' + variableprice + '円';
    get2--;
     geta2.innerHTML ='保有数:' + get2 + '株';
    }else{
      variableprice = variableprice + random2 * get2;
      if (variableprice > 999999999999999) {
      variableprice = 999999999999999;
      }
      money.innerHTML = '所持金:' + variableprice + '円';
      get2 = 0;
      geta2.innerHTML ='保有数:' + get2 + '株';
  
    }

  }
}
window.addEventListener("load", ()=>{
    // 起動時の処理
     day.innerHTML =date + '日目'
    day = document.getElementById("day");
    money = document.getElementById("money");
    kk = document.getElementById("kk");
    kk2 = document.getElementById("kk2");
    geta = document.getElementById("get");
    geta2 = document.getElementById("get2");
    btnAdd = document.getElementById("btnAdd");
    btnAdd2 = document.getElementById("btnAdd2");
    btnAddb = document.getElementById("btnAddb");
    btnAdd2b = document.getElementById("btnAdd2b");
    btnAddall = document.getElementById("btnAddall");
    btnAdd2.addEventListener("click", addCount);
    btnAdd.addEventListener("click", addCount2);
    btnAdd2b.addEventListener("click", addCountb);
    btnAddb.addEventListener("click", addCount2b);
    btnAddall.addEventListener("click", addCountall);
    kk.innerHTML ='株価' + 100 + '円';
    kk2.innerHTML ='株価' + 100 + '円';
        
});
