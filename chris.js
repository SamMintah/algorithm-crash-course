/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `balance`, `checkBalance`, `isActive`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should produce the expected output
 * 4. Your code should not be empty
 * 5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED. 
 */
 
// change the values of `balance`, `checkBalance`, and `isActive` to test your code
let balance = 10;
let checkBalance = true;
let isActive = true;

// your code goes here
if (checkBalance === true ){
    
    // case when your account is active
    
    if (isActive === true && balance > 0 ){
        console.log("Your balance is $" + balance.toFixed(2) + ".");
        
    } else if(isActive === true && balance === 0){
        console.log("Your account is empty");
        
    } else if (isActive === true && balance < 0){
        console.log("Your balance is  negative Please contact bank");
        
       //case where account is not active
       
    } else if(isActive === false){
        console.log("Your account is no longer active");
    }
} else {
    console.log("Thank you. Have a nice day!");
}



       let TAX_RATE = 0.2;
       let PHONE_PRICE = 1000;
       let ACCESSORY_PRICE = 500;
       let THRESHOLD = 5000;
       let bankAccountBalance = 10000;

        function calculateTax(taxRate, price) {
            let tax = taxRate * price   
            return tax;
            // console.log(tax)
            }
         console.log(calculateTax(0.2 , 1000))



        function calculatePurchaseAmount (phonePrice , accessoryPrice) {
            let purchaseAmount =  phonePrice + accessoryPrice;

            return purchaseAmount;
        
            }
           console.log(calculatePurchaseAmount(1000 , 500)) 

    

        function CalculatetotalPhonePrice(purchasePrice , taxAmount) {
        
            let  totalPurchase = purchasePrice + taxAmount
            return  "$" + totalPurchase ;
            
            } 
        console.log(CalculatetotalPhonePrice(1500,200))


        
   

function calculatePurchaseAmount (phonePrice , accessoryPrice) {
    let treshHold = 5000;
    
    let purchaseAmount =  phonePrice + accessoryPrice;
    let tresHoldBalance = treshHold - purchaseAmount;
         return tresHoldBalance;  
     }
   const currentBalance  = calculatePurchaseAmount(2000 , 500);
 
   console.log(currentBalance);
 
 // function to cheeck balance
 const checkAccount = () => {
   
   let balance = currentBalance; // returns the balance from  the treshold
   let checkBalance = true; // if you want to check your account 
   let isActive = true; // means if your account is active
   
   // condition to check if you want to check your balance 
   
 if (checkBalance){ 
   
     // case when your account is active and  the balance is greather than 0
     
     if (isActive && balance > 0 ){
         console.log("Your balance is $" + balance.toFixed(2) + ".");
       
     // case when your account is active and  the balance is greather than 0
     } else if(isActive  && balance === 0){
         console.log("Your account is empty");
       
    // case when your account is active and  the balance is less than 0
     } else if (isActive && balance < 0){
         console.log("Your balance is  negative Please contact bank");
     
        //case where account is not active
     } else if(!isActive){
         console.log("Your account is no longer active");
     }
   
     } else {
     console.log("Thank you. Have a nice day!");
     }
   
 }
 
 checkAccount();
 
 