import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../../actions/actions.root';

export interface song {
    title: string,
    id: number,
    duration: string
}

export interface SongListProps {
    songs: song[],
    selectSong: Function
}

export interface SongListState {

}

class SongList extends Component<SongListProps, SongListState> {
    render() {
        return (
            <div className="ui divided list">
                {this.props.songs.map(song => {
                    return (
                        <div key={song.id} className="item">
                            <div className="right floated content">
                                <button
                                    className="ui button primary"
                                    onClick={() => this.props.selectSong(song)}>
                                    select me
                                </button>
                            </div>
                            <div className="content">
                                <h2>{song.title}</h2>
                              
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}


const mapStateToProps = (state: any) => {
    // console.log("mapStateToProps -> state", state)
    return { songs: state.songs }
}

// const mapTpDispatch

export default connect(mapStateToProps, { selectSong })(SongList);