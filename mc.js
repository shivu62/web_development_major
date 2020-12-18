var sum = 0;
var price1 = parseInt(document.querySelector('#price1').textContent);
var price2 = parseInt(document.querySelector('#price2').textContent);
var price3 = parseInt(document.querySelector('#price3').textContent);

var price4 = parseInt(document.querySelector('#price4').textContent);
var price5 = parseInt(document.querySelector('#price5').textContent);
var btn1= document.querySelector('#bt1');
var btn2 = document.querySelector('#bt2');
var btn3 = document.querySelector('#bt3');
var btn4= document.querySelector('#bt4');
var btn5 = document.querySelector('#bt5');

btn1.onclick = function(){
	sum+=price1;
	document.querySelector('#cart').textContent = sum;
}
btn2.onclick = function(){
	sum+=price2;
	document.querySelector('#cart').textContent = sum;
}
btn3.onclick = function(){
	sum+=price3;
	document.querySelector('#cart').textContent = sum;
}
btn4.onclick = function(){
	sum+=price4;
	document.querySelector('#cart').textContent = sum;
}	
btn5.onclick = function(){
	sum+=price5;
	document.querySelector('#cart').textContent = sum;
}