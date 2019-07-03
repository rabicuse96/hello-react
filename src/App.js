import React, { Component } from 'react';

class Header extends Component {
  render(){
    return(
      <div>
        <h2>Makanan Khas Indonesia</h2>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <Header />
      <h1>Rendering Element</h1>
    </div>
  );
}

export default App;
