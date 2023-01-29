const getCharCodes = (chars, value) => (chars + value.charCodeAt(0))

const loseloseHashCode = key => {
    const hash = [...key].reduce(getCharCodes, '')
    return Number(hash) % 37
}

module.exports = loseloseHashCode
