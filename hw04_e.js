/*
[
    [ 18, 27, 36, 45, 54, 63, 72, 81 ],
    [ 16, 24, 32, 40, 48, 56, 64 ],
    [ 14, 21, 28, 35, 42, 49 ],
    [ 12, 18, 24, 30, 36 ],
    [ 10, 15, 20, 25 ],
    [ 8, 12, 16 ],
    [ 6, 9 ],
    [ 4 ]
]
*/
let arr = new Array()   //宣告一維陣列
let count = 0;  //計數器
let add = 9;    //宣告起始遞增值
let arrLenght = 8;
for(let i = 0; i < 8; i++)     //一維陣列數量
{
    let firstNumber = 18   //宣告起始數字
    firstNumber = firstNumber - count * 2;   //起始數字減2
    arr[i] = new Array();      //宣告二維陣列
    for(let j = 0; j < arrLenght; j++)      //二維陣列放入數值個數
    {
        arr[i][j] = firstNumber    //數值一一放入二維陣列
        firstNumber += add;    //二維陣列數值遞增
    } 
    add--;   //遞增值跑一個二維陣列減1
    arrLenght--;    //二維陣列長度每次減1
    count++;      //計算一維陣列索引值
}
console.log(arr)
