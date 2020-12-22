// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component{
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    handleChangeBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        });
    };


    changeResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }})
    }



    render(){
        return(
        <div>
            <h4>current resolution: {this.state.settings.video.resolution}</h4>
            <button onClick={this.changeResolution}>resolution</button>
            <br />
            <h4>current bitrate: {this.state.settings.bitrate}</h4>
            <button className="bitrate" onClick={this.handleChangeBitrate}>Change bitrate</button>

        </div>
        )
    }
}

export default YouTubeDebugger