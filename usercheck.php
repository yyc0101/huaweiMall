<?php
    header("content-type","text/html;charset=utf-8");
    //通过ajax只是用来验证用户名的

    //接收前端数据(post传入的值是前端页面中name后面的值)
    $username = $_GET['formusername'];

    //处理数据

    //链接数据库
    $conn = mysql_connect('localhost','root', 'root');
    //选择数据库目的地
    mysql_select_db('hw',$conn);

    //数据库操作
    //查询用户名是否存在
    $sqlStr="select * from vip where username='".$username."'";
    $result = mysql_query($sqlStr,$conn);
    $rows = mysql_num_rows($result);
    
    //4、关闭数据库
    mysql_close($conn);

    // 执行SQL语句（将内容传入到数据库中）
    //VIP中传入的是数据库中的字段名
    //将用户名和密码插入到数据库中
    if($rows == 0){
        //三、响应
        echo "0";
    }else{
        //响应
        echo "1";
    }
?>