import axios from "axios";
import { URL } from "../utils/constants";

export const instance = axios.create({
    baseURL: URL,
    params: {key: '484129036', locale: 'en-US'},
    headers: {
        'X-RapidAPI-Key': '548eb114cbmshf32ef4e6cea864fp16bd87jsn42c1fe52a4ec',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
})