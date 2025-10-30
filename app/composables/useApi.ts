import { ref } from 'vue'
import axios from 'axios';
import config from "../config/ConfigSys"

export function useApi() {
    const api: string = config.UrlApi

    async function ApiPost(url: string, data: any): Promise<any> {
        const res = await axios.post(`${api}/${url}`, data)
        return res.data;
    }

    return { ApiPost }
}
