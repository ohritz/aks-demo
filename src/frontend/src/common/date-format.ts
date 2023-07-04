import { format } from "date-fns";

export const formatDateTimeString = (date: string) =>
  format(new Date(date), "yyyy/mm/dd (HH:MM)");
