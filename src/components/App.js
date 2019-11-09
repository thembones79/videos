import React from "react";
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube'

class App extends React.Component {
  onTermSubmit= async term => {
    const videos = await youtube(term);

    console.log({ videos });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onTermSubmit}/>
      </div>
    );
  }
}

export default App;
