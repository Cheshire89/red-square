import { VodkaItem } from "../models.ts/MenuItem.model";

export default function VodkaMenuItem({ item }: { item: VodkaItem }) {
    const { vodkaTitle, priceShot, priceCarafe } = item;
    return (<li>
        <p>
            <span>{vodkaTitle}</span>
            <span>${priceShot}</span>
            <span>${priceCarafe}</span>
        </p>
    </li>)
}