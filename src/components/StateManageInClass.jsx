import React, {Component, Fragment} from "react";


/* Constructor Function ek j var Run thy atle apre setInterval use kriyu apre kai pm update k change karsu to pm constructor function ek j var run thse pa6u a run thse nai */
class StateManageInClass extends Component {
  constructor() {
    super();
    this.state = {
        number : 0
    };

    setInterval(()=>{
        this.state.number += 1
        this.setState({number : this.state.number})
        console.log(this.state.number)
    }, 1000)
  }
  render() {
    return <Fragment>
        <h3>Number : {this.state.number}</h3>
    </Fragment>;
  }
}
export default StateManageInClass;
