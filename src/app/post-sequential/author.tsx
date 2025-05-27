type Author = {
    userId: number,
    name: string
}

export default async function Author({ userId }: { userId: number }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const author: Author = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return (
        <p>-{author.name}</p>
    )
}
