export default class Song {
  constructor(song) {
    this.title = song.trackName
    this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
    this.artist = song.artistName
    this.collection = song.collectionName
    this.price = song.collectionPrice
    this.preview = song.previewUrl
  }


  getTemplate() {
    return `
          <div class="row d-flex">
            <div class="col-12">
              <img src="${this.albumArt}">
              <h3 class="songTitle">${this.title} - ${this.artist}</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-10">
              <h5>Album: ${this.collection} - Download Album: ${this.price}</h5>
            </div>
            <div class="col-2">
              <audio controls>
                <source src="${this.preview}">
              </audio>
            </div>
          </div>
  `
  }
} 