import React from 'react';

class Test1 extends React.Component {
  constructor(props) {
    console.clear();
    console.log('constructor');
    console.log(props);
    super();
    this.state = {
      // s1: props.arg,
      s1: 0,
    };
  }

  buttonHandler = () => {
    console.log('work_buttonHandler');
    let val = this.state.s1;
    val++;
    this.setState({ s1: val });
  };

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return null;
    // return { s1: props.arg };
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    console.log('render_1');
    return (
      <>
        {console.log('render_2')}
        <div>
          <button onClick={this.buttonHandler}>Push</button>
        </div>
        <div>{this.state.s1}</div>
      </>
    );
  }
}

export default Test1;
