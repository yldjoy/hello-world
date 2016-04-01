<%@ page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>一米市集</title>
<jsp:include
    page="../common/common.jsp"></jsp:include>
<script
    type="text/javascript">
    var n = 0;
    function changeImg(n) {
        var img = new Array("img/1.png", "img/pic_yimi_2.jpg");
        $("#slip_img").attr("src", img[n]);
    }
    setInterval("changeImg((n++)%2)", 2000);
</script>

<style
    type="text/css">
hr,table th,table td,div,p {
    margin: 0px;
    padding: 0px;
    color: #253445;
}

table {
    width: 100%;
}

table td,table th {
    text-align: center;
    padding: 2px;
}

#footer {
    width: 100%;
    height: 100px;
    color: #FFF;
    background: #1e394c;
    opacity: 0.9;
    position: fixed;
    bottom: 0;
    left: 0;
}

#menu_list {
    color: #1e394c;
}

td img {
    width: 100%;
}
</style>

</head>
<body
    style="margin: 0px; padding: 0px;">
    <jsp:include
        page="../common/header.jsp"></jsp:include>

    <div
        style='height: 120px; width: 100%'>
        <img
            id="slip_img"
            style="width: 100%; height: 100%"
            src="img/1.png" />
    </div>
    <div
        id='menu_list'
        style='width: 100%;'>
        <table
            style='border-collapse: collapse;'>
            <tr>
                <td
                    style='padding: 10px 5.5% ; border-right: 1px solid #D3D3D3;'>
                    <img
                    src="img/2.png" />
                </td>
                <td
                    style='padding: 10px 5.5%; border-right: 1px solid #D3D3D3;'>
                    <img
                    src="img/2.png" />
                </td>
                <td
                    style='padding: 10px 5.5%; border-right: 1px solid #D3D3D3;'>
                    <img
                    src="img/2.png" />
                </td>
                <td
                    style='padding: 10px 5.5%;'>
                    <img
                    src="img/2.png" />
                </td>
            </tr>
            <tr>
                <td
                    style='vertical-align: top; border-right: 1px solid #D3D3D3;font-size:85%;'>
                    <span>新品推荐</span>
                </td>
                <td
                    style='vertical-align: top;font-size:85%; border-right: 1px solid #D3D3D3;'>
                    <span>优惠券</span>
                </td>
                <td
                    style='vertical-align: top; border-right: 1px solid #D3D3D3;font-size:85%;'>
                    <span>充值有礼</span>
                </td>
                <td
                    style='vertical-align: top;font-size:85%;'>
                    <span>我的收藏</span>
                </td>
            </tr>
            <tr>
                <td
                    style='padding: 10px 5.5%; border-right: 1px solid #D3D3D3;'>
                    <a  href="../shop_show/goods_category12.jsp" style="width:100%;weight:100%;"><img
                    src="img/2.png" /></a>
                   
                </td>
                <td
                    style='padding: 10px 5.5%; border-right: 1px solid #D3D3D3;'>
                    <img
                    src="img/2.png" />
                </td>
                <td
                    style='padding: 10px 5.5%; border-right: 1px solid #D3D3D3;'>
                    <img
                    src="img/2.png" />
                </td>
                <td
                    style='padding: 10px 5.5%;'>
                    <img
                    src="img/2.png" />
                </td>
            </tr>
            <tr>
                <td
                    style='vertical-align: top; border-right: 1px solid #D3D3D3;font-size:85%;'>
                    <span>分类</span>
                </td>
                <td
                    style='vertical-align: top; border-right: 1px solid #D3D3D3;font-size:85%;'>
                    <span>做个选择</span>
                </td>
                <td
                    style='vertical-align: top; border-right: 1px solid #D3D3D3;font-size:85%;'>
                    <span>衣友伙伴</span>
                </td>
                <td
                    style='vertical-align: top;font-size:85%;'>
                    <span>参观农场</span>
                </td>
            </tr>
        </table>
    </div>
    <div
        style='float: left; height: 60px; width: 1.5%; background: #8bb7a0;'>
    </div>
    <div
        style='height: 60px; width: 98.5%; float: left; text-align: left; vertical-align: middle;'>
        <hr
            style="height: 1px; border: none; border-top: 1px solid #D3D3D3;" />
        <p style="margin-top:18.5px;">
        <span
            style=' color: #1e394c; font-size: 120%; margin-left: 5%'><b>主打商品</b></span>
                <img
            style='float:right;width:2%; margin:5px 5% 0px 2%;padding-bottom: 0px'
            src="img/3.png">
        <a
            style=' float:right;color: #1e394c;margin-top:2px; font-size: 100%;'><b>更多</b></a>
            </p>
    </div>

    <div
        style='clear: both;'>
        <table
            style='height: 125px; margin-top: 20px; margin-bottom: 10px;'>
            <tr>
                <td
                    rowspan="3"
                    style='width: 34%; padding: 0px 4% 0px 4%'>
                    <img
                    src="img/4.png">
                </td>
                <th colspan="2"
                    style='padding-right: 4%;width: 54%; text-align: left; font-size: 105%'>
                    <span><b>紫罗马生菜</b></span>
                </th>
            </tr>
            <tr>

                <td
                    colspan="2"
                    style='text-align: left; padding-right: 3%; vertical-align: top;font-size: 80%'>
                    <span
                    style=''>可能是上海最好吃的香菜，滋味鲜美，有森林的香气，一口咬下，仿佛置身香...</span>
                </td>
            </tr>
            <tr>
                <td
                    style='width:20%;text-align: left; vertical-align: top'>
                    <span
                    style='color: #8bb7a0; font-size: 120%;'><b>￥25.0</b></span>
                </td>
                <td
                    style='color:#909dad;text-align: left; font-size: 110%; vertical-align: top'>
                    <span>250g/份</span>
                </td>
            </tr>
        </table>


        <table
            style='height: 125px; margin-top: 20px; margin-bottom: 10px;'>
            <tr>
                <td
                    rowspan="3"
                    style='width: 34%; padding: 0px 4% 0px 4%'>
                    <img
                    src="img/4.png">
                </td>
                <th colspan="2"
                    style='padding-right: 4%;width: 54%; text-align: left; font-size: 105%'>
                    <span><b>紫罗马生菜</b></span>
                </th>
            </tr>
            <tr>

                <td
                    colspan="2"
                    style='text-align: left; padding-right: 3%; vertical-align: top;font-size: 80%'>
                    <span
                    style=''>可能是上海最好吃的香菜，滋味鲜美，有森林的香气，一口咬下，仿佛置身香...</span>
                </td>
            </tr>
            <tr>
                <td
                    style='width:20%;text-align: left; vertical-align: top'>
                    <span
                    style='color: #8bb7a0; font-size: 120%;'><b>￥25.0</b></span>
                </td>
                <td
                    style='color:#909dad;text-align: left; font-size: 110%; vertical-align: top'>
                    <span>250g/份</span>
                </td>
            </tr>
        </table>


        <table
            style='height: 125px; margin-top: 20px; margin-bottom: 10px;'>
            <tr>
                <td
                    rowspan="3"
                    style='width: 34%; padding: 0px 4% 0px 4%'>
                    <img
                    src="img/4.png">
                </td>
                <th colspan="2"
                    style='padding-right: 4%;width: 54%; text-align: left; font-size: 105%'>
                    <span><b>紫罗马生菜</b></span>
                </th>
            </tr>
            <tr>

                <td
                    colspan="2"
                    style='text-align: left; padding-right: 3%; vertical-align: top;font-size: 80%'>
                    <span
                    style=''>可能是上海最好吃的香菜，滋味鲜美，有森林的香气，一口咬下，仿佛置身香...</span>
                </td>
            </tr>
            <tr>
                <td
                    style='width:20%;text-align: left; vertical-align: top'>
                    <span
                    style='color: #8bb7a0; font-size: 120%;'><b>￥25.0</b></span>
                </td>
                <td
                    style='color:#909dad;text-align: left; font-size: 110%; vertical-align: top'>
                    <span>250g/份</span>
                </td>
            </tr>
        </table>
    </div>

    <div
        style='float: left; height: 60px; width: 1.5%; background: #8bb7a0;'>
    </div>
    <div
        style='height: 60px; width: 98.5%; float: left; text-align: left; vertical-align: middle;'>
        <hr
            style="height: 1px; border: none; border-top: 1px solid #D3D3D3;" />
        <p style="margin-top:18.5px;">
        <span
            style=' color: #1e394c; font-size: 120%; margin-left: 5%'><b>最热卖商品</b></span>
                <img
            style='float:right;width:2%; margin:5px 5% 0px 2%;padding-bottom: 0px'
            src="img/3.png">
        <a
            style=' float:right;color: #1e394c;margin-top:2px; font-size: 100%;'><b>更多</b></a>
            </p>
    </div>
    <div
        style='clear: both'>
        <table
            style='margin-bottom: 15px'>
            <tr>
                <td
                    style='padding: 30px 4% 15px 4%'>
                    <img
                    src="img/4.png">
                </td>
                <td
                    style='padding: 30px 4% 15px 4%'>
                    <img
                    src="img/4.png">
                </td>
                <td
                    style='padding: 30px 4% 15px 4%'>
                    <img
                    src="img/4.png">
                </td>
            </tr>
            <tr>
                <td>
                    <span style="font-size:85%;">紫罗马生菜</span>
                    <br />
                    <span
                    style='color: #8bb7a0;font-size:85%;"'><b>￥25.0</b></span>
                </td>
                <td>
                    <span style="font-size:85%;">紫罗马生菜</span>
                    <br />
                    <span 
                    style='color: #8bb7a0;font-size:85%;'><b>￥25.0</b></span>
                </td>
                <td> 
                    <span style="font-size:85%;">紫罗马生菜</span>
                    <br />
                    <span
                    style='color: #8bb7a0;font-size:85%;'><b>￥25.0</b></span>
                </td>
            </tr>

                        <tr>
                <td
                    style='padding: 30px 4% 15px 4%'>
                    <img
                    src="img/4.png">
                </td>
                <td
                    style='padding: 30px 4% 15px 4%'>
                    <img
                    src="img/4.png">
                </td>
                <td
                    style='padding: 30px 4% 15px 4%'>
                    <img
                    src="img/4.png">
                </td>
            </tr>
            <tr>
                <td>
                    <span style="font-size:85%;">紫罗马生菜</span>
                    <br />
                    <span
                    style='color: #8bb7a0;font-size:85%;'><b>￥25.0</b></span>
                </td>
                <td>
                    <span style="font-size:85%;">紫罗马生菜</span>
                    <br />
                    <span
                    style='color: #8bb7a0;font-size:85%;'><b>￥25.0</b></span>
                </td>
                <td>
                    <span style="font-size:85%;">紫罗马生菜</span>
                    <br />
                    <span
                    style='color: #8bb7a0;font-size:85%;'><b>￥25.0</b></span>
                </td>
            </tr>
 
            <tr>
                <td
                    style='padding: 30px 4% 15px 4%'>
                    <img
                    src="img/4.png">
                </td>
                <td
                    style='padding: 30px 4% 15px 4%'>
                    <img
                    src="img/4.png">
                </td>
                <td
                    style='padding: 30px 4% 15px 4%'>
                    <img
                    src="img/4.png">
                </td>
            </tr>
            <tr>
                <td>
                    <span style="font-size:85%;">紫罗马生菜</span>
                    <br />
                    <span
                    style='color: #8bb7a0;font-size:85%;'><b>￥25.0</b></span>
                </td>
                <td>
                    <span style="font-size:85%;">紫罗马生菜</span>
                    <br />
                    <span
                    style='color: #8bb7a0;font-size:85%;'><b>￥25.0</b></span>
                </td>
                <td>
                    <span style="font-size:85%;">紫罗马生菜</span>
                    <br />
                    <span
                    style='color: #8bb7a0;font-size:85%;'><b>￥25.0</b></span>
                </td>
            </tr>
        </table>

    </div>

       <div
        style='float: left; height: 60px; width: 1.5%; background: #8bb7a0;'>
    </div>
    <div
        style='height: 60px; width: 98.5%; float: left; text-align: left; vertical-align: middle;'>
        <hr
            style="height: 1px; border: none; border-top: 1px solid #D3D3D3;" />
        <p style="margin-top:18.5px;">
        <span
            style=' color: #1e394c; font-size: 120%; margin-left: 5%'><b>当令菜蔬</b></span>
                <img
            style='float:right;width:2%; margin:5px 5% 0px 2%;padding-bottom: 0px'
            src="img/3.png">
        <a
            style=' float:right;color: #1e394c;margin-top:2px; font-size: 100%;'><b>更多</b></a>
            </p>
    </div>

    <div
        style='clear: both'>
        <table>
            <tr>
                <td
                    style='padding: 30px 4% 15px 4%'>
                    <img
                    src="img/4.png">
                </td>
                <td
                    style='padding: 30px 4% 15px 4%'>
                    <img
                    src="img/4.png">
                </td>
            </tr>
            <tr>
                <td>
                    <span style="font-size:85%;">紫罗马生菜</span>
                    <br />
                    <span
                    style='color: #8bb7a0;font-size:85%;'><b>￥25.0</b></span>
                </td>
                <td>
                    <span style="font-size:85%;">紫罗马生菜</span>
                    <br />
                    <span
                    style='color: #8bb7a0;font-size:85%;'><b>￥25.0</b></span>
                </td>

            </tr>

            <tr>
                <td
                    style='padding: 30px 4% 15px 4%'>
                    <img
                    src="img/4.png">
                </td>
                <td
                    style='padding: 30px 4% 15px 4%'>
                    <img
                    src="img/4.png">
                </td>
            </tr>
            <tr>
                <td>
                    <span style="font-size:85%;">紫罗马生菜</span>
                    <br />
                    <span
                    style='color: #8bb7a0;font-size:85%;'><b>￥25.0</b></span>
                </td>
                <td>
                    <span style="font-size:85%;">紫罗马生菜</span>
                    <br />
                    <span
                    style='color: #8bb7a0;font-size:85%;'><b>￥25.0</b></span>
                </td>
            </tr>
            <tr>
                <td
                    style='padding: 30px 4% 15px 4%'>
                    <img
                    src="img/4.png">
                </td>
                <td
                    style='padding: 30px 4% 15px 4%'>
                    <img
                    src="img/4.png">
                </td>
            </tr>
            <tr>
                <td>
                    <span style="font-size:85%;">紫罗马生菜</span>
                    <br />
                    <span
                    style='color: #8bb7a0;font-size:85%;'><b>￥25.0</b></span>
                </td>
                <td>
                    <span style="font-size:85%;">紫罗马生菜</span>
                    <br />
                    <span
                    style='color: #8bb7a0;font-size:85%;'><b>￥25.0</b></span>
                </td>
            </tr>
        </table>
    </div>
    <div
        style='height: 60px; clear: both;'>
    </div>


    <div
        id='footer'
        style='height: 60px;'>
        <div
            style="padding: 0 2.5%;">

            <table
                style='margin: 8px 0px 8px 0px;'>
                <tr>
                    <td
                        style='width: 19%; margin: 0px; padding: 0px'>
                        <img
                        style='width: 20px;margin-bottom:3px;'
                        src="img/icon_home_2x.png" />
                    </td>
                    <td
                        style='width: 19%; margin: 0px; padding: 0px'>
                        <img
                        style='width: 20px;margin-bottom:3px;'
                        src="img/icon_customerService_2x.png" />
                    </td>
                    <td
                        style='width: 19%; margin: 0px; padding: 0px'>
                        <img
                        style='width: 20px; margin-bottom:3px;'
                        src="img/icon_category_2x.png" />
                    </td>
                    <td
                        style='width: 19%; margin: 0px; padding: 0px'>
                        <a href="../shopping_car/select_goods.jsp">
                        <img
                        style='width: 20px; margin-bottom:3px;'
                        src="img/icon_cart_2x.png" />
                        </a>
                    </td>
                    <td
                        style='width: 19%; margin: 0px; padding: 0px'>
                        <a href="../mine/yimi_我的_账户首页.jsp">
                        <img
                        style='width: 20px;'
                        src="img/icon_mine_2x.png" />
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span
                        style='color: #FFF'>首页</span>
                    </td>
                    <td>
                        <span
                        style='color: #FFF'>客服</span>
                    </td>
                    <td>
                        <span
                        style='color: #FFF'>产品分类</span>
                    </td>
                    <td>
                    <a href="../shopping_car/select_goods.jsp">
                        <span
                        style='color: #FFF'>购物车</span>
                    </a>
                    </td>
                    <td>
                    <a href="../mine/yimi_我的_账户首页.jsp">
                        <span
                        style='color: #FFF'>我的</span>
                   	</a>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</body>
</html>