import { PUBLIC_API_URL } from "@/app/config";
import axios from "axios";

const url = `${PUBLIC_API_URL}/api/events/`

export const FetchEvents = async () => {
    const res = await axios.get(url);
    return res.data.data;
};