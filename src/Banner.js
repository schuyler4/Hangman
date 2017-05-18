import React from 'react';

let styles = {
  div: {
    height: 100,
    width: 400,
    backgroundColor: '#DCDCDC',
    position: 'absolute',
    top: 100,
    left: 75
  },
  h1: {
    paddingTop: 10,
    left: 175,
    position: 'absolute'
  }
};

function Banner({ text }) {
  let { div, h1 } = styles;
  return (
    <div>
      <div style={div}>
     	 <h1 style={h1}>{text}</h1>
      </div>
    </div>
  );
}

export default Banner;