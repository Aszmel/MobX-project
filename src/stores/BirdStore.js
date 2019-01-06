import { observable, action, computed } from "mobx";

class BirdStore {
  @observable birds = [];

  @action addBird = bird => {
    this.birds.push(bird);
  };

  @action removeBird = bird => {
    this.birds.pop(bird);
  };

  @computed get birdCount() {
    return this.birds.length;
  }
}
const store = new BirdStore();
export default store;
