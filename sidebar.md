# note:css

-   max-width: 100%(container)-> để khi co trình duyệt lại vẫn có sidebar trên màng hình hiển thị
-   transition: background-color ease-in-out 200ms; ==. cái ni hỗ trợ để hover vào mượt hơn
-   <NavLink> hỗ trợ active
-   object-fit: cover; --> để ảnh nằm gọn trong phạm vi width, height của khung
-   .value +.value: class value đứng sau 1 class value nó mới được ăn
-   nếu 2 class value đứng cách nhau bởi 1 thẻ khác thì dùng: .value ~ .value
-   loop : trong thẻ video Thiết lập hành động "video sẽ tự động được phát lặp lại sau mỗi lần kết thúc"
-   snap css : đem đến trải nghiệm cho người dùng tốt hơn

*   cách hoạt động của NavLink :

-   nó sẽ tự động lấy path trên url , so sánh với giá trị props "to" mà ta truyền vào cho nó , và tự động có class active (class ta đang dùng là class module khác với class active ni)
-   cách để đổi màu theo active : thêm class vào <NavLink className={(nav)=>cx('menuItem',{active:nav.isActive})}>

# note:

-   những cái render được ra màn hình thì dùng node khi PropTypes

*   các bước làm :

-   xử lý css
-   xử lý hover
-   xử lý active
