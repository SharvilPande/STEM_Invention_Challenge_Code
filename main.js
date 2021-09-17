test_score_1 = 0;
test_score_2 = 0;
test_score_3 = 0;

/*if(!document.getElementById("below_three").checked | !(document.getElementById("from_three_to_four").checked) | !(document.getElementById("five_and_over").checked)) {
    window.alert("Please select your age before clicking on eyechart for the test or else, you'll face a black screen. To get out of the black screen, click anywhere and then select your age please.");
    document.getElementById("chart1").innerHTML = "<div class='modal fade' id='chart1' disabled='disabled'>";
} */

window.onload = document.getElementById("five_and_over").checked = true;
   

function r1() {
    document.getElementById("chart1_6").style.display = "none";   
    document.getElementById("chart1_7").style.display = "none";   
    document.getElementById("chart1_8").style.display = "none";   
    document.getElementById("chart1_9").style.display = "none";   
    document.getElementById("chart1_10").style.display = "none";   
    document.getElementById("chart1_11").style.display = "none";   
}

function r2() {
    document.getElementById("chart1_6").style.display = "";
    document.getElementById("chart1_7").style.display = "none";   
    document.getElementById("chart1_8").style.display = "none";   
    /*document.getElementById("chart1_9").style.display = "none";   
    document.getElementById("chart1_10").style.display = "none";   
    document.getElementById("chart1_11").style.display = "none"; */
   
}

function r3() {
    document.getElementById("chart1_6").style.display = "";
    document.getElementById("chart1_7").style.display = "";
    document.getElementById("chart1_8").style.display = "";
   /* document.getElementById("chart1_9").style.display = "none";   
    document.getElementById("chart1_10").style.display = "none";   
    document.getElementById("chart1_11").style.display = "none"; */
}
 
function submit1() 
{
    test_score_1 = 0; 
    test_score_2 = 0;
    test_score_3 = 0;
    val1 = document.getElementById("chart1_1").value;
    val2 = document.getElementById("chart1_2").value;
    val3 = document.getElementById("chart1_3").value;
    val4 = document.getElementById("chart1_4").value;
    val5 = document.getElementById("chart1_5").value;
    val6 = document.getElementById("chart1_6").value;
    val7 = document.getElementById("chart1_7").value;
    val8 = document.getElementById("chart1_8").value;
  /*  val9 = document.getElementById("chart1_9").value;
    val10 = document.getElementById("chart1_10").value;
    val11 = document.getElementById("chart1_11").value; */
    if (document.getElementById("below_three").checked)
   {
    if(val1 == "E"){
       test_score_1 += 1;
    } 
    if(val2 == "FP"){
        test_score_1 += 1;
    } 
    if(val3 == "TOZ"){
        test_score_1 += 1;
    } 
    if(val4 == "LPED"){
        test_score_1 += 1;
    } 
    if(val5 == "PECFD"){
        test_score_1 += 1;
    } 
    if (test_score_1 == 5) {
       window.alert("Your score was " + test_score_1 + " out of 5. Therefore, your eye health is exceptional. Although, remember it's always good to have a break from screen from time-to-time. Thank you for choosing Sharvil eye tests."); 
    }
    if (test_score_1 >= 0 & test_score_1 <= 2) {
       window.alert("Your score was " + test_score_1 + " out of 5. I suggest that you consult with an ophthalmologist as soon as possible. The contact number for ophthalmologist is provided to you below in the contatc section. Thank you for choosing Sharvil eye tests.");
    }
    if (test_score_1 >= 3 & test_score_1 <= 4) {
        window.alert("Your score was " + test_score_1 + " out of 5. You should really take a break for some time or rest you eyes for now. Thank you for choosing Sharvil eye tests.");
    }

  }

  if (document.getElementById("from_three_to_four").checked) 
  {
    
      if(val1 == "E"){
        test_score_2 += 1;
     } 
     if(val2 == "FP"){
        test_score_2 += 1;
    } 
    if(val3 == "TOZ"){
        test_score_2 += 1;
    } 
    if(val4 == "LPED"){
        test_score_2 += 1;
    } 
    if(val5 == "PECFD"){
        test_score_2 += 1;
    } 
    if(val6 == "EDFCZP"){
        test_score_2 += 1;
    }
  
  if (test_score_2 == 6) {
     window.alert("Your score was " + test_score_2 + " out of 6. Therefore, your eye health is very good. Although, remember it's always good to have a break from screen from time-to-time. THank you for choosing Sharvil eye tests."); 
  }
  if (test_score_2 >= 0 & test_score_2 <= 2) {
     window.alert("Your score was " + test_score_2 + " out of 6. I suggest that you consult with an ophthalmologist as soon as possible. The contact number for ophthalmologist is provided to you below in the contatc section. Thank you for choosing Sharvil eye tests.");
  }
  if (test_score_2 >= 3 & test_score_2 <= 5) {
      window.alert("Your score was " + test_score_2 + " out of 6. You should really take a break for some time or rest you eyes for now. Thank you for choosing Sharvil eye tests.");
  }

}

if (document.getElementById("five_and_over").checked) 
{
  
    if(val1 == "E"){
      test_score_3 += 1;
   } 
   if(val2 == "FP"){
    test_score_3 += 1;
  } 
  if(val3 == "TOZ"){
    test_score_3 += 1;
  } 
  if(val4 == "LPED"){
    test_score_3 += 1;
  } 
  if(val5 == "PECFD"){
    test_score_3 += 1;
  } 
  if(val6 == "EDFCZP"){
    test_score_3 += 1;
  }
  if(val7 == "FELOPZD"){
    test_score_3 += 1;
  }
  if (val8 == "DEFPOTEC") {
    test_score_3 += 1;
  }
if (test_score_3 == 8) {
   window.alert("Your score was " + test_score_3 + " out of 8. Therefore, your eye health is very good. Although, remember it's always good to have a break from screen from time-to-time. THank you for choosing Sharvil eye tests."); 
}
if (test_score_3 >= 0 & test_score_3 <= 3) {
   window.alert("Your score was " + test_score_3 + " out of 8. I suggest that you consult with an ophthalmologist as soon as possible. The contact number for ophthalmologist is provided to you below in the contatc section. Thank you for choosing Sharvil eye tests.");
}
if (test_score_3 >= 4 & test_score_3 <= 7) {
    window.alert("Your score was " + test_score_3 + " out of 8. You should really take a break for some time or rest you eyes for now. Thank you for choosing Sharvil eye tests.");
}

}

for (i=1;i<9;i++)
{
    ValId="chart1_"+i;
    document.getElementById(ValId).value="";
} 

} 


 
