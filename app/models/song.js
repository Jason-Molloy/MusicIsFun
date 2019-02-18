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
          <div class="card" style="width: 18rem;">
            <img src="${this.albumArt}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title songTitle">${this.title} - ${this.artist}</h5>
              <p class="card-text">Album: ${this.collection} - Download Album: ${this.price}</p>
              <audio controls>
                <source src="${this.preview}">
              </audio>
            </div>
          </div>
        </div>
        
  `
  }
}