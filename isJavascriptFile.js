// ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে ।


// function isJavascriptFile(fileName){
//     if(fileName.endsWith('.js')){
//         return true;
//     }

//     else{
//         return false;
//     }
// }

// const result = isJavascriptFile("index.js.html");
// console.log(result);




// anoter way

function isJavaScriptFile(fileName){
if(fileName[fileName.length-1] == 's'){
    if(fileName[fileName.length-2] == 'j'){
        if(fileName[fileName.length-3] == '.'){
    return true;
        }
    }
}

return false;

}

const result = isJavaScriptFile('index.js');
console.log(result);