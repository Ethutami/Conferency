import { format } from "date-fns";

type DateFormatType = "short" | "long" | "time";

export function formatEventDate(isoDate: string, type: DateFormatType = "short"): string {
    const date = new Date(isoDate);

    const formats: Record<DateFormatType, string> = {
        short: "do MMMM yyyy",
        long: "EEEE, do MMMM yyyy",
        time: "hh:mm a",
    };

    return format(date, formats[type]);
}
