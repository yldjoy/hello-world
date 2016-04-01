<%@ page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<div
    style='height: 50px; width: 100%;clear: both; display: block; background: #8bb7a0; text-align: center;position: fixed;'>
    <form action="yimi" method="post">
        <img
<%--             src="${application.webroot}/common/img/6.png" --%>
            src="../common/img/login_yimi_return.png"
            align="left" onclick="back()"
            style="height: 30px; width: 30px; margin: 10px" />
        <input
            type="text"
            style="height: 35px; width: 60%; text-align: left; margin: 6px 0 5px 0; padding: 0;border: 0; outline: none;border-radius:5px;">
        <a href="../shop_show/quick_jump.jsp">
            <img
            <%-- src="${application.webroot}/common/img/7.png" --%>
            src="../common/img/login_yimi_menu.png"
            align="right"
            style="height: 30px; width: 30px; margin: 10px;margin-right: 25px;" />
        </a>
        
    </form>
    

</div>

    <div  style='height: 50px; clear: both; display: block'></div>