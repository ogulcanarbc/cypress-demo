let users = [
    {
        id: 1,
        name: 'ali'
    },
    {
        id: 2,
        name: 'ogulcan'
    },
    {
        id: 3,
        name: 'burak'
    }
]

let user = users.find((user) => {
    if (user.name == 'ogulcan')
        return user
})

console.log('user', user);