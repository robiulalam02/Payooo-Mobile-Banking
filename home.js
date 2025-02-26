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

    if (selectBannk.value !== "Select bank" && accountNumber.value.length === 11 && moneyAmount.value >= 50) {
        const totalBalance = numericBalance + convertedAmount;
        document.getElementById('balance').innerText = totalBalance;
    }
})





if (selectBannk.value === "Select bank") {
    alert("please select bank");
}

if (accountNumber.value === "" || typeof(accountNumber.value) !== "number") {
    alert("please input correct account number");
}
if (moneyAmount.value === "" || typeof(accountNumber.value) !== "number") {
    alert("please input correct Amount");
}
if (accountPin.value === "" || typeof(accountNumber.value) !== "number") {
    alert("please input correct pin");
}