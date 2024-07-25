import { useParams } from "react-router-dom"

export default function Menu() {
    const { section } = useParams();
    return (
        <section>
            <h1>{section}</h1>
        </section>
    )
}