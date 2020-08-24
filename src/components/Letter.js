import React from 'react';

class Letter extends React.Component {


    render(){
        return(
            <div className="letter">
                <span>{this.props.value}</span>
            </div>
        )
    }
}

export default Letter;