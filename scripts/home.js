var arr = ["#scroll1","#scroll2","#scroll3"];
var i = 0;

function Yasmineplsmakeitwork_scroll(x){
        if(!(i == 0 && x == -1) && !(i==3 && x == 1)) 
            i+=x;
        $([document.documentElement, document.body]).animate({
            scrollTop: $(arr[i]).offset().top
        }, 1500);
}


