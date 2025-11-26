import userModel from "../model/shared/user"

export function useUser() {
    const { ApiPost, MePost, GetToken } = useApi()

    async function GetUser(): Promise<userModel> {
        const user: userModel = await ApiPost("api/getUser", null)
        return user;
    }


    async function Logout(): Promise<any> {
        const res = await MePost("api/logout", null)
        return res
    }

    async function Login(data: any): Promise<any> {
        const res = await MePost("api/login", data)
        return res
    }

    return { GetToken, GetUser, Logout, Login }
}