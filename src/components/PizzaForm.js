import React from "react"

const PizzaForm = ({handleSubmit, handleChange, topping, size, vegetarian, notVegetarian}) => {

  return(

      <div className="form-row">
        <div className="col-5">
            <input onChange={handleChange} name="topping" type="text" className="form-control" placeholder="Pizza Topping" value={
                topping
              }/>
        </div>
        <div className="col">
          <select onChange={handleChange} name="size" value={size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={handleChange} name="vegetarian" className="form-check-input" type="radio" value="Vegetarian" checked={vegetarian ? true : false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={handleChange} name="notVegetarian" className="form-check-input" type="radio" value="Not Vegetarian" checked={notVegetarian ? true : false}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
  
  )
}

export default PizzaForm
