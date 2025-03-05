import axios, { AxiosError } from "axios";

const handleAxiosError = (err: unknown) => {
  if (axios.isAxiosError(err)) {
    const axiosError = err as AxiosError<{ message?: string }>;
    if (axiosError.response) {
      return (
        axiosError.response.data.message ||
        `${axiosError.response.status} - ${axiosError.response.statusText}`
      );
    } else if (axiosError.request) {
      return "No response recieved from rquested server";
    } else {
      return `Error in making request ${axiosError.message}`;
    }
  } else if (err instanceof Error) {
    return err.message;
  } else {
    return "An unexpected error occured , please try again later";
  }
};

export default handleAxiosError;
