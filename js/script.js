let currentLine = 0;
let currentCSS = "";

function renderLine(text, specials) {
    let container = document.querySelector(".symbols");
    let html = "";
    for (let i = 0; i < text.length; i++) {
      html += renderSymbol(text[i], specials) ;
    }
    container.innerHTML = html;
    container.querySelector(".symbol:first-child").classList.add("symbol-current");
    if (container.querySelector(".symbol:first-child").classList.contains("symbol-space")) {
        document.querySelector(".space-indicator").classList.add("space-indicator-active");
    } else {
        document.querySelector(".space-indicator").classList.remove("space-indicator-active");
    }
    document.querySelector(".stats").innerHTML = (currentLine + 1) + "/" + lines.length;
}

function renderSymbol(sybmol, specials) {
    let className = "symbol";
    if (specials.indexOf(sybmol) > -1) {
        className += "  symbol-space";
    }
    return '<span class="' + className + '">' + sybmol + '</span>';
}

function typeSymbol(key) {
    let currentSymbol = document.querySelector(".symbol-current");
    if (!currentSymbol) {
        console.log("current symbol not found");
        return;
    }
    document.querySelector(".current-symbol").innerHTML = key;
    
    // symbolCorrect(currentSymbol);
    // return;
    if (currentSymbol.classList.contains("symbol-space") && key === " ") {
        symbolCorrect(currentSymbol);
        return;
    }
    if (currentSymbol.textContent == key) {
        symbolCorrect(currentSymbol);
        return;
    }
    symbolWrong(currentSymbol);
}

function symbolCorrect(currentSymbol) {
    currentSymbol.classList.remove("symbol-current");
    currentSymbol.classList.add("symbol-ready");
    currentCSS += currentSymbol.textContent;
    if (currentSymbol.nextSibling) {
        currentSymbol.nextSibling.classList.add("symbol-current");
        if (currentSymbol.nextSibling.classList.contains("symbol-space")) {
            document.querySelector(".space-indicator").classList.add("space-indicator-active");
        } else {
            document.querySelector(".space-indicator").classList.remove("space-indicator-active");
        }
    } else {
        currentLine += 1;
        if (lines[currentLine]) {
            renderLine(lines[currentLine], specials);
        }
        updatePreview();
    }
}

function symbolWrong(currentSymbol) {
    currentSymbol.classList.remove("symbol-wrong");
    currentSymbol.offsetWidth = currentSymbol.offsetWidth;
    currentSymbol.classList.add("symbol-wrong");
}

document.addEventListener('keydown', function(event) {
    if (event.key == "Shift") {
        return;    
    }
    if (event.key == "Control") {
        return;    
    }
    if (event.key == "Alt") {
        return;    
    }
    if (event.key == "Meta") {
        return;    
    }
    if (event.key == "Tab") {
        event.preventDefault();
        return;    
    }
    typeSymbol(event.key);
});

function updatePreview () {
    var self = this;

    var previewFrame = document.getElementById('preview');
    var preview = previewFrame.contentDocument || previewFrame.contentWindow.document;

    var htmlCode = getPageTemplate();
    preview.open();
    preview.write(htmlCode);
    preview.close();

    var cssCode = currentCSS;
    injectCss(preview, cssCode);
}

function getPageTemplate() {
    return htmlTemplate;
}

function injectCss(preview, cssCode) {
    var styleElement = preview.createElement("style");
    styleElement.type = "text/css";

    if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText = cssCode;
    } else {
        styleElement.appendChild(preview.createTextNode(cssCode));
    }

    preview.getElementsByTagName("head")[0].appendChild(styleElement);
}

renderLine(lines[currentLine], specials);
updatePreview();