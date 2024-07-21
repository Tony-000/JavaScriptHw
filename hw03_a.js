let n = 16,sum = 0;  
for(let i = 1; i <= n; i++)    //取1~16之間3跟4的倍數加總
{
    if(i % 3 == 0 || i % 4 == 0)    
    {
        sum += i;
    }   
}
console.log(sum);