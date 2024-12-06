import PersonInformationList from "./PersonInformation";

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
    return (
        <div className="person">
            <div className="side">
                <img className="person-avatar" src={props.avatar} alt={props.name} />
                <h1 className="person-name">{props.name}</h1>
            </div>

            <div className="info">
                {personListTypes.map((listType) =>{
                    return(
                        <PersonInformationList type={listType} personData={props}/>
                    );
                })}

            </div>         
        </div>
    )
}
export default Person;