
import api 			from '../api/algorithms';
import constants 	from '../constants/algorithms';
import schematic 	from '../schematics/algorithms';

const algorithms = { 
	
		error ( data ) {

			return {
				error 	: data ,
				type 	: constants.error
			};
		} ,

		get () {

			return {
				type 	: constants.get
			};
		} ,

		order ( order ) {
			
			return {
				order 	: order ,
				type 	: constants.order
			};
		} ,

		set ( data ) {

			return {
				items 	: data ,
				type 	: constants.set
			};
		}
	};

export default {

	order : algorithms.order ,

	get () {

		return ( dispatch ) => {

			dispatch ( algorithms.get ());

			// Get the currencies
			return api.get 	()
				.then 		(( response ) => response.json ())
				.then 		(( data 	) => dispatch ( algorithms.set 		( schematic.get ( data ))))
				.catch 		(( data 	) => dispatch ( algorithms.error 	( data )));
		}
	}
};
