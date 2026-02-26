const button = document.querySelector("button");
const output = document.querySelector("p");

const getPosition = (options) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ((sucsess) => {
        resolve(sucsess);
      },
      (error) => {},
      options),
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  getPosition().then((posData) => {
    console.log(posData);
  });
  setTimer(1000).then(() => {
    console.log("Timer finished!");
  });
  console.log("Gettine position...");
}

button.addEventListener("click", trackUserHandler);
