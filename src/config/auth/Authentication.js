class Authentication {

    static setItem = (key, data) => {
        localStorage.setItem(key, data)
    }

    static getItem = (key) => {
        return localStorage.getItem(key)
    }

    static removeItem = (key) => {
        localStorage.removeItem(key)
    }
}

export default Authentication
