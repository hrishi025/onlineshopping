//import Profile from '../image/profile.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCompany } from '../../actions/companyAction';
import { COMPANY_UPDATE_REQUEST } from '../../constants/productConstants';
import { COMPANY_UPDATE_SUCCESS } from '../../constants/productConstants';
import { COMPANY_UPDATE_FAIL } from '../../constants/productConstants';

const UpdateCompanyScreen = (props) => {
	console.log(`props.location.state--->${props.location.state.comp_id}`);

	// const {prod_title,prod_price,prod_qty} = props.location.state

	
	const comp_title = props.location.state.comp_title;
	const comp_description = props.location.state.comp_description;
	const comp_id = props.location.state.comp_id;
	const updateComponyStore = useSelector((state) => state.updateComponyStore);
	const { response, loading, error } = updateComponyStore;

	const dispatch = useDispatch();

	const [ compTitle, setCompTitle ] = useState('' + comp_title);
	const [ compDescription, setCompDescription ] = useState('' + comp_description);
	

	// useEffect(
	// 	() => {
	// 		if (response && response.status == 'success') {
	// 			dispatch({ type: COMPANY_UPDATE_SUCCESS });
			  
	// 		} else if (error) {
	// 			// there is an error while making the API call
	// 			console.log(error);
	// 			//alert('error while making API call');
	// 		}
	// 	},
	// 	[ response, loading, error ]
	// );

	//  console.log(`state---> ${state}`)
	const updateButton = () => {
		console.log(`in saveButton Method`);
		dispatch(updateCompany(comp_id,compTitle, compDescription));
        props.history.push('/show-company');
	};

	return (
		<div>
			<div className="my-5">
				<h1 className="text-center">Edit Company Details</h1>
			</div>

			<div className="container contact_div">
				<div className="row">
					{/* <div className="col-md-6" col-10 mx-auto>
						<img
							src={Profile}
							className="img-fluid contact-img"
							alt="profile img"
							height="250"
							width="250"
						/>
					</div> */}

					<div className="col-md-6" col-10 mx-auto>
						<div class="mb-3">
							<label for="exampleFormControlInput1" class="form-label">
								<strong>Company Title</strong>
							</label>
							<input
								defaultValue={comp_title}
								type="text"
								class="form-control"
								onChange={(e) => setCompTitle(e.target.value)}
							/>
						</div>

						<div class="mb-3">
							<label for="exampleFormControlInput1" class="form-label">
								<strong>Company desciption</strong>
							</label>

							<input
								defaultValue={comp_description}
								type="text"
								class="form-control"
								onChange={(e) => setCompDescription(e.target.value)}
							/>
						</div>


						<div class="col-12">
							<button class="btn btn-success " onClick={updateButton}>
								Save Changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpdateCompanyScreen;
