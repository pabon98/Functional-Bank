function doubleIt(num) {
  const result = num * 2;
  return result;
}
const fiveDouble = doubleIt(5);
const sevenDouble = doubleIt(7);

function getInput(inputId) {
  // debugger;
  const inputField = document.getElementById(inputId);
  const inputAmounText = inputField.value;
  const depositAmount = parseFloat(inputAmounText);
  //clear input field
  inputField.value = "";
  return depositAmount;
}
function updateTotalField(totalFieldId, amount) {
  // debugger;
  const depositTotal = document.getElementById(totalFieldId);
  depositTotalText = depositTotal.innerText;
  const previousTotal = parseFloat(depositTotalText);

  depositTotal.innerText = previousTotal + amount;
}
function getCurrentBalance()
{
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  return previousBalanceTotal;
}
function updateBalance(Amount, isAdd) {
  
  const balanceTotal = document.getElementById("balance-total");
  // const balanceTotalText = balanceTotal.innerText;
  // const previousBalanceTotal = parseFloat(balanceTotalText);
  const previousBalanceTotal = getCurrentBalance();
  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + Amount;
  } else {
    balanceTotal.innerText = previousBalanceTotal - Amount;
  }
}

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //    const inputField = document.getElementById("deposit-input")
    //    const inputAmounText = inputField.value
    //    const depositAmount = parseFloat(inputAmounText)

    //get and update depositTotal
    /*
    const depositTotal = document.getElementById('deposit-total')
   depositTotalText = depositTotal.innerText
   const previousDepositTotal = parseFloat(depositTotalText)

   depositTotal.innerText = depositAmount + previousDepositTotal */

    //update balance
    //  const balanceTotal = document.getElementById('balance-total')
    //  const balanceTotalText = balanceTotal.innerText
    //  const previousBalanceTotal = parseFloat(balanceTotalText);

    //  balanceTotal.innerText = previousBalanceTotal + depositAmount;
    const depositAmount = getInput("deposit-input");
    if (depositAmount > 0) {
      updateTotalField("deposit-total", depositAmount);
      updateBalance(depositAmount, true);
    }
  });

//handle withdraw button
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    // const withdrawInput = document.getElementById('withdraw-input')
    // const withdrawAmountText = withdrawInput.value
    // const withdrawAmount = parseFloat(withdrawAmountText)

    //get and update withdraw total

    /*  const withdrawTotal = document.getElementById("withdraw-total")
    const withdrawTotalText = withdrawTotal.innerText
    const previousWithdrawTotal = parseFloat(withdrawTotalText) */
    // withdrawTotal.innerText = withdrawAmount + previousWithdrawTotal

    //update balance after withdraw
    // const balanceTotal = document.getElementById("balance-total");
    // const balanceTotalText = balanceTotal.innerText;
    // const previousbalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousbalanceTotal - withdrawAmount;
    const withdrawAmount = getInput("withdraw-input");
    const currentBalance = getCurrentBalance()
    if (withdrawAmount > 0 && withdrawAmount< currentBalance) {
      updateTotalField("withdraw-total", withdrawAmount);
      updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount> currentBalance)
    {
      console.log("you can not withdraw more than what you have in your account")
    }
  });
