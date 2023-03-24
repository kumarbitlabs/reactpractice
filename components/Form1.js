import { useState } from 'react';

function Form1() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('male');
  const [colors, setColors] = useState({
    red: false,
    green: false,
    blue: false
  });
  const [showData, setShowData] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleColorChange = (event) => {
    const { name, checked } = event.target;
    setColors((prevColors) => ({ ...prevColors, [name]: checked }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowData(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Gender:
          <select value={gender} onChange={handleGenderChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Colors:
          <br />
          <label>
            <input
              type="checkbox"
              name="red"
              checked={colors.red}
              onChange={handleColorChange}
            />
            Red
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="green"
              checked={colors.green}
              onChange={handleColorChange}
            />
            Green
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="blue"
              checked={colors.blue}
              onChange={handleColorChange}
            />
            Blue
          </label>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {showData && (
        <div>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Gender: {gender}</p>
          <p>Colors:</p>
          <ul>
            {Object.entries(colors).map(([key, value]) => {
              if (value) {
                return <li key={key}>{key}</li>;
              }
              return null;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Form1;