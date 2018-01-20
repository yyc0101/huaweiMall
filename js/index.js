//广告消失首部
function ad(){
    $('#xx').mouseenter(function(){
        $(this).css({'cursor':'pointer'})
    });
    $('#xx').click(function(){
        $('#bgimgs').css({'display':'none'})
    });
}
//更多
function more(){
    $('#show').mouseenter(function(){
        $('#down-more').css({
            display:'block',
        });
    });
    //更多
    $('#show').mouseleave(function(){
        $('#down-more').css({
            display:'none',
           background:'#fff',
        });
    });
    //购物车
    $('#regist  li:last-child').mouseenter(function(){
        $('#shoppCart').css({
            background:'#fff',
            display:'block',
        });
    });
    $('#regist  li:last-child').mouseleave(function(){
        $('#shoppCart').css({
            display:'none',
        });
    });
    //logoye搜索框
    $('.onsbm form input').focus(function(){
        $('.right li:nth-child(1)').css({
            display:'none',
        })
        $('.right li:nth-child(2)').css({
            display:'none',
        })
        $('.right li:nth-child(3)').css({

        })
    })
}

//轮播图
var arr=["bo1.jpg","bo2.jpg.jpg","bo3.jpg.jpg","bo4.jpg.jpg","bo5.jpg.jpg","bo6.jpg.jpg","bo7.jpg.jpg"];
var arr1=["z1.jpg","z2.jpg.jpg","z3.jpg.jpg","z4.jpg.jpg","z5.jpg.jpg","z6.jpg.jpg","z7.jpg.jpg"];
var ord = 0;//代表当前图片的序号，从0开始。
var myTimer = null;

function  initUI() {
    $("#lunbo li:first").css({"backgroundColor":"white"});
}

function  initEvent() {
    $("#lunbo").mouseenter(function () {
        stopPlay();
    });

    $("#lunbo").mouseleave(function () {
        autoPlay();
    });

    $("#lunbo li").mouseenter(function () {
        goImg($("#lunbo li").index(this));
    });
}

//1、自动播放
function autoPlay() {
    myTimer = setInterval(function () {
        //一、改变数据
        // 1、记录当前序号（淡出的图片序号）
        let outOrd = ord;
        //2、改变要显示的图片的序号（淡出图片序号加一）
        ord++;
        if(ord>arr.length-1){
            ord=0;
        }else if(ord>arr1.length-1){
            ord=0;
        }
        //二、改变外观
        let $img = $("#lunbo img");
        //1、淡入淡出效果
        //让一张(outOrd)淡出 当前消失
        $img.eq(outOrd).animate({"opacity":0},2000);
        //让一张(ord)淡入下一张图片显示
        $img.eq(ord).animate({"opacity":1},2000);
        //2、改变豆豆的颜色；
        $("#lunbo li").eq(ord).css({"backgroundColor":"white"}).siblings().css({"backgroundColor":""});
    },3000);
}

//2、停止播放
function stopPlay() {
    window.clearInterval(myTimer);
}

//3、跳转到指定的图片
function  goImg(transOrd) {
    //一、改变数据
    // 1、记录当前序号（淡出的图片序号）
    let outOrd = ord;
    //2、改变要显示的图片的序号（传入的图片序号）
    ord=transOrd;
    if(ord>arr.length-1){
        ord=0;
    }else if(ord>arr1.length-1){
        ord=0;
    }
    //二、改变外观
    let $img = $("#lunbo img");
    //1、淡入淡出效果
    //让一张(outOrd)淡出 当前消失
    $img.eq(outOrd).animate({"opacity":0},500);
    //让一张(ord)淡入下一张图片显示
    $img.eq(ord).animate({"opacity":1},500);
    //2、改变豆豆的颜色；
    $("#lunbo li").eq(ord).css({"backgroundColor":"white"}).siblings().css({"backgroundColor":""});
}


// 精品推荐

function recommend(){
	
}


$(function(){
    ad();
    more();
    //轮播图
    //1、初始化界面
    initUI();
    //2、绑定事件
    initEvent();
    //3、自动播放
    autoPlay();
    //精品推荐
    recommend();
})