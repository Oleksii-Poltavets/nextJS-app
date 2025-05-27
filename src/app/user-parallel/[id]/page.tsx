type Post = {
    userId: number,
    id: number
    title: string,
    body: string
}

type Album = {
    userId: number,
    id: number
    title: string
}

async function getUserPosts(userId: string) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    return res.json();
}

async function getUserAlbums(userId: string) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
    return res.json();
}

export default async function UserProfile({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const postsData = getUserPosts(id);
    const albumsData = getUserAlbums(id);

    const [posts, albums] = await Promise.all([postsData, albumsData]);
    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                {posts.map((post: Post) =>
                    <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                            <p className="text-gray-600">{post.body}</p>
                        </div>
                    </div>
                )}
            </div>

            <div>
                {albums.map((album: Album) =>
                    <div key={album.id} className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-800">{album.title}</h2>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
