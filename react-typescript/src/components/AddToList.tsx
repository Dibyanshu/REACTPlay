import React, { useState } from "react";
import { Istate as Prop } from "../App";

interface Iprop {
    setPeople: React.Dispatch<React.SetStateAction<Prop["people"]>>
    people: Prop["people"]
}

const AddToList: React.FunctionComponent<Iprop> = (setPeople, people) => {

    const [input, setInput] = useState({
        name: '',
        img: '',
        age: undefined,
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
                age: input.age,
                img: input.img,
                notes: input.notes
            }
        ]);

        setInput({
            name: "",
            age: undefined,
            img: "",
            notes: ""
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
                className="AddToList-input"
                name="name"
                value={input.name}
                placeholder="Name"
            />
            <input
                type="text"
                onChange={handleChange}
                className="AddToList-input"
                name="age"
                value={input.age}
                placeholder="Age"
            />
            <input
                type="text"
                onChange={handleChange}
                className="AddToList-input"
                name="img"
                value={input.img}
                placeholder="Image Url"
            />
            <textarea
                onChange={handleChange}
                className="AddToList-input"
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