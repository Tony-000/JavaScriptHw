const mySkills = ['javascript', 'java', 'sql', 'c', 'python', 'php', 'swift'];
let newMySkills  = mySkills.join('')  //將陣列合併成一個字串
function search(alphabet)    //定義一個函式計算個別英文字母數量
{
    let count = 0;     //計數器
    for(let i = 0; i < newMySkills.length; i++)     
    {
        if(newMySkills[i] == alphabet)     //字串中等於某個字母
        {
            count++;     //計數器加1
        } 
    }
    console.log(`字母${alphabet}數量:${count}個`);
}
search("a");
search("b");
search("c");
search("d");
search("e");
search("f");
search("g");
search("h");
search("i");
search("j");
search("k");
search("l");
search("m");
search("n");
search("o");
search("p");
search("q");
search("r");
search("s");
search("t");
search("u");
search("v");
search("w");
search("x");
search("y");
search("z");




