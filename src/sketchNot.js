export default function sketchNot(p) {
  class Letter {
    constructor(x, y, d) {
      this.char = Letter.getChar();
      this.x = x;
      this.y = y;
      this.d = d;
    }

    draw(index) {
      p.textSize(this.d);

      if (index === 0) {
        // If it's the first one make it white
        p.fill(255, 200);
      } else {
        // Otherwise make it green and fade it out more when it's towards then end
        p.fill(50, 255, 50, 200 - (index * 200) / 25);
      }

      //adjust letters depending on the size of the screen
      window.innerWidth < 768
        ? p.text(this.char, this.x * ((p.width * 2) / total), this.y)
        : p.text(this.char, this.x * (p.width / total), this.y);
    }

    switch() {
      this.char = Letter.getChar();
    }

    static getChar() {
      //array with leters in my name
      const kArray = ["見", "つ", "か", "り", "ま", "せ", "ん"];
      //return a letter from the array be shown
      let randomLetter = kArray[Math.floor(Math.random() * kArray.length)];
      return randomLetter;
    }
  }

  class Stream {
    constructor(x, y, ys) {
      this.x = x;
      this.y = y;
      this.ys = ys;
      this.letters = [];

      // Use the y speed to figure out the diameter
      this.d = ys * 2.5;
      this.spacing = this.d + 2;

      this.regenerateLetters();
    }

    regenerateLetters() {
      this.letters = [];
      for (let i = 0; i < 11; i++) {
        this.letters.push(
          new Letter(this.x, this.y - i * this.spacing, this.d)
        );
      }
    }

    draw() {
      // Update the position
      this.update();

      // Draw each letter
      this.letters.forEach((l, i) => l.draw(i));

      // 10% chance to randomly switch a letter
      if (p.random(1, 100) < 10) {
        this.letters[p.floor(p.random(this.letters.length))].switch();
      }
    }

    // windowResized() {
    //   this.resizeCanvas(this.innerWidth, this.innerHeight);
    // }

    update() {
      // Add the speed to the stream head position
      this.y += this.ys;

      // If there is enough space to add a letter at the start
      if (this.y >= this.letters[0].y + this.spacing) {
        // Add a new letter at the start
        this.letters.unshift(new Letter(this.x, this.y, this.d));

        // Remove the last item
        this.letters.pop();
      }

      // If the last character has gone off the screen
      if (this.letters[this.letters.length - 1].y > p.height + this.d) {
        // Reset the head to the top of the screen
        this.y = 0;

        // Regenerate letters as all x values will change
        this.regenerateLetters();
      }
    }
  }

  let total = 80;
  let rain = [];
  let timerValue = 10;
  let timerValue2 = 7;

  p.setup = function () {
    window.innerWidth < 768
      ? p.createCanvas(window.innerWidth, window.innerHeight * 0.8)
      : p.createCanvas(window.innerWidth, window.innerHeight * 0.9);

    p.noStroke();
    p.textStyle(p.BOLD);

    // Create streams
    for (let i = 0; i < total; i++) {
      rain.push(new Stream(i, p.random(1, p.height), p.random(2, 10)));
    }
    //for timer
    p.textAlign(p.CENTER);
    //interval timer in setup
    setInterval(p.timeIt, 500);
    setInterval(p.timeLoop, 1500);
  };

  p.draw = function () {
    p.background(0);
    //interval time to print game over at 5seconds
    p.textSize(42);
    p.fill(255);
    window.innerWidth < 768
      ? p.text(`NOT\nFOUND`, p.width / 2, p.height / 2)
      : p.text("NOT   FOUND", p.width / 2, p.height / 2);
    rain.forEach((s) => s.draw());
  };

  //timer for interval timer for raining
  p.timeIt = function () {
    if (timerValue > 0) {
      timerValue--;
    }
  };

  //timer interval to stop flashing name
  p.timeLoop = function () {
    if (timerValue2 > 0) {
      timerValue2--;
    }
  };

  //reset timers so blinking name loops
  p.resetTimers = function () {
    timerValue = 20;
    timerValue2 = 10;
  };

  p.windowResized = function () {
    p.resizeCanvas(window.innerWidth, window.innerHeight);
  };
}
