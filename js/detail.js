$(function () {

        var oBox = document.getElementById('box');
        var oSmallBox = document.getElementById('smallBox');
        var aSmallImg = Array.from(oSmallBox.children);
        var oMiddleImg = document.getElementById('middleImg');
        var oMiddleBox = document.getElementById('middleBox');
        var oLagerImg = document.getElementById('lagerImg');
        var oLagerBox = document.getElementById('lagerBox');
        var oShadow = document.getElementById('shadow');
        //选项卡效果
        aSmallImg.forEach((v) => {
            v.addEventListener('mouseenter', (() => {
                aSmallImg.forEach((m) => {
                    m.className = '';
                })
                v.className = 'active';
                oMiddleImg.src = v.src;
                oLagerImg.src = v.src;
            }).bind(v))
        })

        //放大镜效果

        var
            iMaxL = oMiddleBox.offsetWidth - oShadow.offsetWidth,
            iMaxT = oMiddleBox.offsetHeight - oShadow.offsetHeight;

        oMiddleBox.addEventListener('mousemove', (ev) => {
            var e = ev || window.event;
            var
                iL = e.pageX - oBox.offsetLeft - oShadow.offsetWidth / 2,
                iT = e.pageY - oBox.offsetTop - oShadow.offsetHeight / 2;
            //oShadow 的移动范围； 
            iL = Math.max(iL, 0)
            iT = Math.max(iT, 0)
            iL = Math.min(iL, iMaxL)
            iT = Math.min(iT, iMaxT)
            //大图移动的距离
            var
                oLagerImgL = iL * (oLagerImg.offsetWidth - oLagerBox.offsetWidth) / iMaxL,
                oLagerImgT = iT * (oLagerImg.offsetHeight - oLagerBox.offsetHeight) / iMaxT;

            oShadow.style.left = iL + 'px';
            oShadow.style.top = iT + "px";

            oLagerImg.style.left = -oLagerImgL + 'px';
            oLagerImg.style.top = -oLagerImgT + 'px';

        })
        oMiddleBox.addEventListener('mouseenter', () => {

            oLagerBox.style.display = 'block';
        })
        oMiddleBox.addEventListener('mouseleave', () => {
            oShadow.style.left = '-1000px';
            oLagerBox.style.display = 'none';
        })


    // 修改购买手机的数量
    var num = 0;
    $(".reduce").click(function(){
        num --;
        if(num < 1){
            return;
        }
        $(".textnum").val(num);
    })
    $(".plus").click(function () {
        if(num <= 1){
            num=1;
        }
        num++;
        $(".textnum").val(num);
    })

    //修改选择手机的颜色
    $(".phonmeColor span").each(function(v,k){
        k.addEventListener("click",function(){
            $(".phonmeColor span").removeClass("Choice").addClass("Choice1");
            $(this).removeClass("Choice1").addClass("Choice");
        })
    })

    // 添加商品到购物车
    $(".shopps2").click(function(){
        $(".po_main").css("display","block")
    })
    $(".button_3").click(function () {
        $(".po_main").css("display", "none")
    })
    // 滑过出现购物车详情
    $(".shoping").mouseover(function(){
        $(".hgxsgwc").css("display","block")
    })
    $(".shoping").mouseout(function () {
        $(".hgxsgwc").css("display", "none")
    })
    
})