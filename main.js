//////////// For Iphone case 🤙🤙🤙
//////////////Simple but long way😁😁😁
// //// for plus button 😊
// document.getElementById('case-increase').addEventListener('click', function(){
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value); //step 1 -input capture😀
//     const caseNewCount = caseCount + 1; //step 2 -input increase
//     caseInput.value = caseNewCount; //step 3 - set input value

//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = '$' + caseTotal; //last step - change amount
// });

// //// for minus button 🙂
// document.getElementById('case-decrease').addEventListener('click', function(){
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value); //step 1 -input capture😀
//     const caseNewCount = caseCount - 1; //step 2 -input increase
//     caseInput.value = caseNewCount; //step 3 - set input value

//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = '$' + caseTotal; //last step - change amount

// });



//////////////Short but complex way😁😁😁

// //// for plus button 😊
// document.getElementById('case-increase').addEventListener('click', function(){
//     handleProductChange(true)
// }); ////comment out if u want to use method 2 also need to add id on html element😪😯😪

// //// for minus button 🙂
// document.getElementById('case-decrease').addEventListener('click', function(){
//     handleProductChange(false);
// }); ////comment out if u want to use method 2 also need to add id on html element😪😯😪


/////////////// For Iphone case 🤙🤙🤙
// function handleProductChange(isIncrease){
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value); 
//     //step 1 -input capture😀
//     let caseNewCount = caseCount;
//     if(isIncrease == true){
//         caseNewCount = caseCount + 1;
//         //step 2 -input increase 
//     }
//     if(isIncrease == false && caseCount > 0){
//         caseNewCount = caseCount -1;
//         //step 2 -input decrease
//     }
//     caseInput.value = caseNewCount; 
//     //step 3 - set input value
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = '$' + caseTotal; //last step - change amount
// }

// // For Iphone 📱📱📱
// function handlePhoneChange(isIncrease){
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     let phoneNewCount = phoneCount;
//     if(isIncrease == true){
//         phoneNewCount = phoneCount + 1;
//     }
//     if(isIncrease == false && phoneCount > 0){
//         phoneNewCount = phoneCount - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById('phone-total').innerText = '$' + phoneTotal;
// }


///////Minify js😉😉😉😉😉😉😉😉😉😉😉😉😉
function handleProductChange(product, isIncrease){
    // const productInput = document.getElementById(product + '-count');
    // const productCount = parseInt(productInput.value); 
    const productCount = getInputValue(product); 
    let productNewCount = productCount;
    if(isIncrease == true){
        productNewCount = productCount + 1;
    }
    if(isIncrease == false && productCount > 0){
        productNewCount = productCount -1;
    }
    document.getElementById(product + '-count').value = productNewCount; 
    let productTotal = 0;
    if(product == 'phone'){
        productTotal = productNewCount * 1219;
    }
    if(product == 'case'){
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + '-total').innerText = '$' + productTotal;
    calculateTotal();
}





/////////////Finding total value😁😁😁😁😁

///////Easiest way but long way😄😄😄
function calculateTotal(){
    // const phoneInput = document.getElementById('phone-count');
    // const phoneCount = parseInt(phoneInput.value);
    // const caseInput = document.getElementById('case-count');
    // const caseCount = parseInt(caseInput.value);
    // const totlaPrice = phoneCount * 1219 + caseCount *59;
    // document.getElementById('total-price').innerText = '$' +totlaPrice;


    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');

    const totlaPrice = phoneCount * 1219 + caseCount *59;
    document.getElementById('total-price').innerText = '$' +totlaPrice;

    const tax = Math.round(totlaPrice * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;
    
    const grandTotal = totlaPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}

///////Complex but shor way😑😑😑
function getInputValue(product){
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}


