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

  notify(data) {
    this.observers.forEach(observer => {
      console.log('observer', observer);
      observer(data);
    });
  }
}

module.exports = {
  Observable,
};
