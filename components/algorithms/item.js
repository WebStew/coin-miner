
import 		React 					from 'react';
import { 	Image 				,
			Text 				, 
			TouchableOpacity 	,
			View				} 	from 'react-native';
import 		Integer 				from '../utilities/integer';
import 		list 					from '../../styles/list';
import 		style 					from '../../styles/algorithms';
import 		numbers 				from '../../utilities/numbers';

export default class Item extends React.PureComponent {

	constructor ( props ) {
		super 	( props );

		this.detail = this.detail.bind ( this );
	}

	detail () {

		this.props.navigation.navigate 	( 
			'detail' , 
			{
				item : this.props.item
			}
		);
	}

	render () {

		const 	item 		= this.props.item 		,
				language 	= this.props.language 	,
				theme 		= this.props.theme 		,
				items 		= list 	( theme ) 		,
				appearance 	= style ( theme ) 		;

		return (

			<View>
				<TouchableOpacity 
					style 	= {{
						...items.row 	,
						...this.props.style
					}} 
					onPress = { this.detail 	}
				>
					<View style = {{
						...items.cell ,
						...appearance.head 
					}}>
						
						<Text 
							ellipsizeMode 	= 'tail'
							numberOfLines 	= { 1 }
							style 			= {{
								...items [ 'cell-text' ] ,
								...appearance.name
							}}
						>
							{ item.currency }
						</Text>
					</View>
					<Text 
						numberOfLines 	= { 1 }
						style 			= {{
							...items.cell 				,
							...items [ 'cell-text' ] 	,
							...appearance.text
						}}
					>
						{ item.symbol }
					</Text>
					<Integer 
						language 	= { language 			}
						style 		= {{
							...items.cell 				,
							...items [ 'cell-text' ] 	,
							...appearance.text
						}}
						suffix 		= '%'
						theme 		= { theme 				}
						type 		= 'highlight' 
						value 		= { item.profit.rate }
					/>
				</TouchableOpacity>
			</View>
		);
	}
};