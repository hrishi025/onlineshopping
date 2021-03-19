import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { fetchUserAddresses } from "../../actions/addressAction"
import { cartCheckout, getAllCartItemsAtLogin } from "../../actions/cartActions"
import { CART_CHECKOUT_RESET } from "../../constants/cartConstants"

const ShowUserAddresses = (props) => {

    const fetchAddressStore = useSelector(state => state.fetchAddressStore)

    const dispatch = useDispatch()

    const [addId, setAddId] = useState(0)

    useEffect(() => {
        dispatch(fetchUserAddresses())
    }, [])

    useEffect(() => {
        console.log(addId)
    }, [addId])


    //to check checkout status
    const cartCheckoutStore = useSelector(state => state.cartCheckoutStore)
    useEffect(async () => {
        if (cartCheckoutStore.response && cartCheckoutStore.response.status == 'success') {
            await dispatch({ type: CART_CHECKOUT_RESET })
            await dispatch(getAllCartItemsAtLogin());
            await props.history.push('/user-myorder');
        }
    }, [cartCheckoutStore.response, cartCheckoutStore.error, cartCheckoutStore.loading])

    const checkout = () => {
        dispatch(cartCheckout(addId));
    }

    return (
        <div>
            {
                fetchAddressStore && fetchAddressStore.response && fetchAddressStore.response.status == 'success' &&
                fetchAddressStore.response.data.map((address) => {
                    return (
                        <div>
                            <input type="radio" name="site_name" value={address.add_id} onChange={(e) => { setAddId(e.target.value) }} />
                            {address.add_id}, {address.address}, {address.city}, {address.state}, {address.country}, {address.pin}
                        </div>
                    )
                })
            }

            <div>
                <Link to="/add-new-address">
                    <button>Add New Address</button>
                </Link>
                <button onClick={checkout}>checkout</button>
            </div>
        </div >
    )
}

export default ShowUserAddresses
