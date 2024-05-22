import Cards from "@components/Cards.jsx";

const Products = () => {
    return (
        <section>
            <div className="m-auto max-w-[640px] py-8 px-6 box-content max-sm:py-6">
                <div className="text-center">
                    <h2 className="title mb-8 max-sm:mb-4 max-sm:title-sm">Our products</h2>
                    <Cards />
                </div>
            </div>
        </section>
    );
};

export default Products;