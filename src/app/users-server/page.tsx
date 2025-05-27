type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string
}

export default async function UsersServer() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return (
        <ul>
            {users.map((user) => {
                return (
                    <li key={user.id} className="max-w-sm mx-auto mt-10">
                        <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
                            <div className="flex items-center space-x-4">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                                    <p className="text-sm text-gray-500">{user.username}</p>
                                </div>
                            </div>
                            <div className="mt-6 text-gray-700 space-y-2">
                                <div className="flex items-center space-x-2">
                                    <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2"
                                        viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M16 12H8m0 0l4-4m-4 4l4 4" />
                                    </svg>
                                    <span>{user.email}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2"
                                        viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M3 5h2l3.6 7.59L5.24 17a1 1 0 00.76 1.65h12a1 1 0 00.76-1.65l-3.36-4.41L19 5H5" />
                                    </svg>
                                    <span>{user.phone}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}