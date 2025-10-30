export default defineEventHandler((event) => {
    const token = getCookie(event, 'token') ?? ""

    // console.log(token)
    // if (!token) throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })

    // ปกติ verify JWT ที่นี่ แล้วคืนข้อมูลผู้ใช้จริง
    return { token: token }
})
