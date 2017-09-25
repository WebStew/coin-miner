
import constants from '../constants/algorithms';

export default function (

	state 	= {
		error 	: null 		,
		items 	: [] 		,
		order 	: 'profit' 	,
		loading : true
	} , 

	action 	= {}

) {

	switch ( action.type ) {

		case constants.error 	:

			return Object.assign (
				{} 		,
				state 	,
				{
					error 	: action.error ,
					loading : false
				}
			);

		case constants.get 	:

			return Object.assign (
				{} 		,
				state 	,
				{
					error 	: null ,
					loading : true
				}
			);

		case constants.set 	:

			return Object.assign (
				{} 		,
				state 	,
				{
					error 	: null 			,
					items 	: action.items 	,
					loading : false 		,
					order 	: 'rank'
				}
			);

		case constants.order :

			const methods = {

					name 	( a , b ) {

						return ( b.name - a.name );

					} ,
					
					profit 	( a , b ) {

						return ( a.profit.rate - b.profit.rate );
					} ,

					symbol 	( a , b ) {

						return ( b.symbol - a.symbol );
					}
				} ,
		
				items = state.items.slice ( 0 );
		

			return Object.assign (
				{} 		,
				state 	,
				{
					ordering 	: false 		,
					order 		: action.order  ,
					items 		: items.sort ( methods [ action.order ])
				}
			);

		default :
			return state;
	}
};
