import { Link } from "react-router-dom";
import useFetch from "./Products/fetchProducts"
import SingleProduct from "./Products/singleProduct";
import Loading from "./Loading";

const Homepage = () => {

    const {data,loading} = useFetch("https://fakestoreapi.com/products");

    if(loading) return <Loading />

    return(
        <div>
            <div className='grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-2 mt-24 mb-16 justify-center md:w-[80%] md:ml-[10%] w-[95%] ml-[2.5%]'>
            {!data ? <div>No Products To Show!</div> :
            data.slice(0,8).map((item)=>(
                <SingleProduct key={item.id} item={item} />
            ))}
            </div>
            <div className="w-full text-center mb-12">
            <Link to='/products' className="hover:text-blue-500 font-semibold">More Products</Link>
            </div>
        </div>
    )
}

export default Homepage