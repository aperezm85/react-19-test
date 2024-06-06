export const updateName = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name.length < 3) {
        resolve("The name must contain at least 3 characters");
        return;
      }
      resolve();
    }, 3000);
  });
};

export const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: "ok",
      });
    }, 2000);
  });
};
