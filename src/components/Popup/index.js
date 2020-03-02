import React from 'react';
import classnames from 'classnames';
import skinUrl from '../../constants/skinUrl';

import './index.css';
const Popup = ({ isPopupOpen, handlePopupHide, currentChampion }) => {
	return (
		<div
			className={classnames('popup', {
				isActive: isPopupOpen,
			})}>
			<button onClick={handlePopupHide}>Close</button>
			<h1>{currentChampion.id}</h1>
			<img src={`${skinUrl}${currentChampion.id}_0.jpg`} alt='' />
		</div>
	);
};

export default Popup;
