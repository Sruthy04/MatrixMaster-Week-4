document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchBtn').addEventListener('click', function() {
        let searchQuery = document.getElementById('searchInput').value;
        if (searchQuery === '') {
            alert('Please enter a search query');
            return;
        }
        
        let url = `https://g.tenor.com/v1/search?q=${searchQuery}&key=LIVDSRZULELA&limit=8`;
   
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
   
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                let response = JSON.parse(xhr.responseText);
                displayResults(response.results);
            } else {
                console.error('Error fetching data');
            }
        };
   
        xhr.send();
    });
   
    function displayResults(results) {
        let searchResults = document.getElementById('searchResults');
        searchResults.innerHTML = '';
   
        results.forEach(result => {
            let img = document.createElement('img');
            img.src = result.media[0].gif.url;
            img.classList.add('img-fluid', 'm-2');
            searchResults.appendChild(img);
        });
    }
   });