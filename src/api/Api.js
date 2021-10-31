const Api = {
   urlBase: "https://rickandmortyapi.com/api/character",
   fetchGetAll: () => fetch(Api.urlBase),
   fetchGetByID: (id) => {
       return fetch(`${Api.urlBase}/${id}`)
   },
}

export default Api
