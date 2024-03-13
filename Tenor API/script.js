$(document).ready(function () {
    $.ajax({
        url: 'https://countriesnow.space/api/v0.1/countries/flag/images',
        type: 'GET',
        success: function (response) {
            var originalData = response.data;
            displayCards(originalData);
        },
        error: function (xhr, status, error) {
            console.error('Error:', error);
        }
    });
    
    $('#searchButton').on('click', function () {
        var searchValue = $('#searchInput').val().toLowerCase();
        if (searchValue === '') {
            $('#country-cards').empty().text('Please Enter a Country.');
        } else {
            var filteredData = originalData.filter(function (country) {
                return country.name.toLowerCase().includes(searchValue);
            });
            displayCards(filteredData);
            $('#country-cards').show();
            
        }
    });

    function displayCards(data) {
        $('#country-cards').empty();
        var row;
        data.forEach(function (country, index) {
            if (index % 3 === 0) {
                row = $('<div class="row"></div>');
                $('#country-cards').append(row);
            }
            var card = `
                <div class="col-md-4">
                    <div class="card mb-3">
                        <img src="${country.flag}" class="card-img-top" alt="${country.country}">
                        <div class="card-body">
                            <h5 class="card-title">${country.name}</h5>
                            <p class="card-text">ISO2: ${country.iso2}</p>
                            <p class="card-text">ISO3: ${country.iso3}</p>
                        </div>
                    </div>
                </div>
            `;
            row.append(card);
        });
    }
});
