import { useEffect, useState } from "react";
import {
  AutoCompleteInput,
  Button,
  FileInput,
  Icon,
  SearchBar,
  SelectInput,
  TextInput,
  Toast,
  CheckBox,
  Switchbox,
} from "../styles/components";
import { useForm } from "../context/FormProvider";

const Components = () => {
  const [checked, setChecked] = useState(false);
  const {
    handleInputChange,
    fieldError,
    checkFieldError,
    handleError,
    handleSelectionChange,
  } = useForm();

  
  const [formData, setFormData] = useState({
    imgUrl: "",
    name: "",
    value: "",
    select: "",
    option: "",
    file: "",
  });

  const [errorData, setErrorData] = useState({
    imgUrl: true,
    name: true,
    value: true,
    select: true,
    option: true,
  });

  useEffect(() => {
    // console.log(formData);
  }, [formData]);
  useEffect(() => {
    checkFieldError(errorData);
  }, [errorData]);
  return (
    <section className="px-4 py-6 space-y-20">
      <h1 className="text-title-2 text-white">Components</h1>
      <div className="grid grid-cols-2 max-w-screen-lg gap-10 justify-items-start content-start items-center max-lg:grid-cols-1 max-lg:max-w-screen-md  overflow-none">
        <Switchbox
          label="Check"
          onChange={(e) => setChecked(e.target.checked)}
          variant="primary"
          name="checkbox"
        />
        <CheckBox
          name="name"
          variant="outline"
          label="checked"
          onChange={(e) => setChecked(e.target.checked)}
        />
        <Button
          disabled={errorData.name}
          size="md"
          rounded="xl"
          variant="ghost"
        >
          Button 
        </Button>
        <Button disabled={!checked} size="md" rounded="xl" variant="outline">
          Button style
        </Button>
        <Icon icon="bi-rocket" variant="primary" />
        
        <FileInput
          name="imgUrl"
          onChange={(e) => handleInputChange(setFormData, e)}
          onError={handleError(setErrorData)}
        />
        <AutoCompleteInput
          name="select"
          variant="outline"
          errorMsg="Haha ohhh"
          pattern={/^[a-z]+$/i}
          value={formData.select}
          onChange={(e) => handleInputChange(setFormData, e)}
          onError={handleError(setErrorData)}
        />
        <TextInput
          pattern={/^[a-z]+$/i}
          name="name"
          errorMsg="Incorect input"
          title="Name :"
          variant="fill"
          size="lg"
          placeholder="Enter your name"
          onChange={(e) => handleInputChange(setFormData, e)}
          onError={handleError(setErrorData)}
          value={formData.name}
        />

        <TextInput
          pattern={/^[a-z]+$/i}
          name="value"
          errorMsg="Incorect name"
          title="Value :"
          variant="outline"
          size="lg"
          placeholder="Enter your name"
          onChange={(e) => handleInputChange(setFormData, e)}
          onError={handleError(setErrorData)}
          value={formData.value}
        />
        <SelectInput
          name="option"
          block
          variant="outline"
          onError={handleError(setErrorData)}
          options={[
            {
              option: "nathan",
            },
            {
              option: "rael",
            },
            {
              option: "ok",
            },
          ]}
          onChange={(e) => handleInputChange(setFormData, e)}
        />
        <SearchBar />
        <Toast />
      </div>
    </section>
  );
};

export default Components;
