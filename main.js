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


//"https://itunes.apple.com/search?parameterkeyvalue&callback="{name of JavaScript function in webpage}"/>


const form = document.querySelector('#search-form')
const searchDiv = document.querySelector('#music-search')
const url = ('https://itunes.apple.com/search?term=fleetwood+mac&limit=25')

form.addEventListener("submit", function (event) {
    event.preventDefault()
    console.log("searched!")
})

fetch('https://itunes.apple.com/search?term=fleetwood+mac&limit=25')
    .then(function(result){
        console.log(result)
        return result.json()
})
    .then (function(data){
        console.log(data)

})











// fetch('https://itunes.apple.com/search?term=fleetwood+mac&limit=25')
//     .then((result) => result.json())
//     .then((data) => {

//     document.querySelector('#searchDiv').innerHTML +=

//     `<h2>${data.artistId}</h2>

//     <div class="selectedSong">
//         <p>img artwork src=${artworkUrl30}>
//         <p>Song Title: ${data.trackName}</p>
//         <p>Band Name: ${data.artistName}</p>`


//     return data.artistId
//     })