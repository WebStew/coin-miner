
import numbers from '../utilities/numbers';

const 	api = {

		domain 	: 'https://images.whattomine.com' 			,
		paths  	: {
			coins 		: '/coins/logos/000/000/' 			,
			nicehash 	: '/nice_hash_coins/logos/000/000/' ,
			endpoint 	: '{{:id}}/thumb/{{:tag}}.png'
		}
	};

export default {

	algorithms ( id , symbol ) {

		id 		= numbers.pad ( id , 3 );
		symbol 	= symbol.toLowerCase ();

		const 	nicehash 	= symbol === 'nicehash' 							,
				tag 		= nicehash ? 'nicehash2' 		: symbol 			,
				folder 		= nicehash ? api.paths.nicehash : api.paths.coins 	;

		return ( api.domain + folder + api.paths.endpoint ).replace ( '{{:id}}' , id ).replace ( '{{:tag}}' , tag );

	}
};