import { createElement } from "../createElement.js";
import { tracks } from "../data/track.js";
import { addTrackToPlaylist } from "./addTrackToPlaylist.js";
// import { listOfTrack } from "../listOfTrack.js";

export function createPlaylist() {
  const elements = createElement("ul", "firstPlaylist", "firstPlaylist");
  let element = createElement("button", "addTrack", "addTrack");
  element.addEventListener("click", function () {
    const list = document.getElementById("listOfTrack");
    list.style.display = "block";
  });
  elements.append(element);

  for (let i = 0; i < tracks.length; i++) {
    elements.append(addTrackToPlaylist(i));
  }

  return elements;
}
