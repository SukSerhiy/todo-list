const getTaskById = function(id) {
    return fetch(`/api/getTaskById?id=${id}`)
    .then(res => {
      return res.json();
    })
    .then(task => {
      return task;
    })
    .catch(error => {
      throw error;
    });
}

export default getTaskById;