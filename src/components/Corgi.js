import React from "react";
import PropTypes from "prop-types";

class Corgi extends React.Component {
  constructor(props) {
    super(props);

    this.placeCorgiUrl = 'http://www.placecorgi.com';

    // this.state = {
    //   height: props.height,
    //   width: props.width
    // }
  }

  render () {
    return (
      <div>
        <div>Height: {this.props.height}</div>
        <div>Width: {this.props.width}</div>
        <img alt="Some Corgi" className="cute-corgi" src={`${this.placeCorgiUrl}/${this.props.width}/${this.props.height}`}/>
      </div>
    );
  }
}

Corgi.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
};
export default Corgi;
