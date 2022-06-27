
const url = 'https://proxy-itunes-api.glitch.me/search?term='
const searchForm = document.querySelector('#formId')
let searchValue = searchForm.value
const search = document.querySelector('#searchId')
const searchResults = document.querySelector('#searchResults')
const audioPreviewUrl = ""


console.log(searchForm);

document.querySelector("input").focus();

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
          "body").style.visibility = "hidden";
        document.querySelector(
          "spinner").style.visibility = "visible";
    } else {
        document.querySelector(
          "spinner").style.display = "none";
        document.querySelector(
          "body").style.visibility = "visible";
    }
}

searchForm.addEventListener('click', function(event) {
    event.preventDefault()
    console.log('click')
    // document.querySelector('#searchForm').innerHTML = ""

    fetch(url + search.value + "&media=music&limit=15")
    .then(result => result.json())
    .then((data => {
        let songBox = document.getElementById('songCollection')
        let results = data.results
        console.log(data)
        

        for(let result of results) {
            const songProfile = document.createElement('div')
            songProfile.classList.add('song-profile')

            songProfile.innerHTML = `
            <img src="${result.artworkUrl100}">
            <p>${result.trackName}</p>
            <h4>${result.artistName}</h4>
            <audio controls src="${result.previewUrl}">Preview</audio>
            `
            songBox.prepend(songProfile)
        }
    }))
});
