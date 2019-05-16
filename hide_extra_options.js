Qualtrics.SurveyEngine.addOnload(function()
{
	// Set constant height/width for form fields
	jQuery("#"+this.questionId+"  .InputText").css("width", "500px");
 	jQuery("#"+this.questionId+"  .InputText").css("height", "100px");
	//jQuery("#"+this.questionId+" td.ControlContainer").css("width", "10px");
	
	//
	var qid = this.questionId;
	var placeholder1 = "Example:  In July, several hundred people in [name of city or other location] attended a rally organized by civil society groups to advocate for changes to government environmental policies. ";
    var placeholder2 = "Example: In August, a newspaper called [name of newspaper] was shut-down by the government after being accused of failing to pay taxes.";
    var placeholder3 = "Example: The government has enacted a new law that makes it easier for NGOs and civil society groups to receive foreign funding.";
	jQuery("#" + qid + " .InputText")[0].setAttribute("placeholder",placeholder1);
	jQuery("#" + qid + " .InputText")[1].setAttribute("placeholder",placeholder2);
	jQuery("#" + qid + " .InputText")[2].setAttribute("placeholder",placeholder3);
	
	
	// Hide all elements in specified range
	for (i = 3; i <  20; i++){
	jQuery("#" + qid + " .InputText")[i].hide()
	jQuery("#"+ qid +" td:not(.ControlContainer)")[i].hide();
	}
	// Insert button after last .InputText
	jQuery("<input type='button' id='add' value='More Events' name='+' />").insertAfter("#"+this.questionId+" .InputText:last");
	// Add sequential click function
	var rowNum = 2;
	jQuery("#add").on("click", function(){
		rowNum++;
		jQuery("#"+ qid +" .InputText")[rowNum].show();
		jQuery("#"+ qid +" td:not(.ControlContainer)")[rowNum].show();
    });
});