import React, {useState} from "react"

const PhoneNum = () =>{

    const [v, setV] = useState("");

    const handleChange = (e) => {
        let input = e.target.value;

        //if (input === "" || /^[0-9\b]+$/.test(input)) {
        
        //}
        input = input.replace(/\D/g, "");

        if (input.length <= 3) {
            input = "(" + input;
        } else if (input.length <= 6) {
            input = "(" + input.substring(0, 3) + ") " + input.substring(3);
        } else {
            input = "(" + input.substring(0, 3) + ") " + input.substring(3, 6) + "-" + input.substring(6, 10);
        }
        setV(input);
    };

    return (
        <div>
            <input
                type="text"
                value={v}
                onChange={handleChange}
            />
        </div>
    );


}

export default PhoneNum;