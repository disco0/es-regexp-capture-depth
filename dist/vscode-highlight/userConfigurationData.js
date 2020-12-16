"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRegexSources = exports.rawUserSettings = void 0;
const fs_1 = __importDefault(require("fs"));
const jsonc_parser_1 = require("jsonc-parser");
const emptyConfiguration = { 'highlight.regexes': {} };
function readUserConfigurationJson(filePath) {
    if (!(fs_1.default.statSync(filePath)?.isFile() ?? false))
        throw new Error(`File not found at path: ${filePath}.`);
    try {
        return jsonc_parser_1.parse(fs_1.default.readFileSync(filePath, 'utf-8'), [], {
            allowEmptyContent: true,
            allowTrailingComma: true,
            disallowComments: false,
        });
    }
    catch (error) {
        console.error(`Failed during read/parse of user configuration file ${filePath}\n  Error: ${error}`);
        return emptyConfiguration;
    }
}
exports.rawUserSettings = require('./vscode-highlight-regexes.json')['highlight.regexes'];
exports.userRegexSources = Object.keys(exports.rawUserSettings);
function compileAllUserRegexes() {
    return Object.entries(exports.rawUserSettings)
        .map(([source, config]) => new RegExp(`${source}`, config.regexFlags ?? 'gm'));
}
exports.default = compileAllUserRegexes();
//# sourceMappingURL=userConfigurationData.js.map