document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault;

    const agentAccount = document.getElementById("acount-number");
    const cashOutAmount = document.getElementById("cash-out-amount");
    const convertedAmount = parseFloat(cashOutAmount.value);
    const accountPin = document.getElementById("pin");
    const balance = document.getElementById("balance").innerText;
    const numericBalance = parseFloat(balance);

    // alert(typeof(numericBalance))

    if (
      agentAccount.value.length === 11 &&
      agentAccount.value !== "" &&
      accountPin.value !== "" &&
      cashOutAmount.value !== ""
    ) {
      // alert("good");
      const totalBalance = numericBalance - convertedAmount;
      document.getElementById("balance").innerText = totalBalance;
      alert("cash out Successful");
    } else if (agentAccount.value.length < 11 || agentAccount.value === "") {
      alert("please input correct agent number");
    } else if (convertedAmount < "50") {
      alert("minimum cashout amount is 50");
    } else if (accountPin.value === "") {
      alert("input pin");
    } else {
      alert("cash out unseccessful")
    }
  });
