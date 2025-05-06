/* 
  Your Name
  User Name
  Email
  Password
  Date of Birth
  Present Address
  Permanent Address
  City
  Postal Code
  Country
*/

"use client";
import { z } from "zod";
import { useForm } from "@tanstack/react-form";
import type { AnyFieldApi } from "@tanstack/react-form";
import clsx from "clsx/lite";
import { ReactElement } from "react";
import ImageUpload from "@/components/settings/imageupload";

type IField = {
  name: string;
  state: {
    meta: {
      isTouched: boolean;
      isValid: boolean;
      isValidating: boolean;
      errors?: {
        validation?: string;
        path: string[];
        message: string;
        code: string;
      }[];
    };
  };
};

function FieldInfo({ field }: { field: IField }) {
  const name = field.name;
  const errors = (field.state.meta.errors ?? []).find((e) =>
    e.path.includes(name)
  );
  return (
    <>
      {field.state.meta.isTouched && !field.state.meta.isValid ? (
        <p className="text-red-400 text-sm mt-[-12px]">{errors?.message}</p>
      ) : null}
      {field.state.meta.isValidating ? "Validating..." : null}
    </>
  );
}

const schema = z.object({
  name: z.string().min(3, "Your Name must be at least 3 characters"),
  userName: z.string().min(3, "User Name must be at least 3 characters"),
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email"),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters"),
  dateOfBirth: z
    .date()
    .max(new Date(), { message: "Date of birth is invalid" }),
  presentAddress: z.string().min(3, "Present Address is required"),
  permanentAddress: z.string().min(3, "Permanent Address is required"),
  city: z.string({ required_error: "City is required" }),
  postalCode: z.string({ required_error: "Postal Code is required" }),
  country: z.string({ required_error: "Country is required" }),
});

const TextInput = ({
  field,
  placeHolder,
  type,
  children,
}: {
  field: AnyFieldApi;
  placeHolder?: string;
  type?: string;
  children: ReactElement;
}) => {
  return (
    <div className="flex flex-col gap-3">
      {children}
      <input
        placeholder={placeHolder}
        className={clsx(
          field.state.meta.isTouched && !field.state.meta.isValid
            ? "border-red-400 text-red-400 placeholder:text-red-300"
            : "border-gray-300",
          field.state.meta.isTouched && field.state.meta.isValid
            ? "border-green-400"
            : null,
          "border rounded-xl p-3"
        )}
        id={field.name}
        type={type ?? "text"}
        name={field.name}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) =>
          field.handleChange(
            type === "date" ? new Date(e.target.value) : e.target.value
          )
        }
      />
      <FieldInfo field={field} />
    </div>
  );
};

export default function Settings() {
  const form = useForm({
    defaultValues: {
      name: "",
      userName: "",
      email: "",
      password: "",
      dateOfBirth: new Date(),
      presentAddress: "",
      permanentAddress: "",
      city: "",
      postalCode: "",
      country: "",
    },
    validators: {
      onChange: schema,
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      alert(JSON.stringify(value, null, 2));
    },
  });
  const errors = form.state.errors;
  return (
    <div className="bg-white rounded-2xl shadow-slate-200 shadow-xl p-6">
      {/* Tab Selector */}
      <div className="flex gap-3 mb-8 border-b border-gray-100">
        <div className="border-b-2 border-black pb-2 px-4 text-slate-800">
          Edit Profile
        </div>
        <div className="pb-2 px-4 text-slate-500">Preferences</div>
        <div className="pb-2 px-4 text-slate-500">Security</div>
      </div>

      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="flex flex-col md:flex-row gap-6"
        >
          <ImageUpload />
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                {/* A type-safe field component*/}
                <form.Field name="name">
                  {(field) => (
                    <TextInput placeHolder="Charlene Reed" field={field}>
                      <label htmlFor={field.name}>Your Name</label>
                    </TextInput>
                  )}
                </form.Field>
              </div>
              <div>
                <form.Field name="userName">
                  {(field) => (
                    <TextInput placeHolder="charlenereed" field={field}>
                      <label htmlFor={field.name}>User Name</label>
                    </TextInput>
                  )}
                </form.Field>
              </div>
              <div>
                <form.Field name="email">
                  {(field) => (
                    <TextInput
                      placeHolder="charlenereed@gmail.com"
                      type="email"
                      field={field}
                    >
                      <label htmlFor={field.name}>Email</label>
                    </TextInput>
                  )}
                </form.Field>
              </div>
              <div>
                <form.Field name="password">
                  {(field) => (
                    <TextInput
                      placeHolder="********"
                      type="password"
                      field={field}
                    >
                      <label htmlFor={field.name}>Password</label>
                    </TextInput>
                  )}
                </form.Field>
              </div>
              <div>
                <form.Field name="dateOfBirth">
                  {(field) => (
                    <TextInput
                      placeHolder="charlenereed"
                      type="date"
                      field={field}
                    >
                      <label htmlFor={field.name}>Date of Birth</label>
                    </TextInput>
                  )}
                </form.Field>
              </div>
              <div>
                <form.Field name="presentAddress">
                  {(field) => (
                    <TextInput
                      placeHolder="San Jose, California, USA"
                      field={field}
                    >
                      <label htmlFor={field.name}>Present Address</label>
                    </TextInput>
                  )}
                </form.Field>
              </div>
              <div>
                <form.Field name="permanentAddress">
                  {(field) => (
                    <TextInput
                      placeHolder="San Jose, California, USA"
                      field={field}
                    >
                      <label htmlFor={field.name}>Permanent Address</label>
                    </TextInput>
                  )}
                </form.Field>
              </div>

              <div>
                <form.Field name="city">
                  {(field) => (
                    <TextInput placeHolder="San Jose" field={field}>
                      <label htmlFor={field.name}>City</label>
                    </TextInput>
                  )}
                </form.Field>
              </div>

              <div>
                <form.Field name="postalCode">
                  {(field) => (
                    <TextInput placeHolder="45982" field={field}>
                      <label htmlFor={field.name}>Postal Code</label>
                    </TextInput>
                  )}
                </form.Field>
              </div>

              <div>
                <form.Field name="country">
                  {(field) => (
                    <TextInput placeHolder="USA" field={field}>
                      <label htmlFor={field.name}>Country</label>
                    </TextInput>
                  )}
                </form.Field>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full items-baseline">
              <div className="mx-auto md:ml-auto mb-4 md:mb-0 md:mr-4">
                {errors.length > 0 ? (
                  <p className="text-red-400 text-sm">
                    Please fix the errors before submitting
                  </p>
                ) : null}
              </div>
              <form.Subscribe
                selector={(state) => [state.canSubmit, state.isSubmitting]}
              >
                {() => (
                  <button
                    className="bg-black block w-full md:w-[160px] text-white px-12 text-sm py-2.5 rounded-xl transition-all hover:scale-110 active:scale-90"
                    type="submit"
                  >
                    Save
                  </button>
                )}
              </form.Subscribe>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
