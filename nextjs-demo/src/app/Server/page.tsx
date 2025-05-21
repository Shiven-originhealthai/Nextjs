export default async function Sever() {
    type User = {
        id: string,
        name: string,
        username: string,
        email: string,
    }
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await data.json();
    //console.log(users);
    return (
        <div>
            {users.map((user: User) => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    )
}