
//等登录页
//手机验证
$('#phoneId').blur(function(){
	var phoneContent = this.value;
    var reg = /^1\d{5,20}$/;
    
	if(!reg.test(phoneContent)){
        $('#spanS').html('用户名或密码有误!');
   }else{
        $('#spanS').html();
   }				 		 
});




// 注册页
//手机验证
$('#username').blur(function(){
	var userContent = this.value;
    var reg = /^1\d{5,20}$/;
    
	if(!reg.test(userContent)){
        $('#msg_phone').html('用户名有误!');
        
   }else{
        $('#msg_phone').html('');
   }				 		 
});




//随机生成验证码
$('#randomCodeNum').click(function(){
    $(this).html(createCode());
});
function createCode() {
    var content = '0123456789';
    var numString = '';
    for(var i = 0; i < 4; i++) {
        var index = Math.floor(Math.random() * content.length);
        numString += content[index];
    }
    return numString;

}
//图形验证
$('#randomCode').blur(function(){
	var randomContent = $('#randomCodeNum').html();
	if($('#randomCode').val() !== randomContent){
        $('#msg_randomCode').html('验证码有误!');
   }else{
        $('#msg_randomCode').html('');
   }				 		 
});


//密码验证
$('#password').blur(function(){
	var passContent = this.value;
    var reg =  /^[A-Za-z_0-9$#@!^&*()\_\+\-]{4,20}$/;
	if(!reg.test(passContent)){
        $('#check_dialog').html('密码有误!');
   }else{
        $('#check_dialog').html('');
   }				 		 
});

//请再次输入密码
$('#confirmPwd').blur(function(){
    var checkpassContent = this.value;
    var passWord = $('#password').val();
	if(checkpassContent !== passWord){
        $('#checkPassword').html('请确认密码!');
   }else{
        $('#checkPassword').html('');
   }				 		 
});


    //当鼠标聚焦到用户名时触发的事件
    //即验证用户名是否存在

    var usernameExists = true;
    $('#username').blur(function(){
        //给后端发送数据(验证用户名是否存在)
        $.ajax({
            url:'../php/usercheck.php',
            type:'get',
            data:{'formusername':$('#username').val()},  //给后端传入的数据data(name名=后面的值,input框的值)
            success:function(data){        //data是后端返回的数据（echo的结果）
                if(data == "0"){      
                    usernameExists = false;
                    $('#msg_phone').html('该手机号可用！');
                }else{
                    usernameExists = true;
                    $('#msg_phone').html('该手机号已存在！');
                }
            }
        })
    })

    //再次点击时为了防止给服务器发送数据
    $('#formsub').submit(function(){
        if(usernameExists){
            alert("亲，该 手机号已经存在");
            return false;//阻止浏览器的默认行为。 
        };
    });