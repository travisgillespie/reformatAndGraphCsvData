function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function regExUnderscore(str, exp, replacement) {
  var regex = new RegExp(exp, "g");
  return str.replace(regex,replacement);
}

function regExSpace(str, exp, replacement) {
  var regex = new RegExp(exp, "g");
  return str.replace(regex,replacement);
}
