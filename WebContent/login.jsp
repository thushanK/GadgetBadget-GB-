<%@page import="com.User"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<link rel="stylesheet" href="Views/login.css" />
<script src="Components/jquery-3.6.0.min.js"></script>
<script src="Components/user.js"></script>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>


<div class="container" id="container">
  <div class="form-container sign-up-container">
    <form action="RegisterControllerServlet" method="post">
      <h1>Create Account</h1>
 
      <span>or use your email for registration</span>
      <input type="text" placeholder="LastName"  name="LastName"/>
      <input type="email" placeholder="FirstName" name="FirstName" />
      <input type="password" placeholder="Email" name="Email"/>
      <input type="text" placeholder="Password" name="Password"/>
      <input type="text" placeholder="Country" name="Country"/>
      <input type="text" placeholder="Contact Number" name="ContactNumber"/>
      <br>
      <button>Sign Up</button>
    </form>
  </div>
  <div class="form-container sign-in-container">
    <form action="LoginControllerServlet" method="post">
      <h1>Sign in</h1>
      
      <span>or use your account</span>
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password"/>
      <a href="#">Forgot your password?</a>
      <button>Sign In</button>
    </form>
  </div>
  <div class="overlay-container">
    <div class="overlay">
      <div class="overlay-panel overlay-left">
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please login with your personal info</p>
        <button class="ghost" id="signIn">Sign In</button>
      </div>
      <div class="overlay-panel overlay-right">
        <h1>Hello, Friend!</h1>
        <p>Enter your personal details and start journey with us</p>
        <button class="ghost" id="signUp">Sign Up</button>
      </div>
    </div>
  </div>
</div>

<!-- <footer>

</footer> -->
<script src="./js/login.js"></script>

</body>
</html>