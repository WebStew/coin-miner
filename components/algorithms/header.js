
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import {	Text 				} 	from 'react-native';
import 		style 					from '../../styles/header';

export default connect (

	state => ({
		algorithms 	: state.algorithms 	,
		language 	: state.language 	,
		theme 		: state.theme
	})

) ( class Header extends React.Component {

	render () {

		const 	language 	= this.props.language 	,
				title 		= this.props.algorithms.loading ? language.actions.loading : language.screens.currencies.title.replace ( '{{length}}' , this.props.algorithms.items.length ) ,
				theme 		= this.props.theme 		,
				appearance 	= style ( theme ) 		;

		return ( 
			<Text 
				numberOfLines 	= { 1 					}
				style 			= { appearance.title 	}
			>
				{ title }
			</Text>
		);
	}
});