/**************/
/* tasks1 */
var age=27;
if (age > 18){
    document.write("1- You are an adult"  + "<br>")
}

/**************/
/* tasks2 */
var score=45;
if ( score <= 50){
    document.write("2- You failed the test" + "<br>")
}

/**************/
/* tasks3 */
var Name="John";
if (Name=="John"){
    document.write("3- Hello, John" + "<br>")
}

/**************/
/* tasks4 */
 var day="Monday";
 if (day != "Saturday" && day != "Sunday"){
    document.write("4- It`s a weekday" + "<br>")
 }

/**************/
/* tasks5 */
 var num=4;
 if ( num%2==0){
      document.write("5- The number is even" + "<br>")
     }

/**************/
/* tasks6 */
  var char="a";
  if (char=="a"){
        document.write("6- It`s a letter" + "<br>")
  }

/**************/
/* tasks7 */
var list=[1,2,3];
if (list="1,2,3"){
     document.write("7- It`s an array" + "<br>")
    }

/**************/
/* tasks8 */
var x=5;
if (x>0){
     document.write("8- x is a positive number" + "<br>")
    }

 /**************/
/* tasks9 */
var y=-5;
if (y<0){
     document.write("9- y is a negative number" + "<br>")
    }

/**************/
/* tasks10 */
var z=9;
if (z % 3 == 0){
     document.write("10- z is a multiple of 3" + "<br>")
    } 
    
/**************/
/* tasks11 */
var GPA="A";
switch (GPA){
    case "A":
   document.write("11- Excellent" + "<br>")
   break;

   case "B":
   document.write("Very Good")
   break;
   
   case "C":
    document.write("Good")
    break;

    case "F":
        document.write("Failed")
        break;

  default:
    document.write("11- a proper message" + "<br>")
}

/**************/
/* tasks12 */
var month = "January"; 
if (month === "December" , month === "January" || month === "February"){
    document.write("12-January is a winter month"+"<br>" )}
else if (month === "March" || month === "April" || month === "May") {}
    
 else if (month === "June" || month === "July" || month === "August"){}
     
  else if (month === "September" || month === "October" || month === "November"){  }
    


/**************/
/* tasks13 */
var password="mypassword123";
if (password.length >= 8){
     document.write("13- Your password is strong" + "<br>")
    } 

/**************/
/* tasks14 */

var enteremail = "admin@admin.com";
var enterpassword = "12345Admin";

const correctemail="admin@admin.com";
const correctpassword="12345Admin";

if(enteremail !== correctemail){
    document.write("14- Incorrect email")
} else if (enterpassword !== correctpassword){
    document.write("14- Incorrect password")
} else{
    document.write("14- Welcome" )
}

/**************/
/* tasks15 */
