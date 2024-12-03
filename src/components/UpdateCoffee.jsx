import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee= useLoaderData();
    const { _id, name,quantity, supplier, test, photo, category, details } = coffee;
    const handleUpdateCoffee= e =>{
        e.preventDefault();
        const form= e.target;
        const name=form.name.value;
        const quantity= form.quantity.value;
        const supplier= form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo= form.photo.value;
        const updatedCoffee= {name, quantity, supplier,test,category,details, photo}
      
        console.log(updatedCoffee);
      
        fetch(`http://localhost:5000/coffees/${_id}`,{
          method:'PUT',
          headers: {"content-type":'application/json'},
          body: JSON.stringify(updatedCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.modifiedCount){
          Swal.fire({
            title: 'Success!',
             text: 'Successfully updated',
             icon: 'success',
             confirmButtonText: 'Cool'
      })
            console.log(data);
          }
        })
    }


    return (
        <div className="">
        <h2 className="text-2xl">Add A Coffee</h2>
      <form onSubmit={handleUpdateCoffee} className=" bg-slate-200 rounded-2xl w-3/4 mx-auto">

      {/* Row 01 */}
        <div className="w-3/4 flex gap-4 mx-auto p-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input type="text" name='name' placeholder="Coffee Name" defaultValue={name} className="input input-bordered" required/>
          </div>

          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input type="text" name='quantity' placeholder="Available Quantity" defaultValue={quantity} className="input input-bordered" required/>
          </div>
        </div>


        {/* Row 02 */}
        <div className="w-3/4 flex gap-4 mx-auto p-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input type="text" name='supplier' placeholder="Supplier" defaultValue={supplier} className="input input-bordered" required/>
          </div>

          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Teste</span>
            </label>
            <input type="text" name='test' placeholder="Teste" defaultValue={test} className="input input-bordered" required/>
          </div>
        </div>

        {/* Row 03 */}
        <div className="w-3/4 flex gap-4 mx-auto p-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input type="text" name='category' placeholder="Category" defaultValue={category} className="input input-bordered" required/>
          </div>

          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input type="text" name='details' placeholder="Details" defaultValue={details} className="input input-bordered" required/>
          </div>
        </div>

        {/* Row 04 */}
        <div className="w-3/4 gap-4 mx-auto p-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" name='photo' placeholder="Photo URL" defaultValue={photo} className="input input-bordered" required/>
          </div>
        </div>


        <input className="btn  w-3/4 m-8" type="submit" value="Update Coffee" />


      </form>
    </div>
    );
};

export default UpdateCoffee;