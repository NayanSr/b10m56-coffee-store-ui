const AddCoffee = () => {

const handleAddCoffee=e=>{
  e.preventDefault();
  const form= e.target;
  const name=form.name.value;
  const quantity= form.quantity.value;
  const supplier= form.supplier.value;
  const test = form.test.value;
  const category = form.category.value;
  const details = form.details.value;
  const photo= form.photo.value;
  const newCoffee= {name, quantity, supplier,test,category,details, photo}


  console.log(newCoffee);
}



  return (
    <div className="">
        <h2 className="text-2xl">Add A Coffee</h2>
      <form onSubmit={handleAddCoffee} className=" bg-slate-200 rounded-2xl w-3/4 mx-auto">

      {/* Row 01 */}
        <div className="w-3/4 flex gap-4 mx-auto p-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input type="text" name='name' placeholder="Coffee Name" className="input input-bordered" required/>
          </div>

          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered" required/>
          </div>
        </div>


        {/* Row 02 */}
        <div className="w-3/4 flex gap-4 mx-auto p-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input type="text" name='supplier' placeholder="Supplier" className="input input-bordered" required/>
          </div>

          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Teste</span>
            </label>
            <input type="text" name='test' placeholder="Teste" className="input input-bordered" required/>
          </div>
        </div>

        {/* Row 03 */}
        <div className="w-3/4 flex gap-4 mx-auto p-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input type="text" name='category' placeholder="Category" className="input input-bordered" required/>
          </div>

          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input type="text" name='details' placeholder="Details" className="input input-bordered" required/>
          </div>
        </div>

        {/* Row 04 */}
        <div className="w-3/4 gap-4 mx-auto p-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required/>
          </div>
        </div>


        <input className="btn  w-3/4 m-8" type="submit" value="Add Coffee" />


      </form>
    </div>
  );
};

export default AddCoffee;
