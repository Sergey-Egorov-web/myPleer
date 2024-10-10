import { createElement } from "./createElement.js";
import { createPlaylist } from "./createPlaylist/createPlaylist.js";
import { subscribe } from "./data/track.js";
import { refresh } from "./refresh.js";
import { listOfTrack } from "./listOfTrack.js";
// console.log(tracks);

const root = document.getElementById("root");

let addPlaylistButton = createElement(
  "button",
  "addPlayList",
  "addPlaylistButton"
);

root.append(addPlaylistButton);

let element = createPlaylist();

// подписываем функцию  console.log и refresh
subscribe(() => {
  console.log(`observer is working`);
  refresh();
});

root.append(element);

element = listOfTrack();
root.append(element);
