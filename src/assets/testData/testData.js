const testData = {
  stories: [
    {
      id: 1,
      title: "Greyson has a good morning",
      contributions: [
        "He sleeps until 9:30, wow!",
        "He makes himself coffee, yes!",
        "He feels well rested and equipped to write tests, yes!",
      ],
      prompt: "journal",
      created_at: "2020-09-10T22:37:51.103Z",
      updated_at: "2020-09-10T22:37:51.103Z",
      is_complete: true,
    },
    {
      id: 2,
      title: "Bowie makes a dog friend",
      contributions: [
        "The neighbor's dog is outside, bowwow!",
        "His name is franklin and he has a rope, yes!",
        "They argue, but dad saves the day, yes!",
        "We're still friends - phew!",
      ],
      prompt: "Tell a contributions about your dog",
      created_at: "2020-11-10T22:37:51.103Z",
      updated_at: "2020-11-10T22:37:51.103Z",
      is_complete: true,
    },
    {
      id: 3,
      title: "Birdhouse in Your Soul",
      contributions: [
        "Blue canary in the outlet by the lightswitch.",
        "Who watches over you?",
        'Make a little "birdhouse" in your soul',
        "Not to put to fine a point on it.",
        "Say I'm the only bee in your bonnet.",
      ],
      contributors: [1, 2, 3, 1, 2],
      prompt: "sci-fi",
      created_at: "2020-10-10T22:37:51.103Z",
      updated_at: "2020-10-10T22:37:51.103Z",
      is_complete: true,
    },
    {
      id: 4,
      title: "The Birdman For Real",
      contributions: [
        "There's a bird-man in my bedroom.",
        "He asks, who watches over you?",
      ],
      prompt: "horror",
      created_at: "2020-10-10T22:37:51.103Z",
      updated_at: "2020-10-10T22:37:51.103Z",
      is_complete: false,
    },
    {
      id: 5,
      title: "The potato person",
      contributions: [
        "Sed ut perspiciatis unde omnis iste natus error sit ",
        "aspernatur aut odit aut fugit, sed quia consequuntur",
        "Ut enim ad minima veniam, quis nostrum exercitationem",
        "But potato people don't like the mall, everyone knows that"
      ],
      prompt: "absurd",
      created_at: "2020-10-10T22:37:51.103Z",
      updated_at: "2020-10-10T22:37:51.103Z",
      is_complete: false,
    },
  ],
  authors: [{
    "id": 1,
    "name": "Bubs",
    "email": "veepOfTheCorpses@eatyourheartout.org",
    "bio": "the best kept secret of Scottsdale's literary community",
    "created_at": "2020-01-11T00:25:34.315Z",
    "updated_at": "2020-04-11T00:25:34.315Z"
  },  {
      "id": 2,
      "name": "Sauchy LaHavas",
      "email": "firstNunInTheChurch@hownow.net",
      "bio": "🎶I'm sauchy, I'm sauchy, I'm the first nun in the church\n              I'm the one that drives the hearse, I'm sauchy🎶",
      "created_at": "2020-01-11T00:25:34.315Z",
      "updated_at": "2020-06-11T00:25:34.315Z"
  }, {
      "id": 3,
      "name": "There's a bird in here",
      "email": "birdbirdbird@theword.net",
      "bio": "Give me some buffalo wings this keyboard is too clean!",
      "created_at": "2020-05-11T00:25:34.315Z",
      "updated_at": "2020-06-11T00:25:34.315Z"
    },]
};

export default testData