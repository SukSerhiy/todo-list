const registrateUser = async (userData) => {
    await fetch('/api/registrateUser', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(userData)
    });
}

export default registrateUser;