import React from 'react';

class Labels extends React.Component {
  state = {
    clickedLabel: null
  };

  getLabels = (labels) => {
  	return labels.map((l, i) => {
      return (
        <div
          key={i}
          className="member-container"
          onClick={() => props.onLabelClick(
            this.clickedLabel.offsetTop,
            this.clickedLabel.offsetLeft
          )}
          ref={el => this.clickedLabel = el}
        >
          <div className={`${l} label colorblindable`}></div>
        </div>
      );
  	});
  }

  render() {
    if (!this.props.labels.length) {
      return null;
    }

    return (
      <li className="labels-section">
        <h3>Labels</h3>
        { this.getLabels(this.props.labels) }
        <div className="member-container"><i className="plus-icon sm-icon"></i>
        </div>
      </li>
    );
  }
};

export default Labels;
