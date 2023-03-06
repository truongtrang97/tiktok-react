# Thư viện

## Tippy

## Axios :

### API

-   https://play.google.com/log?format=json&hasfast=true&authuser=0
-   http://14.241.120.239:8001/clover/dev/v1.0/api/identities/update
    -   Phần 1: `https`: giao thức truyền dữ liệu qua internet tiêp theo là cú pháp `://`
    -   Phần 2: `play.google.com` domain (tên miền)
    -   Phần 3: `/inbox/send` POST path API (đường dẫn)
    -   Phần 4: `?data=ad` có thể có hoặc không, tham số truyền lên của mỗi API

### Cách dùng Axios gọi API

-   Đây là thư viện giúp gọi được API từ trình duyệt hoặc nodejs
-   áp dụng thư viện để cấu hình lại và chia lại cấu trúc gọi API cho tối ưu
-   để tương lai có thể dễ dàng bảo trì và tái sử dụng code ok hơn
-   @@@
-   có 2 cách gọi API
    -   1. XMLHttpRequest
    -   2. Fetch

1. Tìm hiểu thư viện axios : (superagent: thư viện tương tự)

-   Features: đăc trưng:
    -   một số tính năng được hỗ trợ :Intercept request and response ( trước khi request được gửi đi ta có thể làm gì đó )
    -   Transform request and response data : chuyển đổi dữ liệu trước khi response (vd như dữ liệu trả về dạng full_name --> 1 số dự án bắt duộc dùng campCase thì phải dùng transform chuyển về campCase )
    -   Cancel requests : khi user thoát đột ngột có thể hủy request
    -   tự jon.parse thành js object

*   install và xem example để làm theo

-   Table of Contents : (xem các tính năng)
    -   Creating an instance : tạo ra 1 đối tượng chứa cấu hình API

## thư viện PropTypes

-   Thư viện để kiểm tra kiểu dữ liệu trong React-component (kiểm tra khi chạy và bao warning liền-> fix)

## Tailwind css; (Bootstrapo cũng giống z)

-   là 1 frameword css: nó giúp chúng ta có 1 hệ thống class có sẵn, với những class này chúng ta chỉ cần add vào những file html use thâu
-   xây dựng giao diện website trên hệ thống class có sẵn
-   Tùy biến cao , hiệu suất cao, hỗ trợ cả responsive và hover, focus

*   (Bootstrap nó cũng cấp co ta những class có sẵn , đóng gói sẵn chỉ cần gọi ra và dùng thâu, nhược điểm ta phải import hết tất cả thư viện vào mà có những thứ không dùng tới)
*   khác với tailwin nó giúp chúng ta định nghĩa thêm những phần mà phù hợp với dự án của ta (theo cách ta linh hoạt )

-   tailwin nó giúp chúng ta xuất ra 1 file css chỉ chứa những css mà chúng ta chỉ chứa những class mà ta đã dùng trong project thôi

*   cần :

-   nodejs
-   extenstion: + Taiwind CSS intelliSense : cái ni để gợi ý tên class trên visual code + PostSCSS Language Support :

1. cài đặt :

-   npm install -D tailwindcss

2. tạo 1 file cấu hình của tailwindcss với content =["./src/**/*.{html,js}"]

-   npx tailwindcss init

3. Tạo ra 1 file tailwind.css trong src

-   import

*   note tailwind:

-   tailwind ni dùng đơn vị rem , nếu muốn dùng px thì dùng [bỏ vào px vào đây]
