import React from "react";
import PropTypes from "prop-types";
import Corgi from './Corgi';
import DimensionsPicker from './DimensionsPicker';

export default class CorgiApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      height: props.height,
      width: props.width,
    };

    this.fetch = this.fetch.bind(this);
  }

  fetch = (values) => {
    this.setState({
      height: parseInt(values.height, 10),
      width: parseInt(values.width, 10),
    });
  }

  render () {
    return (
      <div>
        <div>{this.props.appTitle}</div>
        <span>-------</span>
        <Corgi height={this.state.height} width={this.state.width} />
        <DimensionsPicker fetch={this.fetch} height={this.state.height} width={this.state.width} />
      </div>
    );
  }
}

CorgiApp.propTypes = {
  title: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
};


