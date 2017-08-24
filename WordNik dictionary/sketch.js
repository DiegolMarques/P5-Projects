var url1 = "http://api.wordnik.com:80/v4/word.json/"
var word;
var i;
var url2 = "/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"
var def;
function setup() {
  noCanvas();
  var input = select("#input")
  input.changed(enter)
}

function gotData(data){
  def = data
  print(data)
  createP("Meanings:")
  var ol = createElement("ol")
  for(i = 0; i < def.length; i++){
   ol.child(createElement("li", def[i].text))
   var part = ol.child(createP("Part of Speech:"));
   part.child(createP(def[i].partOfSpeech))
   
 }
}
function enter(){
  word = select("#input").value()
  loadJSON(url1 + word + url2, gotData);
}
