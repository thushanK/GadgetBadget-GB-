$(document).on("click", "#btnCreateAccount", function(event){ 
	
	
	// Form validation-------------------
	var status = validateLoginForm(); 
	if (status != true) { 
 		$("#alertError").text(status); 
 		$("#alertError").show(); 
 		return; 
 	} 

	// If valid------------------------
	var type = ($("#hidItemIDSave").val() == "") ? "POST" : "PUT"; 
 	
 	$.ajax( 
 	{ 
 		url : "UserAPI", 
 		type : type, 
 		data : $("#formItem").serialize(), 
 		dataType : "text", 
	 	complete : function(response, status) { 
 			onItemSaveComplete(response.responseText, status); 
	} 
 	}); 
});


// CLIENT-MODEL================================================================
function validateLoginForm(){
	// LastName
	if ($("#LastName").val().trim() == ""){
		return "Insert Item Last Name.";
	}
	// FirstName
	if ($("#FirstName").val().trim() == ""){
		return "Insert First Name.";
	}

	// Email-------------------------------
	if ($("#Email").val().trim() == ""){
		return "Insert Email.";
	}
	// Password-------------------------------
	if ($("#Password").val().trim() == ""){
		return "Insert Password.";
	}
	// Country-------------------------------
	if ($("#Country").val().trim() == ""){
		return "Insert Country.";
	}
	// ContactNumber-------------------------------
	if ($("#ContactNumber").val().trim() == ""){
		return "Insert Contact Number.";
	}
	
	return true;
}


function onItemSaveComplete(response, status){ 
	if (status == "success") { 
 		var resultSet = JSON.parse(response); 
 		if (resultSet.status.trim() == "success") { 
 			$("#alertSuccess").text("Successfully saved."); 
 			$("#alertSuccess").show(); 
 			$("#divItemsGrid").html(resultSet.data); 
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
		$("#hidItemIDSave").val(""); 
		$("#formItem")[0].reset(); 
}
