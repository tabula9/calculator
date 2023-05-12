let result = document.getElementById('result');
let number;
let symbol = document.getElementById('symbol');

let plus = 0;
let finish =0;
let fourOperation =0;

let minus =0;
let time =1;
let division =1;
let syousuu =0;

function eventA(td) {
  if (result.innerHTML == '0') {
    number = td.innerHTML;
    result.innerHTML = number;
    fourOperation =0;
  } else if (syousuu == 1) {
    number = td.innerHTML;
    result.innerHTML = result.innerHTML + number;
    syousuu =0;
    fourOperation =0;
    finish = 0;
  } else if (fourOperation == 1) {//四則演算の処理をした後に、計算結果が消えずに残ってしまうことへの対処
    number = td.innerHTML;  
    result.innerHTML = number;
    fourOperation =0;
    finish =0;
  } else if (finish == 1) {//イコールを押した後の計算結果に、数字が続いてしまうことへの対処
    number = td.innerHTML;  
    result.innerHTML = number;
    finish =0;
  } else {
    number =td.innerHTML;
    result.innerHTML = result.innerHTML + number;
  }
}

function eventB() {
  if (result.innerHTML == '0') {
    result.innerHTML = 0;
  } else if (fourOperation == 1) {
    result.innerHTML =0;
    fourOperation =0;
  } else if (finish == 1) {
    result.innerHTML =0;  
    finish =0;
  } else {
    result.innerHTML = result.innerHTML + '00';
  }
}

function eventC() {
  if (result.innerHTML == '0.') {
    result.innerHTML = '0.';
  } else if (syousuu == 1) {
    result.innerHTML = result.innerHTML;
  } else if (Number(result.innerHTML)%1 == 0) {
    result.innerHTML =result.innerHTML + '.';  
    syousuu =1;
  } else if (fourOperation == 1) {
    result.innerHTML ='0.';
    syousuu =1;
  } else if (finish == 1) {
    result.innerHTML ='0.';  
    syousuu =1;
  } else {
    result.innerHTML = result.innerHTML;
  }
}

function eventD() {//足し算
  if (fourOperation == 1) {
    plus =result.innerHTML;
    symbol.innerHTML = '+';
    syousuu =0;
  } else if (symbol.innerHTML == '-') {
    result.innerHTML = Number(minus) - Number(result.innerHTML);
    plus = result.innerHTML;
    symbol.innerHTML = '+';
    fourOperation = 1;
    syousuu =0;
  } else if (symbol.innerHTML == 'x') {
    result.innerHTML = Number(result.innerHTML) * Number(time);
    plus = result.innerHTML;
    symbol.innerHTML = '+';
    fourOperation = 1;
    syousuu =0;
  } else if (symbol.innerHTML == '÷') {
    result.innerHTML = Number(division) / Number(result.innerHTML);
    plus = result.innerHTML;
    symbol.innerHTML = '+';
    fourOperation = 1;
    syousuu =0;
  } else {
    result.innerHTML = Number(result.innerHTML) + Number(plus);
    plus = result.innerHTML;
    symbol.innerHTML = '+';
    fourOperation = 1;
    syousuu =0;
  }
}

function eventE() {//ひき算
  if (fourOperation == 1) {
    minus = result.innerHTML;
    symbol.innerHTML = '-';
    syousuu =0;
  } else if (symbol.innerHTML == '+') {
    result.innerHTML = Number(result.innerHTML) + Number(plus);
    minus =result.innerHTML;
    symbol.innerHTML = '-';
    fourOperation = 1;
    syousuu =0;
  } else if (symbol.innerHTML == '') {//初期状態限定での処理
    minus = result.innerHTML;
    symbol.innerHTML = '-';
    fourOperation =1;
    syousuu =0;
  } else if (symbol.innerHTML == 'x') {
    result.innerHTML = Number(result.innerHTML) * Number(time);
    minus = result.innerHTML;
    symbol.innerHTML = '-';
    fourOperation = 1;
    syousuu =0;
  } else if (symbol.innerHTML == '÷') {
    result.innerHTML = Number(division) / Number(result.innerHTML);
    minus = result.innerHTML;
    symbol.innerHTML = '-';
    fourOperation = 1;
    syousuu =0;
  } else {
    result.innerHTML = Number(minus) - Number(result.innerHTML);
    minus = result.innerHTML;
    symbol.innerHTML = '-';
    fourOperation = 1;
    syousuu =0;
  }
}

function eventF() {//掛け算
  if (fourOperation == 1) {
    time =result.innerHTML;
    symbol.innerHTML = 'x';
    syousuu =0;
  } else if (symbol.innerHTML == '-') {
    result.innerHTML = Number(minus) - Number(result.innerHTML);
    time = result.innerHTML;
    symbol.innerHTML = 'x';
    fourOperation = 1;
    syousuu =0;
  } else if (symbol.innerHTML == '+') {
    result.innerHTML = Number(result.innerHTML) + Number(plus);
    time =result.innerHTML;
    symbol.innerHTML = 'x';
    fourOperation = 1;
    syousuu =0;
  } else if (symbol.innerHTML == '÷') {
    result.innerHTML = Number(division) / Number(result.innerHTML);
    time = result.innerHTML;
    symbol.innerHTML = 'x';
    fourOperation = 1;
    syousuu =0;
  } else {
    result.innerHTML = Number(result.innerHTML) * Number(time);
    time = result.innerHTML;
    symbol.innerHTML = 'x';
    fourOperation = 1;
    syousuu =0;
  }
}

function eventG() {//割り算
  if (fourOperation == 1) {
    division =result.innerHTML;
    symbol.innerHTML = '÷';
    syousuu =0;
  } else if (symbol.innerHTML == '-') {
    result.innerHTML = Number(minus) - Number(result.innerHTML);
    division = result.innerHTML;
    symbol.innerHTML = '÷';
    fourOperation = 1;
    syousuu =0;
  } else if (symbol.innerHTML == '+') {
    result.innerHTML = Number(result.innerHTML) + Number(plus);
    division =result.innerHTML;
    symbol.innerHTML = '÷';
    fourOperation = 1;
    syousuu =0;
  } else if (symbol.innerHTML == '') {//初期状態限定での処理
    division = result.innerHTML;
    symbol.innerHTML = '÷';
    fourOperation =1;
    syousuu =0;
  } else if (symbol.innerHTML == 'x') {
    result.innerHTML = Number(result.innerHTML) * Number(time);
    division = result.innerHTML;
    symbol.innerHTML = '÷';
    fourOperation = 1;
    syousuu =0;
  } else {
    result.innerHTML = Number(division) / Number(result.innerHTML);
    division = result.innerHTML;
    symbol.innerHTML = '÷';
    fourOperation = 1;
    syousuu =0;
  }
}

function eventQ() {
  if (fourOperation == 1){//四則演算の記号を押した後にイコールを押すと、結果がおかしくなることへの対処
    plus =0;
    symbol.innerHTML ='';
    finish = 1;
    fourOperation =0;
    minus =0;
    time =1;
    division =1;
    syousuu =0;
  } else if (symbol.innerHTML == '+') {
    result.innerHTML = Number(result.innerHTML) + Number(plus);
    plus =0;
    symbol.innerHTML ='';
    finish = 1;
    minus =0;
    time =1;
    division =1;
    syousuu =0;
  } else if (symbol.innerHTML == '-') {
    result.innerHTML = Number(minus) - Number(result.innerHTML);
    plus =0;
    symbol.innerHTML ='';
    finish = 1;
    minus =0;
    time =1;
    division =1;
    syousuu =0;
  } else if (symbol.innerHTML == 'x') {
    result.innerHTML = Number(result.innerHTML) * Number(time);
    plus =0;
    symbol.innerHTML ='';
    finish =1;
    minus =0;
    time =1;
    division =1;
    syousuu =0;
  } else if (symbol.innerHTML == '÷') {
    result.innerHTML = Number(division) / Number(result.innerHTML);
    plus =0;
    symbol.innerHTML ='';
    finish =1;
    minus =0;
    time =1;
    division =1;
    syousuu =0;
  } else {
    finish =1;
    syousuu =0;
  }
}

function eventZ() {
  result.innerHTML = 0;
  plus =0;
  symbol.innerHTML = '';
  fourOperation =0;
  finish =0;
  minus =0;
  time =1;
  division =1;
  syousuu =0;
}



$(document).ready(function(){
  $("td").click(function() {
    $("td").removeClass("click");
    $(this).addClass("click");
  });
});