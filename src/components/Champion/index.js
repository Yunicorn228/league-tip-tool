import React from 'react';
import skinUrl from '../../constants/skinUrl';

const Champion = ({ champion, handleChampionPopup }) => {
	return (
		<div onClick={() => handleChampionPopup(champion.id)} className='champion'>
			<p>{champion.id}</p>
			<img src={`${skinUrl}${champion.id}_0.jpg`} alt='' />
		
		</div>
	);
};

export default Champion;
