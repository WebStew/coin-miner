
import 		React 				from 'react';
import 	{ 	View 			,
			ScrollView
		} 						from 'react-native';
import 	{ 	connect 		} 	from 'react-redux';
import 		Back 				from '../components/utilities/back';
import 		Heading 			from '../components/utilities/headings';
import 		Sections 			from '../components/utilities/sections';
import 		layout 				from '../styles/layout';
import 		scene 				from '../styles/scene';
import 		style 				from '../styles/detail';
import 		numbers 			from '../utilities/numbers';
import 		analytics 			from '../utilities/analytics';

export default connect (

	state => ({
		language 	: state.language 	,
		theme 		: state.theme
	})

) ( class Detail extends React.Component {

	static navigationOptions = ({ navigation , screenProps }) => {

		const 	language 	= screenProps.language 					,
				theme 		= screenProps.theme 					,
				name 		= navigation.state.params.item.currency ;

		return {

			title 			: `${ name } ${ language.screens.detail.title }` ,

			headerLeft 		: <Back 
				press 		= {() => navigation.goBack 	()} 
				value 		= { language.actions.return }
			/>
		};
	}

	render () {

		const 	item 		= this.props.navigation.state.params.item ,
				language 	= this.props.language 	,
				theme 		= this.props.theme 		,
				appearance 	= style 	( theme ) 	,
				arrange 	= layout 	( theme ) 	,
				scenery 	= scene 	( theme ) 	; 		

		analytics.screen 	( 'detail:' + item.currency );
		return ( 
			<ScrollView style = { scenery.body 		}>
				<View 	style = { arrange.fill 		}>
					<View 	
						style = {{
							...arrange.row 		,
							...scenery.header
						}}
					>
						<Heading 
							title 	= { item.currency + ' ( ' +  item.symbol + ' )' } 
							theme 	= { theme 										}
							type 	= '1'
						/>
					</View>
					<Sections
						language 	= { language 	}
						theme 		= { theme 		}
						sections 	= {[
							{
								title 		: 'Profitability' ,
								data 		: [
									{
										suffix 		: '%' 					,
										property 	: 'Profit'				,
										type 		: 'highlight' 			,
										value 		: item.profit.rate
									} ,
									{
										property 	: 'BTC Revenue' 		,
										value 		: item.profit.revenue
									} ,
									{
										property 	: 'Estimated Rewards' 	,
										value 		: item.profit.reward
									} ,
									{
										prefix 		: item.exchange.symbol + ' ' 	,
										property 	: 'Exchange Rate' 				,
										value 		: item.exchange.rate
									} ,
									{
										prefix 		: item.exchange.symbol + ' ' 	,
										property 	: 'Exchange Volume' 			,
										value 		: item.exchange.volume
									} ,
									{
										prefix 		: '$ ' 			,
										property 	: 'Market Cap' 	,
										value 		: item.market
									} ,
								]
							} ,
							{
								title 		: 'Difficulty' ,
								data 		: [
									{
										property 	: 'Algorithm' ,
										value 		: item.algorithm
									} , 
									{
										property 	: 'Difficulty' ,
										value 		: numbers.format ( item.difficulty.rate ) 
									} , 
									{
										property 	: 'Nethash' ,
										value 		: numbers.format ( item.difficulty.hash ) 
									}
								]
							} ,
							{
								title 		: 'Block Details' ,
								data 		: [
									{
										property 	: 'Block Time' ,
										value 		: item.block.time
									} , 
									{
										property 	: 'Block Reward',
										value 		: item.block.reward
									} , 
									{
										property 	: 'Last Block',
										value 		: item.block.last
									}
								]
							}
						]}
					/>
				</View>
			</ScrollView>
		);
	}
});
