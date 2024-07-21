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
for(i = 0;i < 5;i ++)      //計算陣列數值總和跟平均
{
    sum+=arr[i];
    avg = sum / arr.length;
}
console.log(arr)
console.log(`所有數值總合為:${sum}\n平均值為:${avg}`)