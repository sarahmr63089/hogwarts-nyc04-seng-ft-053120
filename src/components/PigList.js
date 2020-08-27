import React from "react";
import PigItem from './PigItem';

// render the Pigs
class PigList extends React.Component {

  state = {
    filterGreased: false, 
    hogs: this.props.hogs,
  }

  sortByName = () => {
    let nameHogs = [...this.state.hogs]
    nameHogs.sort(function(a, b) { 
      if (a.name < b.name ) { return -1 }
      if (a.name > b.name ) { return 1 }
      return 0
    })
    this.setState({
      hogs: nameHogs
    })
  }

  sortByWeight = () => {
    let weightHogs = [...this.state.hogs]
    weightHogs.sort(function(a, b) { return a.weight - b.weight })
    this.setState({
      hogs: weightHogs
    })
  }

  toggleGreaseFilter = () => {
    this.setState((prevState) => ({
      filterGreased: !prevState.filterGreased
    }))
  }

  getFilteredPigs = () => {
    let filteredHogs = this.state.hogs
    .filter(hog => {
      if (this.state.filterGreased) {
        return hog.greased
      }
      return true
    })
    return filteredHogs
  }

  renderPigs = (pigs) => {
    return pigs.map(hog => <PigItem key={hog.name} hog={hog} />)
  }

  render() {
    let pigs = this.getFilteredPigs()

    return (
      <div>
        <button onClick={this.toggleGreaseFilter}>Showed Greased Pigs</button>
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortByWeight}>Sort By Weight</button>
        <ul>
          { this.renderPigs(pigs) }
        </ul>
      </div>
    );
  }
}

export default PigList;
