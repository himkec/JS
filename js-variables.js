// js variable naming convention is camelCase
let companyName = "Stark Inc";
let productName = "Jarvis";

// another way of initializing variables
let productId="Jarvis01";
    productDescription="Jarvis is an AI system";
    
let uninitializedVar;
console.log(companyName, productName, productId, productDescription);

// common errors with variables
//console.log(companyNme);

/*
ERROR MESSAGE
console.log(companyNme);
            ^
ReferenceError: companyNme is not defined

Explaination : We get ReferenceError in case of typo in variable name or not defined
*/
console.log(uninitializedVar);
/*
undefined
Explainination : uninitializedVar is not initalized so we get undefined value
*/

/*
Reserved words (keywords) which cannot be used example class
*/

let productVersion = "v1.1";
    latestVersion = 'v2.1';
    commonlyUsedVersion = 'v2s!';
console.log(productVersion, latestVersion, commonlyUsedVersion);