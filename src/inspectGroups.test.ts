import { 
    inspectGroupCaptures
} from './inspectGroups'

const testRegexes =
[
    /^((?:[ ]{2})*[ ])([#])([ ]+)(?:(@param)([ ]+)(?:([\$][\d\*@$?&]+))(\??)(?:(:)([\t ]+)(\w+))?(?:([ ]+)([=][>])([ ]+)(?:([A-Za-z_-](?:[<][^\n>]+[>]|[A-Za-z_-]*[^\n]*?))(?:([ ]+)(?:(@desc)|([<]\?))([ ]+)(.+?))?))([ ]*)|(@return)(?:([ ]+)([=][>])([ ]+)(?:([A-Za-z_][A-Za-z_]*)(.*?)(?:([ ]+)(?:(@desc)|([<]\?))([ ]+)(.+?))?)))$/gmi
]

for(const regex of testRegexes)
{
    console.log(`Input: %o`, regex)
    inspectGroupCaptures(regex);
}
