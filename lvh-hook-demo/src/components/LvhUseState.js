import React, { useState } from 'react'

export default function LvhUseState() {
    const [count,setCount] =useState(10);
    //Mảng
    const [list,setList]=useState([1,5]);
    //hàm xử lí sự kiện 'thêm ngẫu nhiên'
    const LvhHandleList= ()=>{
        //sinh ngẫu nhiên 1 giá trị số
        let num = parseInt(Math.random()*100);
        // cập nhật lại state: list
        setList([
            ...list,
            num
        ])
    }
  return (
    <div>
      <p>You Clicked {count} time</p>
      <button onClick={() => setCount(count + 5)}>Click Me</button>
      <hr/>
      <h3>List: {list.toString()}</h3>
      <button onClick={LvhHandleList}>Thêm ngẫu nhiên</button>
    </div>
  )
}
