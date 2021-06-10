let name1 = "Alexander"
let name2 = "Mary"
let name3 = "Michaella"

if (name1.length == name2.length && name1.length == name3.length){

    console.log("All three names " + name1 + " , " + name2 + " , " + name3 + " all have the same length.")

} else if (name1.length > name2.length && name1.length > name3.length) {

    console.log(name1 + " has the longest name.")

}  else if (name2.length > name1.length && name2.length > name3.length) {

    console.log(name2 + " has the longest name.")

}  else if (name3.length > name1.length && name3.length > name2.length) {

    console.log(name3 + " has the longest name.")

} else if (name1.length == name2.length) {

    console.log(name1 + " and " + name2 + " have the longest name.")

} else if (name1.length == name3.length) {

    console.log(name1 + " and " + name3 + " have the longest name.")

} else if (name3.length == name2.length) {

    console.log(name3 + " and " + name2 + " have the longest name.")

} 
