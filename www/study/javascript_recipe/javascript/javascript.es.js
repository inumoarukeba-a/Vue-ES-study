'use strict'

const userList = [
  { id: 1, name: '鈴木' },
  { id: 2, name: '田中' },
  { id: 3, name: '木村' },
]

const searchUser = value => {
  const targetUser = userList.filter(user => user.id === value)
  return targetUser
}

console.log(searchUser(1))
console.log(searchUser(4))
