
const api = {
		domain 	: 'http://whattomine.com' 	,
		path 	:'/coins.json' 						,
		headers : {
			Accept 	: 'application/json' 			,
			headers : {
				'Content-Type' : 'application/json'
			}
		}
	};

export default {
	
	get : async function ( currency ) {

		return fetch ( api.domain + api.path , {
			...api.headers ,
			method : 'GET'
		});
	}
};
