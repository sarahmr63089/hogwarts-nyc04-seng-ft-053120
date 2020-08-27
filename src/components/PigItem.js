import React from "react";
import PigDetails from './PigDetails'

// set up what each Pig Item looks like
class PigItem extends React.Component {

  state = {
    details: false
  }

  toggleDetails = () => {
    this.setState((prevState) => ({
      details: !prevState.details
    }))
  }

  nameForImage = () => {
    let name = this.props.hog.name.toLowerCase().split(' ').join('_')
    let pigImage = require(`../hog-imgs/${name}.jpg`)
    return pigImage
  }

  render() {
    return (
        <li className="pigTile">
          <h2>Name: {this.props.hog.name} </h2>
          <img src={this.nameForImage()} alt={this.props.hog.name}></img>
          <button onClick={this.toggleDetails}>Show Details</button>
          { this.state.details ? 
          <div>
            <PigDetails hog={this.props.hog} />
          </div> : null
          }
        </li>
    );
  }
}

export default PigItem;