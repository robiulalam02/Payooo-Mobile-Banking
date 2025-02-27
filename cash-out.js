document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault;
  
    const agentAccount = document.getElementById("acount-number");
    const cashOutAmount = document.getElementById("cash-out-amount");
    const convertedAmount = makeInteger("cash-out-amount");
    const accountPin = document.getElementById("pin");

    // alert(typeof(numericBalance))

    if (
      agentAccount.value.length === 11 &&
      agentAccount.value !== "" &&
      accountPin.value !== "" &&
      cashOutAmount.value >= 50
    ) {
      // alert("good");
      document.getElementById("balance").innerText = finalBalance("balance", convertedAmount);
      alert("cash out Successful");
    } else if (agentAccount.value.length < 11 || agentAccount.value === "") {
      alert("please input correct agent number");
    } else if (convertedAmount < "50") {
      alert("minimum cashout amount is 50");
    } else if (accountPin.value === "") {
      alert("input pin");
    } else {
      alert("cash out unseccessful");
    }
  });

  document.getElementById("add-money").addEventListener('click', function(){
    addClass("add-money", "cash-out");
  })
  document.getElementById("cash-out").addEventListener('click', function(){
    addClass("cash-out", "add-money");
  })