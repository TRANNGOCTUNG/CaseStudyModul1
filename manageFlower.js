class Product {
    constructor(img, name ,price ) {
        this.img = img;
        this.name= name;
        this.price= price;
    }
    getImg() {
        return this.img;
    }
    setImg(value) {
        this.img = value;
    }
    getName() {
        return this.name;
    }
    setName(value) {
        this.status = value;
    }
    getPrice() {
        return this.price;
    }
    setPrice(value) {
        this.price = value ;
    }
}
let daoArr = [
    new Product('https://workfromhome.vn/wp-content/uploads/2021/09/cac-loai-hoa-dao-1.jpg',"Đào Phai", 200000),
    new Product('https://workfromhome.vn/wp-content/uploads/2021/09/cac-loai-hoa-dao-2.jpg',"Bích Đào",200000),
    new Product('https://workfromhome.vn/wp-content/uploads/2021/09/cac-loai-hoa-dao-3.jpg',"Bạch Đào",200000),
    new Product('https://workfromhome.vn/wp-content/uploads/2021/09/cac-loai-hoa-dao-4.jpg',"Đào Thất Thốn",200000),
    new Product('https://cdn.vatgia.com/pictures/thumb/w750/2022/12/1671435023-onl.jpg',"Đào Đông Đỏ",10000000)
 ];

let lanArr = [
    new Product('https://th.bing.com/th/id/R.4bb3e7cdc39107b08ce6dbe6e3e03327?rik=i61BfDHe6wzIHQ&pid=ImgRaw&r=0',"Lan Hồ Điệp",2000000),
    new Product('https://toplist.vn/images/800px/lan-chu-dinh-160906.jpg',"Lan Chu Đình",2000000),
    new Product('https://toplist.vn/images/800px/lan-cam-cu-160853.jpg',"Lan Cẩm CÙ",2000000),
    new Product('https://toplist.vn/images/800px/lan-dendro-160746.jpg',"Lan Dendro",2000000),
    new Product('https://toplist.vn/images/800px/lan-vanda-160744.jpg',"Lan Vanda",2000000)
];

let dongTienArr = [
    new Product('https://ganhhanghoa.vn/wp-content/uploads/2020/12/y-nghia-cua-hoa-dong-tien-do.jpg',"Hoa Đồng Tiền Đỏ",300000),
    new Product('https://ganhhanghoa.vn/wp-content/uploads/2020/12/y-nghia-hoa-dong-tien-vang.jpg',"Hoa Đồng Tiền Vàng",300000)
];

let cucArr = [
    new Product('https://blog.flowercorner.vn/wp-content/uploads/2018/08/cac-loai-hoa-cuc-dep.jpg',"Cúc Mâm Xôi",500000),
    new Product('https://blog.flowercorner.vn/wp-content/uploads/2018/08/cac-loai-hoa-cuc-dep-cuc-hoa-mi-e1535363735242.jpg',"Cúc Họa Mi",500000),
    new Product('https://blog.flowercorner.vn/wp-content/uploads/2018/08/cac-loai-hoa-cuc-dep-cuc-van-tho-e1535363843841.jpg',"Cúc Vạn Thọ",500000),
    new Product('https://blog.flowercorner.vn/wp-content/uploads/2018/08/cac-loai-hoa-cuc-dep-dong-tien-e1535364213983.jpg',"Cúc Đồng Tiền",500000),
    new Product('https://blog.flowercorner.vn/wp-content/uploads/2018/08/cac-loai-hoa-cuc-dep-thach-thao-e1535364316735.jpg',"Cúc Thạch Thảo",500000)
];

let lyArr = [
    new Product('https://iuhoa.com/wp-content/uploads/2020/11/5fa8027a98b96.jpg',"Ly Hồng",1000000000),
    new Product('https://iuhoa.com/wp-content/uploads/2020/11/lily-trang.jpg',"Ly Trắng",1000000000),
    new Product('https://iuhoa.com/wp-content/uploads/2020/11/lily-trang.jpg',"Ly Đỏ",1000000000),
    new Product('https://iuhoa.com/wp-content/uploads/2020/11/lily-trang.jpg',"Ly Cam",1000000000),
    new Product('https://iuhoa.com/wp-content/uploads/2020/11/lily-vang.jpg',"Ly Vàng",1000000000)
];
let allArr = [
    new Product('https://workfromhome.vn/wp-content/uploads/2021/09/cac-loai-hoa-dao-1.jpg',"Đào Phai",200000),
    new Product('https://workfromhome.vn/wp-content/uploads/2021/09/cac-loai-hoa-dao-2.jpg',"Bích Đào",200000),
    new Product('https://workfromhome.vn/wp-content/uploads/2021/09/cac-loai-hoa-dao-3.jpg',"Bạch Đào",200000),
    new Product('https://workfromhome.vn/wp-content/uploads/2021/09/cac-loai-hoa-dao-4.jpg',"Đào Thất Thốn",200000),
    new Product('https://cdn.vatgia.com/pictures/thumb/w750/2022/12/1671435023-onl.jpg',"Đào Đông Đỏ",10000000),
    new Product('https://toplist.vn/images/800px/lan-chu-dinh-160906.jpg',"Lan Chu Đình",2000000),
    new Product('https://toplist.vn/images/800px/lan-cam-cu-160853.jpg',"Lan Cẩm CÙ",2000000),
    new Product('https://toplist.vn/images/800px/lan-dendro-160746.jpg',"Lan Dendro",2000000),
    new Product('https://toplist.vn/images/800px/lan-vanda-160744.jpg',"Lan Vanda",2000000),
    new Product('https://ganhhanghoa.vn/wp-content/uploads/2020/12/y-nghia-hoa-dong-tien-vang.jpg',"Hoa Đồng Tiền Vàng",300000),
    new Product('https://blog.flowercorner.vn/wp-content/uploads/2018/08/cac-loai-hoa-cuc-dep-cuc-hoa-mi-e1535363735242.jpg',"Cúc Họa Mi",500000),
    new Product('https://blog.flowercorner.vn/wp-content/uploads/2018/08/cac-loai-hoa-cuc-dep-cuc-van-tho-e1535363843841.jpg',"Cúc Vạn Thọ",500000),
    new Product('https://blog.flowercorner.vn/wp-content/uploads/2018/08/cac-loai-hoa-cuc-dep-dong-tien-e1535364213983.jpg',"Cúc Đồng Tiền",500000),
    new Product('https://blog.flowercorner.vn/wp-content/uploads/2018/08/cac-loai-hoa-cuc-dep-thach-thao-e1535364316735.jpg',"Cúc Thạch Thảo",500000),
    new Product('https://iuhoa.com/wp-content/uploads/2020/11/lily-trang.jpg',"Ly Trắng",1000000000),
    new Product('https://iuhoa.com/wp-content/uploads/2020/11/lily-trang.jpg',"Ly Đỏ",1000000000),
    new Product('https://iuhoa.com/wp-content/uploads/2020/11/lily-trang.jpg',"Ly Cam",1000000000),
    new Product('https://iuhoa.com/wp-content/uploads/2020/11/lily-vang.jpg',"Ly Vàng",1000000000),
    new Product('https://th.bing.com/th/id/R.4bb3e7cdc39107b08ce6dbe6e3e03327?rik=i61BfDHe6wzIHQ&pid=ImgRaw&r=0',"Lan Hồ Điệp",2000000),
    new Product('https://ganhhanghoa.vn/wp-content/uploads/2020/12/y-nghia-cua-hoa-dong-tien-do.jpg',"Hoa Đồng Tiền Đỏ",300000),
    new Product('https://blog.flowercorner.vn/wp-content/uploads/2018/08/cac-loai-hoa-cuc-dep.jpg',"Cúc Mâm Xôi",500000),
    new Product('https://iuhoa.com/wp-content/uploads/2020/11/5fa8027a98b96.jpg',"Ly Hồng",1000000000)
];

function display(arr) {
    let user = localStorage.getItem("user");
    if ( user !== null) {
        document.getElementById("login").innerHTML = "<h4>" + user + "</h4>"
        document.getElementById("exitt").style.display = "block";
        document.getElementById("addproduct").style.display = "block";
        document.getElementById("login").style.pointerEvents="none";
    }
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        if (user !== null) {
            result +=
                "<ul class='listProduct'>" +

                "<li><img class='img-main' src='" + arr[i].getImg() + "' alt=''></li>" +

                "<li class='status'> <button class='btn-tt'> " + arr[i].getName() + "</button></li>" +

                "<li class='price' >" + arr[i].getPrice() + "</li>" +

                "<li class='edit'> <button class='edittag' onclick='edit("+ i +")'>" +"Edit" +"</button></li> " +

                "<li class='delet'> <button class='deletag' onclick='deleteProd("+ i +")'>" +"Delete" +"</button> </li>"+

                "<li class='cart'> <button class='carttag' onclick='addCart("+ i +")'>" +"addCart" +"</button> </li>"+

                "</ul>"
        } else {
            result +=
                "<ul class='listProduct'>" +

                "<li><img class='img-main' src='" + arr[i].getImg() + "' alt=''></li>" +

                "<li class='status'> <button class='btn-tt'> " + arr[i].getName() + "</button></li>" +

                "<li class='price' > <span class='text-price'>" + arr[i].getPrice() + "</span></li>" +

                "</ul>"
        }

    }
    document.getElementById("productMain").innerHTML = result;
}
function peachBlossom() {
    display(daoArr)
}
function orchid() {
    display(lanArr)

}
function Geberra() {
    display(dongTienArr)

}
function chrysanThemum() {
    display(cucArr)

}
function lilies() {
    display(lyArr)

}
function main() {
    display(allArr)
}

let user = localStorage.getItem("user");
if (user === null) {
}   else {
    function edit(index) {
        let img = prompt("Input url");
        let inputName = prompt("Input name: ")
        let name = inputName.toUpperCase()
        let inputPrice = prompt("Input price:");
        let price = inputPrice.toUpperCase()
        allArr[index] = new Product(img, name, price);
        display(allArr);
    }
    function uploadproduct() {
        let img = document.getElementById("img").value;
        let input = document.getElementById("name").value;
        let name = input.toUpperCase()
        let inputPrice = document.getElementById("price").value;
        let price = inputPrice.toUpperCase()
        let productNew = new Product(img, name, price);
        document.getElementById("moreProduct").style.display="none";
        allArr.push(productNew);
        display(allArr);
        document.getElementById("img").setAttribute("value","");
    }
    function deleteProd(index) {
        allArr.splice(index, 1);
        display(allArr)
    }
    function addCart(index){
     alert("Cảm ơn bạn đã mua hoa : " + allArr[index].getName() + " giá : " + allArr[index].getPrice() + " đ")

    }
}
function add() {
    document.getElementById("img").setAttribute("value","");
    document.getElementById("moreProduct").style.display="block";
    display(allArr)
}
