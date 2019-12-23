import React, {Fragment} from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	// const cardsArray = robots.map((user,i) => 
	// 		<Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email} username={robots[i].username}/>
	// 	);
	return(
		<Fragment>
			<div>
				{
					robots.map((user,i) => 
		 			<Card key={robots[i].id} 
			 			id={robots[i].id} 
			 			name={robots[i].name} 
			 			email={robots[i].email} 
			 			username={robots[i].username}
		 			/>
		 		)}
	 		</div>
		</Fragment>
	);
}

export default CardList;