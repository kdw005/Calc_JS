
var operation;
var num0;
function onload(){
	
}

function changePosition(obj){
	
	
}
function btn1Click(){
	var num= document.getElementById('tb1').value;
	if(num=='0'){
		num ='1'
	}else{
		num +='1'
	}
	document.getElementById('tb1').value = num;
}
function btn2Click(){
	var num= document.getElementById('tb1').value;
	if(num=='0'){
		num ='2'
	}else{
		num +='2'
	}
	document.getElementById('tb1').value = num;
}
function btn3Click(){
	var num= document.getElementById('tb1').value;
	if(num=='0'){
		num ='3'
	}else{
		num +='3'
	}
	document.getElementById('tb1').value = num;
}
function btn4Click(){
	var num= document.getElementById('tb1').value;
	if(num=='0'){
		num ='4'
	}else{
		num +='4'
	}
	document.getElementById('tb1').value = num;
}
function btn5Click(){
	var num= document.getElementById('tb1').value;
	if(num=='0'){
		num ='5'
	}else{
		num +='5'
	}
	document.getElementById('tb1').value = num;
}
function btn6Click(){
	var num= document.getElementById('tb1').value;
	if(num=='0'){
		num ='6'
	}else{
		num +='6'
	}
	document.getElementById('tb1').value = num;
}
function btn7Click(){
	var num= document.getElementById('tb1').value;
	if(num=='0'){
		num ='7'
	}else{
		num +='7'
	}
	document.getElementById('tb1').value = num;
}
function btn8Click(){
	var num= document.getElementById('tb1').value;
	if(num=='0'){
		num ='8'
	}else{
		num +='8'
	}
	document.getElementById('tb1').value = num;
}
function btn9Click(){
	var num= document.getElementById('tb1').value;
	if(num=='0'){
		num ='9';
	}else{
		num +='9';
	}
	document.getElementById('tb1').value = num;
}
function btn0Click(){
	var num= document.getElementById('tb1').value;
	if(num=='0'){
		num ='0'
	}else{
		num +='0'
	}
	document.getElementById('tb1').value = num;
}
//controle de funções dos botões de operação
function btndivClick(){
	num0 = document.getElementById('tb1').value;
	operation = '/';
	document.getElementById('tb1').value = '0';
	
}function btnMultClick(){
	num0 = document.getElementById('tb1').value;
	operation = '*';
	document.getElementById('tb1').value = '0';
}

function btnMinusClick(){
	num0 = document.getElementById('tb1').value;
	operation = '-';
	document.getElementById('tb1').value = '0';
}
function btnPlusClick(){
	num0 = document.getElementById('tb1').value;
	operation = '+';
	document.getElementById('tb1').value = '0';
}

function btnEqualsClick(){
		var num2 = document.getElementById('tb1').value;
		var result;
		switch(operation){
			case '/':
				if(num2 !=0){
					result = num0 / num2;
					document.getElementById('tb1').value = result;
					
				}else{
					alert('Não pode dividir um valor por zero');
				}
				break;
			case '*':
				document.getElementById('tb1').value = (num0 * num2);
				break;
			case '-':
				document.getElementById('tb').value = num0 - num2;
				break;
			case '+':
				document.getElementById('tb1').value = num0 + num2;
			default:
				break;
		}
}
function btnCEClick(){
	document.getElementById('tb1').value = 0;
	

}
function btnCClick(){
	document.getElementById('tb1').value = 0;
	num0 = 0;
	
}
function btnBackspaceClick(){
	var num = document.getElementById('tb1').value.toString();
	if(num > 0){
		
		
		var num4 =  num.length;
		var num3 = num.substring(0,num4 -1);
		num4 -= 1;
		document.getElementById('tb1').value = num3;
	}else if(num.length <1){
		document.getElementById('tb1').value = 0;
	}
	
}
function btnSQClick(){
	var num = document.getElementById('tb1').value;
	if(num>=0){
		var numsqrt = Math.sqrt(num);
		document.getElementById('tb1').value = numsqrt;
	}else{
		alert('Operação não permitida para valor negativo');
	}
}
function btnVirgulaClick(){
	var num = document.getElementById('tb1').value.toString();
	if(num.length > 2){
		num += '.';
		document.getElementById('tb1').value = num;
	}else if(num == 0){
		document.getElementById('tb1').value = num + '.';
		
	}else{
		
	}
}


