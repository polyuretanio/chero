let specials = ".-{}:;#%\"";

let lines = [
    ".birds {",
    "animation-name: birds;}",
    ".aerostat {",
    "animation-name: aerostat;",
    "animation-delay: 2s;}",
    ".wind-mill {",
    "animation-name: wheel;",
    "animation-iteration-count: infinite;}",
    ".ufo {",
    "animation-name: ufo;}",
];

let htmlTemplate = `<!DOCTYPE html>
<html lang="ru">
  <head>
    <title>Воздушное путешествие</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="assets/level-animation/css/epoch2.css">
    <link rel="stylesheet" href="assets/level-animation/css/epoch2-initial.css">
  </head>
  <body class="mechanical-world">
    <div>
      <div class="birds"></div>
      <div class="aerostat"></div>
      <div class="wind-mill"></div>
      <div class="ufo"></div>
    </div>
  </body>
</html>`;






