import React from 'react';

class Filter extends React.Component {
    render() {
        return (
            <div>
            <button onClick={this.props.toggleGreased} >Toggle Greasy Pigs</button>
            <button onClick={this.props.toggleSortName}>Sort by Name</button>
            <button>Sort by weight</button>
            </div>
        )
    }
}


export default Filter 