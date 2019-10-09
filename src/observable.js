class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(f) {
    this.observers.push(f);
  }

  unsubscribe(f) {
    this.observers = this.observers.filter(subscriber => subscriber !== f);
  }

  broadcast(data) {
    this.observers.forEach(subscriber => subscriber(data));
  }
}

module.exports = {
  Observable,
};
