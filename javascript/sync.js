function login(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("MUKUL login successful");
      resolve();
    }, x * 1000);
  });
}

function getData(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Data fetched");
      resolve();
    }, x * 1000);
  });
}

function calculateData(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Data calculated for MUKUL");
      resolve();
    }, x * 1000);
  });
}

function sendsms(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("email sent to MUKUL end");
      resolve();
    }, x * 1000);
  });
}

function logout(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("MUKUL Logout successful");
      resolve();
    }, x * 1000);
  });
}

// Proper chaining
login(2)
  .then(() => getData(8))
  .then(() => calculateData(5))
  .then(() => sendsms(1))
  .then(() => logout(1))
  .catch((err) => console.log("Error:", err));

console.log("call other application");