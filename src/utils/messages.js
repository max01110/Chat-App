const generateMessage = (username, text) => {
    return {
        username,
        text,
        createdAt: new Date().getTime()
    }
}

const generatLoactionMessage = (username, location) => {
    return {
        username,
        url:'https://google.com/maps?q=' + location.lattitude + "," + location.longitude,
        createdAt: new Date().getTime
    }
}

module.exports = {
    generateMessage,
    generatLoactionMessage
}