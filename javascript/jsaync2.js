function register(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
      console.log('register end')   
      resolve();
    },4000)
    });   
 }
function sendEmail(){
   return new Promise((resolve,reject)=>{
         setTimeout(()=>{
      console.log('send Email end')   
      resolve();
    },4000)
});
}
function login(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
      console.log('login end')   
      reject('Login Error');
    },4000)
});
}
function getData(){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
      console.log('get data end')   
      resolve();
    },4000)
});  
}
function displayData(){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
      console.log('display data end')   
      resolve();
    },4000)
});  
}

// register()
// .then(sendEmail)
// .then(login)
// .then(getData)
// .then(displayData)
// .catch((err)=>{
// console.log('Error:'+err);
// })

 async function f1(){
    try{
    await register();
    await sendEmail();
    await login();
    await getData();
    await displayData();
    }
    catch(err){
        console.log('Error'+err)
    }
}
f1();




console.log('call other application')