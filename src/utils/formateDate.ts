import moment from "moment";

export const formatDate = (date: any) => {
  const dateObj = date["$d"];
  return moment(dateObj).format("YYYY-MM-DD");
};
