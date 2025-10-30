export default defineEventHandler((event) => {
    let result: boolean = false;
    let message: string = "";
    try {
        deleteCookie(event, 'token', { path: '/' })
        deleteCookie(event, 'userInfo', { path: '/' })
        result = true;
        message = "ออกจากระบบสำเร็จ"
    } catch (error) {

    }
    return { result: result, message: message }
})
