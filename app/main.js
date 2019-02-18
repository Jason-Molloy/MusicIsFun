import ItunesController from "./components/Itunes/itunesController.js";


class App {
  constructor() {
    this.controllers = {
      itunesCtrl: new ItunesController()
    }
  }
}

window["app"] = new App() 