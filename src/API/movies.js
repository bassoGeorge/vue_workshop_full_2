const HOST = "http://localhost:3000"
export default {
	getAll: () => fetch(`${HOST}/movies?_embed=comments`).then(res => res.json())

}