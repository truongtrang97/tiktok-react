## đổi port

-   tạo file .env.local thêm PORT=3001

## cài đặt công cụ tùy chỉnh customize cra

-   b1: cài yarn add customize-cra react-app-rewired --dev
-   b2: https://github.com/timarney/react-app-rewired/ (cấu hình theo cái ni )

## Cài đặt babel-plugin-module-resolver

-   b1: cài npm install --save-dev babel-plugin-module-resolver
-   cấu hình theo link ni: https://github.com/tleunen/babel-plugin-module-resolver
-   file config-overrides.js --> file ni config theo vd của customize cra
    ==> cái ni để khi import nhiều cấp bật thây src =~ thâu, và gợi ý code khi import

## Cài đặt và cấu hình Prettier

-   cái ni giúp cấu hình lại format code tự động
-   cài trên extension : Prettier-Code formatter
-   thêm 2 file : .prettierrc và .vscode/settings.json (copy trên git a sơn f8)

## Cấu hình sử dụng CSS/SASS

-   1. Cài thư viện SASS : 'npm i -D sass'
-   2. Tạo GlobalStyles component
-   3. Reset CSS: cài thư viện npm install --save normalize.css
-   4. Default CSS: font-family ,font-size, line-hight
    -   Tải font chữ : montserrat
    -   chọn các font chữ cần và copy link qua file css

## Cấu hình router /layout dự án

1. phân tích layout
2. cài đặt react-router-dom: npm install react-router-dom
3. Đưa cấu hình routes ra ngoài
4. xây dựng cơ chế tải layout

## note ;

1. npm i classnames
2. cách copy logo tiktok : tìm trong file có svg copy vô (copy bằng outerHTML) (file có thể ở thẻ symbol_copy xong bỏ thẻ symboy và format về JSX)

## Phím tắt;

-   shift +Alt+F : tự format lại file
-   CTRL+ SHIFT+K: xóa 1 dòng
-   ctrl+shift+P: -> lên thanh để wrap component vào 1 cái thẻ nào đó
-   ctrl+space : hiển thị lại gợi ý

## tải trên extension

-   tải Simple React Snippets : để viết tắt
-   tải htmltagwrap : bôi đen bấm phím tắt Alt+W

## file svg :

-   bản chất file svg chỉ định màu cho file svg được
-   th: nếu dùng file svg được link qua thẻ img thì không sửa được màu qua css
-   những icon là logo thì nó sẽ mặc định và ta không đổi được màu
-   trường hơp những icon logo linh động màu ta

## xử lý logic

-   khi focus vào input : ngưng gõ mới hiển thị kết quả tìm kiếm
-   dùng two-way-bind
-   Tách component search ra bên ngoài để xử lý: vì khi nó nằm chung trong component header lớn sẽ dẫn đến re-render những component k cần thiết
-

##

-   encodeURIComponent(): mã hóa kí tự tìm kiếm hợp lệ cho url

## vấn đề khi gọi API :

-   Khi bấm dữ liệu thì request API bị gọi liên tục
-   debounce --> xử lý khi ta muốn thực hiện hành động cuối cùng sau 1 chuỗi hành động liên tục
    setTimeout(()=>{debugger},5000)

## file env

-   môi trường liên quan đến cấu hình deploy
-   nơi code: mt local/development
-   qua mt test/stagin
-   UAT <>
-   đẩy lên user: mt production

*   xem github clear code

# note"

tabIndex=-1 để ta không bị focus vào khi bấm dấu tab
