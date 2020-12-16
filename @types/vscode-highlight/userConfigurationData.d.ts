export interface HighlightExtensionConfiguration {
    'highlight.regexes': {
        [key: string]: {
            regexFlags?: string;
            filterLanguageRegex?: string;
            filterFileRegex?: string;
            decorations?: {
                [key: string]: (string | {
                    [key: string]: string;
                });
            };
        };
    };
}
export declare const rawUserSettings: {
    "^(?:(// +)(?:(@noframes)([ \\t]*$)|(@(?:include|match|grant|require))([\\t ]+)(?:(https?.+?)|(.+))(\\**)([ \\t]*)|(^//[ \\t]+)(@(?:author|name(?:space)?|version|description))([ \\t]+)(.+?)([ \\t]*)|(^//[ \\t]+)(@resource)([ \\t]+)(\\S+)([ \\t]+)(\\S+)([ \\t]*))(\\n(?://[ \\t]*\\n)*))": {
        filterLanguageRegex: string;
        regexFlags: string;
        decorations: ({
            fontWeight?: undefined;
            color?: undefined;
            fontStyle?: undefined;
            textDecoration?: undefined;
        } | {
            fontWeight: string;
            color: string;
            fontStyle: string;
            textDecoration?: undefined;
        } | {
            color: string;
            fontStyle: string;
            fontWeight?: undefined;
            textDecoration?: undefined;
        } | {
            textDecoration: string;
            color: string;
            fontWeight?: undefined;
            fontStyle?: undefined;
        } | {
            color: string;
            fontWeight: string;
            fontStyle?: undefined;
            textDecoration?: undefined;
        } | {
            textDecoration: string;
            color: string;
            fontWeight: string;
            fontStyle?: undefined;
        })[];
    };
    "(@param+)([ \\t]+\\{{2}[\\S\\s]+?\\}{2}[ \\t]+)(\\w+)(?=[\\S\\s]+?(?=\\*\\/))": {
        filterLanguageRegex: string;
        regexFlags: string;
        decorations: ({
            color?: undefined;
            fontStyle?: undefined;
            textDecoration?: undefined;
            fontWeight?: undefined;
        } | {
            color: string;
            fontStyle: string;
            textDecoration: string;
            fontWeight: string;
        } | {
            color: string;
            fontWeight: string;
            fontStyle: string;
            textDecoration?: undefined;
        } | {
            color: string;
            fontStyle?: undefined;
            textDecoration?: undefined;
            fontWeight?: undefined;
        })[];
    };
    "^([ \\t]*)([\\/]{2}[ ]?)(?:()(#)(region)(:)?|()(#)(endregion)(:)?)(?:([ ])(.+?))?([ \\t]*)$": {
        filterLanguageRegex: string;
        regexFlags: string;
        decorations: ({
            opacity?: undefined;
            fontWeight?: undefined;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            color?: undefined;
            fontStyle?: undefined;
        } | {
            opacity: string;
            fontWeight: string;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            color?: undefined;
            fontStyle?: undefined;
        } | {
            isWholeLine: boolean;
            borderColor: string;
            borderStyle: string;
            borderWidth: string;
            opacity?: undefined;
            fontWeight?: undefined;
            color?: undefined;
            fontStyle?: undefined;
        } | {
            color: string;
            opacity: string;
            fontWeight: string;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            fontStyle?: undefined;
        } | {
            isWholeLine: boolean;
            opacity: string;
            fontWeight?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            color?: undefined;
            fontStyle?: undefined;
        } | {
            color: string;
            opacity: string;
            fontStyle: string;
            fontWeight?: undefined;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
        } | {
            color: string;
            fontWeight: string;
            opacity?: undefined;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            fontStyle?: undefined;
        })[];
    };
    "^([ \\t]*)(?:()(#)(region)(:)?|()(#)(endregion)(:)?)([ ])(.+?)([ \\t]*)$": {
        filterLanguageRegex: string;
        regexFlags: string;
        decorations: ({
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            color?: undefined;
            opacity?: undefined;
            fontWeight?: undefined;
            fontStyle?: undefined;
        } | {
            isWholeLine: boolean;
            borderColor: string;
            borderStyle: string;
            borderWidth: string;
            color?: undefined;
            opacity?: undefined;
            fontWeight?: undefined;
            fontStyle?: undefined;
        } | {
            color: string;
            opacity: string;
            fontWeight: string;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            fontStyle?: undefined;
        } | {
            opacity: string;
            fontWeight: string;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            color?: undefined;
            fontStyle?: undefined;
        } | {
            isWholeLine: boolean;
            opacity: string;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            color?: undefined;
            fontWeight?: undefined;
            fontStyle?: undefined;
        } | {
            color: string;
            opacity: string;
            fontStyle: string;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            fontWeight?: undefined;
        } | {
            color: string;
            fontWeight: string;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            opacity?: undefined;
            fontStyle?: undefined;
        })[];
    };
    "^([ \\t]*)([\\/]{2})(?:()(#)(FIXME)(:)?|()(#)(!FIXME)(:)?)([ ])(.+?)([ \\t]*)$": {
        filterLanguageRegex: string;
        regexFlags: string;
        decorations: ({
            opacity?: undefined;
            fontWeight?: undefined;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            color?: undefined;
            fontStyle?: undefined;
        } | {
            opacity: string;
            fontWeight: string;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            color?: undefined;
            fontStyle?: undefined;
        } | {
            isWholeLine: boolean;
            borderColor: string;
            borderStyle: string;
            borderWidth: string;
            opacity?: undefined;
            fontWeight?: undefined;
            color?: undefined;
            fontStyle?: undefined;
        } | {
            color: string;
            opacity: string;
            fontWeight: string;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            fontStyle?: undefined;
        } | {
            color: string;
            fontStyle: string;
            opacity: string;
            fontWeight: string;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
        } | {
            isWholeLine: boolean;
            opacity: string;
            fontWeight?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            color?: undefined;
            fontStyle?: undefined;
        } | {
            opacity: string;
            fontStyle: string;
            fontWeight?: undefined;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            color?: undefined;
        } | {
            color: string;
            fontWeight: string;
            opacity?: undefined;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            fontStyle?: undefined;
        })[];
    };
    "^([ ]*)(//)(#)(section())([ ]+)(.+?)([ \\t]*$)": {
        filterLanguageRegex: string;
        regexFlags: string;
        decorations: ({
            opacity?: undefined;
            color?: undefined;
            backgroundColor?: undefined;
            isWholeLine?: undefined;
            fontWeight?: undefined;
        } | {
            opacity: string;
            color?: undefined;
            backgroundColor?: undefined;
            isWholeLine?: undefined;
            fontWeight?: undefined;
        } | {
            color: string;
            opacity?: undefined;
            backgroundColor?: undefined;
            isWholeLine?: undefined;
            fontWeight?: undefined;
        } | {
            backgroundColor: string;
            color: string;
            opacity?: undefined;
            isWholeLine?: undefined;
            fontWeight?: undefined;
        } | {
            isWholeLine: boolean;
            opacity?: undefined;
            color?: undefined;
            backgroundColor?: undefined;
            fontWeight?: undefined;
        } | {
            fontWeight: string;
            opacity?: undefined;
            color?: undefined;
            backgroundColor?: undefined;
            isWholeLine?: undefined;
        } | {
            opacity: string;
            color: string;
            backgroundColor?: undefined;
            isWholeLine?: undefined;
            fontWeight?: undefined;
        } | {
            isWholeLine: boolean;
            backgroundColor: string;
            opacity: string;
            color?: undefined;
            fontWeight?: undefined;
        })[];
    };
    "([=:][\\s\\n]*\\b)(require(?=[\\(]))([\\(])(['])((?:[^\\n\\r\\t']+|\\')+)(['])([\\)])": {
        filterLanguageRegex: string;
        regexFlags: string;
        decorations: ({
            color?: undefined;
            fontStyle?: undefined;
            fontWeight?: undefined;
            opacity?: undefined;
            textDecoration?: undefined;
        } | {
            color: string;
            fontStyle: string;
            fontWeight: string;
            opacity?: undefined;
            textDecoration?: undefined;
        } | {
            color: string;
            opacity: string;
            fontStyle?: undefined;
            fontWeight?: undefined;
            textDecoration?: undefined;
        } | {
            color: string;
            textDecoration: string;
            fontStyle?: undefined;
            fontWeight?: undefined;
            opacity?: undefined;
        })[];
    };
    "^([ \\t]*)([\\/]{2}[ \\t]+)(.+)([\\t ]*[ ]+[\\-][ ][\\t ]*)(.+\\.options)": {
        filterFileRegex: string;
        regexFlags: string;
        decorations: ({
            color?: undefined;
            fontStyle?: undefined;
            fontWeight?: undefined;
            textDecoration?: undefined;
        } | {
            color: string;
            fontStyle: string;
            fontWeight: string;
            textDecoration?: undefined;
        } | {
            color: string;
            fontWeight: string;
            textDecoration: string;
            fontStyle?: undefined;
        })[];
    };
    "([ \\t]*)([\\/]{2})([ \\t]+)([@]region\\b)([ ][ ]*?)([ ]?\\b.+?[ ]?)([ ]*$)": {
        filterFileRegex: string;
        regexFlags: string;
        decorations: ({
            color?: undefined;
            fontStyle?: undefined;
            fontWeight?: undefined;
            width?: undefined;
            backgroundColor?: undefined;
            before?: undefined;
            after?: undefined;
        } | {
            color: string;
            fontStyle: string;
            fontWeight: string;
            width?: undefined;
            backgroundColor?: undefined;
            before?: undefined;
            after?: undefined;
        } | {
            width: string;
            color?: undefined;
            fontStyle?: undefined;
            fontWeight?: undefined;
            backgroundColor?: undefined;
            before?: undefined;
            after?: undefined;
        } | {
            color: string;
            backgroundColor: string;
            fontWeight: string;
            before: {
                contentText: string;
                opacity: string;
                textDecoration: string;
                color: string;
                backgroundColor: string;
            };
            after: {
                contentText: string;
                opacity: string;
                textDecoration: string;
                color: string;
                backgroundColor: string;
            };
            fontStyle?: undefined;
            width?: undefined;
        })[];
    };
    "([\\/]{2}(?=[ ]*[@]region[ ]+(?:Decorators|Folding)|[ ]+Sync[ ]-[ ]settingsSync.options|[ ]*Highlight[ ]+Decorator[ ]+-[ ]+highlight\\.options))": {
        filterFileRegex: string;
        regexFlags: string;
        decorations: {
            overviewRulerLane: string;
            overviewRulerColor: string;
            before: {
                contentText: string;
                color: string;
                fontWeight: string;
                fontStyle: string;
                width: string;
                border: string;
                height: string;
                textDecoration: string;
            };
        }[];
    };
    "^([ \\t]+[\\/]{2}[ ])(Highlight)([ ]\u2022[ ])(.+)$": {
        filterFileRegex: string;
        regexFlags: string;
        decorations: ({
            backgroundColor: string;
            isWholeLine: boolean;
            color?: undefined;
            fontWeight?: undefined;
            opacity?: undefined;
        } | {
            color: string;
            fontWeight: string;
            backgroundColor?: undefined;
            isWholeLine?: undefined;
            opacity?: undefined;
        } | {
            backgroundColor?: undefined;
            isWholeLine?: undefined;
            color?: undefined;
            fontWeight?: undefined;
            opacity?: undefined;
        } | {
            opacity: string;
            backgroundColor?: undefined;
            isWholeLine?: undefined;
            color?: undefined;
            fontWeight?: undefined;
        })[];
    };
    "([\\{])(LANG|appname|currentcolumn|currentline|dirname|filename|filesize|fulldirname|gitbranch|gitreponame|lang|null|totallines|workspace|workspaceFolder)([\\}])": {
        filterFileRegex: string;
        regexFlags: string;
        decorations: ({
            color: string;
            fontStyle: string;
            opacity: string;
            fontWeight?: undefined;
        } | {
            color: string;
            fontStyle: string;
            opacity: string;
            fontWeight: string;
        })[];
    };
    "(?:([\\\\]{2})(\\1)|(?:([\\\\])([\\\\][sS]))+|(?:([\\\\])([\\\\][nbB]))+|(?:([\\\\])([\\\\])([\\[\\]\\)\\(\\{\\}])|(?:([\\\\])([\\\\])([\\?\\*\\^\\$\\/\\|])))|([\\\\](?:[\\\\]{2})*)(?=![\\\\]))": {
        filterLanguageRegex: string;
        regexFlags: string;
        decorations: ({
            opacity: string;
            color: string;
            border: string;
            borderStyle: string;
            fontWeight: string;
            rangeBehavior: number;
            textDecoration?: undefined;
            backgroundColor?: undefined;
        } | {
            color: string;
            border: string;
            borderStyle: string;
            fontWeight: string;
            rangeBehavior: number;
            opacity?: undefined;
            textDecoration?: undefined;
            backgroundColor?: undefined;
        } | {
            color: string;
            fontWeight: string;
            rangeBehavior: number;
            opacity?: undefined;
            border?: undefined;
            borderStyle?: undefined;
            textDecoration?: undefined;
            backgroundColor?: undefined;
        } | {
            color: string;
            opacity: string;
            rangeBehavior: number;
            border?: undefined;
            borderStyle?: undefined;
            fontWeight?: undefined;
            textDecoration?: undefined;
            backgroundColor?: undefined;
        } | {
            color: string;
            rangeBehavior: number;
            opacity?: undefined;
            border?: undefined;
            borderStyle?: undefined;
            fontWeight?: undefined;
            textDecoration?: undefined;
            backgroundColor?: undefined;
        } | {
            color: string;
            textDecoration: string;
            fontWeight: string;
            rangeBehavior: number;
            opacity?: undefined;
            border?: undefined;
            borderStyle?: undefined;
            backgroundColor?: undefined;
        } | {
            color: string;
            opacity?: undefined;
            border?: undefined;
            borderStyle?: undefined;
            fontWeight?: undefined;
            rangeBehavior?: undefined;
            textDecoration?: undefined;
            backgroundColor?: undefined;
        } | {
            color: string;
            textDecoration: string;
            fontWeight: string;
            opacity?: undefined;
            border?: undefined;
            borderStyle?: undefined;
            rangeBehavior?: undefined;
            backgroundColor?: undefined;
        } | {
            backgroundColor: string;
            opacity?: undefined;
            color?: undefined;
            border?: undefined;
            borderStyle?: undefined;
            fontWeight?: undefined;
            rangeBehavior?: undefined;
            textDecoration?: undefined;
        })[];
    };
    "(\\$)(?:(TM_[A-Z]+(?:_[A-Z]+)*)|([\\d])|([\\{])(?:(TM_[A-Z]+(?:_[A-Z]+)*)|([\\d]))(?:(.+?(?=[\\}])))?(?:([\\/])(.+?)((?<![\\\\]{2})[\\/])(.+?)(?:(?<![\\\\]{2})[\\/])(\\w*))?([\\}]))": {
        filterFileRegex: string;
        regexFlags: string;
        decorations: {
            color: string;
            fontStyle: string;
            fontWeight: string;
        }[];
    };
    "^([ ]{2}(?:[ ]{2})?)([\\/]{2}[ ]?)([@#](?:section|region))([ ])(.+?)([\\t ]*)$": {
        regexFlags: string;
        filterFileRegex: string;
        decorations: ({
            isWholeLine: boolean;
            backgroundColor: string;
            borderStyle?: undefined;
            borderWidth?: undefined;
            borderColor?: undefined;
            color?: undefined;
            fontStyle?: undefined;
            fontWeight?: undefined;
        } | {
            borderStyle: string;
            borderWidth: string;
            borderColor: string;
            isWholeLine?: undefined;
            backgroundColor?: undefined;
            color?: undefined;
            fontStyle?: undefined;
            fontWeight?: undefined;
        } | {
            color: string;
            fontStyle: string;
            borderStyle: string;
            fontWeight: string;
            borderWidth: string;
            borderColor: string;
            isWholeLine?: undefined;
            backgroundColor?: undefined;
        } | {
            color: string;
            fontWeight: string;
            borderStyle: string;
            borderWidth: string;
            borderColor: string;
            isWholeLine?: undefined;
            backgroundColor?: undefined;
            fontStyle?: undefined;
        })[];
    };
    "([/]{2})(?<=^[\\s]+[\\{] \\1)([ ]+)(\\S.+?)(\\s*$)": {
        regexFlags: string;
        filterFileRegex: string;
        decorations: ({
            opacity: string;
            color?: undefined;
            fontStyle?: undefined;
            fontWeight?: undefined;
        } | {
            color: string;
            opacity: string;
            fontStyle: string;
            fontWeight: string;
        } | {
            opacity?: undefined;
            color?: undefined;
            fontStyle?: undefined;
            fontWeight?: undefined;
        })[];
    };
    "([\\w\\._]+)([\\t ]*)(=~)([\\t ]*)([\\/])(.+?)((?<![\\\\]{2})\\5)": {
        filterFileRegex: string;
        regexFlags: string;
        decorations: ({
            backgroundColor: string;
            color: string;
            fontWeight: string;
            fontStyle: string;
        } | {
            backgroundColor: string;
            color?: undefined;
            fontWeight?: undefined;
            fontStyle?: undefined;
        } | {
            backgroundColor: string;
            color: string;
            fontStyle: string;
            fontWeight?: undefined;
        })[];
    };
    "(?<=^[ ]{6})(?:([\\[]NEW[\\]])|([\\w\\.]+))([ ]+)(.+)|(?<=^     )(- )([\\w ]+)": {
        filterFileRegex: string;
        regexFlags: string;
        decorations: ({
            before: {
                contentText: string;
            };
            color?: undefined;
            fontWeight?: undefined;
            fontStyle?: undefined;
            textDecoration?: undefined;
        } | {
            color: string;
            fontWeight: string;
            fontStyle: string;
            before?: undefined;
            textDecoration?: undefined;
        } | {
            before?: undefined;
            color?: undefined;
            fontWeight?: undefined;
            fontStyle?: undefined;
            textDecoration?: undefined;
        } | {
            textDecoration: string;
            fontStyle: string;
            fontWeight: string;
            color: string;
            before?: undefined;
        })[];
    };
    "(\"key\")|(\"command\")|(\"when\")": {
        filterFileRegex: string;
        regexFlags: string;
        decorations: {
            textDecoration: string;
        }[];
    };
    "^([ \\t]*)(?:(--)(region)()([ ][ ]*)(.+?)$([ \\t]*)|(--)(endregion)())": {
        regexFlags: string;
        filterFileRegex: string;
        decorations: ({
            color?: undefined;
            fontWeight?: undefined;
            opacity?: undefined;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            textDecoration?: undefined;
            fontStyle?: undefined;
        } | {
            color: string;
            fontWeight: string;
            opacity: string;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            textDecoration?: undefined;
            fontStyle?: undefined;
        } | {
            isWholeLine: boolean;
            borderColor: string;
            borderStyle: string;
            borderWidth: string;
            color?: undefined;
            fontWeight?: undefined;
            opacity?: undefined;
            textDecoration?: undefined;
            fontStyle?: undefined;
        } | {
            textDecoration: string;
            color: string;
            fontStyle: string;
            fontWeight: string;
            opacity?: undefined;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
        } | {
            isWholeLine: boolean;
            opacity: string;
            color?: undefined;
            fontWeight?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            textDecoration?: undefined;
            fontStyle?: undefined;
        })[];
    };
    "^(  ####)(\\[[^\\n#]+\\])(#+[ ]*)$": {
        regexFlags: string;
        filterFileRegex: string;
        decorations: ({
            color: string;
            opacity: string;
            fontStyle?: undefined;
            fontWeight?: undefined;
        } | {
            color: string;
            fontStyle: string;
            fontWeight: string;
            opacity?: undefined;
        })[];
    };
    "(?<=^[^#\"'\\n]*)(?:(?:(?:(#(?:#{2})?)(region)()|(#(?:#{2})?)(section)())([ \\t]+)(.+?)([ \\t]*$))|(?:(#(?:#{2})?)(endregion)()([ \\t]+)(.+?)([ \\t]*$)))": {
        regexFlags: string;
        filterLanguageRegex: string;
        decorations: ({
            opacity: string;
            color?: undefined;
            fontWeight?: undefined;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            textDecoration?: undefined;
            fontStyle?: undefined;
        } | {
            color: string;
            fontWeight: string;
            opacity: string;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            textDecoration?: undefined;
            fontStyle?: undefined;
        } | {
            isWholeLine: boolean;
            borderColor: string;
            borderStyle: string;
            borderWidth: string;
            opacity?: undefined;
            color?: undefined;
            fontWeight?: undefined;
            textDecoration?: undefined;
            fontStyle?: undefined;
        } | {
            isWholeLine: boolean;
            color: string;
            borderColor: string;
            borderStyle: string;
            borderWidth: string;
            opacity?: undefined;
            fontWeight?: undefined;
            textDecoration?: undefined;
            fontStyle?: undefined;
        } | {
            opacity?: undefined;
            color?: undefined;
            fontWeight?: undefined;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            textDecoration?: undefined;
            fontStyle?: undefined;
        } | {
            textDecoration: string;
            color: string;
            fontStyle: string;
            fontWeight: string;
            opacity?: undefined;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
        } | {
            color: string;
            opacity: string;
            fontWeight?: undefined;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            textDecoration?: undefined;
            fontStyle?: undefined;
        } | {
            isWholeLine: boolean;
            opacity: string;
            color?: undefined;
            fontWeight?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            textDecoration?: undefined;
            fontStyle?: undefined;
        })[];
    };
    "^(\\s+)(#+[ ]?)(?:([@]?[\\w]+(?:[:]|(?<=#[ ]?@[\\w]+))))([ \\t]*)$": {
        regexFlags: string;
        filterLanguageRegex: string;
        decorations: ({
            color?: undefined;
            fontStyle?: undefined;
            fontWeight?: undefined;
        } | {
            color: string;
            fontStyle: string;
            fontWeight: string;
        })[];
    };
    "(-\\w(?=\\W)|--\\w+(?:-\\w+)?)(?<=^(?:\\s*)(?:#+[ ]+).+)": {
        regexFlags: string;
        filterLanguageRegex: string;
        decorations: ({
            color: string;
            fontStyle: string;
            fontWeight: string;
        } | {
            color?: undefined;
            fontStyle?: undefined;
            fontWeight?: undefined;
        })[];
    };
    "((?:or|[:,]||^ # +) )('[^']+?')(?<=^(?:\\s*)(?:#+[ ]+)-.+?: .+|^ # +'.+)": {
        regexFlags: string;
        filterLanguageRegex: string;
        decorations: ({
            color?: undefined;
            fontStyle?: undefined;
            fontWeight?: undefined;
        } | {
            color: string;
            fontStyle: string;
            fontWeight: string;
        })[];
    };
    "(['\"])(?:([\\(])(.+?)([\\)]))?(-\\w(?=\\W)|--\\w+(?:-\\w+)*)([=\\+]?)(\\[)(.+?)(\\])(?:(?:([:])(.*?:[\\(])?([ ]*[\\(])?|)(.+?)([\\)])?)?(\\1)": {
        regexFlags: string;
        filterLanguageRegex: string;
        decorations: ({
            backgroundColor: string;
            color: string;
            fontStyle: string;
            fontWeight?: undefined;
            opacity?: undefined;
        } | {
            backgroundColor: string;
            color: string;
            fontWeight: string;
            fontStyle?: undefined;
            opacity?: undefined;
        } | {
            color: string;
            backgroundColor: string;
            fontStyle: string;
            opacity: string;
            fontWeight: string;
        } | {
            color: string;
            backgroundColor: string;
            fontStyle?: undefined;
            fontWeight?: undefined;
            opacity?: undefined;
        })[];
    };
    "(\\{)(-[\\w]+|--?[\\w]+(?:-[\\w]+)*)(,)(-[\\w]+|--?[\\w]+(?:-[\\w]+)*)(\\})(['\"])([=\\+]?)(\\[)(.+?)(\\])(?:(?:(:)(.*?:\\()?([ ]*[\\(])?|)(.+?)(\\))?)?(\\6)": {
        regexFlags: string;
        filterLanguageRegex: string;
        decorations: ({
            color: string;
            backgroundColor: string;
            fontWeight?: undefined;
            fontStyle?: undefined;
        } | {
            color: string;
            backgroundColor: string;
            fontWeight: string;
            fontStyle?: undefined;
        } | {
            color: string;
            backgroundColor: string;
            fontStyle: string;
            fontWeight?: undefined;
        })[];
    };
    "([\\}][ ]*)(always)([ ]*[\\{])": {
        filterLanguageRegex: string;
        decorations: ({
            color?: undefined;
            fontWeight?: undefined;
            textDecoration?: undefined;
        } | {
            color: string;
            fontWeight: string;
            textDecoration: string;
        })[];
    };
    "(?<=(?:^|;|[\\(][ ]*[\\)][\\{]|[&]{2}|[\\|]{2}))([ ]+)?(builtin)([ ]+)(emulate)( zsh[ ]*)(?:(?=-[lL])(-L)|(-l))?": {
        regexFlags: string;
        filterLanguageRegex: string;
        decorations: ({
            fontStyle?: undefined;
            fontWeight?: undefined;
            color?: undefined;
            backgroundColor?: undefined;
        } | {
            fontStyle: string;
            fontWeight: string;
            color: string;
            backgroundColor?: undefined;
        } | {
            backgroundColor: string;
            color: string;
            fontStyle?: undefined;
            fontWeight?: undefined;
        })[];
    };
    "[\\b](zinit|zplugin)(?:((?:[ \\t]+|[\\\\][\\n])+)(?:(ice|snippet|load|\\$loader)|(for|lucid)|((?:as|atload|atinit|from|pick|nocompile|atpull|wait)(?:'(?:\\\\'|[^\\\\]+)'|\"(?:\\\\\"|[^\\\\]+)\")?)))": {
        regexFlags: string;
        filterLanguageRegex: string;
        decorations: ({
            outline: string;
            color?: undefined;
            fontWeight?: undefined;
            fontStyle?: undefined;
            textDecoration?: undefined;
            border?: undefined;
        } | {
            color: string;
            fontWeight: string;
            fontStyle: string;
            outline?: undefined;
            textDecoration?: undefined;
            border?: undefined;
        } | {
            outline?: undefined;
            color?: undefined;
            fontWeight?: undefined;
            fontStyle?: undefined;
            textDecoration?: undefined;
            border?: undefined;
        } | {
            color: string;
            fontWeight: string;
            textDecoration: string;
            outline?: undefined;
            fontStyle?: undefined;
            border?: undefined;
        } | {
            color: string;
            outline?: undefined;
            fontWeight?: undefined;
            fontStyle?: undefined;
            textDecoration?: undefined;
            border?: undefined;
        } | {
            color: string;
            fontWeight: string;
            outline?: undefined;
            fontStyle?: undefined;
            textDecoration?: undefined;
            border?: undefined;
        } | {
            border: string;
            outline?: undefined;
            color?: undefined;
            fontWeight?: undefined;
            fontStyle?: undefined;
            textDecoration?: undefined;
        })[];
    };
    "(\\*[ ]+)([ \\w\\.\\/\\\\\\[\\]\\{\\}]*?[ ]?)([\\|](?:[\u2014])*?[\\|])(.*)": {
        filterFileRegex: string;
        regexFlags: string;
        decorations: ({
            color?: undefined;
            fontStyle?: undefined;
        } | {
            color: string;
            fontStyle?: undefined;
        } | {
            color: string;
            fontStyle: string;
        })[];
    };
    "^(?<![\\s\\S\\r])(?:((?=#!))(#!)(?:([a-z_-]+)(\\s*)|(.+?[\\/])(env)([ ]+)([\\w]+)(?:([ ]+)(.+?)|())([ \\t]*))|(#)(?:(autoload)(.*)|(compdef)(.*)))$": {
        regexFlags: string;
        filterLanguageRegex: string;
        decorations: ({
            borderStyle: string;
            borderWidth: string;
            borderColor: string;
            borderRadius: string;
            isWholeLine: boolean;
            color?: undefined;
            opacity?: undefined;
            fontWeight?: undefined;
            fontStyle?: undefined;
        } | {
            color: string;
            opacity: string;
            fontWeight: string;
            borderStyle?: undefined;
            borderWidth?: undefined;
            borderColor?: undefined;
            borderRadius?: undefined;
            isWholeLine?: undefined;
            fontStyle?: undefined;
        } | {
            borderStyle?: undefined;
            borderWidth?: undefined;
            borderColor?: undefined;
            borderRadius?: undefined;
            isWholeLine?: undefined;
            color?: undefined;
            opacity?: undefined;
            fontWeight?: undefined;
            fontStyle?: undefined;
        } | {
            color: string;
            fontWeight: string;
            fontStyle: string;
            borderStyle?: undefined;
            borderWidth?: undefined;
            borderColor?: undefined;
            borderRadius?: undefined;
            isWholeLine?: undefined;
            opacity?: undefined;
        } | {
            color: string;
            opacity: string;
            fontStyle: string;
            fontWeight: string;
            borderStyle: string;
            borderWidth: string;
            borderColor: string;
            borderRadius: string;
            isWholeLine?: undefined;
        } | {
            color: string;
            opacity: string;
            fontStyle: string;
            fontWeight: string;
            borderStyle?: undefined;
            borderWidth?: undefined;
            borderColor?: undefined;
            borderRadius?: undefined;
            isWholeLine?: undefined;
        })[];
    };
    "(?:(?:(&amp;)|(&lt;)|(&gt;)|(&quot;)|(&apos;))(?=[^><]*</))": {
        filterLanguageRegex: string;
        regexFlags: string;
        decorations: {
            textDecoration: string;
        }[];
    };
    "(?<=^[^#\"'\\n]*)(?:(?:(?:([\\/]{2}[ ]?#)(region)()|([\\/]{2}[ ]?#)(section)())([ \\t]+)(.+?)([ \\t]*$))|(?:([\\/]{2}[ ]?#)(endregion)()([ \\t]+)(.+?)([ \\t]*$)))": {
        regexFlags: string;
        filterLanguageRegex: string;
        decorations: ({
            color: string;
            opacity: string;
            fontStyle: string;
            fontWeight?: undefined;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            textDecoration?: undefined;
        } | {
            color: string;
            fontWeight: string;
            opacity: string;
            fontStyle: string;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            textDecoration?: undefined;
        } | {
            isWholeLine: boolean;
            borderColor: string;
            borderStyle: string;
            borderWidth: string;
            color?: undefined;
            opacity?: undefined;
            fontStyle?: undefined;
            fontWeight?: undefined;
            textDecoration?: undefined;
        } | {
            opacity: string;
            color?: undefined;
            fontStyle?: undefined;
            fontWeight?: undefined;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            textDecoration?: undefined;
        } | {
            color: string;
            fontWeight: string;
            opacity: string;
            fontStyle?: undefined;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            textDecoration?: undefined;
        } | {
            isWholeLine: boolean;
            color: string;
            borderColor: string;
            borderStyle: string;
            borderWidth: string;
            opacity?: undefined;
            fontStyle?: undefined;
            fontWeight?: undefined;
            textDecoration?: undefined;
        } | {
            color?: undefined;
            opacity?: undefined;
            fontStyle?: undefined;
            fontWeight?: undefined;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            textDecoration?: undefined;
        } | {
            textDecoration: string;
            color: string;
            fontStyle: string;
            fontWeight: string;
            opacity?: undefined;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
        } | {
            color: string;
            opacity: string;
            fontStyle?: undefined;
            fontWeight?: undefined;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            textDecoration?: undefined;
        } | {
            isWholeLine: boolean;
            opacity: string;
            color?: undefined;
            fontStyle?: undefined;
            fontWeight?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            textDecoration?: undefined;
        })[];
    };
    "^(?:([ \\t]*)([#][ ]*)(?:([@][\\w\\d_-]+)(.*)|(.*))$|([ \\t]*)(color-link)([ \\t]+)(\\S+?\\.)?(\\S+))": {
        filterFileRegex: string;
        regexFlags: string;
        decorations: ({
            color?: undefined;
            fontStyle?: undefined;
            fontWeight?: undefined;
        } | {
            color: string;
            fontStyle?: undefined;
            fontWeight?: undefined;
        } | {
            color: string;
            fontStyle: string;
            fontWeight: string;
        } | {
            fontWeight: string;
            color?: undefined;
            fontStyle?: undefined;
        })[];
    };
    "(?<=^[^']+['].*)(?:([\\\\])([\\/])|([\\\\])([\\*\\?\\$\\^]))": {
        filterFileRegex: string;
        regexFlags: string;
        decorations: ({
            color: string;
            fontWeight: string;
            opacity?: undefined;
            textDecoration?: undefined;
            backgroundColor?: undefined;
        } | {
            color: string;
            opacity: string;
            fontWeight: string;
            textDecoration?: undefined;
            backgroundColor?: undefined;
        } | {
            color: string;
            opacity: string;
            fontWeight?: undefined;
            textDecoration?: undefined;
            backgroundColor?: undefined;
        } | {
            color: string;
            fontWeight?: undefined;
            opacity?: undefined;
            textDecoration?: undefined;
            backgroundColor?: undefined;
        } | {
            color: string;
            textDecoration: string;
            fontWeight: string;
            opacity?: undefined;
            backgroundColor?: undefined;
        } | {
            backgroundColor: string;
            color?: undefined;
            fontWeight?: undefined;
            opacity?: undefined;
            textDecoration?: undefined;
        })[];
    };
    "^([ \\t]*)(?:()(#)(region)|()(#)(endregion))([ ]+)(.+?)([ \\t]*)$": {
        filterLanguageRegex: string;
        regexFlags: string;
        decorations: ({
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            color?: undefined;
            opacity?: undefined;
            fontWeight?: undefined;
        } | {
            isWholeLine: boolean;
            borderColor: string;
            borderStyle: string;
            borderWidth: string;
            color?: undefined;
            opacity?: undefined;
            fontWeight?: undefined;
        } | {
            color: string;
            opacity: string;
            fontWeight: string;
            isWholeLine?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
        } | {
            isWholeLine: boolean;
            opacity: string;
            color: string;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            fontWeight?: undefined;
        })[];
    };
    "(?<=^[ \\t]+)([#]{3}[ ])(.+?)([ \\t]*$)": {
        filterLanguageRegex: string;
        regexFlags: string;
        decorations: ({
            isWholeLine: boolean;
            color: string;
            fontStyle: string;
            fontWeight: string;
            borderWidth?: undefined;
            borderStyle?: undefined;
            borderColor?: undefined;
        } | {
            borderWidth: string;
            borderStyle: string;
            borderColor: string;
            isWholeLine?: undefined;
            color?: undefined;
            fontStyle?: undefined;
            fontWeight?: undefined;
        } | {
            isWholeLine?: undefined;
            color?: undefined;
            fontStyle?: undefined;
            fontWeight?: undefined;
            borderWidth?: undefined;
            borderStyle?: undefined;
            borderColor?: undefined;
        })[];
    };
    "([\\$]home(?=$|\\b))": {
        regexFlags: string;
        filterFileRegex: string;
        decorations: {
            rangeBehavior: number;
            color: string;
            fontWeight: string;
            fontStyle: string;
        }[];
    };
    "(?:^(?:(;()(?:LAYER|MESH):)(.*)|(;()TYPE:)(.+)|(;M(?:AX|IN)[XYZ]:)(.+))$)": {
        filterLanguageRegex: string;
        regexFlags: string;
        decorations: ({
            color: string;
            fontWeight: string;
            isWholeLine?: undefined;
            overviewRulerLane?: undefined;
            overviewRulerColor?: undefined;
            backgroundColor?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
        } | {
            isWholeLine: boolean;
            overviewRulerLane: string;
            overviewRulerColor: string;
            fontWeight: string;
            backgroundColor: string;
            borderColor: string;
            borderStyle: string;
            borderWidth: string;
            color?: undefined;
        } | {
            color: string;
            fontWeight?: undefined;
            isWholeLine?: undefined;
            overviewRulerLane?: undefined;
            overviewRulerColor?: undefined;
            backgroundColor?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
        })[];
    };
    "([\\$][\\{])([^\\}\\s]+?)([\\}])": {
        filterFileRegex: string;
        regexFlags: string;
        filterLanguageRegex: string;
        decorations: ({
            color: string;
            opacity: string;
            fontStyle: string;
            fontWeight?: undefined;
        } | {
            color: string;
            fontWeight: string;
            fontStyle: string;
            opacity?: undefined;
        })[];
    };
    "^(#Requires)([ ]+)(?:(-Version())([ ]+)(?:([\\d])(?:([\\.])([\\d]+)(?:([\\.])([\\d]+))?)?)|(-Module())([ ]+)(.+)|(-[A-Z][a-z]+(?=\\S)())([ ]+)(.+))$": {
        filterLanguageRegex: string;
        regexFlags: string;
        decorations: ({
            color: string;
            fontWeight: string;
            fontStyle: string;
            isWholeLine?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            borderColor?: undefined;
            borderRadius?: undefined;
            opacity?: undefined;
        } | {
            color?: undefined;
            fontWeight?: undefined;
            fontStyle?: undefined;
            isWholeLine?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            borderColor?: undefined;
            borderRadius?: undefined;
            opacity?: undefined;
        } | {
            isWholeLine: boolean;
            borderStyle: string;
            borderWidth: string;
            borderColor: string;
            borderRadius: string;
            fontStyle: string;
            color?: undefined;
            fontWeight?: undefined;
            opacity?: undefined;
        } | {
            color: string;
            fontStyle: string;
            fontWeight?: undefined;
            isWholeLine?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            borderColor?: undefined;
            borderRadius?: undefined;
            opacity?: undefined;
        } | {
            color: string;
            opacity: string;
            fontStyle: string;
            fontWeight?: undefined;
            isWholeLine?: undefined;
            borderStyle?: undefined;
            borderWidth?: undefined;
            borderColor?: undefined;
            borderRadius?: undefined;
        })[];
    };
    "([`]e[\\[])": {
        filterLanguageRegex: string;
        regexFlags: string;
        decorations: {
            color: string;
            fontWeight: string;
        }[];
    };
    "(?<=(?:[`]e)(?:[\\[])[;\\[\\d]*)(?:(38;5;)([\\d]+)([;m])?|(48;5;)([\\d]+)([;m])?)": {
        filterLanguageRegex: string;
        regexFlags: string;
        decorations: ({
            color: string;
            fontStyle: string;
            fontWeight: string;
            opacity: string;
            backgroundColor?: undefined;
        } | {
            color: string;
            fontStyle: string;
            fontWeight: string;
            opacity?: undefined;
            backgroundColor?: undefined;
        } | {
            backgroundColor: string;
            fontStyle: string;
            fontWeight: string;
            opacity: string;
            color?: undefined;
        } | {
            backgroundColor: string;
            fontStyle: string;
            fontWeight: string;
            color?: undefined;
            opacity?: undefined;
        })[];
    };
    "(?<=[^`])(`)(e)(\\[)((?:[39]\\d|(?:4|10)[1-7]))(m)": {
        regexFlags: string;
        filterLanguageRegex: string;
        decorations: ({
            color: string;
            backgroundColor: string;
            textDecoration: string;
            fontWeight?: undefined;
        } | {
            backgroundColor: string;
            fontWeight: string;
            textDecoration: string;
            color?: undefined;
        })[];
    };
    "^([\\[])([^\\]]+)([\\]])( +)(?:(?:([\\[])(info)([\\]])|([\\[])(debug)([\\]])|([\\[])(warn)([\\]])|([\\[])(error)([\\]]))?(?:((?:[ ]+[\\[][^\\]]+[\\]])+))?)?": {
        filterFileRegex: string;
        regexFlags: string;
        decorations: ({
            backgroundColor: string;
            color: string;
            fontStyle: string;
            fontWeight: string;
            opacity?: undefined;
            textDecoration?: undefined;
        } | {
            backgroundColor?: undefined;
            color?: undefined;
            fontStyle?: undefined;
            fontWeight?: undefined;
            opacity?: undefined;
            textDecoration?: undefined;
        } | {
            color: string;
            opacity: string;
            fontStyle: string;
            fontWeight: string;
            backgroundColor?: undefined;
            textDecoration?: undefined;
        } | {
            color: string;
            fontStyle: string;
            fontWeight: string;
            backgroundColor?: undefined;
            opacity?: undefined;
            textDecoration?: undefined;
        } | {
            color: string;
            fontStyle: string;
            fontWeight: string;
            textDecoration: string;
            backgroundColor?: undefined;
            opacity?: undefined;
        })[];
    };
    "$^((?!(?:\\/(?:\\*|\\/)).)*(?:(?:\\b(?:if|unless)\\b.+)|(?:.*\\{|(?:\\.[a-zA-Z_$-][a-zA-Z_$-]*|\\w+|[a-zA-Z_-][a-zA-Z_$-]*)(?:#[a-zA-Z_$-][a-zA-Z_$-]*)?)\\s*))$": {
        filterLanguageRegex: string;
        regexFlags: string;
        decorations: {
            isWholeLine: boolean;
            backgroundColor: string;
            borderStyle: string;
            borderColor: string;
            borderWidth: string;
            after: {
                contentText: string;
                margin: string;
                width: string;
                textDecoration: string;
                color: string;
            };
        }[];
    };
    "((?!.*?\\/\\*).*\\*/\\s*)?([\\}])(?=.*$)": {
        filterLanguageRegex: string;
        regexFlags: string;
        decorations: ({
            isWholeLine?: undefined;
            backgroundColor?: undefined;
            borderStyle?: undefined;
            borderColor?: undefined;
            borderWidth?: undefined;
            after?: undefined;
        } | {
            isWholeLine: boolean;
            backgroundColor: string;
            borderStyle: string;
            borderColor: string;
            borderWidth: string;
            after: {
                contentText: string;
                margin: string;
                width: string;
                textDecoration: string;
                color: string;
            };
        })[];
    };
};
export declare const userRegexSources: string[];
declare const _default: RegExp[];
export default _default;
