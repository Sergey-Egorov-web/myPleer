// Используя паттерн "Наблюдатель" (Observer), вы можете создать более структурированный подход для обновления состояния ваших треков и их отображения. В этом случае ваше приложение будет реагировать на изменения состояния трека и автоматически обновлять отображение без необходимости вручную перерисовывать каждый элемент.

// Пример реализации паттерна "Наблюдатель"
// Создайте класс Observer: Этот класс будет управлять подписчиками и уведомлять их об изменениях.

// Создайте класс Track: Этот класс будет представлять треки и обеспечивать возможность уведомлять подписчиков о изменении состояния.

// Создайте классы для отображения: Они будут подписываться на изменения состояния трека.

// Пример кода
// Вот пример реализации этих концепций:

class Observer {
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  notify(data) {
    for (const subscriber of this.subscribers) {
      subscriber.update(data);
    }
  }
}

class Track {
  constructor(artist, title) {
    this.artist = artist;
    this.title = title;
    this.isHot = false;
    this.observer = new Observer();
  }

  toggleHot() {
    this.isHot = !this.isHot;
    this.observer.notify(this); // Уведомляем подписчиков
  }

  addObserver(observer) {
    this.observer.subscribe(observer);
  }
}

class TrackDisplay {
  constructor(track) {
    this.track = track;
    this.track.addObserver(this);
    this.element = this.createTrackElement();
    this.render();
  }

  createTrackElement() {
    const div = document.createElement("div");
    const likeButton = document.createElement("button");
    likeButton.innerText = "❤️";
    likeButton.addEventListener("click", () => {
      this.track.toggleHot();
    });

    div.appendChild(this.trackTitle());
    div.appendChild(likeButton);
    return div;
  }

  trackTitle() {
    const title = document.createElement("span");
    title.id = `track-${this.track.artist}-${this.track.title}`;
    return title;
  }

  update() {
    this.render(); // Обновляем отображение
  }

  render() {
    const titleHtml = `${this.track.isHot ? "🔥" : ""} ${this.track.artist} - ${
      this.track.title
    }`;
    const titleElement = document.getElementById(
      `track-${this.track.artist}-${this.track.title}`
    );
    titleElement.innerText = titleHtml; // Устанавливаем новое значение
  }
}

// Пример использования:
const tracks = [
  new Track("Artist 1", "Song 1"),
  new Track("Artist 2", "Song 2"),
];

const displayElements = tracks.map((track) => new TrackDisplay(track));
const playlistContainer = document.getElementById("playlist"); // Предполагается, что у вас есть элемент для плейлиста
displayElements.forEach((display) =>
  playlistContainer.appendChild(display.element)
);

// Что происходит в этом коде:
// Observer: Класс для управления подписчиками. У него есть методы для подписки на изменения и уведомления их.

// Track: Это основной класс, представляющий трек. Он содержит логику переключения состояния isHot и уведомление подписчиков о изменениях.

// TrackDisplay: Этот класс отвечает за отображение трека. Он подписывается на изменения трека и обновляет свою визуализацию при изменении статуса трека.

// использование: Когда пользователь нажимает кнопку "❤️", вызывается метод toggleHot, изменяющий состояние трека. Затем происходит уведомление всех подписчиков (в данном случае TrackDisplay), которые обновляют свое отображение формата имени трека.

// Преимущества:
// Отделение логики: Логика обработки изменений состояния и интерфейс отделены друг от друга.
// Гибкость: Легко добавлять новые элементы интерфейса, наблюдающие за состоянием трека.
// Поддерживаемость: Изменения в логике не требуют пересмотра всего кода — достаточно обновить отдельные классы.
// Это позволяет вашему приложению быть более организованным и расширяемым! 😊
