$(document).on("click", "#btnMakePayemnt", function(event){ 
	
	
	// Form validation-------------------
	var status = validatePaymentForm(); 
	if (status != true) { 
 		$("#alertError").text(status); 
 		$("#alertError").show(); 
 		return; 
 	} 

	// If valid------------------------
	var type = ($("#hidPaymentIDSave").val() == "") ? "POST" : "PUT"; 
 	
 	$.ajax( 
 	{ 
 		url : "PaymentAPI", 
 		type : type, 
 		data : $("#formPayemnt").serialize(), 
 		dataType : "text", 
	 	complete : function(response, status) { 
 			onMakePaymentComplete(response.responseText, status); 
	} 
 	}); 
});


// CLIENT-MODEL================================================================
function validatePaymentForm(){

	if ($("#buyerID").val().trim() == ""){
		return "Insert Item buyer ID.";
	}

	if ($("#sellerID").val().trim() == ""){
		return "Insert seller ID.";
	}


	if ($("#productID").val().trim() == ""){
		return "Insert product ID.";
	}

	if ($("#Ammount").val().trim() == ""){
		return "Insert Ammount.";
	}

	if ($("#Date").val().trim() == ""){
		return "Insert Date.";
	}

	
	return true;
}


function onMakePaymentComplete(response, status){ 
	if (status == "success") { 
 		var resultSet = JSON.parse(response); 
 		if (resultSet.status.trim() == "success") { 
 			$("#alertSuccess").text("Successfully saved."); 
 			$("#alertSuccess").show(); 
 			$("#divPayemntGrid").html(resultSet.data); 
 		} else if (resultSet.status.trim() == "error") { 
 			$("#alertError").text(resultSet.data); 
 			$("#alertError").show(); 
 		} 
 	} else if (status == "error") { 
 		$("#alertError").text("Error while saving."); 
 		$("#alertError").show(); 
 	} else { 
 		$("#alertError").text("Unknown error while saving.."); 
 		$("#alertError").show(); 
 	}
		$("#hidPaymentIDSave").val(""); 
		$("#formPayemnt")[0].reset(); 
}


$(document).on("click", ".btnRemove", function(event) { 
		 $.ajax( 
		 	{ 
		 	url : "PaymentAPI", 
		 	type : "DELETE", 
		 	data : "paymentID=" + $(this).data("paymentid"),
		 	dataType : "text", 
		 	complete : function(response, status) { 
		 		onItemDeleteComplete(response.responseText, status); 
		 	} 
		}); 
})
		
function onItemDeleteComplete(response, status){ 
	if (status == "success") { 
 		var resultSet = JSON.parse(response); 
 		if (resultSet.status.trim() == "success") { 
 			$("#alertSuccess").text("Successfully deleted."); 
 			$("#alertSuccess").show(); 
 			$("#divItemsGrid").html(resultSet.data); 
 		} else if (resultSet.status.trim() == "error") { 
 			$("#alertError").text(resultSet.data); 
 			$("#alertError").show(); 
 		} 
 	} else if (status == "error") { 
 		$("#alertError").text("Error while deleting."); 
 		$("#alertError").show(); 
 	} else { 
 		$("#alertError").text("Unknown error while deleting.."); 
 		$("#alertError").show(); 
 	} 
}
