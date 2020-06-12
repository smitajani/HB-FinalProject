"use strict";

class Signup extends React.Component {
  alertMessage() {
    alert('You just handled an event!');
  }

  render() {
    return (
      <button onClick={this.alertMessage}>
        Click me
      </button>
    );
  }
}

ReactDOM.render(
  <Signup />,
  document.getElementById('app')
);
