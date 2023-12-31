const renderPage = function(){

    const resultsDiv = document.createElement('div');
    resultsDiv.id = 'results_div';
    document.body.appendChild(resultsDiv);

    const word = document.querySelector('#search_for_word');
    const form = document.querySelector('#form');

    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`)
        .then(response => response.json())
        .then(data => {
            
            //console.log(data);
            //console.log(data[0].meanings[0].definitions[0].definition);
            const definitions = data[0].meanings[0].definitions;
         
            //console.log(definitions);
            resultsDiv.textContent = '';

            definitions.forEach(element => {
                const results = document.createElement('li');
                results.textContent = element.definition;
                resultsDiv.appendChild(results);
            })
            word.value = '';
        
        });
        })
const about = document.querySelector('#about_button');
about.addEventListener('click',() => {
    resultsDiv.textContent = 'This site uses the Free Dictionary API. Type your word in the search box and discover the meaning.'
})
}
document.addEventListener('DOMContentLoaded',renderPage);