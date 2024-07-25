import { useParams } from "react-router-dom"
import PageBanner from "../components/PageBanner";

export default function Menu() {
    const { section } = useParams();
    return (
        <PageBanner title={section || ''} />
    )
}