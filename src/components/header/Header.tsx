import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header style={{ background: "lightgray", padding: "1rem" }}>
            <p>Header</p> <p><Link href="/">Home</Link></p>
        </header>
    )
}
