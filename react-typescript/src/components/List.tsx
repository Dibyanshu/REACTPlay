import React from "react";
import { Istate as Prop } from "../App";

interface Iprop {
    people: Prop["people"]
}

const List: React.FunctionComponent<Iprop> = ({ people }) => {

    const renderList = (): JSX.Element[] => {
        return people.map((person, index) => {
            return (<li key={index}>
                {person.name}-
                {person.age}-
                {person.url}-
                {person.notes}
            </li>
            )
        });
    }
    return (
        <div>
            <h1>
                Simple List
            </h1>
            <ul>
                {people.map((person, index) => {
                    return (
                        <li key={index}>
                            {person.name}
                        </li>
                    )
                })}
            </ul>
            <ul>
                {renderList()}
            </ul>
        </div>
    )
}

export default List;