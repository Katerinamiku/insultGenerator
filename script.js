let pickRandomWord = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};
let generateRandomInsult = function () {
  let randomBodyParts = [
    "глаз",
    "нос",
    "череп",
    "голова",
    "ноги",
    "уши",
    "лицо",
    "волосы",
    "пальцы",
  ];
  let randomAdjectives = [
    "вонючей",
    "унылой",
    "дурацкой",
    "сумасшедшей",
    "дохлой",
    "тупой",
    "растеряной",
    "прибалдевшей",
    "старой",
    "перекошенной",
  ];
  let randomWords = [
    "мухи",
    "выдры",
    "обезьяны",
    "крысы",
    "собаки",
    "свиньи",
    "жабы",
    "альпаки",
    "совы",
    "крокодилицы",
    "психопатки",
    "цапли",
  ];
  // Соединяем случайные строки в предложение
  let randomString =
    "У тебя " +
    pickRandomWord(randomBodyParts) +
    " словно у " +
    pickRandomWord(randomAdjectives) +
    " " +
    pickRandomWord(randomWords) +
    "!!!";
  return randomString;
};
confirm(generateRandomInsult());
while (confirm("Давай еще!") == true) {
  confirm(generateRandomInsult());
}
