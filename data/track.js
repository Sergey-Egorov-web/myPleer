export class Track {
  id;
  title;
  artist;
  isHot;
  imageSource;
  audioSource;

  constructor(pId, pTitle, pArtist, pIsHot, pImageSource, pAudioSource) {
    this.id = pId;
    this.title = pTitle;
    this.artist = pArtist;
    this.isHot = pIsHot;
    this.imageSource = pImageSource;
    this.audioSource = pAudioSource;
  }
  print() {
    console.log(
      `id: ${this.id}  title: ${this.title} artist: ${this.artist}  isHot: ${this.isHot}`
    );
  }
}
export let tracks = [];
const observers = []; //observers/subcribers/handlers/listeners создаём массив наблюдателей

const addTrack = (track) => {
  tracks.push(track);
};

export const Rap_God = new Track(
  1,
  "Rap God",
  "Eminem",
  true,
  "./imageTrackList/track1.jpeg",
  "./audio/Eminem - Rap God.mp3"
);

addTrack(Rap_God);

export const You_Dont_Know = new Track(
  2,
  "You Don't Know",
  "Eminem",
  false,
  "./imageTrackList/track2.jpeg",
  "./audio/Eminem - You Don't Know (feat. 50 cent, Lloyd Banks and Cashis).mp3"
);

addTrack(You_Dont_Know);

export const In_da_club = new Track(
  3,
  "In da club",
  "50cent",
  false,
  "./imageTrackList/track3.jpeg",
  "./audio/50cent - In da club.mp3"
);

addTrack(In_da_club);

// создаем функцию подписки
export const subscribe = (observer) => {
  observers.push(observer);
};
// функция получает трек и его состояние isHot и меняет его на противоположное
export function toggleHot(track) {
  track.isHot = !track.isHot;
  emit(); // Уведомляем подписчиков
}
export const observer = (tracks) => {
  console.log("Список обновлен:", tracks);
};
//функцмя уведомления подписчиков,
function emit() {
  // trigger/ fire/ publish
  observers.forEach((observer) => {
    observer();
  });
}
