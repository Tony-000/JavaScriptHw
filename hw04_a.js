let arr = [];
let i,j;
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
console.log(arr)