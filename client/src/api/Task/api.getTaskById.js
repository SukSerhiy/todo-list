const getTaskById = async (id) =>  {
    const res = await fetch(`/api/getTaskById?id=${id}`)
    await res.json();
}

export default getTaskById;