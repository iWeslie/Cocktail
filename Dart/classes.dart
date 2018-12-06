class Point {
  num x, y;
  num z = 0;

  Point(num x, num y) {
    this.x = x;
    this.y = y;
  }

  // Point(this.x, this.y);
  Point.origin() {
    x = 0;
    y = 0;
  }
}

main(List<String> args) {
  var point = Point();
  point.x = 4;
  print(point.x);
}
