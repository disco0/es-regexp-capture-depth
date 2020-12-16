export type EcmaVersion = Exclude<import('regexpp').RegExpValidator.Options['ecmaVersion'], undefined>;

export const EcmaVersions = Object.freeze(
{
    5:    5,
    2015: 2015,
    2016: 2016,
    2017: 2017,
    2018: 2018,
    2019: 2019,
    2020: 2020
}) as { [Key in EcmaVersion]: Key; };

export default EcmaVersions
