let moods = [];

      function setup() {
        createCanvas(windowWidth, windowHeight);
        textAlign(CENTER, CENTER);
      }

      function draw() {
        background('#e8f5e9');
        for (let mood of moods) {
          mood.show();
        }

        fill(50);
        noStroke();
        textSize(24);
        text("Click to plant your mood 🌱", width / 2, 40);
      }

      function mousePressed() {
        moods.push(new MoodFlower(mouseX, mouseY));
      }

      class MoodFlower {
        constructor(x, y) {
          this.x = x;
          this.y = y;
          this.size = random(30, 70);
          this.color = color(random(255), random(255), random(255));
        }

        show() {
          push();
          translate(this.x, this.y);
          noStroke();
          fill(this.color);
          ellipse(0, 0, this.size);
          pop();
        }
      }