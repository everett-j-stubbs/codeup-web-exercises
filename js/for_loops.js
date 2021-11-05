function showMultiplicationTable(input){
    for (var i = 0; i <=input; i++){
        console.log(i+"x"+input+"="+(i*input))
    }
}
showMultiplicationTable(10)

    // 10 x 1 = 10
    // 10 X 2 = 20
    // 10 X 3 = 30
    // 10 x 4 = 40
    // 10 X 5 = 50
    // 10 x 6 = 60
    // 10 x 7 = 70
    // 10 x 8 = 80
    // 10 x 9 = 90
    // 10 X 10 = 100

for(var x=1;x<=10;x++){
    var randomNum = Math.floor(Math.random()*181) + 20;
    if(randomNum % 2 === 0){
        console.log(randomNum+"even")
    }else{
        console.log(randomNum+"odd")
    }
}
for(x=1; x<10; x++){
    console.log(x.toString().repeat(x));
}
for(var x = 100; x>=5; x = x-5){
    console.log(x);
}