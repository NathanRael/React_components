import { useEffect, useState } from "react";
import { useForm } from "../context/FormProvider";
import {
  AutoCompleteInput,
  Button,
  CheckBox,
  FileInput,
  SelectInput,
  TextArea,
  TextInput,
} from "../styles/components";

const Test = () => {
  return (
    <InputTest/>
  );
};

const ComponentUI = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full">
      <div className="text-title-2 text-white text-left w-full">Variants</div>
      {/* Variant */}
      <div className="flex w-full justify-evenly items-center flex-col gap-6">
        <div className="flex w-full justify-evenly items-center">
          <Button variant="primary">Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="disabled">Disabled</Button>
        </div>

        {/* Block */}
        <div className="flex w-full justify-evenly items-center flex-col gap-2">
          <div className="text-title-2 text-white text-left w-full">Block</div>

          <Button variant="primary" block>
            Block
          </Button>
          <Button variant="outline">Normal</Button>
        </div>

        {/* Size */}
        <div className="text-title-2 text-white text-left w-full">Sizes</div>

        <div className="flex w-full justify-evenly items-center  gap-2">
          <Button variant="primary" size="lg">
            Large
          </Button>
          <Button variant="primary" size="md">
            Medium
          </Button>
        </div>
        {/* Size */}
        <div className="text-title-2 text-white text-left w-full">Radious</div>

        <div className="flex w-full justify-evenly items-center  gap-2">
          <Button variant="primary" rounded="none">
            None
          </Button>
          <Button variant="primary" rounded="lg">
            Large
          </Button>
          <Button variant="primary" rounded="full">
            full
          </Button>
        </div>

        {/* Icon */}
        <div className="text-title-2 text-white text-left w-full">Icon</div>

        <div className="flex w-full justify-evenly items-center  gap-2">
          <Button variant="primary" icon="bi bi-person">
            Icon
          </Button>
          <Button variant="primary" icon="bi bi-person" inverseIcon>
            Icon inversed
          </Button>
        </div>

        {/* Loading */}
        <div className="text-title-2 text-white text-left w-full">Loading</div>

        <div className="flex w-full justify-evenly items-center  gap-2">
          <Button variant="primary" icon="bi bi-person" loading>
            Icon
          </Button>
        </div>
      </div>
    </div>
  )
}

const InputTest = () => {
  const countries = [
    { option: "Madagascar" },
    { option: "United state" },
    { option: "French" },
  ];

  const { handleInputChange, checkFieldError, handleError } = useForm();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    imgUrl: "",
    accountType: "",
    select: "",
    checked: true,
  });

  const [errorData, setErrorData] = useState({
    name: true,
    phone: true,
    accountType: true,
    imgUrl: false,
    select: false,
  });

  const [file, setFile] = useState({
    name: "",
    path: "",
  });

  useEffect(() => {
    checkFieldError(errorData);
  }, [errorData]);

  return (
    <div className="flex flex-col gap-6 w-full items-center justify-center">
      <div className="flex flex-col gap-4 w-fit">
        <TextInput
          title="Name"
          name="name"
          size="lg"
          placeholder="Enter your name"
          pattern={/^[a-z]+$/i}
          errorMsg="Incorect name"
          onError={handleError(setErrorData)}
          onChange={(e) => handleInputChange(setFormData, e)}
          value={formData.name}
        />

        <TextArea/>

        <TextInput
          title="Phone"
          name="phone"
          size="lg"
          placeholder="Enter your phone number"
          isValid={formData.phone.length === 10}
          errorMsg="Incorect phone number"
          onError={handleError(setErrorData)}
          onChange={(e) => handleInputChange(setFormData, e)}
          value={formData.phone}
        />

        <SelectInput
          name="accountType"
          title="Account type"
          variant="fill"
          size="lg"
          options={[{ option: "Student" }, { option: "Society" }]}
          onError={handleError(setErrorData)}
          onChange={(e) => handleInputChange(setFormData, e)}
        />

        <AutoCompleteInput
          options={countries}
          title="Country"
          name="select"
          variant="fill"
          errorMsg="Country not found"
          isValid={countries.some(
              (country) => formData.select === country.option
          )}
          value={formData.select}
          onChange={(e) => handleInputChange(setFormData, e)}
          onError={handleError(setErrorData)}
        />

        <div className="w-full bg-white-10  overflow-hidden">
          <img
            src={file.path}
            className="object-cover w-full h-[128px] rounded-md"
            alt=""
          />
        </div>
        <FileInput
          name="imgUrl"
          onChange={(e) => handleInputChange(setFormData, e)}
          onError={handleError(setErrorData)}
          setFile={setFile}
        />

        <CheckBox
          name="checked"
          variant="outline"
          label="I accept the ...."
          onChange={(e) => handleInputChange(setFormData, e)}
        />
      </div>

      <div className="flex items-center gap-4">
        <Button
          onClick={() => alert("submited")}
          disabled={errorData.phone}
          variant="primary"
        >
          Submit
        </Button>
        <Button onClick={() => alert("canceled")} variant="ghost">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Test;
