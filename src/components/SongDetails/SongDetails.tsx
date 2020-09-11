import React from 'react';
import { connect } from 'react-redux';

export interface SongDetailsProps {
    song: any
}

const SongDetails: React.SFC<SongDetailsProps> = (props) => {
    console.log("props", props)
    return (
        <div>
            {props.song ?
                <div>
                    <h1>Details: </h1>
                    <p><strong>title : </strong> {props.song.title}</p>
                    <p><strong>duration : </strong> {props.song.duration}</p>
                </div> : <p>select song</p>}
        </div>
    );
}

const mapStateToProps = (state: any) => {
    console.log("songs details mapStateToProps -> state", state)
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetails);