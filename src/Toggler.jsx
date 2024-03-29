import React, {Component} from 'react';

class Toggler extends Component {
  state = {
    on: this.props.defaultOnValue,
  };

  static defaultProps = {
    defaultOnValue: false,
  };

  toggle = () => {
    this.setState (prevState => ({on: !prevState.on}));
  };

  render () {
    const obj = {
      on: this.state.on,
      toggle: this.toggle,
    };
    return <div>{this.props.render (obj)}</div>;
  }
}

export default Toggler;
