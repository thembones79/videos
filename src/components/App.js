import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList"

class App extends React.Component {
  state = { videos: [] };
  onTermSubmit = async term => {
    const videos = await youtube(term);

    this.setState({ videos });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
