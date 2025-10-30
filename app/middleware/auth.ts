export default defineNuxtRouteMiddleware(async (to, from) => {
    // const token = localStorage.getItem("token") || "";
    // if (!token) {
    //     return navigateTo('/login')
    // }
    // if (to.path.startsWith('/admin') && user.role !== 'admin') {
    //     return navigateTo('/403')
    // }

    // if (process.client) {
    //     const token = localStorage.getItem('token');

    //     if (!token) {s
    //         // Redirect to login if no token is found
    //         return navigateTo('/login')
    //     }
    // }

    // const token = localStorage.getItem('token')
    // if (process.client) {
    //     const token = localStorage.getItem('token')
    //     console.log("token : " + token)
    //     if (!token && to.path !== '/login') {
    //         return navigateTo('/login')
    //     }
    // }
    // else {
    //     console.log("token : " + "")
    // }


    const publicPaths = ['/login']
    if (publicPaths.includes(to.path)) return

    const token = useCookie('token')          // SSR-aware
    const user = useCookie("userInfo")
    console.log("users : " + user.value)
    console.log("token : " + token.value)
    console.log(token)
    console.log(!token.value)


    if (!token.value) {
        const redirect = encodeURIComponent(to.fullPath)
        return navigateTo(`/login`)
    }
    // else {
    //     return navigateTo(`/home`)
    // }



})