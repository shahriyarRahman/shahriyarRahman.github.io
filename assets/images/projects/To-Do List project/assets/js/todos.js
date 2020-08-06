// Check off specific todo item by clicking
$("ul").on("click", "li", function () {
	// //in javascript colors can be compared only in rgb values 
	// if ($(this).css("color") === "rgb(128, 128, 128)")
	//  {
	//  	$(this).css({
	// 		color: 'black',
	// 		textDecoration: 'none'
	// 		});
	//  }
	//  else{
	// 	$(this).css({
	// 		color: 'gray',
	// 		textDecoration: 'line-through',
	// 		});
	// 	}	
	$(this).toggleClass("completed");
})

//Click on button  to delete todo item

$("ul").on("click", "span", function (event) {
	//we cannot directly remove because remove function does not wait item to fade out
	$(this).parent().fadeOut(500, function () {
		$(this).remove();
	});
	//stop propagation stops the propagation of an event to its parent elements
	event.stopPropagation();
})

//Creating a new todo item
$("input[type = 'text']").keypress(function (event) {
	if (event.which === 13) {
		//storing the value of the text field
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
})

//TOggle add new item input field 
$(".fa-plus").click(function () {
	$("input[type = 'text']").fadeToggle();
})