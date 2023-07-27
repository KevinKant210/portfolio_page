import React from "react"

export default function DashLayout({children,} : {
    children: React.ReactNode
}){
    return(
    <section>
        <nav>Hey</nav>
        {children}
    </section>
    )
}