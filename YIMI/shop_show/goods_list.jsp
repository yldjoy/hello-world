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
        var img = new Array("img/1.png", "img/4.png");
        $("#slip_img").attr("src", img[n]);
    }
    setInterval("changeImg((n++)%2)", 2000);
</script>

<style
    type="text/css">
hr,table th,table td,div,p {
    margin: 0px;
    padding: 0px;
    color: #1e394c;
}

table {
    width: 100%;
    text-align: center;
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
        style='float: left; height: 70px; width: 2%; background: #8bb7a0;'>
    </div>
    <div
        style='height: 70px; width: 98%; float: left; text-align: left; vertical-align: middle;'>
        <hr
            style="height: 1px; border: none; border-top: 1px solid #D3D3D3;" />
        <span
            style='line-height: 70px; color: #1e394c; font-size: 150%; margin-left: 5%'><b>当令菜蔬</b></span>
        <a
            style='line-height: 70px; color: #1e394c; font-size: 120%; margin-left: 50%;'><b>更多</b></a>
        <img
            style='height: 20px; margin-left: 1%; padding-bottom: 0px'
            src="img/3.png">
    </div>

    <div
        style='clear: both'>
        <table>
            <tr>
                <td
                    style='padding: 30px 15px 15px 10px;'>
                    <img
                    src="img/4.png">
                </td>
                <td
                    style='padding: 30px 15px 15px 10px'>
                    <img
                    src="img/4.png">
                </td>
            </tr>
            <tr>
                <td>
                    <span>紫罗马生菜</span>
                    <br />
                    <span
                    style='color: #8bb7a0;'><b>￥25.0</b></span>
                </td>
                <td>
                    <span>紫罗马生菜</span>
                    <br />
                    <span
                    style='color: #8bb7a0;'><b>￥25.0</b></span>
                </td>
            </tr>
            <tr>
                <td
                    style='padding: 30px 15px 15px 10px;'>
                    <img
                    src="img/4.png">
                </td>
                <td
                    style='padding: 30px 15px 15px 10px'>
                    <img
                    src="img/4.png">
                </td>
            </tr>
            <tr>
                <td>
                    <span>紫罗马生菜</span>
                    <br />
                    <span
                    style='color: #8bb7a0;'><b>￥25.0</b></span>
                </td>
                <td>
                    <span>紫罗马生菜</span>
                    <br />
                    <span
                    style='color: #8bb7a0;'><b>￥25.0</b></span>
                </td>
            </tr>
            <tr>
                <td
                    style='padding: 30px 15px 15px 10px;'>
                    <img
                    src="img/4.png">
                </td>
                <td
                    style='padding: 30px 15px 15px 10px'>
                    <img
                    src="img/4.png">
                </td>
            </tr>
            <tr>
                <td>
                    <span>紫罗马生菜</span>
                    <br />
                    <span
                    style='color: #8bb7a0;'><b>￥25.0</b></span>
                </td>
                <td>
                    <span>紫罗马生菜</span>
                    <br />
                    <span
                    style='color: #8bb7a0;'><b>￥25.0</b></span>
                </td>
            </tr>
        </table>
    </div>

</body>
</html>