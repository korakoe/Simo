/*
this is just a place holder, this will obviously be replaced with an actual api... but for now this will just return the same thing
*/

const getSimos = (number, id) => {
    
    let ret = []
    console.log(id)
    for (var i = 0; i < number; i++) {
        console.log("loading post: ", i + id)
        ret.push({
            author: "Test",
            task: "Simon Said: Record a video of you hugging a friend",
            sourceImage: "https://images.unsplash.com/photo-1626415345766-ee1a2af4f861?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwc2VsZmllfGVufDB8fDB8fA%3D%3D&w=1000&q=80", // will be authenticated with a post request, this is just a placeholder
            id: 0
        })
    }

    return ret
}

export default getSimos