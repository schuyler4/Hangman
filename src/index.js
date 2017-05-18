import React, { Component } from 'react';
import { render } from 'react-dom';
import Input from './Input';
import store from './store';
import { observer } from 'mobx-react';
import Man from './Man';
import Word from './Word';
import Banner from './Banner';

let styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};



@observer
class App extends Component {
  componentDidMount() {
    store.findGoalWord();
  }
  
  renderBanner() {
    if(!store.gameGoing && store.winner) {
      return <Banner text="You Win"/>;
    } else if(!store.gameGoing && !store.winner) {
      return <Banner text="You Lose"/>;
    }
  }
  
  renderEndGame() {
    if(store.winner) {
    	return <h1>You Win!</h1>;
    } else {
    	return <h1>You Lose!</h1>;
    }
  }

  render() {
    if(store.gameGoing) {
      return (
        <div style={styles}>
          <Man store={store} />
          <Word store={store} />
          <Input store={store} />
        </div>
      );
    } else {
      return (
        <div style={styles}>
          <Man store={store} />
          {this.renderEndGame()}
        </div>
      );
    }   
  }
}

render(<App />, document.getElementById('root'));
