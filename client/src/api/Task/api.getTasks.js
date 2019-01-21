const getTasks = async () => {
    const res = await fetch('/api/getTasks');
    return res.json();
}

export default getTasks;