function introduction(name) {
  return "Hi, my name is ${name}.";
}
function introductionWithLanguage(name, language) {
    console.log(`Hi, my name is ${name} and I am learning to program ${language}.`);

  }
  function introductionWithLanguageOptional(name, language = "Javascript") {
    console.log(`Hi, my name is ${name} and I am learning to program ${language}.`);

  }