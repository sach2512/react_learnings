import { useSelector, useDispatch } from "react-redux";
import { clearcart } from "../utils/cartslice";

export default function Cart() {
    const cartitems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    function handleclear() {
        dispatch(clearcart());
    }

    const calculateTotalCost = () => {
        return cartitems.reduce((total, item) => total + item.menu_price * item.quantity, 0);
    };

    return (
        <div>
            <h1 className="text-red-300 font-extrabold text-center">This is the cart</h1>
            <button className="p-2 m-2 bg-green-300" onClick={handleclear}>Clear Cart</button>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2">Image</th>
                        <th className="py-2">Name</th>
                        <th className="py-2">Price</th>
                        <th className="py-2">Quantity</th>
                        <th className="py-2">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cartitems.map((item) => (
                        <tr key={item.menu_id} className="bg-gray-100">
                            <td className="border px-4 py-2">
                                <img src={item.menu_image} alt={item.menu_name} style={{ width: "100px", height: "100px" }} />
                            </td>
                            <td className="border px-4 py-2">{item.menu_name}</td>
                            <td className="border px-4 py-2">{item.menu_price}</td>
                            <td className="border px-4 py-2">{item.quantity}</td>
                            <td className="border px-4 py-2">{item.menu_price * item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="total-cost p-2 m-2 bg-yellow-300 text-center font-bold">
                Total Cost: {calculateTotalCost()}
            </div>
        </div>
    );
}
