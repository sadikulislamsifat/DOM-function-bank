

function getInputFieldValueById(inputId){
    const inputFieldValue = document.getElementById(inputId);
    const inputFieldValueString = inputFieldValue.value;
    const inputFieldAmount = parseFloat(inputFieldValueString);

    inputFieldValue.value = '';

    return inputFieldAmount;
}



function getTextElementValueById(elementId){
    const elementValue = document.getElementById(elementId);
    const elementValueString = elementValue.innerText;
    const previousElementAmount = parseFloat(elementValueString);
    
    return previousElementAmount;
}

function setTotalAmountById(element, newValue){
    const textElement = document.getElementById(element);
    textElement.innerText = newValue;
}

