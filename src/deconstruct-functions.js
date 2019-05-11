import { Component } from 'react';

const DeconstructFunctions = (...FunctionObjects) => WrappedComponent => {
  return class DeconstructFunctions extends Component {
    constructor(props) {
      super(props);
      this.functions = {};
      FunctionObjects.forEach(Obj => {
        Object.keys(Obj).forEach((key, index) => {
          this.functions[key] = (...params) => Obj[key]({ ...this.props, ...this.functions})(...params)
        });
      })
    }
    render() {
      return <WrappedComponent {...this.props} {...this.functions} />
    }
  }
}

export default DeconstructFunctions;
