let arr = []; 
let i,j; 
let sum = 0,avg;
function RandomNumbers(quantity)
{
    for(i = 0; i < quantity; i++)   //產生五個0~9的正整數
{
    arr[i] = Math.floor( Math.random() * 10)
}
for(i = 0; i < quantity; i++)   //檢查是否重複
{
    for(j = 0;j < quantity; j++)
    {
        while(arr[i] == arr[j] && i != j)
        {
            arr[i] = Math.floor( Math.random() * 10)
            j = 0;
        }   
    }       
}
}
RandomNumbers(5);
for(i = 0;i < 5;i ++)   //計算陣列數值總和跟平均
{
    sum += arr[i];
    avg = sum / arr.length;
}

console.log(arr)

let index1 = arr.indexOf(avg);   //找出陣列中跟平均值一樣數值的索引值
let indexTop,indexDown,ref_a,ref_b;
if(index1 < 0)   //如果沒有一樣的話
{
    ref_a = Math.floor(avg)   //把平均值小數點部分無條件捨去
    indexDown = arr.indexOf(ref_a)  //再找一次
         
    while(indexDown < 0)   //如果還是沒有，一直減1直到找到第一個相同數值為止
    {
        ref_a--;
        indexDown = arr.indexOf(ref_a) 
    }
    ref_b = arr[indexDown] + 1    //找到小於平均值的值後加一
    indexTop = arr.indexOf(ref_b)  //找大於平均值的數值索引值
    while(arr.indexOf(ref_b) < 0)  //如果沒有，一直加1直到找到第一個相同數值為止
    {
        ref_b++;
        indexTop = arr.indexOf(ref_b)
    }
    console.log(`介於平均值${avg}的索引值為:\n[${indexDown}] 數值為 ${arr[indexDown]}\n[${indexTop}] 數值為 ${arr[indexTop]}`);  //印出介於平均值之間兩個數值的索引值
}
else
console.log(`等於平均值${avg}的索引值為:\n[${index1}] 數值為 ${arr[index1]}`)  //印出跟平均值一樣數值的索引值

 
