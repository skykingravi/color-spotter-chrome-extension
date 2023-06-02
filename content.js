// all css colors with their respective rgb values
const colors = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32",
};

// regex for rgb, rgba, hsl, hsla, hexadecimal, #RGB, #RRGGBB #RRGGBBAA
const hexRegex =
/(?:#|0x)(?:[a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{8})\b|(?:rgb|hsl)a?\([^\)]*\)/gi;

// regex for all css named colors
const namedColorsRegex =
    /\b(aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen)\b/gi;

// to find all elements having only text (no children elements)
function getElementsWithTextOnly(element) {
    var textOnlyElements = [];

    function traverse(node) {
        if (
            node.nodeType === Node.TEXT_NODE &&
            node.textContent.trim() !== ""
        ) {
            textOnlyElements.push(node.parentNode);
        } else {
            for (var i = 0; i < node.childNodes.length; i++) {
                traverse(node.childNodes[i]);
            }
        }
    }

    traverse(element);
    return textOnlyElements;
}

// main code to change the text content
var elements = getElementsWithTextOnly(document.body);
changeElementsWithColor(elements);
const colorCodeElements = document.querySelectorAll(".color-code-spotted");
colorCodeElements.forEach((e) => {
    e.style.backgroundColor = e.textContent;
    e.style.color = isColorDarkOrLight(e.textContent);
});

// modify the text content by replacing color codes with span element using regex
function changeElementsWithColor(elements) {
    elements.forEach(function (element) {
        var modifiedContent = element.textContent.replace(
            hexRegex,
            function (match) {
                return `<span class="color-code-spotted">${match}</span>`;
            }
        );

        modifiedContent = modifiedContent.replace(
            namedColorsRegex,
            function (match) {
                return `<span class="color-code-spotted">${match}</span>`;
            }
        );

        element.innerHTML = modifiedContent;
    });
}

// to check whether the color code's respective color is dark or light
function isColorDarkOrLight(colorCode) {
    
    // convert colorCode to lowercase for consistent handling
    colorCode = colorCode.toLowerCase();
    
    // check for css named format
    const colorData = getColorRGB(colorCode);
    colorCode = colorData ? colorData : colorCode;

    // check for HEX format (#RRGGBB or #RGB)
    if (colorCode.startsWith("#")) {
        colorCode = colorCode.substring(1);

        // expand short HEX format (#RGB) to full format (#RRGGBB)
        if (colorCode.length === 3) {
            colorCode =
                colorCode[0] +
                colorCode[0] +
                colorCode[1] +
                colorCode[1] +
                colorCode[2] +
                colorCode[2];
        }

        const r = parseInt(colorCode.substring(0, 2), 16);
        const g = parseInt(colorCode.substring(2, 4), 16);
        const b = parseInt(colorCode.substring(4, 6), 16);

        return getLuminance(r, g, b);
    }

    // check for RGB or RGBA format
    if (colorCode.startsWith("rgb")) {
        const rgbaValues = colorCode.match(/(\d+(\.\d+)?)/g);

        if (rgbaValues && rgbaValues.length >= 3) {
            const r = parseInt(rgbaValues[0]);
            const g = parseInt(rgbaValues[1]);
            const b = parseInt(rgbaValues[2]);

            return getLuminance(r, g, b);
        }
    }

    // check for HSL or HSLA format
    if (colorCode.startsWith("hsl")) {
        const hslaValues = colorCode.match(/(\d+(\.\d+)?)/g);

        if (hslaValues && hslaValues.length >= 3) {
            const h = parseInt(hslaValues[0]);
            const s = parseInt(hslaValues[1]);
            const l = parseInt(hslaValues[2]);

            // Convert HSL to RGB
            const rgb = hslToRgb(h, s, l);

            return getLuminance(rgb.r, rgb.g, rgb.b);
        }
    }

    return null;
}

function getLuminance(r, g, b) {
    // calculate the luminance of the color
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // return whether the color is dark or light based on luminance threshold (for better contrast -> black for light and white for dark)
    return luminance > 0.5 ? "black" : "white";
}

// convert HSL to RGB
function hslToRgb(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;

    let r, g, b;

    if (s === 0) {
        r = g = b = l;
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255),
    };
}

// to find the corresponding rgb value for css named color codes
function getColorRGB(colorName) {
    if (colors.hasOwnProperty(colorName)) {
        return colors[colorName];
    }

    return null;
}