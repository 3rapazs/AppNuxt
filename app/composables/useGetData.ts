import { ref } from 'vue'
import axios from 'axios';

export function useGetData() {
    const api: string = "http://localhost:3000";

    async function ApiPost(url: string, data: any): Promise<any> {
        const res = await axios.post(`${api}/${url}`, data)
        return res.data;
    }

    return { ApiPost }
}
