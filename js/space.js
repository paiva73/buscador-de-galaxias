const boton = document.getElementById("btnBuscar");
const dataContainer = document.getElementById("contenedor");

boton.addEventListener('click', () => {
    const busqueda = document.getElementById("inputBuscar").value.toLowerCase();
    const API_URL = `https://images-api.nasa.gov/search?q=${busqueda}`;

    function showData(elements){
        dataContainer.innerHTML = '';
        for (const element of elements) {
            dataContainer.innerHTML +=
            `
            <div class="card p-0" style="height: 25rem;width: 30%; margin: .7rem; box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);">
                <div style="height: 200px">
                    <img class="card-img-top overflow-hidden" style="max-height: 24rem;" src="${element.links[0].href}" alt="Card image cap">
                </div>
                <div class="card-body overflow-auto" style="background-color: white;">
                    <h6 class="card-text">${element.data[0].title}</h6>
                    <p class="card-text m-0">${element.data[0].description}</p>
                </div>
                <div style="background-color:white; padding:0 0 .8rem 1rem">
                    <small class="card-text text-muted">${element.data[0].date_created}</small>
                </div>
            </div>
            
            `;
        }
    }

    fetch(API_URL)
    .then((response) => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        showData(data.collection.items);
    })
    .catch(error => {
        console.log('Error', error);
    })
    
})
