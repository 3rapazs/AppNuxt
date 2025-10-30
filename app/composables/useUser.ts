import userModel from "../model/shared/user"

export function useUser() {
    const { ApiPost } = useGetData()

    async function GetUser(): Promise<userModel> {
        const user: userModel = await ApiPost("api/getUser", null)
        return user;
    }

    async function GetToken(): Promise<string> {
        const res = await ApiPost("api/getToken", null)
        const token = res.token ?? ""
        return token
    }

    async function Logout(): Promise<any> {
        const res = await ApiPost("api/logout", null)
        return res
    }

    return { GetToken, GetUser, Logout }
}