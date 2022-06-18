const customFetch = (tiempo, tarea) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tarea)
        }, tiempo)
    })
}

export default customFetch