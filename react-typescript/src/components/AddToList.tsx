import React, { useState } from "react";
import { Istate as Prop } from "../App";

interface Iprop {
    setPeople: React.Dispatch<React.SetStateAction<Prop["people"]>>
    people: Prop["people"]
}

const AddToList: React.FunctionComponent<Iprop> = ({ setPeople, people }) => {

    const [input, setInput] = useState({
        name: '',
        img: '',
        age: '',
        notes: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
    }

    const handleClick = (): void => {
        if (!input.name || !input.age) return

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age, 10),
                url: input.img,
                notes: input.notes
            }
        ]);

        setInput({
            name: '',
            age: '',
            img: '',
            notes: ''
        })
    }

    return (
        <div>
            <h1>
                Add to List
            </h1>
            <input
                type="text"
                onChange={handleChange}
                name="name"
                value={input.name}
                placeholder="Name"
            />
            <input
                type="text"
                onChange={handleChange}
                name="age"
                value={input.age}
                placeholder="Age"
            />
            <input
                type="text"
                onChange={handleChange}
                name="img"
                value={input.img}
                placeholder="Image Url"
            />
            <textarea
                onChange={handleChange}
                name="note"
                value={input.notes}
                placeholder="Note"
            />
            <button
                onClick={handleClick}
                className="AddToList-btn"
            >
                Add to List
            </button>
        </div>
    )
}

export default AddToList;