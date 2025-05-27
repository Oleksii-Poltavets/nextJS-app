import { Suspense } from "react";
import Author from "./author";

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export default async function page() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await response.json();
    const filteredPosts = posts.filter(post => post.id % 10 === 1)
    return (
        <>
            <h1>Blog posts</h1>
            {filteredPosts.map((post) => {
                return (
                    <div key={post.id} className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md mb-5">
                        <h1 className="text-3xl font-bold mb-4 text-gray-800">{post.title}</h1>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">{post.body}</p>
                        <div className="text-right text-gray-500 text-sm">
                            <Suspense fallback={<p>Loading author name...</p>}>
                                <Author userId={post.userId} />
                            </Suspense>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
