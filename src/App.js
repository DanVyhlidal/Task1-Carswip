import React from 'react';
class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      counter: 0,
      hasError: false };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    try{
      // Since we moved the statement below from render to this method, we need to change 5 to 4
      if(this.state.counter === 4){
        throw Error("Crashed.");
      }
      this.setState(({counter}) => ({
        counter: counter + 1
      }));
    }catch{
      this.setState(() => ({
        hasError: true
      }));
    }
    
  }

  render() {
    const tempError = this.state.hasError;

    return(
      <div>
        {!tempError && 
          <h1 onClick={this.handleClick}>{this.state.counter}</h1>
        }

        {tempError &&
          <CrashComponent></CrashComponent>
        }
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <p>
        <b>
          Click on the numbers to increase the counters.
          <br />
          The counter is programmed to throw an error when it reaches 5. This simulates a JavaScript error in a component.
        </b>
      </p>
      <hr />
        <Counter />
        <Counter />
      <hr />
    </div>
  );
}
export default App;

function CrashComponent(){
  return <h1>Crashed.</h1>;
}
