function signIn() {
    let username = "FiveWing";
    let password = "123";
    let user = document.getElementById("userName");
    let pass = document.getElementById("passWord");
    if (user.value === username && pass.value === password) {
        window.location.href = "index.html";
        localStorage.setItem("user", "NgocTung");
    } else {
       alert("Đăng nhập thất bại,sai tên đăng nhập hoặc mật khẩu");
    }
}
function logOut() {
    window.localStorage.removeItem("user")
    window.location.href = "index.html"
}