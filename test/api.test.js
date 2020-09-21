import API from '../src/objects/api';

test('should retrieve and return the scores', () => {
  API.getScores()
    .then((data) => {
      expect(data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            sore: '100',
          }),
        ]),
      );
    })
    .catch(() => {});
});

test('should submit the scores', () => {
  API.submitScores('Brittany', 1200).then((response) => {
    expect(response).toBe('Leaderboard score created correctly.');
  }).catch((error) => error);
});

test('should send an object to the API', () => {
  API.submitScores().then(data => {
    expect(typeof data).toBe('object');
  }).catch(() => {});
});

test('score should not be 0 ', () => {
  API.submitScores('Brittany', 0).then((response) => {
    expect(response).toBe(null);
  }).catch((error) => error);
});
test('Name should not be blank', () => {
  API.submitScores(' ', 10)
    .then((response) => {
      expect(response).toBe(null);
    })
    .catch((error) => error);
});
