 <%@page import="com.Payment"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.6.0.min.js"></script>
<script src="Components/Payment.js"></script>
<meta charset="ISO-8859-1">
<title>Payment</title>
</head>
<body>

<div class="container"><div class="row"><div class="col-6">
		<h1>Payment</h1>

			<form id="formPayemnt" name="formPayemnt">
			
				buyerID:
				<input id="buyerID" name="buyerID" type="text" class="form-control form-control-sm"><br>
		 		sellerID:
				<input id="sellerID" name="sellerID" type="text" class="form-control form-control-sm"><br> 
				productID:
				<input id="productID" name="productID" type="text" class="form-control form-control-sm"><br>
		 		Ammount:
				<input id="Ammount" name="Ammount" type="text" class="form-control form-control-sm"><br>
				Date:
				<input id="Date" name="Date" type="text" class="form-control form-control-sm"><br>

      			<input id="btnMakePayemnt" name="btnMakePayemnt" type="button" value="Save" class="btn btn-primary">
      			<input type="hidden" id="hidPaymentIDSave" name="hidPaymentIDSave" value="">
			</form>
	
			<div id="alertSuccess" class="alert alert-success"></div>
			<div id="alertError" class="alert alert-danger"></div>
			<br>
			<div id="divPayemntGrid">
				<%
					Payment userObj = new Payment(); 
	 				out.print(userObj.getAllPayment()); 
				%>
			</div>
	</div> </div> </div> 


</body>
</html>