
function superbowlWin(array){
    // for (const year of array) {
    //     if (year.result === "W") {
    //         return year.year
    //     }
    // }

    let asdf = array.find(year => year.result === "W")
    console.log(asdf)
    if (asdf !== undefined) {
        return asdf.year
    }
    // array.find(function(year) {
    //     if (year.result === "W") {
    //         console.log(year)
    //     }
    // })
}