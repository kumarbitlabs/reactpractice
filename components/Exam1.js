import {useState} from 'react';
function Exam1() {
  const [value, setValue] = useState("");

  function showText(e){
     setValue(e.target.value); 
}

  return (
    <div>
<input
        type="text"
        placeholder="Enter Text"
        value={value}
        onChange={showText}
      />
      <p>{value}</p>
    </div>
  );
}
export default Exam1;