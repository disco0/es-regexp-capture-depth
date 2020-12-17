//#region Signal Errors

export namespace Signals
{    
    export class DepthStateBoundsError extends Error
    {
        constructor(msg?: string)
        {
            super(`Depth state error:\n    ${ msg }`);
        }
    }
}

// For non-namespaced access
// @TODO: Pick one or the other

export import DepthStateBoundsError = Signals.DepthStateBoundsError;

export default Signals;
