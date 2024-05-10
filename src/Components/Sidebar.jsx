import { useState } from "react"
import { motion } from "framer-motion"
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import Links from './Links'

const Sidebar = () => {
  const [open,setOpen] = useState(false)
  const variants = {
    open : {
      clipPath : "circle(1200px at 5px 10px)",
      transition : {
        type : "spring",
        stiffness : 20 ,
      }
    },
    close : {
      clipPath : "circle(20px at 40px 55px)",
      transition : {
          delay : 0.3,
          type : "spring",
          stiffness : 400,
          damping : 40,
      }
    }
  }
  return (
    <motion.div className={`flex flex-col justify-center items-center ${open ? 'bg-white':'bg-transparent' }` }  animate = {open ? "open" : "close"}>
      <motion.div className={`fixed top-0 right-0 bottom-0 w-screen md:w-[400px] ${open ? 'bg-white':'bg-transparent' }`} variants={variants}>
        <Links open={open} setOpen={setOpen}/>
      </motion.div>
      <button className="w-[50px] h-[50px] top-[30px] right-[20px] bg-transparent fixed rounded-full z-50" onClick={() => { setOpen((prev) => !prev ) }}>{open ? <RxCross2 /> : <RxHamburgerMenu /> }</button>
    </motion.div>
  )
}

export default Sidebar
