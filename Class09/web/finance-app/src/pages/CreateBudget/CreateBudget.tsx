import { categories, currencySymbols } from "../../consts";
import "./CreateBudget.css";
import { useForm, useFieldArray } from "react-hook-form";

interface FormData {
  categories: { category: string; spentAmount: string }[];
  currency: string;
  fromPeriod: string;
  toPeriod: string;
  totalAmount: string;
}

const CreateBudget = () => {
  const { register, handleSubmit, control } = useForm<FormData>({
    defaultValues: {
      categories: [],
    },
  });

  const onSubmit = (formData: FormData) => {
    console.log("formData", formData);

    // HERE WE MAKE API REQUEST
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "categories",
  });

  return (
    <section className="formContainer">
      <h2 className="heading">Create new budget</h2>

      {/* handleSubmit is from useForm and used to consume the fields values
        onSubmit will read the formData and perform the api request
      */}
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        {/* Form Period */}
        <div className="inputGroup">
          <label htmlFor="fromPeriod" className="label">
            From Period
          </label>
          <input
            type="date"
            id="fromPeriod"
            className="input"
            {...register("fromPeriod")}
          />
        </div>

        {/* To Period */}
        <div className="inputGroup">
          <label htmlFor="toPeriod" className="label">
            To Period
          </label>
          <input
            type="date"
            id="toPeriod"
            className="input"
            {...register("toPeriod")}
          />
        </div>

        {/* Total amount */}
        <div className="inputGroup">
          <label htmlFor="totalAmount" className="label">
            Total Amount
          </label>
          <input
            type="number"
            id="totalAmount"
            className="input"
            {...register("totalAmount")}
          />
        </div>

        {/* Currency */}
        <div className="inputGroup">
          <label htmlFor="currency" className="label">
            Currency
          </label>
          <select id="currency" {...register("currency")} className="select">
            {Object.keys(currencySymbols).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        {/* Categories */}
        <div className="inputGroup">
          <label htmlFor="categories" className="label">
            Categories
          </label>

          {/* LOOP THE DYMANICLY ADDED FIELDS */}
          {fields.map((field, index) => (
            <div key={field.id} className="dinamycField">
              <select
                {...register(`categories.${index}.category`)}
                className="select"
              >
                {/* LOOP FOR EACH CATEGORY */}
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>

              <input
                {...register(`categories.${index}.spentAmount`)}
                type="text"
                placeholder="Amount for this category"
                className="input"
              />

              <button
                className="removeButton"
                type="button"
                onClick={() => remove(index)}
              >
                Remove
              </button>
            </div>
          ))}

          {/* TO ADD A NEW CATEGORY */}
          <button
            onClick={() => append({ category: "", spentAmount: "0" })}
            className="addButton"
          >
            Add Category
          </button>
        </div>
        <button className="submitButton">Create</button>
      </form>
    </section>
  );
};
export default CreateBudget;
