class SnackShack {
  constructor() {
    this.queue = [];
  }

  order(item) {
    this.queue.push(item);
  }

  queueTime() {
    var time = 0;
    this.queue.forEach(function(item) {
      time += item.makingTime;
      time += item.servingTime;
    });
    return time;
  }
}
