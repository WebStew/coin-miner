
import 		React 			from 'react';
import {	Image 		} 	from 'react-native';
import 		api 			from '../../api/images';

export default class Algorithms extends React.Component {

	constructor ( props ) {
		super 	( props );

		this.state 	= {
			url 	: api.algorithms 	( 
				this.props.id 		, 
				this.props.symbol 
			)
		};

		this.version 	= 0;
		this.url 		= this.url.bind ( this );
	}

	url () {

		// API sucks we can't programmatically find the latest version of a logo so we have to hammer it till we get there
		// Don't hammer it too much though
		const 	id 	= this.version < 4 ? this.props.id : '019',
				url = this.version < 4 ? api.algorithms ( id , this.props.symbol + this.version ) : api.algorithms ( id , 'NICEHASH' );

		this.version = this.version + 1;
		this.setState ({
			url : url
		});
	}

	render () {

		return (
			
			<Image 	
				onError = { this.url 			}
				style 	= { this.props.style 	}
				source 	= {{
					uri : this.state.url
				}}
			/>
		);
	}
};