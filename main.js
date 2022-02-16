// page layout
//                 body
//                     div id form
//                         _FORM_ search & results
// Title
//                 h2
// (audio play bar)
//                 div class player
//                     audio player file
// -separator-
// (search bar w/ button)
//                 div class search
//                     search and button code
// -separator-
// search results
//                 div class search results
//                     undordered list
// (songs & etc)

//const searchDiv = document.querySelector('#music-search')

//"https://itunes.apple.com/search?parameterkeyvalue&callback="{name of JavaScript function in webpage}"/>

const url = 'https://proxy-itunes-api.glitch.me/search?term='
const searchForm = document.querySelector('#formId')
let searchValue = searchForm.value
const search = document.querySelector('#searchId')


console.log(searchForm);

document.querySelector("input").focus();

searchForm.addEventListener('click', function(event) {
    event.preventDefault()
    console.log('click')

    fetch(url + search.value + "&media=music&limit=20")
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
            <audio controls src="${result.previewUrl}"></audio>
            `
            songBox.append(songProfile)
        }
    }))
})
        
    //     function(response){
    // console.log(response)
    // return response.json()
    // })
    // .then(function(data){
    // console.log(data)

    // document.querySelector('.songProfile').innerHTML += `<img src=${data.results[0].artworkUrl100}/>`
    
    // document.querySelector('#audio').innerHTML += `<audio controls src=${data.results[0].previewUrl}/>`
    


//     const searchBarString = document.getElementById('musicSearchBar').value
//         console.log(searchBarString);
//     document.getElementById('resultsId').innerHTML = "Results: '" + searchBarString + "' ";

//     const searchFormData = new FormData(event.target);
//         console.log(searchFormData);
//     const musicString = new URLSearchParams(searchFormData).toString('');
//         console.log(musicString);


//     let url = (`https://itunes.apple.com/search?${musicString}&limit=25`)
//     console.log(url)
//     fetch(url)
//     .then(function(response){
//     console.log(response)
//     return response.json()
// })
//     .then(function(data){
//         console.log(data)
//    