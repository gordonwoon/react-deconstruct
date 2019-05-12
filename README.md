A react helper to deconstruct complex logic within a component by splitting up state and functions into different files.

## Installation
---
```sh
npm install --save react-deconstruct
```

## API
---
```javascript
import { DeconstructState } from 'react-deconstruct';
export default DeconstructState(
StateObject1,
StateObject2,
...
)(Component)
```

```javascript
import { DeconstructFunctions } from 'react-deconstruct';
export default DeconstructFunctions(
FunctionObject1,
FunctionObject2,
...
)(Component)
```

## Example Usage
---

ExampleState.js
```javascript
const initialState = props => ({
    name: props.first_name + props.last_name,
    role: 'developer'
})
const setName = (state, props) => (param) => ({
    name: param
})

export default {
    initialState,
    setName
}
```

ExampleFunction.js
```javascript
const renderName = (props) => (param) => {
    return (<div>{props.name}</div>)
}

export default {
    renderAge,
}
```

ExampleComponent.js
```javascript
import { DeconstructState, DeconstructFunctions } from 'react-deconstruct';
import ExampleState from './ExampleState.js';
import ExampleFunction from './ExampleFunction.js';

class Component extends React.Component {
    ...
}

export default DeconstructState(ExampleState)(DeconstructFunction(ExampleFunction)(Component))
```

## Documentation
---
#### - DeconstructState
| StateObject  | Description |
|--------------|-------------|
| initialState | `(props) => ({ example: 'test' })` |
| function     | `(state, props) => (param) => ({ example: param })` |
- functions are not allowed to call each other
#### - DeconstructFunctions
| FunctionObject | Description |
|----------------|-------------|
| function       | `(props) => (param) => ({ example: param })` |
- functions will have access all functions as props
