//#region Imports

// npm
import { 
    AST,
    RegExpValidator,
} from 'regexpp';
import c from 'chalk';

import EcmaVersions from './EcmaVersions';
import is from './guards';
import { DepthStateSignalThrower as DepthState, Signals } from './DepthState/ThrownSignal'
import { console, writeDebug } from './debug'

//#endregion Imports

export class FlatRegexCaptureCheck
{
    regex:     RegExp;
    immediate: boolean = FlatRegexCaptureCheck.defaults.immediate;

    constructor(regexp: RegExp);
    constructor(regexp: RegExp, immediate: boolean);
    constructor(regexp: RegExp, immediate: boolean = FlatRegexCaptureCheck.defaults.immediate)
    {
        if(!(regexp instanceof RegExp))
            throw new Error(`First argument must be a RegExp instance.`)

        this.regex = regexp;

        if(immediate)
        {
            console.debug(` Beginning flat captures check immediately`)
            this.checkFlat()
        }
    }
    
    /**
     * - `undefined`:        `checkNestedGroups` not executed yet
     * - `Promise<boolean>`: `checkNestedGroups` executed, not resolved
     * - `boolean`:          `checkNestedGroups` executed, resolved
     */
    get result(): Promise<boolean> 
    {
        console.debug(c.gray`${c.gray.bold('get')} checkResult`)

        if(this.#resultValue)
        {
            console.debug(`Returning existing #resultValue promise`)
            return this.#resultValue;
        }

        console.debug(`Creating flat captures check Promise for #resultValue`)
        
        this.checkFlat();

        return this.#resultValue!;
    }
    #resultValue?: Promise<boolean> = undefined;

    /**
     * Initialize validator if not already initialized, and assign result to `checkResult`.
     * 
     * @return
     *   Returns wrapped `true` if regexp contains no nested capture groups, else `false`.
     */
    checkFlat(): Promise<boolean> 
    { 
        console.debug(c.gray`${c.gray.bold('get')} Checking capture group structure of /${this.regex.source}/${this.regex.flags}`);
        this.#resultValue = new Promise((resolve, reject) => 
        { 
            if(this.#resultValue)
            {
                console.debug(`Validation already in progress and assigned to \`this.checkResult\`.`)
                return this.#resultValue;
            }

            const RESOLVE =
            {
                  VALID: (): void => (resolve(true)),
                INVALID: (): void => (resolve(false))
            }

            /**
             * Increment on entering capture group, decrement on exit
             */
            let depth = new DepthState();
            
            // When depth state throws, return false, else return to completion
            try
            {
                console.debug(`Initalizing validator`)

                const source = this.regex.toString();

                // Utility functions that check for simple noop style capture groups
                // (used as markers for full line decorations in vscode-highlight)

                function isEnteringEmptyCapture(index: number): boolean
                {
                    const [ open, close ] = [source[index], source[index + 1]]
                    console.debug(`Checking chars [ ${open}, ${close} ]`)
                    return (open === '(' && close === ')')
                }

                function isLeavingEmptyCapture(index: number): boolean
                {
                    const [ open, close ] = [source[index], source[index + 1]]
                    console.debug(`Checking chars [ ${open}, ${close} ]`)
                    return (open === '(' && close === ')')
                }

                const validator = new RegExpValidator(
                {
                    ecmaVersion: FlatRegexCaptureCheck.defaults.ecmaVersion,

                    onCapturingGroupEnter(start, name)
                    {
                        let groupDepth = depth.depths.group;
                        console.debug(`${'  '.repeat(Math.max(0, groupDepth))}Entering capture group.`)
                        if(isEnteringEmptyCapture(start))
                        {
                            groupDepth = depth.depths.group;
                            console.debug(`${'  '.repeat(Math.max(0, groupDepth))}Empty capture group entry detected (Skipping increment)`)
                        }
                        else
                        {
                            depth.inc.group();
                            groupDepth = depth.depths.group;
                            console.debug(`${'  '.repeat(Math.max(0, groupDepth))}Group depth: ${groupDepth}`)
                        }
                    },
                    onCapturingGroupLeave(start, name)
                    {
                        let groupDepth = depth.depths.group;
                        console.debug(`${'  '.repeat(Math.max(0, groupDepth))}Exiting capture group`)

                        if(isLeavingEmptyCapture(start))
                        {
                            groupDepth = depth.depths.group;
                            console.debug(`${'  '.repeat(Math.max(0, groupDepth))}Empty capture group exit detected (Skipping decrement)`)
                        }
                        else
                        {
                            groupDepth = depth.depths.group;
                            console.debug(`${'  '.repeat(Math.max(0, groupDepth))}Group depth: ${groupDepth}`)
                            depth.dec.group();
                        }
                    },
                    onPatternLeave()
                    {
                        console.debug(`Exiting pattern validation`)
                        console.debug(`Returning early (successfully)`)

                        RESOLVE.VALID()
                    },
                    onLookaroundAssertionEnter()
                    {
                        let lookaroundDepth = depth.depths.lookAround
                        console.debug(`${'  '.repeat(Math.max(0, lookaroundDepth))}Entering lookaround group.`)
                        depth.inc.lookahead();
                        lookaroundDepth = depth.depths.lookAround
                        console.debug(`${'  '.repeat(Math.max(0, lookaroundDepth))}Lookaround depth: ${lookaroundDepth}`)
                    },
                    onLookaroundAssertionLeave()
                    {
                        let lookaroundDepth = depth.depths.lookAround
                        console.debug(`${'  '.repeat(Math.max(0, lookaroundDepth))}Exiting lookaround group.`)

                        depth.dec.lookahead();
                        lookaroundDepth = depth.depths.lookAround
                        console.debug(`${'  '.repeat(Math.max(0, lookaroundDepth))}Lookaround depth: ${lookaroundDepth}`)
                    }
                })

                validator.validateLiteral(this.regex.toString())
            }
            catch(error)
            {
                // As expected
                if(error instanceof Signals.DepthStateBoundsError)
                    RESOLVE.INVALID();
                else
                {
                    (msg => {
                        globalThis.console.error(c.red.bold(msg));
                        throw new Error(msg)
                    })(c.red`Non-expected error thrown and caught during evaluation of RegExpValidator.\n  ${error}`)
                }
            }
            finally
            {
                RESOLVE.INVALID()
            }
        }); 

        return this.#resultValue;
    }

    static readonly defaults = 
    {
        ecmaVersion: EcmaVersions[2020],
        immediate:   true
    }
}

export default FlatRegexCaptureCheck
