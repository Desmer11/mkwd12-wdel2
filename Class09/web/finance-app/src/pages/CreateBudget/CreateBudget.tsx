import { categories, currencySymbols } from "../../consts";
import { createBudget } from "../../services/budgets.service";
import { BudgetCreationProps } from "../../types/budget.types";
import "./CreateBudget.css";
import { useForm, useFieldArray } from "react-hook-form";

interface FormData {
  categories: { category: string; spentAmount: string }[];
  currency: string;
  fromPeriod: string;
  toPeriod: string;
  totalAmount: string;
}

interface CreateBudgetProps {
  refetchBudgets: () => void;
}

const CreateBudget = (props: CreateBudgetProps) => {
  const { refetchBudgets } = props;
  const {
    reset,
    register,
    handleSubmit,
    control,
    formState: { errors }, // Destucturing the destructured property :) SAME AS line 37 but done inline
  } = useForm<FormData>({
    defaultValues: {
      categories: [],
    },
  });

  const onSubmit = async (formData: FormData) => {
    console.log("formData", formData);

    // HERE WE MAKE API REQUEST
    const requestBody: BudgetCreationProps = {
      fromPeriod: new Date(formData.fromPeriod).getTime(),
      toPeriod: new Date(formData.toPeriod).getTime(),
      totalAmmount: +formData.totalAmount,
      currency: formData.currency,
      categories: formData.categories.map((cat) => ({
        category: cat.category,
        spentAmount: +cat.spentAmount,
      })),
    };

    await createBudget(requestBody);
    refetchBudgets();
    reset();
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "categories",
  });

  // const { errors } = formState; // Destructuring
  console.log(errors);
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
            {...register("fromPeriod", {
              required: "From period is required.", // VALIDATION RULE
              validate: (value) => {
                // Good for more complex validations in the field, if we return true it will mean that the field is VALID, if the field is not valid we can return the ERROR message
                console.log("IN VALIDATE", value);

                const selectedDate = new Date(value).getTime();
                const today = new Date().getTime();

                const isSelectedDateInFuture = selectedDate > today;

                return (
                  isSelectedDateInFuture || "From period must be in the future"
                );
              },
            })}
          />
          {errors.fromPeriod && (
            <span className="error">{errors.fromPeriod.message}</span>
          )}
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
            {...register("toPeriod", {
              required: "To Period is required.",
            })}
          />

          {errors.toPeriod && (
            <span className="error">{errors.toPeriod.message}</span>
          )}
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
            {...register("totalAmount", {
              required: "Total amount is required",
            })}
          />

          {errors.totalAmount && (
            <span className="error">{errors.totalAmount.message}</span>
          )}
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
            type="button"
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
