import React from "react"
import PropTypes from "prop-types";
 
class DimensionsPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: props.height,
      width: props.width
    };

    this.setHeight = this.setHeight.bind(this);
    this.setWidth = this.setWidth.bind(this);
    this.fetch = this.fetch.bind(this);
  }
  
  fetch(_e) {
    this.props.fetch(this.state);
  }

  setHeight(e) {
    console.log("changed to" + this.state.height);
    this.setState({
      height: e.target.value
    });
  }

  setWidth(e) {
    console.log("changed to" + this.state.width);
    this.setState({
      width: e.target.value
    });
  }

  render () {
    return (
      <div>
        <span>Pick how big you would like your Corgi!</span>
        <div className="form-group">
        <label>Height:</label> <input onChange={this.setHeight} min="0" max="1000" type="number" value={this.state.height} />
        <label>Width:</label> <input onChange={this.setWidth} min="0" max="1000" type="number" value={this.state.width} />
        <button onClick={this.fetch} value="true">Corgi Get!</button>
        </div>
      </div>
    );
  }
}

DimensionsPicker.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
};

export default DimensionsPicker;
