import { Menu, X } from "lucide-react"
import React , { useState } from "react"
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleNav = () => {
        if(open){
            setOpen(false)
        }else{
            setOpen(true)
        }
    }

    const handleLinkClick = () =>{
        setOpen(false)
    }
    return(
        <div>
            <div>
            <button onClick={handleNav}>{open === false ? <Menu /> : <X />}</button>
            {open === true &&
            <menu className="w-1/2 h-96 bg-slate-400 absolute z-20 left-0 float-left text-white">
                <li className="mb-2 mt-8 hover:underline hover:underline-offset-4"><Link to='/' className="p-4 mb-4" onClick={handleLinkClick}>Homepage</Link></li>
                <li className="mb-2 mt-8 hover:underline hover:underline-offset-4"><Link to='/description' className="p-4 mb-4" onClick={handleLinkClick}>Description</Link></li>
                <li className="mb-2 mt-8 hover:underline hover:underline-offset-4"><Link to='/products' className="p-4 mb-4" onClick={handleLinkClick}>Products</Link></li>
            </menu>
            }
            </div>
        </div>
    )
}

export default Navbar