import './style.css';
import 'bootstrap';

const staticUsers = [{name: 'Anastasia Mironova', 
avatarUrl: "https://img.icons8.com/?size=100&id=EduXJ2vQ6Haf&format=png&color=000000"}, 
{
    name: "Alex Ivanov",
    avatarUrl: "https://img.icons8.com/?size=100&id=118266&format=png&color=000000"
},
{
    name: 'Mark',
    avatarUrl: "https://img.icons8.com/?size=100&id=118275&format=png&color=000000"
}
];

const input = document.querySelector('input');
const list = document.querySelector('ul');

const renderUsers = (user) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.setAttribute('src', user.avatarUrl);
    const p = document.createElement('p');
    p.textContent = user.name;
    li.appendChild(img);
    li.appendChild(p);
    list.appendChild(li);
}

const app = () => {
  const initialRender = staticUsers.map(renderUsers); //ТОЛЬКО ДЛЯ ИНФОРМАЦИИ!

  input.addEventListener('input', async (e) => {
    e.preventDefault();
    list.replaceChildren([]);
    if (e.target.value.trim().length === 0) {
        list.replaceChildren([]);
        return;
    }
    const filteredUsers = staticUsers
    .filter((user) => user.name.toLowerCase().startsWith(e.target.value.toLowerCase()))
    .map(renderUsers)


// const url = new URL('/api/users');
    // url.searchParams.append('searchTerm', e.target.value);
    // const response = await fetch(url);
    // const usersData = await response.json();
    // const users = usersData.length === 0 ? ['Nothing'] : usersData;
    // users.map((user) => {
    //   const li = document.createElement('li');
    //   const img = document.createElement('img');
    //   img.setAttribute('src', user.avatarUrl);
    //   const p = document.createElement('p');
    //   p.textContent = user.name;
    //   li.appendChild(img);
    //   li.appendChild(p);
    //   list.appendChild(li);
    // });

    });

    
    
  // });

};

app();
