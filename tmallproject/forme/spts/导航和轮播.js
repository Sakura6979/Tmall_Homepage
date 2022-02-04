window.onload = function () {
    var nowid = 0;
    var imgli = document.getElementsByClassName("imgli");
    var ali = document.getElementsByClassName("point");
    var nowmxidx = getComputedStyle(imgli[0], null).zIndex;
    imgli[0].style.zIndex = nowmxidx + 1;



    for (var i = 0; i < ali.length; ++i) {
        ali[i].ind = i;
        ali[i].onclick = function () {
            // 灵活使用this
            //alert(this.ind);
            for (var j = 0; j < ali.length; ++j) {
                imgli[j].style.zIndex = nowmxidx;
                ali[j].style.backgroundColor = "transparent";
            }
            imgli[this.ind].style.zIndex = nowmxidx + 1;
            ali[this.ind].style.backgroundColor = "white";
            nowid = this.ind;
        };
    }

    var timer = setInterval(function () {
        nowid = (nowid + 1) % ali.length;
        ali[nowid].onclick();
    }, 2500);

}