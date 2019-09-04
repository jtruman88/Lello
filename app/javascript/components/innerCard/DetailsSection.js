import React from 'react';
import moment from 'moment';
import CardDescription from './CardDescription';
import Labels from './Labels';

const dueDateTemplate = (dueDate, completed) => {
  if (!dueDate) return null;

  const dateClass = getDateClass(dueDate, completed);

  return (
    <li className="due-date-section">
      <h3>Due Date</h3>
      <div id="dueDateDisplay" className={dateClass}>
        <input id="dueDateCheckbox" type="checkbox" className="checkbox" defaultChecked={false} />
      	{moment(dueDate).format('MMM D [at] hh:mm a')}
      	<span>{ dateClass === 'overdue' ? '(past due)' : ''}</span>
      </div>
    </li>
  );
}

const getDateClass = (dueDate, completed) => {
	if (completed) {
		return ' completed';
	} else if (moment(dueDate).isBetween(moment(), moment().subtract(2, 'days'))) {
		return ' due-soon';
	} else if (moment().isAfter(dueDate)) {
		return ' overdue';
	} else {
		return 'due-later';
	}
};

const DetailsSection = ({ labels, due_date, completed, description, onUpdateCard, onLabelClick }) => {
	return (
    <li className="details-section">

      <ul className="modal-details-list">
				<Labels
					labels={labels}
					onLabelClick={onLabelClick}
				/>
        { dueDateTemplate(due_date, completed) }
      </ul>

      <CardDescription
        description={description}
        onSubmit={onUpdateCard}
      />

    </li>
	);
}

export default DetailsSection;
