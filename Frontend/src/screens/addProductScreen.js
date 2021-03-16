import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  getAllCategories,
  getAllCompanies,
} from "../actions/productActions";
import { PRODUCT_POST_RESET } from "../constants/productConstants";

const AddProductScreen = (props) => {
  const addProductStore = useSelector((state) => state.addProductStore);
  const { response, loading, error } = addProductStore;

  const companyFetchStore = useSelector((state) => state.companyFetchStore);

  const categoryFetchStore = useSelector((state) => state.categoryFetchStore);

  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");
  const [prodtitle, setProdtitle] = useState("");
  const [proddesc, setProddesc] = useState("");
  const [prodprice, setProdprice] = useState("");
  const [prodqty, setProdqty] = useState("");
  let [selectedFile, setSelectedFile] = useState([])

  const categoryChangeHandler = (e) => setCategory(e.target.value);
  const companyChangeHandler = (e) => setCompany(e.target.value);

  const dispatch = useDispatch();

  const addnewProduct = () => {
    console.log("in add Product button function");
    dispatch(
      addProduct(prodtitle, proddesc, category, prodprice, company, prodqty, selectedFile)
    );
  };

  const onFileSelected = (event) => {
    setSelectedFile(event.target.files[0])
  }

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllCompanies());
  }, []);

  useEffect(() => {
    if (response && response.status == "success") {
      dispatch({ type: PRODUCT_POST_RESET });
      props.history.push("/");
    } else if (error) {
      // there is an error while making the API call
      dispatch({ type: PRODUCT_POST_RESET });
      console.log(error);
      alert("error while making API call");
    }
  }, [response, loading, error]);

  return (
    <div>
      <h1>Add Product Screen</h1>

      <div>
        <label>Product Title</label>
        <input
          type="text"
          onChange={(e) => setProdtitle(e.target.value)}
        ></input>
      </div>

      <div>
        <label>Product Description</label>
        <input
          type="text"
          onChange={(e) => setProddesc(e.target.value)}
        ></input>
      </div>

      <div>
        <label>Product Price</label>
        <input
          type="number"
          onChange={(e) => setProdprice(e.target.value)}
        ></input>
      </div>

      <div>
        <label>Product Quantity</label>
        <input
          type="number"
          onChange={(e) => setProdqty(e.target.value)}
        ></input>
      </div>

      <div>
        <label>Product Category</label>
        {console.log(categoryFetchStore.response)}
        <select id="catTitle" size="0" onChange={categoryChangeHandler}>
          <option value="default">Choose</option>
          {categoryFetchStore.response &&
            categoryFetchStore.response.data &&
            categoryFetchStore.response.data.map((cat) => {
              return (
                <option
                  key={cat.cat_id}
                  value={cat.cat_id}
                  onChange={categoryChangeHandler}
                >
                  {cat.cat_title}
                </option>
              );
            })}
        </select>
      </div>

      <div>
        <label>Product Company</label>
        {console.log(companyFetchStore.response)}
        <select id="compTitle" size="0" onChange={companyChangeHandler}>
          <option value="default">Choose</option>
          {companyFetchStore.response &&
            companyFetchStore.response.data &&
            companyFetchStore.response.data.map((comp) => {
              return (
                <option
                  key={comp.comp_id}
                  value={comp.comp_id}
                  onChange={categoryChangeHandler}
                >
                  {comp.comp_title}
                </option>
              );
            })}
        </select>
      </div>

      <div>
        <label>Photo</label>
        <input onChange={onFileSelected} type='file' />
      </div>

      <div>
        <button type="submit" onClick={addnewProduct}>
          addProduct
        </button>
      </div>
    </div>
  );
};

export default AddProductScreen;
