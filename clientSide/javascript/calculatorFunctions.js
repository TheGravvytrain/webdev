function calculateTip() 
{
    let billAmt = document.getElementById("billAmt").value;
    let tipPercentage = document.getElementById("tipPercentage").value;

  //validate input
    if (billAmt === "" || tipPercentage == 0) 
    {
        alert("Please enter some values.");
        return;
    }
    if(tipPercentage > 1)
    {
        alert("Please enter a reasonable value.")
        return;
    }

    let tipAmt = billAmt * tipPercentage;
    tipAmt = Math.round(tipAmt * 100) / 100;
    tipAmt = tipAmt.toFixed(2);
    document.getElementById("tipAmt").innerHTML = "<p style='font-weight: bold; font-size: 14pt;'>Tip Amount: <sup>$</sup>" + tipAmt + "</p>";

    let totalAmt = parseFloat(billAmt) + parseFloat(tipAmt);
    totalAmt = Math.round(totalAmt * 100) / 100;
    totalAmt = totalAmt.toFixed(2);
    document.getElementById("totalAmt").innerHTML = "<p style='font-weight: bold; font-size: 14pt;'>Total: <sup>$</sup>" + totalAmt + "</p>";

    document.getElementById("billAmt").value = "";
    document.getElementById("tipPercentage").value = "";
}

document.getElementById("calculate").onclick = function () 
{
    calculateTip();
};
