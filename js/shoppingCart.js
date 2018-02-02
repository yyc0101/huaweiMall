
//购物车效果点击全选按钮等所有功能
$(function(){
    // ---------------------所有的checkbox选中和未选中的样子----------------------
    let $wholeChexbox = $('.whole_check'),  //全局的checkbox
        $sonCheckBox = $('.son_check');     //每个商品的checkbox
        
        $wholeChexbox.bind('click',function () {
            $(this).toggleClass('mark');
        });
        $sonCheckBox.bind('click',function () {
            $(this).toggleClass('mark');
        });

        //--------------------------单个的按钮与价格之间的关系-----------------------
        $sonCheckBox.each(function(){

            $(this).click(function(){
                if($(this).hasClass('mark')){
                    //判断所有商品是否勾选
                    let len = $sonCheckBox.length;
                    let num = 0;
                    $sonCheckBox.each(function(){
                        if($(this).hasClass('mark')){
                            num++;
                        }
                    });
                    // console.log(num);
                    if(num == len){
                        $wholeChexbox.addClass('mark');
                    }
                    $(this).addClass('mark');
                }else{
                    $wholeChexbox.removeClass('mark');
                    $(this).removeClass('mark');
                }

                totalMoney();
            });

        });

        //--------------------------全选按钮与单个按钮之间的关系---------------
        $wholeChexbox.click(function () {

            if ($(this).hasClass('mark')) {
                $sonCheckBox.addClass('mark');
                $wholeChexbox.addClass('mark');
            } else {
                $sonCheckBox.removeClass('mark');
            }
            totalMoney();
        });


        //------------------------商品数量的增减----------------------------------
        let $plus = $('.plus'),
            $reduce = $('.reduce'),
            $all_sum = $('.sum');
        //点击加号按钮
        $plus.click(function(){
            let $inputVal = $(this).parent().prev('input'),
                $count = parseInt($inputVal.val())+1,
                $priceTotalObj = $(this).parents('.goodsTop').find('.sum_price'),  //数量后面的价格
                $price = $(this).parents('.goodsTop').find('.price').html(),  //数量前面的单价
                $priceTotal = $count*parseInt($price.substring(1));
                $inputVal.val($count);     //将内容放入input框内 
                $priceTotalObj.html('￥'+$priceTotal);   //数量后面的内容随数量的变化而变化

                totalMoney();
        });

        //点击减号按钮
        $reduce.click(function(){
            let $inputVal = $(this).parent().prev().prev('input'),
            $count = parseInt($inputVal.val())-1,
            $priceTotalObj = $(this).parents('.goodsTop').find('.sum_price'),  //数量后面的价格
            $price = $(this).parents('.goodsTop').find('.price').html(),  //数量前面的单价
            $priceTotal = $count*parseInt($price.substring(1));
            if($inputVal.val()>1){
                $inputVal.val($count);     //将数量内容放入input框内 
                $priceTotalObj.html('￥'+$priceTotal); //将价格放入数量后面的单价中
            };

            totalMoney();
        });

        $all_sum.keyup(function () {
            let $count = 0,
                $priceTotalObj = $(this).parents('.goodsTop').find('.sum_price'),
                $price = $(this).parents('.goodsTop').find('.price').html(),  //单价
                $priceTotal = 0;
            if($(this).val()==''){
                $(this).val('1');
            }
            $(this).val($(this).val().replace(/\D|^0/g,''));
            $count = $(this).val();
            $priceTotal = $count*parseInt($price.substring(1));
            $(this).attr('value',$count);
            $priceTotalObj.html('￥'+$priceTotal);
            totalMoney();
        })


     //======================================移除商品========================================

    var $goodsTop = null;
    var $order_content = '';
    $('.delBtn').click(function () {
        $goodsTop = $(this).parents('.goodsTop');
        $order_content = $goodsTop.parents('.order_content');
        $('.model_bg').fadeIn(300);
        $('.my_model').fadeIn(300);
    });

    //关闭模态框
    $('.closeModel').click(function () {
        closeM();
    });
    $('.dialog-close').click(function () {
        closeM();
    });
    function closeM() {
        $('.model_bg').fadeOut(300);
        $('.my_model').fadeOut(300);
    }
    //确定按钮，移除商品
    $('.dialog-sure').click(function () {
        $order_content.remove();
        if($order_content.html().trim() == null || $order_content.html().trim().length == 0){
            $order_content.parents('.cartBox').remove();
        }
        closeM();
        $sonCheckBox = $('.son_check');
        totalMoney();
    })


    //--------------------------计算总价格--------------------------------------
    
    function totalMoney(){
        var total_money = 0;
        var total_count = 0;
        $sonCheckBox.each(function(){
            if($(this).hasClass('mark')){
                var goods = parseInt($(this).parents('.goodsTop').find('.sum_price').html().substring(1));
                var num = parseInt($(this).parents('.goodsTop').find('.sum').val());
                total_money += goods;
                total_count += num;
            }
        });

        $('.total_text').html('￥'+ total_money); //总价格
        $('.piece_num').html(total_count);   //总数量

    };

    
})