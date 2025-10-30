import usermodel from "../../app/model/shared/user"

export default defineEventHandler((event) => {
    const userText: string = getCookie(event, 'userInfo') ?? ""
    let user: usermodel = new usermodel();
    if (userText) {
        user = JSON.parse(userText);
    }
    return user
})
