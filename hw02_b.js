allsecond = 93784;
var day,hour,mintue,second;

second = allsecond % 60;  //對總秒數除以60取餘數
mintue = (Math.floor(allsecond / 60)) % 60;  //總秒數除以60再轉成整數後再除以60取餘數
hour = (Math.floor(allsecond / 60 / 60)) % 24;  
day = (Math.floor(allsecond / 60 / 60 / 24));
console.log(`${day}天${hour}小時${mintue}分${second}秒`)
