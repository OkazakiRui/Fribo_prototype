const isSucceeded = false;

const promise = new Promise((resolve, reject) => {
  if (isSucceeded) {
    resolve("success");
  } else {
    reject(new Error("failure"));
  }
});

promise
  .then((value) => {
    console.log("1", value);
    return "succees again";
  })
  .then((value) => {
    console.log("2", value);
  })
  .catch((error) => {
    console.error("3", error);
  })
  .finally(() => {
    console.log("4", "computed");
  });
