//    18 27 36 45 54 63 72 81
//    16 24 32 40 48 56 64
//    14 21 28 35 42 49
//    12 18 24 30 36
//    10 15 20 25
//    8 12 16
//    6  9
//    4

let add = 9;   //設定初始遞增值
let count = 0;   //第幾次迴圈
for(let i = 8; i > 0; i--)    //跑八次迴圈
{
    let firstnumber = 18;   //設定起始數字為18
    firstnumber -= count * 2;     //每次迴圈起始數字減2
    let str = firstnumber.toString();    //數字轉字串
    for(let j = 0; j < i-1; j++)    //印出幾個數字
    {
        firstnumber += add;    //每次遞增多少
        str = str + " " + firstnumber.toString();   //數字合併成一個字串 
    }
    console.log(str);
    add--;      //每跑一次外層，遞增值減1
    count++;    //計算跑了幾次外層
}


