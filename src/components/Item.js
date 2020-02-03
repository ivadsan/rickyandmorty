import React from "react";

class Item extends React.Component {
  render() {
    return (
      <div className="avatar__container mt-3">
        <div>
          <img src={this.props.character.image} alt="" className="avatar" />
        </div>
        <div className="avatar__name">{this.props.character.name}</div>
      </div>
    );
  }
}

export default Item;
