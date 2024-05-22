import {products} from "@data/products.js";
import Card from "@components/Card.jsx";

const Cards = () => {
    return (
        <ul className="grid grid-cols-auto-fill-271 gap-4 sm:gap-3">
            {products.map((product) => (
                    <Card
                        key={product.id}
                        color={product.color}
                        title={product.title}
                        description={product.description}
                        href={product.href}
                    />
                ))
            }
        </ul>
    );
};

export default Cards;