
import { 	combineReducers } 	from 'redux';
import 		algorithms 			from './algorithms';
import 		language 			from './language';
import 		navigation 			from './navigation';
import 		search 				from './search';
import 		theme 				from './theme';

export default combineReducers ({
	algorithms 	,
	language 	,
	navigation 	,
	search 		,
	theme
});
