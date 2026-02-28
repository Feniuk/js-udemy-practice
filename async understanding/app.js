const button = document.querySelector("button");
const output = document.querySelector("p");

const getPosition = (options) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      },
      options,
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

async function trackUserHandler() {
  // let positionData;
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(posData, timerData);
  // .then((posData) => {
  //   positionData = posData;
  //   return setTimer(2000);
  // })
  // .catch((err) => {
  //   console.log(err);
  // })
  // .then((data) => {
  //   console.log(data, positionData);
  // });
  setTimer(1000).then(() => {
    console.log("Timer finished!");
  });
  console.log("Gettine position...");
}

button.addEventListener("click", trackUserHandler);

// Promise.race(getPosition(), setTimer(1000)).then((data) => {
//   console.log(data);
// });

// Promise.all(
//   getPosition(),
//   setTimer(1000).then((someData) => {
//     console.log(someData);
//   }),
// );

Promise.allSettled(
  getPosition(),
  setTimer(1000).then((someData) => {
    console.log(someData);
  }),
);
