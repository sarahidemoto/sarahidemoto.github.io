//let clickCounter = 0;
const palette = ["white", "#BAC8CC", "#7FA4AD", "#5C929B", "#367D89", "#096382"]
var count = 1;
    function setColor(btn, color) {
        var property = document.getElementById(btn);
        if(count == 5){
            count = 0;
        }
        property.style.color = palette[count]
            count ++;  
       
    }