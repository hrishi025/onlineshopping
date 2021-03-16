import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  addCategory,
  deleteCategory,
  getCategory,
  updateCategory,
} from '../../actions/categoryAction'

const CategoryListScreen = (props) => {
  const dispatch = useDispatch()
  const categoryStore = useSelector((store) => store.getCategoryStore)
  const { error, response, loading } = categoryStore

  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getCategory())
  }, [])

  useEffect(() => {}, [error, response, loading])

  const onUpdate = (c) => {
    props.history.push({
      pathname: '/update-category',
      state: c, // your data array of objects
    })
  }

  const onDelete = (c) => {
    dispatch(deleteCategory(c.cat_id))
    props.history.push('/admin')
  }
  const onAddCategory = () => {
    props.history.push('/add-category')
  }

  return (
    <div>
      <button onClick={onAddCategory} className="btn btn-primary float-end">
        Add Category
      </button>
      {/* cat_id, cat_title, cat_description */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Category Id</th>
            <th>Category Title</th>
            <th>Category Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response.data &&
            response.data.length > 0 &&
            response.data.map((c) => {
              return (
                <tr>
                  <td>{c.cat_id}</td>
                  <td>{c.cat_title}</td>
                  <td>{c.cat_description}</td>
                  <td>
                    <button
                      onClick={() => onUpdate(c)}
                      type="button"
                      className="btn btn-primary ">
                      Update Category
                    </button>
                    <button
                      onClick={() => onDelete(c)}
                      type="button"
                      className="btn btn-danger float-end ">
                      Delete Category
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

export default CategoryListScreen
