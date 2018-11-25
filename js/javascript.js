/*
   Name: Mohammad Taaha
   91.61 Assignment:  Creating an Interactive Dynamic Table
   Mohammad Taaha, UMass Lowell Computer Science Student,mohammad_taaha@student.uml.edu
   Copyright (c) 2018 by Mohammad Taaha.  All rights reserved.  May be
freely copied or excerpted for educational purposes with credit to the
author.
   Created on 11/13/2018
	 Description:This webpage will take an input from the user background
   and create a dynamic multiplication table. The user cannot only enter digits
   and will be thrown a message asking them to enter a valid input. I have also
   designed the multiplcation table using css.
*/


function multiplier() {

	 var horizontal_1 = document.getElementById('fh_axis').value;
	 var horizontal_2 = document.getElementById('sh_axis').value;
	 var vertical_1 = document.getElementById('fv_axis').value;
	 var vertical_2 = document.getElementById('sv_axis').value;


	 if (vertical_2 < vertical_1) {
	  	var temp = vertical_1;
		 vertical_1 = vertical_2;
	  	vertical_2 = temp;
	  }

	  if (horizontal_2 < horizontal_1) {
	  	var temp_2 = horizontal_1;
	  	horizontal_1 = horizontal_2;
	  	horizontal_2 = temp_2;
		 document.getElementById('table').innerHTML = horizontal_2;

	  }


	  //displays output back to html


	 var result = '';
	 result = "<table border='2px'>";

	 var background_color = "#FFFAFA";
	 var calc_color = "#008000";
	 result += "<th style='width:30px;background-color:" + background_color + "'>" + "</th>";

	 for (var k = horizontal_1; k <= horizontal_2; k++) { //sets up the header
	 	result += "<th style='width:30px;background-color:" + background_color + "'>" + k + "</th>";
	 }
	 result += ("</tr>");

	  //displays output back to html

	 for (var i = vertical_1; i <= vertical_2; i++) { //goes through a for loop of horizonal and vertical numbers
	 	result += "<th style='width:30px;background-color:" + background_color + "'>" + i + "</th>"; //sets up the header
	 	for (var j = horizontal_1; j <= horizontal_2; j++) {
	 		result += "<td style='width:30px;background-color:" + calc_color + "'>" + i * j + "</td>";
	 	}
	 	result += ("</tr>");
	 }

	 result += ("</table>");
	  document.getElementById('table').innerHTML = result; //displays output back to html
}
