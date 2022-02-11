// handel deposit button event
document.getElementById('deposit-button').addEventListener('click',function(){
    
     // get the amount deposited
   const depositInput = document.getElementById('deposit-input');
   const newdepositAmountText = depositInput.value;
   const newdepositAmount = parseFloat(newdepositAmountText);
  //  console.log(depositAmount); 

// update deposit total
   const depositTotal =document.getElementById('deposit-total');
   const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

  const newdepositTotal = previousDepositAmount  + newdepositAmount
  depositTotal.innerText = newdepositTotal ;

  // update account balance
const  balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
const newBalanceTotal = previousBalanceTotal+ newdepositAmount;
balanceTotal.innerText = newBalanceTotal

//   clear the deposit input field
depositInput.value ='';

    }) ;


    // handle withdraw event handeler 

  document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
const withdrawAmountText = withdrawInput.value;
const newWithdrawAmount = parseFloat(withdrawAmountText);
console.log(newWithdrawAmount);

// set withdraw total
const  withdrawTotal = document.getElementById('withdraw-total');

   const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

  const newWithdrawTotal = previousWithdrawTotal  + newWithdrawAmount;
  withdrawTotal.innerText =  newWithdrawTotal;

// clear withdraw input
withdrawInput.value = '';

// update balance
const balanceTotal = document.getElementById('balance-total');
const previousBalanceText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(previousBalanceText); 
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

balanceTotal.innerText = newBalanceTotal;

  });