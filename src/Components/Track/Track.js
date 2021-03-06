import React from 'react';
import './Track.css';
import Sound from '../Sound/Sound';

class Track extends React.Component{

  constructor(props){
  super(props);
  this.addTrack = this.addTrack.bind(this);
  this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return <button className="Track-action" onClick={this.removeTrack}>-</button>
    } else {
    return <button className="Track-action" onClick={this.addTrack}>+</button>
    }
  }
  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }


  render(){
    return (
      <div className="Track">
        <div className="Track-information">
          <div className="scroll"><Sound
                                  preview_url={this.props.track.preview_url}
          /><img src={this.props.track.image} /></div>
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {this.renderAction()}
      </div>
    )
  }
}

export default Track;
