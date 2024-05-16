import { useState } from "react";
import A from "./components/A";
import ClassComponent from "./components/ClassComponent";
import Exercise01 from "./components/Exersice01";
import Notification from "./components/Notification";

export default function App() {
  const [active,setActive]=useState<boolean>(true)
  const removeComponent=()=>{
 console.log("đã gọi vào hàm remove!");
      setActive(!active)
  }
  return (
    <div>
      App
      {
      /*  lifecycle- vòng đời của classcomponent
        functional component không có vòng đòi.
        VD: 1 con người sẽ có vòng đời:
        Sinh ra ==> lớn lên ==> trưởng thành ==>lập sự nghiệp ==> lập gia đình ==> chết
        class component nó cũng có vòng đời riêng của nó
        4 giai đoạn
          giai đoạn 1: khởi tạo (initial) 
            + đi khởi tạo props và state
            ==> thực thi 1 lần
          giai đoạn 2: mounting  (gắn vào UI)
            + thì chạy các phương thức sau
              1. componentWillMount()
              2. render()
                không nên setState ở trong phương thức render này
                vì sao?
              3. componentDidMount()
              ==> thực thi 1 lần 
          giai đoạn 3: updating(cập nhật)
             ==> có thể thực hiện nhiều lần
             - khi nào sảy ra update
             ==> khi dữ liệu props nhận về thay đổi hoặc dữ liệu state thay đổi thì
             giai đoạn updating sảy ra.
             ==> Cung cấp các phương thức sau
             1. shouldComponentUpdate()
             2. componentWillUpdate()
             3. render()
             4. componentDidUpdate()
          giai đoạn 4: unmounting( gỡ bỏ khỏi UI)
             ==> thực hiện 1 lần.
             cung cấp phương thức
             componentWillUnmount: thường dùng để xử lý các vấn đề như clearTimeout
             để tránh rò rỉ bộ nhớ
       */
        <ClassComponent></ClassComponent>

      }
      {active ? <A></A>:""}
      <button onClick={removeComponent}>tháo gỡ component A </button>
      <Exercise01></Exercise01>
      <Notification></Notification>
    </div>
  )
}


