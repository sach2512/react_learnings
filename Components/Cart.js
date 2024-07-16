import { useSelector ,} from "react-redux"
import store from "../utils/store";
import cartslice, { clearcart } from "../utils/cartslice";
import { useDispatch } from "react-redux";
export default function Cart(){
    const cartitems = useSelector((store)=> store.cart.items)
    const dispatch = useDispatch();
    console.log(cartitems);
    function handleclear(){
        dispatch(clearcart())
    }
    return(
        <div>
            <h1 className="text-red-300 font-extrabold text-center"> this is cart</h1>
            <button className="p-2 m-2 bg-green-300" onClick={()=>handleclear()}>clear cart</button>
{cartitems.map((item) => (
                <div key={item.menu_id} className="card w-72 h-100 p-2 border-solid border-red-300 m-14 shadow-lg bg-red-400">
                    <div className="card-header">
                        <h2 className="menu-name">{item.menu_name}</h2>
                        <p className="menu-price">Price: {item.menu_price}</p>
                    </div>
                    <div className="card-body">
                        <img src={item.menu_image} alt={item.menu_name} className="menu-image" style={{ width: "100%", height: "200px" }} />
                        <p className="menu-description">{item.description}</p>
                    </div>
                </div>
            ))}
            
        </div>
    )
}