const array = require("./array");
const browser = require("./browser");
const classReference = require("./class_reference");
const cookie = require("./cookie");
const date = require("./date");
const math = require("./math");
const mobile = require("./mobile");
const namespace = require("./namespace");
const number = require("./number");
const object = require("./object");
const root = require("./root");
const stackTrace = require("./stack_trace");

Object.assign(module.exports, array);
Object.assign(module.exports, browser);
Object.assign(module.exports, classReference);
Object.assign(module.exports, cookie);
Object.assign(module.exports, date);
Object.assign(module.exports, math);
Object.assign(module.exports, mobile);
Object.assign(module.exports, namespace);
Object.assign(module.exports, number);
Object.assign(module.exports, object);
Object.assign(module.exports, root);
Object.assign(module.exports, stackTrace);
