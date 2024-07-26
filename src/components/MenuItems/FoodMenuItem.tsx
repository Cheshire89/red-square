import { MenuItem } from "@models/MenuItem.model";

export default function FoodMenuItem({ item }: { item: MenuItem }) {
    const { itemTitle, itemDesc, itemPrice }: MenuItem = item;
    return (<li>
        <strong>{itemTitle}</strong>
        <p>
            <span>{itemDesc}</span>
            <span>${itemPrice}</span>
        </p>
    </li>)
}