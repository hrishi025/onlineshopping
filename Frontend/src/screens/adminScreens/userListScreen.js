import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import{getAllUsers,approveUser,suspendUser} from '../../actions/userActions'

const UserListScreen = (props) => {

  const dispatch = useDispatch()
  const userListStore = useSelector((store) => store.userListStore)
  const { error, response, loading } = userListStore

//   const { error, response, loading } = deleteProductStore
  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  useEffect(() => {
  }, [error, response, loading])

  const onApprove = (u) => {
   dispatch(approveUser(u.user_id))
  }

  const onSuspend=(u)=>{
    dispatch(suspendUser(u.user_id))

  }

 

  return (
    <div>
      
   {/* <button onClick={onAddProduct} className="btn btn-primary float-end">
        Add Product
      </button> */}

      <table className="table table-striped">
        <thead>
          <tr>
            <th>UserId</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Status</th>
            <td>Actions</td>
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
                  <td>
                  <button onClick={()=>onApprove(u)} type="button" className="btn btn-primary ">
                      Approve User
                   </button>
                 <button onClick={()=>onSuspend(u)} type="button" className="btn btn-danger float-end ">
                      Suspend User
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

export default UserListScreen

