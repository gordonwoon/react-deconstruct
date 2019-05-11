import { Component } from 'react';

const DeconstructState = (...StateObjects) => WrappedComponent => {
  return class DeconstructState extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.functions = {};
      StateObjects.forEach(Obj => {
        Object.keys(Obj).forEach((key, index) => {
          if (key === 'initialState') {
            this.state = Object.assign(this.state, Obj.initialState(props));
          }
          else {
            this.functions[key] = (...params) => this.setState(Obj[key](this.state, this.props)(...params))
          }
        });
      })
    }
    render() {
      return <WrappedComponent {...this.state} {...this.functions} {...this.props} />
    }
  }
}

export default DeconstructState;
