const renderPage = function(){

    const resultsDiv= document.createElement('div')
    resultsDiv.id ='results_div'
    document.body.appendChild(resultsDiv)

    const word = document.querySelector('#search_for_word')

    const form =document.querySelector('#form');

    form.addEventListener("submit",(e) =>
    {
        e.preventDefault()
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}')
        .then(Response=> Response.json())
        .then(data =>{
            console.log(data)
            console.log(data[0].meanings[0].definitions[0].definitions)

            const definitions =data[0].meanings[0].definitions
             console.log(definitions)
        })
    })
}