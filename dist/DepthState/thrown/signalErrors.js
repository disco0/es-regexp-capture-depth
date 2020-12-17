"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepthStateBoundsError = exports.Signals = void 0;
var Signals;
(function (Signals) {
    class DepthStateBoundsError extends Error {
        constructor(msg) {
            super(`Depth state error:\n    ${msg}`);
        }
    }
    Signals.DepthStateBoundsError = DepthStateBoundsError;
})(Signals = exports.Signals || (exports.Signals = {}));
exports.DepthStateBoundsError = Signals.DepthStateBoundsError;
exports.default = Signals;
//# sourceMappingURL=signalErrors.js.map