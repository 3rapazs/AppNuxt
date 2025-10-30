
import userModel from "../../app/model/shared/user"

export default defineEventHandler(async (event) => {
    const body = await readBody<{ username: string; password: string }>(event)

    // ตัวอย่างอย่างง่าย (แทนที่ด้วยการเรียก backend/DB จริง)
    // if (body.username !== 'admin' || body.password !== '1234') {
    //     throw createError({ statusCode: 401, statusMessage: 'Invalid credentials' })
    // }


    const username = body.username;
    const password = body.password;
    let message: string = "";
    let result: boolean = false;

    const users: userModel[] = [{ userId: "admin", username: "", password: "1234", roleId: "1" },
    { userId: "3rapazs", username: "", password: "1234", roleId: "2" },
    { userId: "user", username: "", password: "1234", roleId: "2" },
    { userId: "test", username: "", password: "1234", roleId: "2" }];


    const user = users.find(u => u.userId === username && u.password === password)
    if (user) {
        result = true;
        message = "เข้าสู่ระบบสำเร็จ";
        const token = 'fake.jwt.token'

        setCookie(event, 'token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24, // 1 วัน
        })

        setCookie(event, 'userInfo', JSON.stringify(user), {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24, // 1 วัน
        })
    }
    else {
        message = "ไม่ข้อมูลผู้ใช้งานระบบ";
    }

    // ปกติจะออก JWT จริง ๆ

    return { result: result, message: message }
})
