import React from 'react';
import { Text, View } from 'react-native';

// Components
import Board from "./components/board/Board";
import SplashScreen from "./components/SplashScreen";

// Assets
import { styles } from "./appStyle";


export default class App extends React.Component {
	state = { loading: true };

	componentDidMount = () => {
		setTimeout(() => {
			this.setState(() => ({ loading: false }));
		}, 2000);
	}

	render() {
		if(!this.state.loading) return <Board />
		else return <SplashScreen />
	}
}
