function makeInteger(id) {
    const getId = document.getElementById(id).value;
    const convertId = parseFloat(getId);
    return convertId;
}

function finalBalance(id, value) {
    const showAmount = document.getElementById(id).innerText
    const convertedAmount = parseFloat(showAmount);
    const sum = convertedAmount - value;
    return sum;
}

function addClass(id1, id2) {
    document.getElementById(id1).classList.add("options");
    document.getElementById(id2).classList.remove("options");
}