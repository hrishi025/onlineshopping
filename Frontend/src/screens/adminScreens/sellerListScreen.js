import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  getAllUsers,
  approveUser,
  suspendUser,
  getAllSellers,
  approveSeller,
  suspendSelller,
} from '../../actions/userActions'

const SellerListScreen = (props) => {
  const dispatch = useDispatch()
  const userListStore = useSelector((store) => store.userListStore)
  const { error, response, loading } = userListStore

  //   const { error, response, loading } = deleteProductStore
  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getAllSellers())
  }, [])

  useEffect(() => {}, [error, response, loading])

  const onApprove = (u) => {
    dispatch(approveSeller(u.user_id))
    props.history.push('/admin')
  }

  const onSuspend = (u) => {
    dispatch(suspendSelller(u.user_id))
    props.history.push('/admin')
  }

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>UserId</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response.data &&
            response.data.length > 0 &&
            response.data.map((u) => {
              return (
                <tr>
                  <td>{u.user_id}</td>
                  <td>{u.user_name}</td>
                  <td>{u.user_email}</td>
                  <td>{u.user_status}</td>
                  <td>{u.user_role}</td>
                  <td>
                    <button
                      onClick={() => onApprove(u)}
                      type="button"
                      className="btn btn-primary ">
                      Approve Seller
                    </button>
                    <button
                      onClick={() => onSuspend(u)}
                      type="button"
                      className="btn btn-danger float-end ">
                      Suspend Seller
                    </button>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default SellerListScreen
