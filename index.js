// console.log("hello")



// Phân tích các xử lý có trong bài tập tính tiền GRAB 
/**
 * 1. Thực hiện tạo 1 sự kiện onclick cho nút tính tiền 
 * 2. Thực hiện llấy dữ liệu từ trên layout khi người dùng đã nhập xong 
 * 3. Thực hiện xử lý kiểm tra người dùng đã đi phương tiện gì để lấy ra được giá tiền hợp lý 
 * 4. Thực hiện kiểm tra với số km đi để tính toán ra giá tiền hợp lý 
 * 5. Thực hiện xử lý đưa dữ liệu lên giao diện ch người dùng 

 *  */

const UBER_CAR = "UberCar";
const UBER_SUV = "uberSUV";
const UBER_BLACK = "uberBlack";



document.getElementById("btnTinhTien").onclick = function (){
    var soKM = document.getElementById("txt-km").value * 1 ;
    console.log(soKM);
    var thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
    console.log(thoiGianCho);

    // Gọi tới input có thuộc tính name = selector và dc người dùng chọn bằng thuộc tính checked 
    var loaiXe = document.querySelector('input[name="selector"]:checked').value;
    console.log(loaiXe);

    var giaTienKmDauTien = tienKmDauTien(loaiXe);
    var giaTienKmTu1Den19 = tienKmTu1Den19(loaiXe);
    var giaTienKmTu19TroLen = tienKmTu19TroLe(loaiXe);

    // đi 1 km, đi từ 1 đến 19km, đi từ 19km trở lên 
    var tongTien = 0;
    if(soKM <= 1) {
        tongTien =soKM * giaTienKmDauTien;
    } else if (soKM >1 && soKM < 19) {
        tongTien = giaTienKmDauTien * 1 + (soKM - 1) * giaTienKmTu1Den19;
    } else {
        tongTien = giaTienKmDauTien * 1 + 18 * giaTienKmTu1Den19 + (soKM - 19) * giaTienKmTu19TroLen;
    }
    console.log(tongTien);

    // Đưa kết quả lên giao diện 
    document.getElementById("divThanhTien").style.display="block";
    document.getElementById("xuatTien").innerHTML = tongTien + "VND";

    // Kiểm tra xem người dùng đi loại xe nào thì sẽ có giá tiền được chỉnh sửa cho loại xe đó
    if(loaiXe == UBER_CAR) {
        giaTienKmDauTien = 8000;
        giaTienKmTu1Den19 = 7500;
        giaTienKmTu19TroLen = 7000;

    } else if (loaiXe == UBER_SUV) {
        giaTienKmDauTien = 9000;
        giaTienKmTu1Den19 = 8500;
        giaTienKmTu19TroLen = 8000;
    } else {
        giaTienKmDauTien = 19000;
        giaTienKmTu1Den19 = 9500;
        giaTienKmTu19TroLen = 9000;
    }


    // Cấu trúc điều kiện switch case
    // phần tử được so sánh sẽ nằm trong dấu ngoặc tròn của switch case
    // case: Những trường hợp mà phần tử được so sánh có thể xảy ra
    // Break: Giúp thoát khỏi cấu trúc switch case khi đã có 1 trường hợp thỏa mãn yêu cầu 
    // default: Luôn luôn để dưới cùng 
    switch(loaiXe){
         
        case UBER_CAR: {
            // nơi xử lý các hành động khi giá trị của loaiXe là uberCar
            giaTienKmDauTien = 8000;
            giaTienKmTu1Den19 = 7500;
            giaTienKmTu19TroLen = 7000;
        } break;

        case UBER_SUV: {
            // nơi xử lý các hành động khi giá trị của loaiXe là uberSUV
            giaTienKmDauTien = 9000;
            giaTienKmTu1Den19 = 8500;
            giaTienKmTu19TroLen = 8000;
        } break;

        default: {
            // nơi xử lý các hành động khi giá trị của loaiXe là uberBlack
            giaTienKmDauTien = 10000;
            giaTienKmTu1Den19 = 9500;
            giaTienKmTu19TroLen = 9000;
        } break;
    }    
    console.log("Giá km đầu tiên:", giaTienKmDauTien);
    console.log("Giá km từ 1 đến 19:", giaTienKmTu1Den19);
    console.log("Giá km từ 10 đến 19 trở lên:", giaTienKmTu19TroLen);
};

// Tạo ra 1 hàm giúp kiểm tra và trả về giá tiền của km đầu tiên 

function tienKmDauTien(loaiXe){
    switch (loaiXe) {
        case UBER_CAR: {
            return 8000;
        } 
        case UBER_SUV: {
            return 9000;
        } 
        default: {
            return 10000;
        }
    }
}

function tienKmTu1Den19(loaiXe){
    switch (loaiXe) {
        case UBER_CAR: {
            return 7500;
        } 
        case UBER_SUV: {
            return 8500;
        } 
        default: {
            return 9500;
        }
    }
}

function tienKmTu19TroLe(loaiXe){
    switch (loaiXe) {
        case UBER_CAR: {
            return 7000;
        } 
        case UBER_SUV: {
            return 8000;
        } 
        default: {
            return 9000;
        }
    }
}