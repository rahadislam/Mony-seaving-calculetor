


document.getElementById('calculate').addEventListener('click',function(){
    const income=document.getElementById('income');
    const incomeValue=parseInt(income.value);

    const food=document.getElementById('food');
    const foodValue=parseInt(food.value);

    const rent=document.getElementById('rent');
    const rentValue=parseInt(rent.value);

    const clothes=document.getElementById('clothes');
    const clothesValue=parseInt(clothes.value);

    const totalExpenses=document.getElementById('total-expenses');
    const totalExpensesValue=parseInt(totalExpenses.innerText);
    
    const inTotalExpences=foodValue+rentValue+clothesValue;
    
    totalExpenses.innerText=inTotalExpences;

    const Balance=document.getElementById('balance');
    const balanceValue=parseInt(Balance.innerText);
    
    Balance.innerText=incomeValue-inTotalExpences;
    
    
});

document.getElementById('save').addEventListener('click',function(){
    const saveFild=document.getElementById('saveinput');
    const saveValue=parseInt(saveFild.value);

    const income=document.getElementById('income');
    const incomeValue=parseInt(income.value);

    const totalSave=incomeValue/100*saveValue;
    
    const savingAmaunt=document.getElementById('Saving');
    savingAmaunt.innerText=totalSave;

    const Balance=document.getElementById('balance');
    const balanceValue=parseInt(Balance.innerText);

    const remainingBalance=document.getElementById('remaining');
    debugger;
    remainingBalance.innerText=balanceValue-totalSave;
    
});