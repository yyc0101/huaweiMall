
<?php
    header("Content-type:text/html;charset=utf-8;");

    //接收前端数据(post传入的值是前端页面中name后面的值)
    $phonenum = $_POST['phonenum'];
    $userpass = $_POST['userpass'];
    

    //处理数据

    //链接数据库
    $conn = mysql_connect('localhost','root', 'root');
    //选择数据库目的地
    mysql_select_db('hw',$conn);

    //数据库操作
    
    // 执行SQL语句（将内容传入到数据库中）
    //VIP中传入的是数据库中的字段名
    //将用户名和密码插入到数据库中
    // $sqlStr = "insert into vip(username,userpass) values('".$phonenum."','".$userpass."')";

    //查询用户名是否存在
    $sqlStr = "select * from vip where username='".$phonenum."' and userpass='".$userpass."'";
    
    $result = mysql_query($sqlStr, $conn);

    //$result的返回值是行数（列表）
    $rows = mysql_num_rows($result);

    //关闭服务器
    mysql_close($conn);

    //响应
    //查询响应(form)
    if($rows == 0){
        return false;   //阻止浏览器默认行为
    }else{
        // echo "<a href='../html/index.html'>首页</a>";
        header("Location:../html/index.html");  //直接跳转到首页
    }
    
    //header("Location:index.html");
    
?>

