function makeFriendsList(friends) {
  const friendsUl = document.createElement("ul");

  for (let i = 0; i < friends.length; i++) {
    let liItem = document.createElement('li');
    liItem.innerHTML = `${friends[i].firstName} ${friends[i].lastName}`;
    friendsUl.appendChild(liItem);
  }

  return friendsUl;
}
