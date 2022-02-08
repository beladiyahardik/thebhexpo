class Authentication {

    static setItem = (key, data) => {
        sessionStorage.setItem(key, data)
    }

    static getItem = (key) => {
        return sessionStorage.getItem(key)
    }

    static removeItem = (key) => {
        sessionStorage.removeItem(key)
    }
}

export default Authentication
