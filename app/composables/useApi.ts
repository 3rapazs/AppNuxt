import { ref } from 'vue'
import axios from 'axios';
import config from "../config/ConfigSys"

export function useApi() {
    const api: string = config.UrlApi
    type HTTPMethods =
        | 'Post'
        | 'Put'
        | 'Delete'
        | 'Get'

    async function Api(httpMethods: HTTPMethods, url: string, data: any): Promise<any> {
        try {
            const token = await GetToken();
            let res: any
            switch (httpMethods) {
                case "Post":
                    res = await axios.post(url, data, { headers: { "authorization": token } });
                    break;
                case "Put":
                    res = await axios.put(url, data, { headers: { "authorization": token } });
                    break;
                case "Delete":
                    res = await axios.delete(url, { headers: { "authorization": token }, data: data });
                    break;
                case "Get":
                    res = await axios.get(url);
                    break;
                default:
                    break;
            }
            return res.data;
        } catch (error) {

        }
    }

    async function GetToken(): Promise<string> {
        const localApi = window.location.origin;
        const res = await axios.post(`${localApi}/api/getToken`, null)
        const token = res.data.token ?? ""
        return token
    }

    async function ApiPost(url: string, data: any): Promise<any> {
        url = `${api}/${url}`
        return await Api("Post", url, data)
    }

    async function ApiPut(url: string, data: any): Promise<any> {
        url = `${api}/${url}`
        return await Api("Put", url, data)
    }

    async function ApiDel(url: string, data: any): Promise<any> {
        url = `${api}/${url}`
        return await Api("Delete", url, data)
    }

    async function MePost(url: string, data: any): Promise<any> {
        const localApi = window.location.origin;
        url = `${localApi}/${url}`
        return await Api("Post", url, data)
    }

    async function MePut(url: string, data: any): Promise<any> {
        const localApi = window.location.origin;
        url = `${localApi}/${url}`
        return await Api("Put", url, data)
    }

    async function MeDel(url: string, data: any): Promise<any> {
        const localApi = window.location.origin;
        url = `${localApi}/${url}`
        return await Api("Delete", url, data)
    }

    return { ApiPost, ApiPut, ApiDel, MePost, MePut, MeDel, GetToken }
}
