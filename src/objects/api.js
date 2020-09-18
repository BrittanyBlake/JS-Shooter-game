
const API = (() => {
  const key = "Z4B446c92c8a4fc69571";

  async function getScores() {
    try {
      const scores = await fetch(
        `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${key}/scores/`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      return scores.json();
    } catch (error) {
      return error.json();
    }
  }

  async function submitScores(name, score) {
    try {
      const result = await fetch(
        `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${key}/scores/`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: name,
            score,
          }),
        }
      );

      return result.json();
    } catch (error) {
      return error.json();
    }
  }

  return { getScores, submitScores };
})();

export default API;
