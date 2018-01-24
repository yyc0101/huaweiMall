
$(function(){
    $.ajax({
        type:'get',
        url:'getGoodsList.php',
        success:function(data){

        },
        dataType:'json',
    });

})

function showgoodsList(datas){
    let $ulbox = $('#ulbox');
    for(let i=0;i<datas.length;i++){
        //创建li
        let str = `
        <li>
            <div class="pro-panels">
                <p class="p-img">
                    <a  href="#" title="'+ datas[i].goodsName +'">   //商品名称
                    <img alt="荣耀9青春版 全网通标配版（魅海蓝）" src="../imgs/li1.jpg">  //商品图片
                    </a>
                </p>
                <p class="p-name">
                    <a title="荣耀9青春版 全网通标配版（魅海蓝）">荣耀9青春版 全网通标配版（魅海蓝）  //商品描述
                        <span class="red">正反四摄/5.65英寸全面屏*</span>    //商品类型
                    </a>
                </p>
                <p class="p-price"><b>¥1199</b></p>  

                <div class="p-button">
                    <table colspan="0" rowspan="0">
                        <tbody>
                            <tr>
                                <td><a class="p-button-cart"><span>选购</span></a></td>  //备用1
                                <td><label class="p-button-score"><span>6653人评价</span></label></td> 
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </li>
        `;
    }
}