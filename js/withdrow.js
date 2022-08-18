

  document.getElementById('withdrow-btn').addEventListener('click', function(){

    const withdrowFieldAmount = getInputFieldValueById('withdrow-field');
    const previousWithdrowAmount = getTextElementValueById('withdrow-total');
    const totalWithdrowAmount = withdrowFieldAmount + previousWithdrowAmount;
    setTotalAmountById('withdrow-total', totalWithdrowAmount);

    const previousBalanceTotal = getTextElementValueById('balance-total');
    const finalBalance = previousBalanceTotal - withdrowFieldAmount;
    setTotalAmountById('balance-total', finalBalance);
  })