
// @todo fix for transition @ zero

function getHourDegrees(h,m){
    if(h > 11){
        h = h - 12;
    }

    // hours in degrees add 90 for start position
    var degrees = h * 30 + 90;
    // add minutes within the hour
    degrees = degrees + m/2;
    return degrees;
}

function getMinuteOrSecondDegrees(val){
    // minutes or seconds in degrees * 5 and +90 for start position
    return val * 6 + 90;
}


document.addEventListener('DOMContentLoaded', function(){ 
    var hourElement = document.getElementById('clockHours');
    var minuteElement = document.getElementById('clockMinutes');
    var secondElement = document.getElementById('clockSeconds');
    var d, h, m, s;


    setInterval(function(){
        d = new Date();
        h = d.getHours();
        m = d.getMinutes();
        s = d.getSeconds();

        hourElement.style.transform = 'rotate(' 
            + getHourDegrees(h,m) 
            + 'deg)';

        minuteElement.style.transform = 'rotate(' 
            + getMinuteOrSecondDegrees(m) 
            + 'deg)'
    
        secondElement.style.transform = 'rotate(' 
            + getMinuteOrSecondDegrees(s) 
            + 'deg)'
    }, 200);
    
})
