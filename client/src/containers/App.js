import React from 'react';

class App extends React.Component {
  handleClickButton = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    console.log(body)
  }

  render() {
    return (
      <div>
        <h1>MERN Boilerplate</h1>
        <button onClick={() => this.handleClickButton()}>BUTTON</button>
      </div>
    )
  }
}

export default App