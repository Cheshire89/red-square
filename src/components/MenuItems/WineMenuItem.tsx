import { WineItem } from "@models/MenuItem.model";

export default function WineMenuItem({ item }: { item: WineItem }) {
    const { wineTitle, wineCountry, winePrice } = item;
    return (<li>
        <p>
            <span>
                <span>{wineTitle}</span>
                <i>{wineCountry}</i>
            </span>
            <span>${winePrice}</span>
        </p>
    </li>)
}