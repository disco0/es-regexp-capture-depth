# Ecmascript Regex Analysis Experiments

This repository is some experiments providing some quality of life improvements for writing a specific form of regex patterns, which at the time of writing is a mild static analysis checking for nested capture groups and some combinations of lookaround/captured groups. This is useful for writing regexes that need have full, non-overlapping captures—in my case for VS Code's `vscode-highlight` extension, or alternatively something like the `colout` python package. For example (as stored in a JSON configuration file key):

``` json
"(?<=^[^#\"'\\n]*)(?:(?:(?:(#(?:#{2})?)(region)()|(#(?:#{2})?)(section)())([ \\t]+)(.+?)([ \\t]*$))|(?:(#(?:#{2})?)(endregion)()([ \\t]+)(.+?)([ \\t]*$)))"
```

Beyond failing at compilation, it would be good to know if the pattern:
  - Contains no *non-significant* nested capturing groups
  - No *non-significant* capture groups inside lookaheads
  - Pattern has sub-expressions not contained by a capture group (or lookaround group)

As of writing the first two checks have been implemented with zero false positives in my `vscode-highlight` regexes (and actually caught one problem previously unnoticed).

## \> *non-significant* capture group

This is basically a noop capture group, `()`—this is useful with `vscode-highlight` to place full line decorations.
