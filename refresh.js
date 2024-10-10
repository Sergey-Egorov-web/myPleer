import { tracks } from "./data/track.js";

// функция проходит циклом по всем элементам iinputTrack и присваивает текстовому содержимому title аналогично функции createTrackTitle
export function refresh() {
  for (let i = 0; i < tracks.length; i++) {
    const trackElement = document.getElementById(`${i}inputTrack`);

    trackElement.textContent = `${tracks[i].isHot ? "🔥" : ""}${
      tracks[i].artist
    } - ${tracks[i].title}`;
  }
}
