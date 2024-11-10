import { ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import { useSelector } from "react-redux";

const Header = () => {
    const cart = useSelector((state) => state.cart);
    const getItemsCount = () => {
        return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
    };
    return(
        <div className="flex pt-8 font-['ubuntu'] font-semibold">
            <div className="flex-initial w-[10%]"></div>
            <div className="md:hidden block w-[10%]"><Navbar /></div>
            <div className="md:hidden block w-[75%]"></div>
            <div className="md:flex flex-initial w-[80%] justify-around hidden">
                <Link to='/'><div className="hover:text-red-400">Homepage</div></Link>
                <Link to='/products'><div className="hover:text-red-400">Products</div></Link>
                <Link to='/description'><div className="hover:text-red-400">Description</div></Link>
            </div>
            <div className="flex-initial md:w-[10%] w-[15%] justify-center">
                <Link to='/cart'><ShoppingCart /></Link>
                <div className="absolute p-1 bg-yellow-200 rounded-md ml-4 mt-[-5px]">{getItemsCount()}</div>
            </div>
            </div>
    )
}

export default Header