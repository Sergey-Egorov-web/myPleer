import { createTrackTitle } from "./createTrackTitle.js";
import { createElement } from "../createElement.js";

// import { TrackAudioComponent } from "./TrackAudioComponent.js";
// import { TrackImageComponent } from "./TrackImageComponent.js";

export function createTrack(inputTrack, number) {
  // create

  const element = createElement(
    "li",
    createTrackTitle(inputTrack),
    `${number}inputTrack`
  );

  // element
  //   .append
  //   // TrackImageComponent(inputTrack.imageSource),
  //   // TrackAudioComponent(inputTrack.audioSource),
  //   // createTrackTitle(inputTrack)
  //   ();

  return element;
}
