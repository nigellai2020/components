# Media Player

## Description
A media player component

## Screens

### Home

![Home](screenshots/home.png)

### Discover and Explore

![Discover and Explore](screenshots/playlist.png)

### Audio Playback

![Audio Playback](screenshots/player.png)

## Source Code

```typescript(source/index.tsx)
import { Module } from "@ijstech/components";
import Home from "./home/index";
import Playlist from "./playlist/index";

export default class MediaPlayer extends Module {
  private home: Home;
  private playlist: Playlist;

  private openPlaylist() {
    this.playlist.visible = true;
    this.home.visible = false;
  }

  init() {
    super.init();
    this.openPlaylist = this.openPlaylist.bind(this);
  }

  render() {
    return <i-panel
      width='100%'
      height='100%'
    >
      <media-player-home
        id="home"
        display='block'
        width='100%'
        height='100%'
        visible={true}
        onOpen={this.openPlaylist}
      />
      <media-player-playlist
        id="playlist"
        display='block'
        width='100%'
        height='100%'
        visible={false}
      />
    </i-panel>
  }
}
```