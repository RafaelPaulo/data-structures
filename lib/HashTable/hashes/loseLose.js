const loseloseHashCode = key => {
    const getCharCodes = (chars, value) => (chars + value.charCodeAt(0))
    const hash = [...key].reduce(getCharCodes, '')
    return Number(hash) % 37
}

module.exports = loseloseHashCode
