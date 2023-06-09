import "./load.js";

document.getElementById("code").textContent = `
# reverse

Returns the reverse of a string.

## params

-   str (string)：The string to be reversed

## returns

-   (string)：The reversed string

### code

example test

## code


\`\`\`js
const reverse = (text) => {
    if (!text?.length) {
        return "";
    }
    let resText = "";

    for (let i = text.length - 1; i >= 0; i--) {
        resText += text[i];
    }
    return resText;
};
\`\`\`
`;
