import React from 'react';
import AddButtonsContainer from './AddButtonsContainer';
import ActionButtonsContainer from './ActionButtonsContainer';

const ButtonsList = (props) => {
	return (
    <aside className="modal-buttons">
      <h2>Add</h2>
      	<AddButtonsContainer />
      <h2>Actions</h2>
      	<ActionButtonsContainer
					card={props.card}
					onUpdateCard={props.onUpdateCard}
				/>

      <ul className="light-list">
        <li className="not-implemented">Share and more...</li>
      </ul>
    </aside>
	);
}

export default ButtonsList;
