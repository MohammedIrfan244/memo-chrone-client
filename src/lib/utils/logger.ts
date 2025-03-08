export const logger = (data: unknown) => {
  if (process.env.ENVIRONMENT === "development") {
    console.log(data);
  } else {
    return;
  }
};
