
$('#dl').submit(function(){
    // 手机号
    $('#phoneId').blur(function(){
        var phoneContent = this.value;
        var reg1 = /^1\d{5,10}$/;
        if(!reg1.test(phoneContent)){
            $('#spanS').innerHTML = '请输入您的账号';
       }else{
            $('#spanS').innerHTML = '';
       }

    });

    //密码验证
    $('#mima').blur(function(){
        var miMaContent = this.value;
        var reg2 = /^[A-Za-z_0-9$#@!^&*()\_\+\-]{6,20}$/;
        if(!reg2.test(miMaContent)){
            $('#spanS').innerHTML = '请输入您的密码';
       }else{
            $('#spanS').innerHTML = '';
       }					 		 
    });

})


