import React,{createContext,useContext, useState} from 'react'
import LvhUseContext1 from './LvhUseContext1';
export const ThemeContext = createContext(); //tạo ngữ cảnh để chia sẻ

export default function LvhUseContext() {
    // state
    const [theme,setTheme] = useState('red');
    //hàm thay đổi theme
    const LvhHandleChange = () => {
        setTheme(theme ==='red'? 'blue' :'red');
    }
  return (
    <ThemeContext.Provider value={theme}>
        <div className='alert'>
            <h2>Demo useContext</h2>
            <LvhUseContext1 />
            <button onClick={LvhHandleChange}>Change bgColor</button>
        </div>
    </ThemeContext.Provider>
  )
}
