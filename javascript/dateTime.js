// function getTime()
// {
//     // create a variable
//     currentDateTime = new Date();
//     // variables to hold the string representation of the current date
//     localTime = currentDateTime.toString();
//     return localTime;
// }

function customDate()
{
    var birthTime = new Date();

    birthTime.setYear(2000);
    birthTime.setMonth(10);    // birthTime.setFullYear(2000, 10, 03) replaces these three variables
    birthTime.setDate(04);

    birthTime.setHours(12);
    birthTime.setMinutes(24);
    birthTime.setSeconds(17);
    birthTime.setMilliseconds(245);

    document.getElementById('birthTime').innerHTML = "<strong> Birth Date/Time: </strong>" + birthTime.toString();
    document.getElementById('simpTime').innerHTML = "<strong> Birth Date/Time (simplified): </strong>" + birthTime.toLocaleString();
}