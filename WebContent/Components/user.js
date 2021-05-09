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
 		data : $("#formUser").serialize(), 
 		dataType : "text", 
	 	complete : function(response, status) { 
 			onUserSaveComplete(response.responseText, status); 
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


function onUserSaveComplete(response, status){ 
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
		$("#formUser")[0].reset(); 
}


$(document).on("click", ".btnRemove", function(event) { 
		 $.ajax( 
		 	{ 
		 	url : "UserAPI", 
		 	type : "DELETE", 
		 	data : "userID=" + $(this).data("userid"),
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

// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event) {
 
		$("#hidItemIDSave").val($(this).data("userID")); 
		
		$("#LastName").val($(this).closest("tr").find('td:eq(1)').text()); 
		$("#FirstName").val($(this).closest("tr").find('td:eq(2)').text()); 
	 	$("#Email").val($(this).closest("tr").find('td:eq(3)').text()); 
		$("#Password").val($(this).closest("tr").find('td:eq(4)').text()); 
		$("#Country").val($(this).closest("tr").find('td:eq(5)').text()); 
		$("#ContactNumber").val($(this).closest("tr").find('td:eq(6)').text()); 
});


