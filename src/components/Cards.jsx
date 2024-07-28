import React from "react"
import Card from "./Card"

const Cards = () => {
    const content = [
        { header: "Up Next: News", title: "Insights and behind the scenes" },
        { header: "Get In Touch", title: "Let's get to it, together. " },
    ]
    return (
        <div className="w-full bg-zinc-900">
            <div className="max-w-screen-xl mx-auto ng-sky-100 py-20 flex gap-3">
                <Card  width={"basis-1/3"} start={false} para={true} header={content[0].header} title={content[0].title}/>   
                <Card  width={"basis-2/3"} start={true} para={false} header={content[1].header} title={content[1].title} hover="true"/>
            </div>            
        </div>
    )
}
export default Cards;