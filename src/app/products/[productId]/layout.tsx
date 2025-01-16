import React from 'react'

export default function ProductDescriptionLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div>
            {children}
            <h2>Featured products</h2>
            <div style={{ display: "flex", gap: "5px" }}>
                <div style={{ width: "25px", height: "25px", border: "2px solid purple", borderRadius: "5px", textAlign: "center", lineHeight: "25px" }}>1</div>
                <div style={{ width: "25px", height: "25px", border: "2px solid purple", borderRadius: "5px", textAlign: "center", lineHeight: "25px" }}>2</div>
                <div style={{ width: "25px", height: "25px", border: "2px solid purple", borderRadius: "5px", textAlign: "center", lineHeight: "25px" }}>3</div>
            </div>
        </div>
    )
}
