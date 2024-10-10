import { createElement } from "../createElement.js";
import { tracks } from "../data/track.js";
import { createTrack } from "../createTrack/createTrack.js";
import { toggleHot } from "../data/track.js";
// import { listOfTrack } from "../listOfTrack.js";

export function createPlaylist() {
  const elements = createElement("ul", "firstPlaylist", "playlist");
  let element = createElement("button", "addTrack", "addTrack");
  element.addEventListener("click", function () {
    const list = document.getElementById("listOfTrack");
    list.style.display = "block";
  });
  elements.append(element);

  for (let i = 0; i < tracks.length; i++) {
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
    elements.append(trackElement);
    console.log(tracks[i].isHot);
  }

  return elements;
}
