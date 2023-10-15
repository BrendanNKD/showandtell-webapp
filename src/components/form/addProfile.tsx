import { ProfileResponseModel } from "domain/types/profile/Profile";

interface IProps {
  formValue: ProfileResponseModel;
  setFormValue: React.Dispatch<React.SetStateAction<ProfileResponseModel>>;
}

const AddProfileForm: React.FC<IProps> = ({ formValue, setFormValue }) => {
  //   const [formValue, setFormValue] = useState(initialState);
  const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <>
      <div className="flex flex-col py-2">
        <label htmlFor="">firstname</label>
        <input
          className="border p-2"
          type="text"
          name="firstName" // Set the name attribute for proper identification
          onChange={handleOnInput}
        />
      </div>
      <div className="flex flex-col py-2">
        <label htmlFor="">lastname</label>
        <input
          className="border p-2"
          type="text"
          name="lastName" // Set the name attribute for proper identification
          onChange={handleOnInput}
        />
      </div>

      <div className="flex flex-col py-2">
        <label htmlFor="">Date of birth</label>
        <input
          className="border p-2"
          type="text"
          name="dateOfBirth" // Set the name attribute for proper identification
          onChange={handleOnInput}
        />
      </div>
    </>
  );
};

export default AddProfileForm;
