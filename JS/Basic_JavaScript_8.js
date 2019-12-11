function full_Sentence() {
    var part_1 = "var one ";
    var part_2 = "combined with var two ";
    var part_3 = "and three ";
    var part_4 = "can be joined to concatenate a sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}