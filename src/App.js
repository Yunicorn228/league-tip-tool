import React from 'react';
import logo from './logo.svg';
import './App.css';
import Champion from './components/Champion';
import Popup from './components/Popup';
import ChampionService from './services/champions';

class App extends React.Component {
	state = {
		champions: {},
		isPopupOpen: false,
		currentChampion: {},
	};
	handleFetchChampion = async () => {
		const championsData = await ChampionService.fetchAllChampions();
		this.setState({
			champions: championsData.data.data,
		});
	};
	handleChampionPopup = id => {
		const champions = this.state.champions;
		this.setState({
			isPopupOpen: true,
			currentChampion: champions[id],
		});
	};
	handlePopupHide = () => {
		this.setState({ isPopupOpen: false });
	};
	componentDidMount = () => {
		this.handleFetchChampion();
	};

	render() {
		return (
			<div className='App'>
				<Popup
					currentChampion={this.state.currentChampion}
					handlePopupHide={this.handlePopupHide}
					isPopupOpen={this.state.isPopupOpen}
				/>
				<div className='champions-container'>
					{Object.entries(this.state.champions).map(v => (
						<Champion
							handleChampionPopup={this.handleChampionPopup}
							champion={v[1]}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default App;
