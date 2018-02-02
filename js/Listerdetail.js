
$(function(){
    $.ajax({
        type:'get',
        url:'../php/getGoodsList.php',
        success:function(data){
            showgoodsList(data);
            $('.topay').click(function(){
                console.log(100);
            });
        },
        dataType:'json',
    });
})

function showgoodsList(datas){
    // console.log(datas);
    let $ulbox = $('#ulbox');
    for(let i=0;i<datas.length;i++){
        //创建li
        let str = `
        <li>
            <div class="pro-panels">
                <p class="p-img">
                    <a href='detail.html' target='_blank' class='topay' title="${datas[i].goodsName}">   
                    <img alt="荣耀9青春版 全网通标配版（魅海蓝）" src="${datas[i].goodsImg}">  
                    </a>
                </p>
                <p class="p-name">
                    <a title="荣耀9青春版 全网通标配版（魅海蓝）">荣耀9青春版 全网通标配版（魅海蓝） 
                        <span class="red">${datas[i].goodsType}*</span>
                    </a>
                </p>
                <p class="p-price"><b>¥${datas[i].goodsPrice}</b></p>     

                <div class="p-button">
                    <table colspan="0" rowspan="0">
                        <tbody>
                            <tr>
                                <td><a class="p-button-cart"><span>${datas[i].beiyong1}</span></a></td>  
                                <td><label class="p-button-score"><span>${datas[i].beiyong2}</span></label></td>  
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </li>
        `;

        $ulbox.append(str);
        $('.topay').click(function(){
            console.log(100);
        })

    }
}