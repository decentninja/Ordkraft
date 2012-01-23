var i, än, ändelse, ändelser, _len;
ändelser = ["or", "ar", "er", "ens", "s", "ets", "na", "are", "ast", "t"];
ändelse = "";
for (i = 0, _len = ändelser.length; i < _len; i++) {
  än = ändelser[i];
  ändelse += "(" + än + ")[\\s\\.\\!\\,\\?]";
  if (i !== ändelser.length - 1) {
    ändelse += "|";
  }
}

ändelse = new RegExp(ändelse);
PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
        ],
        [
         [PR['PR_STRING'],      ändelse, null],
         [PR['PR_KEYWORD'],     /(a|e|i|o|u|y|å|ä|ö)/, null],
         [PR['PR_COMMENT'],      /\d/, null],
        ],
        [
        ]
    ),
['ok', 'ordkraft']);