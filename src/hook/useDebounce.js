// custorm hook -> tự tạo ra hook cho ta use (tạo ra nhờ những hook có sẵn )
import {useState,useEffect} from 'react'

function useDebounce(value,delay) {
    const [debounceValue,setDebounceValue]=useState(value)
    useEffect(()=>{
       
        const handler = setTimeout(()=>setDebounceValue(value),delay) //chỗ ni khi ta gõ từng kí tự chưa đủ time delay nên nó sẽ không set lại giá trị của debounceValue , nên nó sẽ return ra debounceValue= '', khi ta ngưng đủ 500mm thì nó mới setdebounceValue lại giá trị =value
        //  đặt biến để lấy Timeout id của setTimeout trả về 
        return ()=>clearTimeout(handler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[value])
    return debounceValue
    // mỗi khi function cleanup thì ta cleanTimeout
}
// useEffect return là nó trả ra 1 hàm (hàm ni gọi là cleanup function ) hàm ni được gọi khi des thay đổi và component bị unmount

export default useDebounce;