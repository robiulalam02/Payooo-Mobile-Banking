document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const inputNumber = document.getElementById('number-id').value;
    const inputDigit = document.getElementById('digit-id').value;
    if (inputNumber === '' && inputDigit === '') {
        alert("please enter number & pin");
    } else if (inputDigit === ''){
        alert("please enter pin");
    } else if (inputNumber === '') {
        alert("please enter number");
    } else if (inputNumber.length === 11 && inputDigit.length === 4) {
        window.location.href = "home.html"
    } else {
        alert("login failed");
    }
})