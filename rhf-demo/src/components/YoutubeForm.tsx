import { useForm, useFieldArray, FieldErrors } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  username: string;
  email: string;
  channel: string;
  social: { twitter: string; facebook: string };
  phoneNumbers: string[];
  phNumbers: {
    number: string;
  }[];
  age: number;
  dob: Date;
};

const YoutubeForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "Jagdish Kumawat",
      email: "jagdishkumawat81@gmial.com",
      channel: "Codevalution",
      social: {
        twitter: "",
        facebook: "",
      },
      phoneNumbers: ["", ""],
      phNumbers: [{ number: "" }],
      age: 0,
      dob: new Date(),
    },
  });
  const {
    register,
    control,
    handleSubmit,
    formState,
    watch,
    getValues,
    setValue,
  } = form;
  const { errors, touchedFields, dirtyFields, isDirty, isValid } = formState;

  console.log({ touchedFields, dirtyFields, isDirty });

  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  const onSubmit = (data: FormValues) => {
    console.log("Data : ", data);
  };

  const onError = (error: FieldErrors<FormValues>) => {
    console.log(error);
  };

  // const watchUsername = watch(["username", "email"]);
  // const watchIt = watch();

  const handleGetValues = () => {
    console.log("get Values", getValues("social"));
  };

  const handleSetValues = () => {
    setValue("username", "", {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  return (
    <div>
      <h5>Youtube Form </h5>
      {/* <h2>Watched value : {JSON.stringify(watchIt)}</h2> */}
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <label>Username</label>
        <input
          type="text"
          id="username"
          placeholder="username"
          {...register("username", { required: "Username is required" })}
        />
        <p>{errors.username?.message}</p>

        <label>Email</label>
        <input
          type="email"
          id="email"
          placeholder="email"
          {...register("email", {
            disabled: true, //value will be undefine and validation disable
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email format",
            },
            validate: {
              notAdmin: (fieldValue) => {
                return (
                  fieldValue !== "admin@gmail.com" ||
                  "Enter a different email address"
                );
              },
              notBlackListed: (fieldValue) => {
                return (
                  !fieldValue.endsWith("baddomain.com") ||
                  "This domain not supported "
                );
              },
            },
          })}
        />

        <p>{errors.email?.message}</p>

        <label>Channel</label>
        <input
          type="text"
          id="channel"
          placeholder="channel"
          {...register("channel")}
        />
        <p>{errors.channel?.message}</p>

        <label>DOB</label>
        <input
          type="date"
          id="date"
          placeholder="Date of Birth"
          {...register("dob", {
            valueAsDate: true,
          })}
        />
        <p>{errors.dob?.message}</p>

        <label>Age</label>
        <input
          type="number"
          id="age"
          placeholder="age"
          {...register("age", {
            valueAsNumber: true,
          })}
        />
        <p>{errors.age?.message}</p>

        <label>Facebook</label>
        <input
          type="text"
          placeholder="Facebook"
          {...register("social.facebook")}
        />

        <label>Twitter</label>
        <input
          type="text"
          placeholder="Twitter"
          {...register("social.twitter", {
            required: "Twitter Url is Required",
          })}
        />

        <label>Primary Number</label>
        <input
          type="text"
          placeholder="Primary Number"
          {...register("phoneNumbers.0", {
            required: "Primary Number is Required",
          })}
        />
        <label>Secondary Number</label>
        <input
          type="text"
          placeholder="Secondary Number"
          {...register("phoneNumbers.1")}
        />

        <div>
          <label>List of Phone numbers</label>
          <div>
            {fields.map((field, index) => {
              return (
                <div>
                  <input
                    type="text"
                    {...register(`phNumbers.${index}.number`)}
                  />
                  <button type="button" onClick={() => remove(index)}>
                    Remove
                  </button>
                </div>
              );
            })}
            <button onClick={() => append({ number: "" })} type="button">
              Add
            </button>
          </div>
        </div>

        <button disabled={!isDirty || !isValid}>Submit</button>
        <button onClick={() => handleGetValues()}>getValues</button>
        <button onClick={() => handleSetValues()}>setValues</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default YoutubeForm;
