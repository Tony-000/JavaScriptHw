let n = 17, count = 0, sum = 0;   //計算1~n之間質數加總
let number,dividend;
for ( number=2 ; number <= n; number++)          
{  
    for ( dividend = 1; dividend <= number; dividend++)
    {
        if (number % dividend == 0)           //對數值i取除以1~i的餘數，如果為0計數加1
        {
            count += 1;
        }
    }
    if (count == 2)                //計數值為2的話表示該數字只能被1跟自己整除，該數字就是質數
    {
        sum += number;                  //加總所有質數
    }
    count = 0;                     //計數器歸0
}
console.log(sum); 

