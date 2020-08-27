import React from "react";
import PigItem from './PigItem';

// render the Pigs
class PigList extends React.Component {

  state = {
    filterGreased: false, 
    sortName: false,
    sortWeight: false
    // hogs: this.props.hogs,
  }

  sortByName = (pigs) => {
    let nameHogs = pigs.sort(function(a, b) { 
      if (a.name < b.name ) { return -1 }
      if (a.name > b.name ) { return 1 }
      return 0
    })
    return nameHogs
    // this.setState({
    //   hogs: nameHogs
    // })
  }

  sortByWeight = (pigs) => {
    let weightHogs = pigs.sort(function(a, b) { return a.weight - b.weight })
    return weightHogs
    // this.setState({
    //   hogs: weightHogs
    // })
  }

  toggleGreaseFilter = () => {
    this.setState((prevState) => ({
      filterGreased: !prevState.filterGreased
    }))
  }

  toggleSortName = () => {
    this.setState((prevState) => ({
      sortName: !prevState.sortName
    }))
    if (this.state.sortWeight) {
      this.setState((prevState) => ({
        sortWeight: !prevState.sortWeight
      }))
    }
  }

  toggleSortWeight = () => {
    this.setState((prevState) => ({
      sortWeight: !prevState.sortWeight
    }))
    if (this.state.sortName) {
      this.setState((prevState) => ({
        sortName: !prevState.sortName
      }))
    }
  }

  getFilteredPigs = () => {
    let filteredHogs = this.props.hogs
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
    pigs = this.state.sortName ? this.sortByName(pigs) : pigs
    pigs = this.state.sortWeight ? this.sortByWeight(pigs) : pigs

    return (
      <div>
        <button onClick={this.toggleGreaseFilter}>Showed Greased Pigs</button>
        <button onClick={this.toggleSortName}>Sort By Name</button>
        <button onClick={this.toggleSortWeight}>Sort By Weight</button>
        <ul>
          { this.renderPigs(pigs) }
        </ul>
      </div>
    );
  }
}

export default PigList;
