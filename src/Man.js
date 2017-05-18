import React, { Component } from 'react';
import { observer } from 'mobx-react';


let rectStyle = {
  fill: 'black',
};

let lineStyle = {
  stroke: 'black',
  strokeWidth: 10
}

let circleStyle = {
  stroke: 'black',
  strokeWidth: 10,
  fill: 'white'
}

let svgStyle = {
  marginBottom: 0
}

@observer
class Man extends Component {
  renderHead() {
    if(this.props.store.phase >= 1) {
      return <circle 
          cx={155} 
          cy={90} 
          r={40}
          style={circleStyle}
        />;
    }
  }
  
  renderBody() {
    if(this.props.store.phase >= 2) {
      return <rect 
               height={100} 
               width={10} 
               x={150} 
               y={130}
               style={rectStyle}
              />;
    }
  }
  
  renderArms() {
    if(this.props.store.phase >= 3) {
      return (
        <rect 
           width={110} 
           height={10} 
           x={100} 
           y={140}
           style={rectStyle}
        >
          <animateTransform 
            id="arm1"
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 0 0"
            to="2 10 10"
            dur="1s"
            begin="0s; arm4.end"
          />
          <animateTransform 
            id="arm2"
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="2 0 0"
            to="0 0 0"
            dur="1s"
            begin="arm1.end"
          />
          <animateTransform 
            id="arm3"
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 0 0"
            to="-2 0 0"
            dur="1s"
            begin="arm2.end"
          />
          <animateTransform 
            id="arm4"
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="-2 0 0"
            to="0 0 0"
            dur="1s"
            begin="arm3.end"
          />
        </rect>
      );
    }
  }
  
  renderRightLeg() {
    if(this.props.store.phase >= 4) {
      return (
         <line 
           x1={155} 
           y1={225} 
           x2={200} 
           y2={300} 
           style={lineStyle} 
          >
            <animate 
              id="leg1"
              attributeType="XML" 
              attributeName="x2" 
              from="200" 
              to="210" 
              dur="1s"
              begin="0s; leg2.end"
              repeatCount="0s leg2.end"
            />
            <animate 
              id="leg2"
              attributeType="XML" 
              attributeName="x2" 
              from="210" 
              to="200" 
              dur="1s"
              begin="leg1.end"
            />
        </line> 
        );
    }
  }
  
  renderLeftLeg() {
    if(this.props.store.phase >= 5) {
      return (
       <line
         x1={155} 
         y1={225} 
         x2={110} 
         y2={300} 
         style={lineStyle} 
        >
          <animate 
              id="leg3"
              attributeType="XML" 
              attributeName="x2" 
              from="110" 
              to="100" 
              dur="1s"
              begin="0s; leg2.end"
              repeatCount="0s leg4.end"
            />
            <animate 
              id="leg4"
              attributeType="XML" 
              attributeName="x2" 
              from="100" 
              to="110" 
              dur="0.5s"
              begin="leg3.end"
            />
        </line>
      );
      ;
    }
  }
  
  render() {
    return (
      <div style={svgStyle}>
        <svg height={305} >
        <rect 
          width="10" 
          height="300" 
          style={rectStyle} 
        />
        <rect 
          width="150" 
          height="10" 
          style={rectStyle} 
        />
        <rect 
          width="10" 
          height="50" 
          style={rectStyle} 
          x="150"/>
        {this.renderHead()}
        {this.renderBody()}
        {this.renderArms()}
        {this.renderRightLeg()}
        {this.renderLeftLeg()}
        </svg>
      </div>
    );
  }
}

export default Man;