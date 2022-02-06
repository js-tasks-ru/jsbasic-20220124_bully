function showSalary(users, age) {
  return users.filter((user) => {
    return user.age <= age;
  }).map(user => user.name + ', ' + user.balance).join("\n");
}
