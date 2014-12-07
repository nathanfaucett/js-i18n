i18n
=======

i18n for the browser and node.js


```javacript

var i18n = require("../src/index");


i18n.set("en", {
    home: {
        header: {
            value: "Header",
            date: "Hello, it is %s"
        }
    }
});

i18n.add("en", {
    content: {
        btn_name: "BUTTON"
    }
})

console.log(i18n("home.header.date", "en", new Date()));
console.log(i18n("home.header.date.missing", "en")); // will throw an error
console.log(i18n("home.missing", "en")); // will throw an error

```