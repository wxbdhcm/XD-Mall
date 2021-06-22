export function countDown() {
    var timeNow = new Date(); //当前时间
    var hours = timeNow.getHours();
    var endHours = 22;
    var beginHours = 20
    let status 
    var endTime = new Date();  //设置结束时间
    endTime.setHours(endHours);
    endTime.setMinutes(0);
    endTime.setSeconds(0);
    var restSeconds = endTime.getTime() - timeNow.getTime();   //倒计时毫秒数
    var restDays = parseInt(timeNow.getDay()) - parseInt(endTime.getDay()); // if 设置成24点，需要加一天
    if (parseInt(timeNow.getHours()) < 20) {
        endHours = 20
        status = '开始'
    }
    else if(parseInt(timeNow.getHours()) <24 && parseInt(timeNow.getHours()) >= 22){
        status ='开始'
        restDays --
    }
    else {
        endHours = 22
        status = '结束'
    }
    var D = parseInt(restSeconds) - parseInt(restDays * 60 * 60 * 24 * 1000); //除去天的毫秒数
    var restHours = parseInt(D / (60 * 60 * 1000)); //除去天的毫秒数转换成小时
    var H = D - restHours * 60 * 60 * 1000; //除去天、小时的毫秒
    var restMinutes = parseInt(H / (60 * 1000)); //除去天的毫秒数转换成分
    var S = parseInt(
        (restSeconds -
            restDays * 60 * 60 * 24 * 1000 -
            restHours * 60 * 60 * 1000 -
            restMinutes * 60 * 1000) /
        1000
    ); //除去天、小时、分的毫秒数转化为秒
    //   document.getElementById("div").innerHTML =   shengyuH + "小时" + shengyuM + "分" + S + "秒" + "<br>";
    return{
        restHours,
        S,
        restMinutes,
        status
    }
}