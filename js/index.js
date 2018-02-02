//广告消失首部
function ad(){
    $('#xx').mouseenter(function(){
        $(this).css({'cursor':'pointer'})
    });
    $('#xx').click(function(){
        $('#bgimgs').css({'display':'none'})
    });
}
ad();
// logo页显示
$(document).ready(function(){
    //更多精彩	
    $("#show").bind("mouseenter",function () {
        $(this).css({
            "color":"#ca151d",
        })
        $('#down-more').show();
        $('#down-more').css({
            "color":"#ca151d",
        });
    });

    $("#show").bind("mouseleave",function () {
        iTimer = setTimeout(function(){
            $('#down-more').hide();
            $('#show').css({
                "color":"#3a3a3a",
            });
        },2);
    });

    $("#down-more").bind("mouseenter",function () {
        clearTimeout(iTimer);
    });	

    $("#shops").mouseleave(function(){
        $('#down-more').hide();
        $('#show').css("color","#3a3a3a");
    })

    //跟多精彩
    $("#shops").bind("mouseenter",function () {
        $(this).css({
            "color":"#ca151d",
        })
        $('#shoppCart').show();
    });

    $("#shops").bind("mouseleave",function () {
        iTimer = setTimeout(function(){
            $('#shoppCart').hide();
            $('#shops').css({
                "color":"#3a3a3a",
            });
        },2);
    });

    $("#shoppCart").bind("mouseenter",function () {
        clearTimeout(iTimer);
    });	

    $("#shoppCart").mouseleave(function(){
        $('#shoppCart').hide();
        $('#shops').css("color","#3a3a3a");
    })
    

    // 底部
    //固定定位返回顶部
    $(window).scroll(function(){
        if($(document).scrollTop() >= 800){
            $('#lastFix #fix').css({
                display:'block',
            }).click(function(){
                $('html,body').animate({
                    scrollTop:0,
                },500)
            })
        }
        if($(document).scrollTop() <= 800){
            $('#lastFix #fix').css({
                display:'none',
            })
        }
    })

    //底部客服显示
    $('#fixes').on('mouseenter',function(){
        $('#fixLoca').show(500);
    })
    $('#fixes').on('mouseleave',function(){
        $('#fixLoca').hide(500);
    })



});







//更多
function more(){
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

more();
//轮播图
function lun1(){
    var arr=["z1.jpg","z2.jpg.jpg","z3.jpg.jpg","z4.jpg.jpg","z5.jpg.jpg","z6.jpg.jpg","z7.jpg.jpg"];
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
        },2000);
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
    
    //轮播图
    //1、初始化界面
    initUI();
    //2、绑定事件
    initEvent();
    //3、自动播放
    autoPlay();
};
lun1();
//轮播图
function lun2(){
    var arr=["bo1.jpg","bo2.jpg.jpg","bo3.jpg.jpg","bo4.jpg.jpg","bo5.jpg.jpg","bo6.jpg.jpg","bo7.jpg.jpg"];
    var ord = 0;//代表当前图片的序号，从0开始。
    var myTimer = null;
    
    function  initUI() {
        $("#lunbos li:first").css({"backgroundColor":"#ccc"});
    }
    
    function  initEvent() {
        $("#lunbos").mouseenter(function () {
            stopPlay();
        });
    
        $("#lunbos").mouseleave(function () {
            autoPlay();
        });
    
        $("#lunbos li").mouseenter(function () {
            goImg($("#lunbos li").index(this));
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
            }
            //二、改变外观
            let $img = $("#lunbos img");
            //1、淡入淡出效果
            //让一张(outOrd)淡出 当前消失
            $img.eq(outOrd).animate({"opacity":0},2000);
            //让一张(ord)淡入下一张图片显示
            $img.eq(ord).animate({"opacity":1},2000);
            //2、改变豆豆的颜色；
            $("#lunbos li").eq(ord).css({"backgroundColor":"#cb8177"}).siblings().css({"backgroundColor":"#ccc"});
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
        }
        //二、改变外观
        let $img = $("#lunbos img");
        //1、淡入淡出效果
        //让一张(outOrd)淡出 当前消失
        $img.eq(outOrd).animate({"opacity":0},500);
        //让一张(ord)淡入下一张图片显示
        $img.eq(ord).animate({"opacity":1},500);
        //2、改变豆豆的颜色；
        $("#lunbos li").eq(ord).css({"backgroundColor":"#cb8177"}).siblings().css({"backgroundColor":"#ccc"});
    }
    
    //轮播图
    //1、初始化界面
    initUI();
    //2、绑定事件
    initEvent();
    //3、自动播放
    autoPlay();
};
lun2();


//轮播图（无缝滚动）
    var i=0;
    var timer=null;

     //第一张图片放到最后一张图片后，设置ul的宽度为图片
    // 下一个按钮

    $('.btn-left').click(function(){
        i--;
        if (i==-1) {
            i= 0;
            $('.uuls').css({left:i*232});
            return;
        };
    $('.uuls').stop().animate({left:-i*232},300);
        
    })
    // 上一个按钮
    $('.btn-right').click(function(){
        i++;
        if(i>=$('.uuls a').length - 5){
            console.log(i)
            i =$('.uuls a').length - 5
            $('.uuls').css({left:i*232});  
        } 
        $('.uuls').stop().animate({left:-i*232},300);       
    })