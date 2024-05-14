import React, {useEffect,useState} from 'react'

export default function LvhUseEffect() {
    //state: count
    const [count, setCount] = useState(0)
   
    //hàm xử lí sự kiện click me
    const LvhHandleList = ()=>{
        setCount(prev => prev + 1);
    }
    //sử dụng hàm useEffect để cập nhật lại title;có 1 tham số
    useEffect(() => {
        document.title += `Lê Vinh Huy: You Clicked ${count} times`;
        console.log(`You Clicked ${count} times`);
    });
    //useEffect: tham số thứ 2 là mảng rỗng
    useEffect(() => {
        console.log("Chạy lần đầu tiên - một lần");    
    },[])

    // [deps]
    useEffect(()=>{
        console.log(`useEffect count Click: `,count);
    },[count])

  return (
    <div>
      <h2>Demo - useEffect:You Clicked {count} times</h2>
      <button onClick={LvhHandleList}>Click me</button>
    </div>
  )
}
