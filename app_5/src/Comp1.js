import React from 'react';

class Comp1 extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handler = () => {
    let currentCount = this.state.count;
    currentCount++;
    this.setState({ count: currentCount });
  };

  render() {
    return (
      <>
        <h1>State</h1>
        <div>
          <button onClick={this.handler}>This button change State</button>
        </div>
        <div>{this.state.count % 2 === 0 ? 'even' : 'odd'}</div>
        <div>{this.state.count}</div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button onClick={this.addComment}>Add comment</button>
        </div>
        <div>
          <ul></ul>
        </div>
      </>
    );
  }
}

export default Comp1;
