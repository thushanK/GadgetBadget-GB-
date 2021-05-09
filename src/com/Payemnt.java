package com;

import java.sql.*; 

public class Payemnt {
	
	private Connection connect(){
		Connection con = null;
		try{
			Class.forName("com.mysql.jdbc.Driver");

			//Provide the correct details: DBServer/DBName, username, password
			con = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/paf_project", "root", "");
		}catch (Exception e){
			e.printStackTrace();
		}
		return con;
	 }
	
	public String makePayment(String paymentID, String buyerID, String sellerID, String productID, String Ammount, String Date){
		String output = "";
		try{
			Connection con = connect();
			if (con == null){
				return "Error while connecting to the database for inserting."; 
			}
			// create a prepared statement
			String query = " insert into payment (`paymentID`,`buyerID`,`sellerID`,`productID`,`Ammount`,`Date`)" + " values (?, ?, ?, ?, ?, ?)";
			PreparedStatement preparedStmt = con.prepareStatement(query);
			// binding values
			preparedStmt.setInt(1, 0);
			preparedStmt.setString(2, buyerID);
			preparedStmt.setString(3, sellerID);
			preparedStmt.setString(4, productID);
			preparedStmt.setString(5, Ammount);
			preparedStmt.setString(6, Date);
			// execute the statement
	 
			preparedStmt.execute();
			con.close();
			 String newPayemnt = getAllPayment(); 
			 output = "{\"status\":\"success\", \"data\": \"" + newPayemnt + "\"}"; 
		}
		catch (Exception e){
			output = "{\"status\":\"error\", \"data\": \"Error while inserting the item.\"}"; 
			 System.err.println(e.getMessage());
		}
		return output;
	 }
	
	//to read all user
	public String getAllPayment(){
		
		String output = "";
		try{
			Connection con = connect();
			if (con == null){
				return "Error while connecting to the database for reading."; 
			}
			// Prepare the html table to be displayed
			output = "<table border='1'><tr><th>paymentID</th><th>buyerID</th>" +
					"<th>sellerID</th>" +
					"<th>productID</th>" +
					"<th>Ammount</th>" +
					"<th>Date</th>" +
					"<th>Update</th><th>Remove</th></tr>";

			String query = "select * from payment";
			Statement stmt = con.createStatement();
			ResultSet rs = stmt.executeQuery(query);
			// iterate through the rows in the result set
			while (rs.next()){
				String paymentID = Integer.toString(rs.getInt("paymentID"));
				String buyerID = Integer.toString(rs.getInt("buyerID"));
				String sellerID = Integer.toString(rs.getInt("sellerID"));
				String productID = Integer.toString(rs.getInt("productID"));
				String Ammount = rs.getString("Ammount");
				String Date = rs.getString("Date");
				// Add into the html table
				output += "<tr><td>" + paymentID + "</td>";
				output += "<td>" + buyerID + "</td>";
				output += "<td>" + sellerID + "</td>";
				output += "<td>" + productID + "</td>";
				output += "<td>" + Ammount + "</td>";
				output += "<td>" + Date + "</td>";
				// buttons
				output += "<td><input name='btnUpdate' type='button' value='Update' "
						+ "class='btnUpdate btn btn-secondary' data-itemid='" + paymentID + "'></td>"
						+ "<td><input name='btnRemove' type='button' value='Remove' "
						+ "class='btnRemove btn btn-danger' data-itemid='" + paymentID + "'></td></tr>"; 
			}
			con.close();
			// Complete the html table
			output += "</table>";
		}catch (Exception e){
			output = "Error while reading the items.";
			System.err.println(e.getMessage());
		}
		return output;
	 }
	
	

	public String canclePayment(String paymentID){
	 
		String output = "";
		try{
	 
			Connection con = connect();
			if (con == null){
				return "Error while connecting to the database for deleting."; 
			}
			// create a prepared statement
			String query = "delete from payment where paymentID=?";
			PreparedStatement preparedStmt = con.prepareStatement(query);
			// binding values
			preparedStmt.setInt(1, Integer.parseInt(paymentID));
			// execute the statement
			preparedStmt.execute();
			con.close();
			 String newPayemnt = getAllPayment(); 
			 output = "{\"status\":\"success\", \"data\": \"" + newPayemnt + "\"}"; 
		
		}catch (Exception e){
			output = "{\"status\":\"error\", \"data\": \"Error while inserting the item.\"}"; 
			 System.err.println(e.getMessage());
		}
		return output;
	 }
	

}