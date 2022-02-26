// initialize the counter and the array
var numbernames = 0;
var names = new Array();
function SortNames() 
{
   // Get the name from the text field
   thename = document.theform.newname.value;

   if(!thename == (""))
   {
      // Add the name to the array
      names[numbernames] = thename.toUpperCase();
      // Increment the counter
      numbernames++;
      // Sort the array
      names.sort();

      var numberedList = "";
      for(i = 0; i < names.length; i++)
      {
         numberedList += (i + 1) + ". " + names[i] + "\n";
      }

      document.theform.sorted.value = numberedList;
      // document.theform.sorted.value=names.join("\n");
   }
   document.getElementById("userInput").value = "";
}
