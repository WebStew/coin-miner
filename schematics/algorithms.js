
export default {
 
	/**
	 * Re-writes the API response to our prefferd data schema.
	 * 
	 * @param {Array} data The currencies results from the API we are calling.
	 */
	get ( data ) {

		return Object.keys ( data.coins ).map (( currency ) => {

			const item = data.coins [ currency ];

			return {
				algorithm 	: item.algorithm ,
				block 		: {
					last 	: parseFloat ( item.last_block 		) ,
					reward 	: parseFloat ( item.block_reward24 	) ,
					time 	: parseFloat ( item.block_time 		)
				} ,

				difficulty 	: {
					rate 	: parseFloat ( item.difficulty24 	).toFixed ( 2 ) ,
					hash 	: parseFloat ( item.nethash 		).toFixed ( 2 )
				} ,

				exchange 	: {
					rate 	: parseFloat ( item.exchange_rate24 	) 	,
					symbol 	: item.exchange_rate_curr 					,
					volume 	: parseFloat ( item.exchange_rate_vol 	)
				} ,
				id 			: item.id 			,
				market 		: item.market_cap 	,
				currency 	: currency 			,
				profit 		: {
					rate 	: parseFloat ( item.profitability24 	) ,
					revenue : parseFloat ( item.btc_revenue24 		) ,
					reward 	: parseFloat ( item.estimated_rewards24 )
				},
				symbol 		: item.tag ,
				updated 	: parseFloat ( item.timestamp )
			};
		});
	}
};