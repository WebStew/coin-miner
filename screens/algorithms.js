
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import {	FlatList 			,
			Text 				,
			TouchableOpacity 	,
			View 				} 	from 'react-native';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		Error 					from '../components/errors/ajax';
import 		Algorithm 				from '../components/algorithms/item';
import 		Header 					from '../components/algorithms/header';
import 		Loader 					from '../components/utilities/loader';
import 		SearchIcon 				from '../components/search/icon';
import 		SearchInput 			from '../components/search/input';
import 		actions 				from '../actions/algorithms';
import 		device 					from '../properties/device';
import 		list 					from '../styles/list';
import 		style 					from '../styles/algorithms';
import 		scene 					from '../styles/scene';
import 		seperator 				from '../styles/seperators';
import 		stripe 					from '../styles/stripe';
import 		analytics 				from '../utilities/analytics';

export default connect (

	state => ({
		algorithms 	: state.algorithms 	,
		language 	: state.language 	,
		search 		: state.search 		,
		theme 		: state.theme
	})

) ( class Algorithms extends React.Component {

	static navigationOptions = ({ screenProps }) => {

		const language 	= screenProps.language 	,
				theme 	= screenProps.theme 	;

		return {
			headerRight : <SearchIcon 	/> ,
			headerTitle : <Header 		/> ,
			tabBarIcon 	: ({ focused }) => {

				return (
					<Ionicons
						name 	= 'ios-stats-outline'
						size 	= { 32 											}
						color 	= { focused ? theme.disabled : theme.secondary 	}
					/>
				);
			} ,
			title 		: language.screens.algorithms.title
		}
	};

	constructor ( props ) {
		super 	( props );

		this.header 	= this.header.bind 		( this );
		this.refresh 	= this.refresh.bind 	( this );
		this.row 		= this.row.bind 		( this );
		this.separator 	= this.separator.bind 	( this );

		this.props.dispatch ( actions.get ());
	}

	row ({ 
		index , 
		item 
	}) {

		const 	theme = this.props.theme ,
				style = index % 2 === 0 ? stripe ( theme ).secondary : stripe ( theme ).primary;

		return ( 
			<Algorithm
				item 		= { item 					}
				language 	= { this.props.language 	}
				navigation 	= { this.props.navigation 	}
				style 		= { style 					}
				theme 		= { theme 					}
			/>
		);
	}

	separator ( section , row , highlighted ) {

		const theme = this.props.theme;

		return (
			<View
				key 	= { section + '-' + row 	}
				style 	= { seperator ( theme ) 	}
			/>
		);
	}

	refresh () {
	
		analytics.event 	( 
			'algorithms' 	, 
			'refresh' 		, 
			'get' 			, 
			'user' 	
		);
		this.props.dispatch ( actions.get ());
	}

	cells () {

		const 	theme 		= this.props.theme 	,
				appearance 	= style ( theme ) 	;

		return this.headers ().map (( item , index ) => {

			const styles = index === 0 ? 	{
				...item.styles.touch 		,
				...appearance.head 
			} : item.styles.touch;

			//onPress 		= { item.press.bind ( this )}

			return (
				<TouchableOpacity 
					key 			= { index 					}
					style 			= { styles 					}
				>
					<Text  
						numberOfLines 	= { 1 					} 
						style 			= { item.styles.text 	}>
						{ item.text }
					</Text>
				</TouchableOpacity>
			);
		});
	}

	data () {

		// If there is a search term - filter the currencies by it
		return this.props.search.value ? this.props.algorithms.items.filter (( item , index ) => {

			return item.currency.toLowerCase ().indexOf ( this.props.search.value.toLowerCase ()) > -1;

		}) : this.props.algorithms.items;
	}

	headers () {

		const 	language 	= this.props.language 	,
				theme 		= this.props.theme 		,
				appearance 	= style ( theme ) 		,
				items 		= list 	( theme ) 		;

		// let 	active 		= {} 					;

		// active [ this.props.algorithms.order ] = {
		// 	color : theme.disabled
		// };

		return [
			{
				// press : () => {

				// 	analytics.event 	( 'algorithms' , 'order' , 'name' 	);
				// 	this.props.dispatch ( actions.order 	( 'name' 		));
				// } ,
				styles : {
					text : { 
						...items 	[ 'head-text' 	] ,
						//...active 	[ 'name' 		]
					} ,
					touch : {
						...items.cell ,
						...appearance.head
					}
				} ,
				text : language.screens.algorithms.headers.name
			} ,
			{
				// press : () => {

				// 	analytics.event 	( 'algorithms' , 'order' , 'symbol' );
				// 	this.props.dispatch ( actions.order 	( 'symbol' 		));
				// } ,
				styles : {
					text : {
						...items 	[ 'head-text' 	] 	,
						...appearance.text 				,
						//...active 	[ 'symbol' 		]
					} ,
					touch : items.cell
				} ,
				text : language.screens.algorithms.headers.symbol
			} ,
			{
				// press : () => {

				// 	analytics.event 	( 'algorithms' , 'order' , 'profit' );
				// 	this.props.dispatch ( actions.order 	( 'proft' 		));
				// } ,
				styles : {
					text : {
						...items 	[ 'head-text' 	] 	,
						...appearance.text 				,
						//...active 	[ 'profit' 		]
					} ,
					touch : items.cell 
				} ,
				text : language.screens.algorithms.headers.profit
			}
		];
	}

	header () {

		const 	theme = this.props.theme 	,
				items = list ( theme ) 		;

		if (
			! this.props.algorithms.items.length || 
			this.props.algorithms.error 
		) {
			
			return null;
		}

		return (
			<View style = { items.head }>
				{ this.cells ()}
			</View>
		);
	}

	render () {

		const 	language 	= this.props.language 	,
				theme 		= this.props.theme 		,
				scenery 	= scene ( theme ) 		,
				appearance 	= style ( theme ) 		,
				data 		= this.data () 			;


		if ( this.props.algorithms.loading ) {
			
			return (
				<View  style 	= { scenery.body 					}>
					<Loader 
						loading = { this.props.algorithms.loading 	}
						size 	= 'large' 
						theme 	= { theme 							}
					/>
				</View>
			);
		}

		if ( this.props.algorithms.error ) {

			analytics.screen 	( 'algorithms:500' 				);
			return 				(
				<Error 
					error 		= { this.props.algorithms.error }
					language 	= { language 					}
					press 		= { this.refresh 				}
					theme 		= { theme 						}
					text 		= { language.errors.ajax 		}
				/>
			);
		}

		if ( ! data.length && ! this.props.algorithms.loading ) {

			return (
				<View style = { scenery.body }>
					<SearchInput  	/>
					<View 		style 	= { appearance [ '404' ].view 	}>
						<Text 	style 	= { appearance [ '404' ].text 	}>
							{ language.screens.algorithms.none + ' "' 	}
							<Text style = { appearance [ '404' ].term 	}>
								{ this.props.search.value + '"' 		}
							</Text>
						</Text>
					</View> 
				</View>
			);
		}

		return (
			<View style = { scenery.body }>
				<SearchInput  	/>
				{ this.header 	()}
				<FlatList
					theme 					= { theme 							}
					data 					= { data 							}
					ItemSeparatorComponent 	= { this.separator 					}
					initialNumToRender 		= { Math.round ( device.height / 10 )}
					keyExtractor 			= {( item , index ) => index 		}
					onRefresh 				= { this.refresh 					}
					refreshing 				= { this.props.algorithms.loading 	}
					renderItem 				= { this.row 						}
				/>
			</View>
		);
	}
});
