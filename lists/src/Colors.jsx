import { Color } from "./Color"

export function Colors({ colorArr }) {
    return (
        <div>
            <ul>
                {colorArr.map((item) => (
                    <Color key={item.id} color={item} />
                )
                )}
            </ul>
        </div>
    )
}