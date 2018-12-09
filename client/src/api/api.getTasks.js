const getTasks = function() {
    return fetch('/api/getTasks')
    .then(res => {
      return res.json();
    })
    .then(tasks => {
      return tasks;
    })
    .catch(error => {
      throw error;
    });
}

export default getTasks;