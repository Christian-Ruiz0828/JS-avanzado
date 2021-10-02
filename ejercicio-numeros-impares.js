var  num1 = parseInt(prompt('numero 1'))
var  num2 = parseInt(prompt('numero 2 '))

if(num1%2==0){
    num1+=1;
    document.write(num1);
    while (num1<=num2){
        num1+=2;
        document.write(num1)
    }
}
else{
    document.write(num1)
    while(num1<=num2){
        num1+2
    }
}
