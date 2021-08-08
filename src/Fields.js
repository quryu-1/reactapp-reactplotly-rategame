import React from 'react';
import './Fields.css'

const MENU = [
  "Financing", "IT", "Food", "Medical",
  "Nature", "Country", "Exercise", "Expert",
  "Monsters"
]

const RadioMenu = (props) => {
  return (
    <div>
      <input type="radio" id={props.field} name="Fields"
        onClick={() => props.changeMenu(props.field)} />
      <label htmlFor={props.field}>{props.field}<span className="help">help</span></label>
    </div>
  );
}

class Fields extends React.Component {
  createList(list) {
    const listElement = [];
    for (let i = 0; i < list.length; i++) {
      listElement.push(
        <RadioMenu
          field={MENU[i]}
          changeMenu={this.props.changeMenu}
          registerRecentResult={this.props.registerRecentResult}
        />
      );
    }
    return (
      <div>
        {listElement}
      </div>
    );
  }

  render() {
    return (
      <div>
        <p className="Fields">Fields Menu</p>
        {this.createList(MENU)}
      </div>
    );
  }
}

export default Fields;