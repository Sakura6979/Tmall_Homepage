window.onload = function(){
    var cgs = document.getElementsByClassName("eachCategory");
    var rds = document.getElementsByClassName("productsAsideCategorys");
    for(var i=0;i<cgs.length;++i){
        cgs[i].id = i;      
        // 一般来说，onmouseover、onmouseout一起使用，鼠标经过时自身触发事件，经过其子元素时也触发该事件，每经过一次子元素都触发该事件，属于不断触发；
        //onmouseenter、onmouseleave：鼠标经过时自身或者其子元素都触发事件，但是只触发一次。
    
        cgs[i].onmouseenter = function(){
            for(var j=0;j<rds.length;++j)
                rds[j].style.display = "none";
            rds[this.id].style.display = "block";
        }
        
    }
    for(var i=0;i<rds.length;++i){
        rds[i].id = i;
        rds[i].onmouseleave = function(){
            rds[this.id].style.display = "none";
        }
    }
}