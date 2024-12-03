import Swal from "sweetalert2";

const CoffeeCards = ({ coffee }) => {
  const { _id, name, supplier, test, photo } = coffee;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {

      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${id}`,{
            method:'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

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
        <button onClick={() => handleDelete(_id)} className="btn bg-orange-500">
          Delete
        </button>
      </section>
    </div>
  );
};

export default CoffeeCards;
