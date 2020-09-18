import "phaser";
import API from "../objects/api";
import Button from "../objects/Button";

export default class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super("LeaderBoardScene");
  }
  async create() {
    const height = this.scale.height * 0.5;
    const width = this.scale.width * 0.5;
    API.getScores().then((response) => {
      const sortedScores = response.result.sort((a, b) => b.score - a.score);
      let playerNames = "";

      for (let i = 0; i < 7; i += 1) {
        playerNames += `${i + 1}. ${sortedScores[i].user}: ${
          sortedScores[i].score
        }\n\n`;
        if (i === sortedScores.length - 1) {
          break;
        }
      }

      this.creditsText = this.add.text(0, 0, "Top Scores", {
        fontSize: "36px",
        fill: "white",
      });
      this.madeByText = this.add.text(0, 0, playerNames, {
        fontSize: "26px",
        fill: "white",
      });
      this.zone = this.add.zone(width, height, width * 2, height * 2);
      Phaser.Display.Align.In.Center(this.creditsText, this.zone);
      Phaser.Display.Align.In.Center(this.madeByText, this.zone);

      this.creditsText.setY(20);
      this.madeByText.setY(80);
    });

    this.titleButton = new Button(
      this,
      width,
      height + 200,
      "blueButton1",
      "blueButton2",
      "Back",
      "Title"
    );
  }
}
