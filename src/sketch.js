import { ModuleResolutionKind } from "typescript";

export default function sketch(p) {
  let canvas;
  var streams = [];
  var fadeInterval = 1.6;
  var symbolSize = 14;

  p.setup = () => {
    canvas = p.createCanvas(window.innerHeight, window.innerWidth);
    p.background(0);

    var x = 0;
    for (var i = 0; i <= width / symbolSize; i++) {
      var stream = new Stream();
      stream.generateSymbols(x, random(-2000, 0));
      streams.push(stream);
      x += symbolSize;
    }
    textFont("Consolas");
    textSize(symbolSize);
  };

  p.draw = (x, y) => {
    background(0, 150);
    streams.forEach(function (stream) {
      stream.render();
    });
  };

  function Symbol(x, y, speed, first, opacity) {
    this.x = x;
    this.y = y;
    this.value;

    this.speed = speed;
    this.first = first;
    this.opacity = opacity;

    this.switchInterval = round(random(2, 25));

    this.setToRandomSymbol = function () {
      var charType = round(random(0, 5));
      if (frameCount % this.switchInterval == 0) {
        if (charType > 1) {
          // set it to Katakana
          this.value = String.fromCharCode(0x30a0 + floor(random(0, 97)));
        } else {
          // set it to numeric
          this.value = floor(random(0, 10));
        }
      }
    };
  }
  this.rain = function () {
    this.y = this.y >= height ? 0 : (this.y += this.speed);
  };
}
