import React from "react";

class PigDetails extends React.Component {

  render() {
    let { specialty, greased, weight } = this.props.hog
    return (
      <div>
        <p>Speciality: {specialty} </p>
        <p>{greased}{greased ? "This pig is greased" : "This pig is not greased"}</p>
        <p>Weight: {weight}</p>
        <p>Highest Medal Achieved: {this.props.hog["highest medal achieved"]}</p>
      </div>
    );
  }
}

export default PigDetails;