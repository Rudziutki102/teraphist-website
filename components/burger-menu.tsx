import React,{useState} from 'react'
import {motion} from 'framer-motion';

const BurgerMenu = () => {
    const [isSidebarVisible,setIsSidebarVisible] = useState(false)
  return (
    <div onClick={()=>setIsSidebarVisible(!isSidebarVisible)}>
    {isSidebarVisible ? 
        (
            <motion.svg
            width="25"
            height="25"
            viewBox="25 25"
            className='sm:hidden relative left-2 top-2'
            >
            <motion.line
                x1="0"
                y1="0"
                x2="25"
                y2="25"
                stroke="#00cc88"
                strokeWidth='5'
                custom={2}
              />
            <motion.line
                x1="25"
                y1="0"
                x2="0"
                y2="25"
                strokeWidth='5'
                stroke="#00cc88"
                custom={2}
              />
            </motion.svg>
        ):
        (
            <motion.svg
            width="25"
            height="25"
            viewBox="25 25"
            className='sm:hidden relative left-2 top-2'
            >
            <motion.line
                x1="0"
                y1="1.5"
                x2="25"
                y2="1.5"
                stroke="#00cc88"
                strokeWidth='3'
                custom={2}
            />
            <motion.line
                x1="0"
                y1="12.5"
                x2="25"
                y2="12.5"
                stroke="#00cc88"
                strokeWidth='3'
                custom={2}
              />
            <motion.line
                x1="0"
                y1="23.5"
                x2="25"
                y2="23.5"
                strokeWidth='3'
                stroke="#00cc88"
                custom={2}
              />
            </motion.svg>
        )
}
    </div>
    

  )
}

export default BurgerMenu