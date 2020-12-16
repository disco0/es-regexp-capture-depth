"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.console = exports.patternInspectConfiguration = exports.writeDebug = void 0;
const chalk_1 = __importDefault(require("chalk"));
const process = require("process");
const forceDebugMode = false;
exports.writeDebug = 'DEBUG_CAPTURES' in process.env
    || forceDebugMode;
exports.patternInspectConfiguration = {
    depth: 12,
    colors: true,
    compact: false,
    breakLength: 80
};
const logMethods = ['log', 'debug', 'info', 'error', 'warn', 'dir'];
exports.console = ($console => {
    const logger = {};
    logMethods.forEach(m => Object.assign(logger, { [m]: $console[m] }));
    return logger;
})(globalThis.console);
exports.console.debug = (...msg) => exports.writeDebug ? exports.console.log(chalk_1.default.gray(...msg)) : void 0;
exports.console.dir = (obj) => globalThis.console.dir.call(exports.console, obj, exports.patternInspectConfiguration);
//# sourceMappingURL=debug.js.map