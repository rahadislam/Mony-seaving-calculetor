
//  calculate function 
function calculate(num1,num2,num3){
    const Balance=document.getElementById(num1);
    const balanceValue=parseInt(Balance.innerText);
   
    Balance.innerText=num2-num3;
}
//error function
function errorAlart(fild1,fild2,fild3,fild4){
    const ifild=document.getElementById(fild1);
    const iValue=parseInt(ifild.value);
    
    const fofild=document.getElementById(fild2);
    const foValue=parseInt(fofild.value);

    const rfild=document.getElementById(fild3);
    const rValue=parseInt(rfild.value);

    const cfild=document.getElementById(fild4);
    const cValue=parseInt(cfild.value);

    if(iValue!='number' && iValue<0 || foValue!='number' && foValue<0){
        document.getElementById('errorValid').style.display='block';
    }
    if(rValue!='number' && rValue<0 || cValue!='number' && cValue<0){
        document.getElementById('errorValid').style.display='block';
    }
}
// function calculate syste,
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
    errorAlart('income','food','rent','clothes');
    const inTotalExpences=foodValue+rentValue+clothesValue;
    //cheak calculate
    if(incomeValue>inTotalExpences){
        totalExpenses.innerText=inTotalExpences;
         // intotal Balance 
    calculate('balance',incomeValue,inTotalExpences); 
    }
    else if(incomeValue<inTotalExpences){
        document.getElementById('error').style.display="block";
    }  
});
//saveing area
document.getElementById('save').addEventListener('click',function(){
    const saveFild=document.getElementById('saveinput');
    const saveValue=parseInt(saveFild.value);

    const income=document.getElementById('income');
    const incomeValue=parseInt(income.value);
    const Balance=document.getElementById('balance');
    const balanceValue=parseInt(Balance.innerText);

    const totalSave=incomeValue/100*saveValue;
    
    const savingAmaunt=document.getElementById('Saving');
    
    if(totalSave>balanceValue){
        document.getElementById('saveing-error').style.display='block';
    }
    else{
        savingAmaunt.innerText=totalSave;
        // remaining balance
    calculate('remaining',balanceValue,totalSave);
    }   
});
