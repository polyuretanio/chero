let specials = ".-{}:;#%\"";

let lines = [
    ".arrow-round {",
    "border: 50px solid #0074d9;",
    "width: 200px;",
    "height: 200px;",
    "position: relative;",
    "margin: 75px auto;",
    "border-radius: 50%;",
    "border-right-color: transparent; }",    
    ".arrow-round::after {",
    "content: \"\";",
    "border: 100px solid #ffffff;",
    "position: absolute;",
    "top: -45px; left: 130px;",
    "border-top-width: 0;",
    "border-right-width: 0;",
    "border-bottom-color: #0074d9;",
    "border-left-color: transparent; }"
];

let htmlTemplate = `<!DOCTYPE html>
<html lang="ru">
  <head>
    <title>Круглая стрелка с помощью рамки</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="assets/level-icon-reload/common.css">
  </head>
  <body class="geometry">
    <div class="arrow-round"></div>
  </body>
</html>
</template>`;

