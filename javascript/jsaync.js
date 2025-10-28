//callbacks

function register(cb){
    setTimeout(() => {
    console.log("registered successfully");
    cb();
}, 1000);
}
function sendEmail(cb){
    setTimeout(() => {
    console.log("email sent successfully");
    cb();   
}, 2000);
}
    function login(cb){
    setTimeout(() =>   {
    console.log("login successfully");
    cb();
}, 3000);
}
    function getData(cb){
        setTimeout(() => {
        console.log("data retrieved successfully");
        cb();
    }, 4000);
    }
    function displayData(cb){
        setTimeout(() => {  
        console.log("displaying data");
        cb();
    }, 4500);
    }
    //callback hell
   register(()=>{
    sendEmail(()=>{
        login(()=>{
            getData(()=>{
                displayData(()=>{
                    console.log("All tasks completed");
                });
            });
        });
    });
    });


    //promise
    