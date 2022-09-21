/*
this is just a place holder, this will obviously be replaced with an actual api... but for now this will just return the same thing
*/

const getSimos = (number) => {
    
    let ret = []

    for (var i = 0; i < number; i++) {
        ret.push({
            author: "Test",
            task: "Simon Said: Record a video of you hugging a friend",
            sourceImage: "/disconnect.svg", // will be authenticated with a post request, this is just a placeholder
            likes: 53
        })
    }

    return ret
}

export default getSimos