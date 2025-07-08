export const orderStatusCheck = (status: string) => {
  if (status === "inProgress") {
    return "scheduled";
  } else if (status === "complete") {
    return "completed";
  } else if (status === "cancel") {
    return "canceled";
  } else {
    return "inprogress";
  }
};
