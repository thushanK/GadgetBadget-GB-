<%@page import="com.User"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.6.0.min.js"></script>
<script src="Components/user.js"></script>
<meta charset="ISO-8859-1">
<title>User Account</title>
</head>
<body>
	<div class="container"><div class="row"><div class="col-6">
		<h1>User Account</h1>

			<form id="formUser" name="formUser">
			
				Last Name:
				<input id="LastName" name="LastName" type="text" class="form-control form-control-sm"><br>
		 		First Name:
				<input id="FirstName" name="FirstName" type="text" class="form-control form-control-sm"><br> 
				Email:
				<input id="Email" name="Email" type="text" class="form-control form-control-sm"><br>
		 		Password:
				<input id="Password" name="Password" type="text" class="form-control form-control-sm"><br>
				Country:
				<input id="Country" name="Country" type="text" class="form-control form-control-sm"><br>
				Contact Number:
				<input id="ContactNumber" name="ContactNumber" type="text" class="form-control form-control-sm"><br>

      			<input id="btnCreateAccount" name="btnCreateAccount" type="button" value="Save" class="btn btn-primary">
      			<input type="hidden" id="hidItemIDSave" name="hidItemIDSave" value="">
			</form>
	
			<div id="alertSuccess" class="alert alert-success"></div>
			<div id="alertError" class="alert alert-danger"></div>
			<br>
			<div id="divItemsGrid">
				<%
	 				User userObj = new User(); 
	 				out.print(userObj.readAllUser()); 
				%>
			</div>
	</div> </div> </div> 

</body>
</html>