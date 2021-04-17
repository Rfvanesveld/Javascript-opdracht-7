//No arguments

const paintjob = function (painting) {
    console.log("The wall has been painted red")
}
paintjob()

//Single argument

const paintjob1 = function (color) {
    console.log("The wall has been painted " + color)
}
const paint = "green";
paintjob1(paint)

//Multiple arguments

const paintJob2 = function (color2, color1) {

    console.log("The north wall has been painted " + color1);
    console.log("The south-east wall has been painted " + color2);
}

const wall1 = "Orange"
const wall2 = "Grey"

paintJob2(wall1, wall2)
paintJob2(wall2, wall1)

const paintJob2 = function (color1, color2) {

    console.log("The north wall has been painted " + color1);
    console.log("The south-east wall has been painted " + color2);
}

const wall1 = "Orange"
const wall2 = "Grey"

paintJob2(wall1, wall2)
paintJob2(wall2, wall1)