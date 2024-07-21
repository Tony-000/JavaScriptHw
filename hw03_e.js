function days(year,month)
{ 
    let day;
    if(year % 400 == 0)  //如果年為400的倍數，該年為閏年
    {           
        switch(month)
        {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                day = 31;
                break;
            case 2:
                day = 29;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                day = 30;
                break;  
        }
    }
    else
    {
        if(year % 4 == 0 && year % 100 != 0)      //如果是4的倍數但不是100的倍數也為閏年
        {
            switch(month){
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    day = 31;
                    break;
                case 2:
                    day = 29;
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    day = 30;
                    break;  
            }
        }
        else
        {
            switch(month){
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    day = 31;
                    break;
                case 2:
                    day = 28;
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    day = 30;
                    break; 
            }   
        }
    }
    console.log(`${year}年${month}月是${day}天`)
}

days(2000,2);