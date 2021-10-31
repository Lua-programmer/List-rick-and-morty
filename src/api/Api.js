const Api = {
   urlBase: "https://rickandmortyapi.com/api/character",
   fetchFetAll: () => fetch(Api.urlBase),
   fetchGertByID: (id) => fetch(`${Api.urlBase}/${id}`),
}

export default Api
