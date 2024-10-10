export class Playlist {
  id;
  title;
  tracks;

  constructor(pId, pTitle) {
    this.id = pId;
    this.title = pTitle;
    this.tracks = [];
  }

  addElement(element) {
    this.tracks.push(element);
  }

  // Метод для получения массива
  getTracks() {
    return this.tracks;
  }

  // Метод для вывода элементов массива
  printTracks() {
    console.log(this.tracks);
  }
  //   print() {
  //     console.log(
  //       `id: ${this.id}  title: ${this.title} artist: ${this.artist}  isHot: ${this.isHot}`
  //     );
  //   }
}
