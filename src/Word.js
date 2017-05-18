import React from 'react';
import { observer } from 'mobx-react';

const style = {
	fontSize: 100,
  	marginTop: 0,
  	marginBottom: 10
}

let Word = observer(({ store }) => {
    return <h3 style={style}>
      {store.word.split('').join(' ')}
    </h3>         
});


export default Word;