const getTaskById = async (id) =>  {
    const res = await fetch(`/api/task?id=${id}`)
    await res.json();
}

export default getTaskById;