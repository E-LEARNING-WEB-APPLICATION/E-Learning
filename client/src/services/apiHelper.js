export const apiRequest = async (requestFn) => {
  try {
    const response = await requestFn();
    // return response.data;
    if (response.data != undefined) {
      return response.data;
    } else return response;
  } catch (error) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Something went wrong";

    throw new Error(message);
  }
};
