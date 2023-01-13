window.onload = go;
function go() {
  $("#new-quote").click(function () {
    genRandQuote();
  });

  $("#tweet-quote").click(function () {

  });

  genRandQuote();
}

function genRandQuote() {
  var quotes = [{
    id: 1,
    text: "My advice to you is get married: If you find a good wife you’ll be happy; if not, you’ll become a philosopher.",
    source: "Socrates" },

  {
    id: 2,
    text: "If you want to be sure that you never forget your wife’s birthday, just try forgetting it once.",
    source: "Aldo Cammarota" },

  {
    id: 3,
    text: "Before you marry a person, you should first make them use a computer with slow Internet service to see who they really are.",
    source: "Will Ferrell" },

  {
    id: 4,
    text: "Never criticize your spouse’s faults; if it weren’t for them, your mate might have found someone better than you.",
    source: "Jay Trachman" },

  {
    id: 5,
    text: "Never go to bed mad. Stay up and fight.",
    source: "Phyllis Diller" },

  {
    id: 6,
    text: "Instead of getting married again, I’m going to find a woman I don’t like and give her a house.",
    source: "Rod Stewart" },

  {
    id: 7,
    text: "Behind every great man is a woman rolling her eyes.",
    source: "Jim Carrey" },

  {
    id: 8,
    text: "Adults are always asking children what they want to be when they grow up because they’re looking for ideas.",
    source: "Paula Poundstone" },

  {
    id: 9,
    text: "A perfect parent is a person with excellent child-rearing theories and no actual children.",
    source: "Dave Barry" },

  {
    id: 10,
    text: "Just be good and kind to your children. Not only are they the future of the world, they’re the ones who can sign you into a home.",
    source: "Dennis Miller" },

  {
    id: 11,
    text: "When I was a kid my parents moved a lot, but I always found them.",
    source: "Rodney Dangerfield" },

  {
    id: 12,
    text: "If you are not yelling at your kids, you are not spending enough time with them.",
    source: "Reese Witherspoon" },

  {
    id: 13,
    text: "When your mother asks, ‘Do you want a piece of advice?’ it is a mere formality. It doesn’t matter if you answer yes or no. You’re going to get it anyway.",
    source: "Erma Bombeck" },

  {
    id: 14,
    text: "Kids are expensive, I didn’t even realize how broke I was until last year someone stole my identity and it ruined her life.",
    source: "Kate Davis" },

  {
    id: 15,
    text: "I want my children to have all the things I couldn’t afford. Then I want to move in with them.",
    source: "Phyllis Diller" },

  {
    id: 16,
    text: "It seems I have spent a lifetime of mouthing mechanically, ‘Say thank you. Sit up straight. Use your napkin. Close your mouth when you chew. Don’t lean back in your chair.’ Just when I finally got my husband squared away, the kids came along.",
    source: "Erma Bombeck" },

  {
    id: 17,
    text: "There is no such thing as fun for the whole family.",
    source: "Jerry Seinfeld" },

  {
    id: 18,
    text: "There are two classes of travel—first class and with children.",
    source: "Robert Benchley" },

  {
    id: 19,
    text: "The best way to make your dreams come true is to wake up.",
    source: "Paul Valery" },

  {
    id: 20,
    text: "Happiness is having a large, caring, close-knit family in another city.",
    source: "George Burns" },

  {
    id: 21,
    text: "When your children are teenagers, it’s important to have a dog so that someone in the house is happy to see you.",
    source: "Nora Ephron" },

  {
    id: 22,
    text: "A dog teaches a boy fidelity, perseverance, and to turn around three times before lying down.",
    source: "Robert Benchley" },

  {
    id: 23,
    text: "If dogs could talk, it would take a lot of fun out of owning one.",
    source: "Andrew A. Rooney" },

  {
    id: 24,
    text: "If you think dogs can’t count, try putting three dog biscuits in your pocket and then giving Fido only two of them.",
    source: "Phil Pastoret" },

  {
    id: 25,
    text: "The cat could very well be man’s best friend but would never stoop to admitting it.",
    source: "Doug Larson" },

  {
    id: 26,
    text: "Cats are smarter than dogs. You can’t get eight cats to pull a sled through snow.",
    source: "Jeff Valdez" },

  {
    id: 27,
    text: "In order to maintain a well­-balanced perspective, the person who has a dog to worship him should also have a cat to ignore him.",
    source: "Peterborough Examiner, Canada" },

  {
    id: 28,
    text: "Thousands of years ago, cats were worshipped as gods. Cats have never forgotten this.",
    source: "Anonymous" },

  {
    id: 29,
    text: "Friends are God’s way of apologizing to us for our families.",
    source: "Anonymous" },

  {
    id: 30,
    text: "The statistics on sanity are that one out of every four Americans is suffering from some form of mental illness. Think of your three best friends. If they’re okay, then it’s you.",
    source: "Rita Mae Brown" },

  {
    id: 31,
    text: "The holy passion of friendship is of so sweet and steady and loyal and enduring a nature that it will last through a whole lifetime, if not asked to lend money.",
    source: "Mark Twain" },

  {
    id: 32,
    text: "Always forgive your enemies; nothing annoys them so much.",
    source: "Oscar Wilde" },

  {
    id: 33,
    text: "The Bible tells us to love our neighbors, and also to love our enemies; probably because they are generally the same people.",
    source: "G.K. Chesterton" },

  {
    id: 34,
    text: "If you can’t beat them, arrange to have them beaten.",
    source: "George Carlin" },

  {
    id: 35,
    text: "If you want to know what God thinks of money, look at the people he gave it to.",
    source: "Dorothy Parker" },

  {
    id: 36,
    text: "Before borrowing money from a friend, decide which you need most.",
    source: "Addison H. Hallock" },

  {
    id: 37,
    text: "Never keep up with the Joneses. Drag them down to your level. It’s cheaper.",
    source: "Quentin Crisp" },

  {
    id: 38,
    text: "People say money is not the key to happiness, but I have always figured if you have enough money, you can have a key made.",
    source: "Joan Rivers" },

  {
    id: 39,
    text: "Anybody who tells you money can’t buy happiness never had any.",
    source: "Samuel L. Jackson" },

  {
    id: 40,
    text: "Misers are no fun to live with, but they make great ancestors.",
    source: "Tom Snyder" },

  {
    id: 41,
    text: "Anyone can do any amount of work, provided it isn’t the work he is supposed to be doing at that moment.",
    source: "Robert Benchley" },

  {
    id: 42,
    text: "I like work; it fascinates me. I can sit and look at it for hours.",
    source: "Jerome K. Jerome" },

  {
    id: 43,
    text: "Doing nothing is very hard to do. You never know when you’re finished.",
    source: "Leslie Nielsen" },

  {
    id: 44,
    text: "Hard work never killed anybody, but why take a chance?",
    source: "Edgar Bergen" },

  {
    id: 45,
    text: "Don’t go around saying the world owes you a living. The world owes you nothing. It was here first.",
    source: "Mark Twain" },

  {
    id: 46,
    text: "All I’ve ever wanted was an honest week’s pay for an honest day’s work.",
    source: "Steve Martin" },

  {
    id: 47,
    text: "A college education is one of the few things a person is willing to pay for and not get.",
    source: "William Lowe Bryan" },

  {
    id: 48,
    text: "In real life, I assure you, there is no such thing as algebra.",
    source: "Fran Lebowitz" },

  {
    id: 49,
    text: "True terror is to wake up one morning and discover that your high school class is running the country.",
    source: "Kurt Vonnegut" },

  {
    id: 50,
    text: "The secret of staying young is to live honestly, eat slowly, and lie about your age.",
    source: "Lucille Ball" },

  {
    id: 51,
    text: "You are only young once. After that you have to think up some other excuse",
    source: "Billy Arthur" },

  {
    id: 52,
    text: "By the time you’re 80 years old you’ve learned everything. You only have to remember it.",
    source: "George Burns" },

  {
    id: 53,
    text: "You can’t believe everything you hear—but you can repeat it.",
    source: "Anonymous" },

  {
    id: 54,
    text: "A gossip is a person who creates the smoke in which other people assume there’s fire.",
    source: "Dan Bennett" },

  {
    id: 55,
    text: "The only thing worse than being talked about is not being talked about.",
    source: "Oscar Wilde" },

  {
    id: 56,
    text: "If you can’t be kind, at least be vague.",
    source: "Judith Martin" }];


  var randQuote = quotes[Math.floor(Math.random() * quotes.length)];
  $("#text").html(randQuote.text);
  $("#author").html(randQuote.source);
  $("#tweet-quote").attr("href", stringToClickToTweetURL('"' + randQuote.text + '" - ' + randQuote.source));
}

function stringToClickToTweetURL(str) {
  var stringToConvert = str.split(" ").join("%20").split("@").join("%40").split("!").join("%21");
  var resultString = "https://twitter.com/intent/tweet?text=" + stringToConvert;
  return resultString;
}