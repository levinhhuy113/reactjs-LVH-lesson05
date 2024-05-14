import React, {useContext} from 'react'
import { ThemeContext } from './LvhUseContext'

export default function LvhUseContext2() {
    const theme = useContext(ThemeContext);
  return (
    <div className={theme + ' m-3 '}>
      <h2>LvhUseContext2</h2>
      <p>
        <b>2210900106</b>
        <b>Lê Vinh Huy</b>
        <i>K22CNT1</i>
      </p>
    </div>
  )
}
