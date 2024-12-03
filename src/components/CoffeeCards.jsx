
const CoffeeCards = ({coffee}) => {
    const {name, supplier, test, photo}= coffee;
    return (
        <div className="flex gap-4 justify-between items-center bg-orange-50 my-3 p-4 rounded-lg ">
            <section>
                <img src={photo} alt="" />
            </section>
            <section>
                <h3>Name: {name}</h3>
                <h3>Test: {test}</h3>
                <h3>Supplier: {supplier}</h3>
            </section>
            <section className="flex gap-4 flex-col">
                <button>O</button>
                <button>Edit</button>
                <button>Delete</button>
            </section>
        </div>
    );
};

export default CoffeeCards;