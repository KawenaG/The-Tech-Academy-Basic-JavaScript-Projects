function dict() {
    var Cars = {
        Year: "2010",
        Make: "Nissan",
        Model: "Pathfinder",
        Color: "Silver",
        Type: "SUV",
    };
    delete Cars.Type;
    document.getElementById("Dictionary").innerHTML = Cars.Type
}