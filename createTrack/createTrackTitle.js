export function createTrackTitle(inputTrack) {
  return `${inputTrack.isHot ? "🔥" : ""}${inputTrack.artist} - ${
    inputTrack.title
  }`;
}
