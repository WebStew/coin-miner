
import device from '../properties/device';

const store = device.os.ios ? 'app' : 'play';

export default {

	email 		: 'cryptobullography@gmail.com' 								,
	name 		: 'Crypto Coin Miner' 											,
	version 	: 'v1.0.0' 														,
	sentry 		: 'https://aba52a099ed84db5a30acfaac8fa7e6e@sentry.io/223276' 	,

	cryptobullography () {
		
		const 	stores 	= {
				app 	: 'https://itunes.apple.com/gb/app/crypto-coin-bull/id1257246245?mt=8' ,
				play 	: 'https://play.google.com/store/apps/details?id=com.webstew.bullet&hl=en'
			};

		return stores [ store ];
	} ,

	store 		() {

		const 	stores 	= {
				app 	: 'https://itunes.apple.com/gb/app/crypto-coin-miner/id1289304469?mt=8' ,
				play 	: 'https://play.google.com/store/apps/details?id=com.webstew.cryptocoinminer&hl=en'
			};

		return stores [ store ];
	}
};