const getTaskById = function(id) {
    return fetch(`/api/getTaskById?id=${id}`)
    .then(res => res.json())
}

export default getTaskById;