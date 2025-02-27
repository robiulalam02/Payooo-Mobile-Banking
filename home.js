document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const selectBannk = document.getElementById('select-bank');
    const accountNumber = document.getElementById('bank-ac-no');
    const moneyAmount = document.getElementById('add-amount');
    const convertedAmount = parseFloat(moneyAmount.value);
    const accountPin = document.getElementById('account-pin');
    const convertedPin = parseInt(accountPin.value);
    const balance = document.getElementById('balance').innerText;
    const numericBalance = parseFloat(balance);


    if (selectBannk.value !== "Select bank" && accountNumber.value.length === 11 && moneyAmount.value >= 50 && accountPin.value !== "") {
        const totalBalance = numericBalance + convertedAmount;
        document.getElementById('balance').innerText = totalBalance;
        alert("Add Money Successful")
    } else if (selectBannk.value === "Select bank") {
        alert("please select bank");
    } else if (accountNumber.value === "" || accountNumber.value.length < 11) {
        alert("please input correct account number");
    } else if (moneyAmount.value === "") {
        alert("please input Amount");
    } else if (accountPin.value === "") {
        alert("please input pin");
    } else {
        alert("Add Money Failed")
    }
})

document.getElementById('add-money').addEventListener('click', function(){
    document.getElementById('cash-out-section').style.display = "none";
    document.getElementById('add-money-section').style.display = "block";
})
document.getElementById('cash-out').addEventListener('click', function(){
    document.getElementById('add-money-section').style.display = "none";
    document.getElementById('cash-out-section').style.display = "block";
})