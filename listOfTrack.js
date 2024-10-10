import { createElement } from "./createElement.js";
import { tracks } from "./data/track.js";
import { createTrackTitle } from "./createTrack/createTrackTitle.js";

export function listOfTrack() {
  const elements = createElement("ul", "listOfTrack", "listOfTrack");
  elements.style.display = "none";
  for (let i = 0; i < tracks.length; i++) {
    const element = createElement("div", ``, `listOf${tracks[i].title}`);
    const elementTitle = createElement(
      "li",
      createTrackTitle(tracks[i]),
      `${i}inputTrack`
    );
    element.append(elementTitle);
    const button = createElement(
      "button",
      "addTrackToPlaylist",
      "addTrackToPlaylist"
    );

    element.append(button);
    elements.append(element);
  }
  let closeButton = createElement("button", "close", `closeListOfTrack`);
  closeButton.addEventListener("click", function () {
    const element = document.getElementById("listOfTrack");
    element.style.display = "none";
  });
  elements.append(closeButton);
  return elements;
}
