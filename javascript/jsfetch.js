const url="https://api.github.com/users/manavendr09"
const res=fetch(url);
res.then((response)=>{
  if(!response.ok){
    throw new Error("Network response was not ok");
  }
  return response.json();
}).then((data)=>{
  console.log("DATA=",data);
}).catch((error)=>{
  console.error("There was a problem with the fetch operation:", error);
}).finally(()=>{
  console.log("inside finally block.");
});

// console.log("After fetch call");