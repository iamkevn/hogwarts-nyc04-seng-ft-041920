import React from 'react';
import HogTile from './HogTile';
import Filter from './filter';

class HogContainer extends React.Component {

    state = {
        showGreased: false,
        sortedByName: false
    }

    toggleGreased = () => {
        this.setState({
            showGreased: !this.state.showGreased
          })
    }

    toggleSortName = () => {
        this.setState({
          sortedByName: !this.state.sortedByName
        })
      }

    renderTiles() {
        let filteredHogs = [...this.props.hogs]
            if (this.state.showGreased) {
            filteredHogs = this.props.hogs.filter(hog => hog.greased)
        }
        if (this.state.sortedByName) {
            filteredHogs.sort((hogA, hogB) => hogA.name.localeCompare(hogB.name))
        }
       return filteredHogs.map(hog => <HogTile hog={hog} key={hog.name} /> )
    }

    render() {
        return (
            <div>
                <Filter toggleGreased={this.toggleGreased} toggleSortName={this.toggleSortName}/>
                {this.renderTiles()}
            </div>
        )
    }
}


export default HogContainer 
