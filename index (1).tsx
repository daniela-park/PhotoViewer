import { useState, FormEventHandler, ChangeEventHandler } from "react";
import { NewUserModel } from "../../models/userModel";

export function MyForm() {
    const [inputs, setInputs] = useState<NewUserModel>({
        name: undefined,
        username: undefined,
    });
  
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    //   const name = event.target.name;
    //   const value = event.target.value;
      const {name, value} = event.target;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit:FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
    
        fetch("http://somewhere.com", {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputs),
        })
          .then((response) => {
            if (response.status !== 200) {
              throw new Error(response.statusText);
            }
    
            return response.json();
          })
          .then(() => {
            console.log("We'll be in touch soon.");
          })
          .catch((err) => {
            console.log(err.toString());
          });
      };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
        <input 
          type="text" 
          name="name" 
          value={inputs.name || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter your username:
          <input 
            type="text" 
            name="username" 
            value={inputs.username || ""} 
            onChange={handleChange}
          />
          </label>
          <button type="submit" />
      </form>
    )
  }