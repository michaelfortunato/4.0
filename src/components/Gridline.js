import React from 'react';
import { CSSTransition } from 'react-transition-group';

class Gridline extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasPopped: false
        };
        if (this.props.lineType === 'row') {
            this.style = {'top': `${this.props.ruledPos}%`,
                            'left': `${this.props.offsetPos}%`, 
                        };
        } else {
            this.style = {'left': `${this.props.ruledPos}%`,
                            'top': `${this.props.offsetPos}%`};
        }
        this.style.transitionDuration = `${this.props.transitionDuration}ms`;
        this.style.transitionDelay = `${this.props.transitionDelay}ms`;
    }
    render(){
        let hasPopped = this.state.hasPopped;
        if(!hasPopped) {
            return( 
                    <CSSTransition
                    key = {this.props.id}
                    in = {!hasPopped}
                    appear = {true}
                    classNames = {`pop`}
                    timeout={2000}
                    onEntered = {() => this.setState({hasPopped: true})}
                    >
                            <div 
                                className = "line"
                                style = {this.style}>
                            </div> 
                    </CSSTransition>   
                );
        } else {
             return(   
                    <CSSTransition
                        key = {this.props.id + 1} 
                        in = {this.state.hasPopped}
                        appear = {true}
                        classNames = {`line-${this.props.lineType}`}
                        timeout={2000}
                        >
                            <div 
                                className = "line"
                                style = {this.style}>
                            </div> 
                     </CSSTransition>   
            );
        }
    }
}

export default Gridline;