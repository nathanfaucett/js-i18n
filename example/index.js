global.i18n = require("../src/index");


i18n.set("en", {
    home: {
        header: {
            value: "Header",
            date: "Hello, it is %s"
        }
    }
});

global.test = function test() {
    console.time("i18n");
    i18n("home.header.date", "en", new Date());
    console.timeEnd("i18n");
};

console.log(i18n("en", "home.header.date", new Date()));
console.log(i18n("en", "home.header.date.missing"));
console.log(i18n("en", "home.missing"));
