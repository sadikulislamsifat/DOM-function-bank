


document.getElementById('deposit-btn').addEventListener('click', function(){
    

    const depositFieldAmount = getInputFieldValueById('deposit-field');
    const previousDipositAmount = getTextElementValueById('deposit-total');
    const totalDeposit = previousDipositAmount + depositFieldAmount;
    
    // setTextElemntValueById('deposit-total', totalDeposit);
    setTotalAmountById('deposit-total', totalDeposit);

    const previousBalance = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalance + depositFieldAmount;
    setTotalAmountById('balance-total', newBalanceTotal);
  
})