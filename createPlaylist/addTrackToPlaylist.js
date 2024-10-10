import { createElement } from "../createElement.js";
import { tracks } from "../data/track.js";
import { createTrack } from "../createTrack/createTrack.js";
import { toggleHot } from "../data/track.js";

export function addTrackToPlaylist(i) {
  let trackElement = createElement("div", "", `${i}track`);
  trackElement.append(createTrack(tracks[i], i));
  let likeButton = createElement("button", "❤️", `like${i}Track`);
  likeButton.addEventListener("click", function () {
    toggleHot(tracks[i]);
    // console.log(tracks[i].isHot);
  });
  trackElement.append(likeButton);
  let deleteButton = createElement("button", "❌", `delete${i}Track`);
  deleteButton.addEventListener("click", function () {
    trackElement.remove(); // Удаляем элемент div
  });
  trackElement.append(deleteButton);

  return trackElement;
}
