
import 		React 			from 'react';
import { 	Provider 	} 	from 'react-redux';
import { 	AppLoading 	,
			FacebookAds } 	from 'expo';
import 		Sentry 			from 'sentry-expo';
import { 	Ionicons 	} 	from '@expo/vector-icons';
import 		Main 			from './screens/main';
import 		language 		from './actions/language';
import 		theme 			from './actions/theme';
import 		application 	from './configuration/application';
import 		database 		from './configuration/database';
import 		configuration 	from './configuration/store';
import 		analytics 		from './utilities/analytics';
import 		cache 			from './utilities/cache';

Sentry.config ( application.sentry ).install ();

const store = configuration ();

export default class Application extends React.Component {

	state = {
		cache : false
	};

	async setCache () {

		try {

			await cache.assets ({
				images 	: [] ,
				fonts 	: [
					Ionicons.font ,
					{ 
						'space-mono' : require ( './assets/fonts/SpaceMono-Regular.ttf' )
					}
				]
			});
		} 
		
		catch ( error ) {
			console.log 	( error.message );
		} 
		
		finally {

			this.setState ({
				cache : true
			});
		}
	}

	componentWillMount () {

		this.setCache 	();

		// Setup the local databases
		database.settings.setup ();

		// Setup the analytics
		analytics.setup 		();

		// Get any data from the local databases
		store.dispatch 	( theme.get 	());
		store.dispatch 	( language.get 	());

		// Send test ads to the device if in development mode
		if ( __DEV__ ) {

			FacebookAds.AdSettings.addTestDevice ( FacebookAds.AdSettings.currentDeviceHash );
		}
	}

	render () {

		if ( this.state.cache ) {

			return (
				
				<Provider store = { store }>
					<Main />
				</Provider>
			);
		} 
		
		else {

			return <AppLoading />;
		}
	}
};
