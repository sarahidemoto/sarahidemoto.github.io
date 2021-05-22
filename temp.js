//let clickCounter = 0;
const palette = ["white", "#BAC8CC", "#7FA4AD", "#5C929B", "#367D89", "#096382"]

var count1 = 1;
var count2 = 1;
var count3 = 1;
var count4 = 1;
var count5 = 1;
var count6 = 1;
    function setColor1(btn, color) {
        var property = document.getElementById(btn);
        if(count1 == 5){
            count1 = 0;
        }
        property.style.color = palette[count1]
            count1 ++;  
       
    }
    function setColor2(btn, color) {
        var property = document.getElementById(btn);
        if(count2 == 5){
            count2 = 0;
        }
        property.style.color = palette[count2]
            count2 ++;  
       
    }
    function setColor3(btn, color) {
        var property = document.getElementById(btn);
        if(count3 == 5){
            count3 = 0;
        }
        property.style.color = palette[count3]
            count3 ++;  
       
    }function setColor4(btn, color) {
        var property = document.getElementById(btn);
        if(count4 == 5){
            count4 = 0;
        }
        property.style.color = palette[count4]
            count4 ++;  
       
    }function setColor5(btn, color) {
        var property = document.getElementById(btn);
        if(count5 == 5){
            count5 = 0;
        }
        property.style.color = palette[count5]
            count5 ++;  
       
    }function setColor6(btn, color) {
        var property = document.getElementById(btn);
        if(count6 == 5){
            count6 = 0;
        }
        property.style.color = palette[count6]
            count6 ++;  
       
    }