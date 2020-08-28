import React from 'react';

class Letter extends React.Component {


    render(){
        // console.log(this.props.maxWordLength)
        return(
            <div className="letter" style={this.props.maxWordLength > 8 ? (this.props.maxWordLength > 11 ? {width: "35px"} : {width: "50px"}) : {}}>
                <span>{this.props.value}</span>
            </div>
        )
    }
}

export default Letter;