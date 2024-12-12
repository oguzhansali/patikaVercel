import { useState } from "react";
import PersonInformationList from "./PersonInformation";
import PropTypes from "prop-types";

const personListTypes = [
    {
        title:"Phone Numbers",
        fieldName:"phoneNumbers",
        labelField:"name",
        valueField:"number"
    },
    {
        title:"Address ",
        fieldName:"addresses",
        labelField:"name",
        valueField:"address"
    },
    {
        title:"Emails ",
        fieldName:"emails",
        labelField:"name",
        valueField:"emails"
    },
];


const Person = (props) => {
    const [activeListType, setActiveListType] = useState("emails");
    const handleListTypeChange = (newListType) => {
        setActiveListType(newListType);
    }
    return (
        <div className="person">
            <div onClick={props.onRemovePerson} className="person-remove-x">x</div>
            <div className="side">
                <img className="person-avatar" src={props.avatar} alt={props.name} />
                <h1 className="person-name">{props.name}</h1>
            </div>

            <div className="info">
                {personListTypes.map((listType) =>{
                    return(
                        <PersonInformationList 
                        type={listType}
                        activeType={activeListType}
                        personData={props}
                        onListTypeChange={handleListTypeChange}
                        />
                    );
                })}

            </div>         
        </div>
    )
}
Person.PropTypes = {
    name : PropTypes.string.isRequired,
};

Person.defaultProps = {
    name : "Unknown",
};

export default Person;