const data = {
    avatar:"https://i.pravatar.cc/150?img=3",
    name:"Jhon Doe" ,
    phoneNumbers:[
        {name:"home", number:"123456789"},
        {name:"work", number:"987654321"}
    ],
    addresses: [
           {name:"home", address:"1234 Main St"},
        {name:"work", address:"4321 Main St"}
    ],
    emails: [
        {name:"personel", emails:"jhon@doe.com"},
        {name:"work", emails:"jhon@acme.com"}
    ],
};


const Person = () => {
    return (
        <div className="person">
            <div className="side">
                <img className="person-avatar" src={data.avatar} alt={data.name} />
                <h1 className="person-name">{data.name}</h1>
            </div>

            <div className="info">
                <div className="person-list-entry">
                    <h2 className="list-type">Phone Number</h2>
                    <ul>
                        {data.phoneNumbers.map((phoneNumberItem) => {  
                        return (
                            <li key={phoneNumberItem.name}>
                            <span className="list-label">{phoneNumberItem.name}</span>
                                <span className="list-label">{phoneNumberItem.number}</span>
                            </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="person-list-entry">
                    <h2 className="list-type">Address</h2>
                    <ul>
                        {data.addresses.map((addressItem) => {  
                            return (
                            <li key={addressItem.name}>
                                <span className="list-label">{addressItem.name}</span>
                                <span className="list-label">{addressItem.address}</span>
                            </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="person-list-entry">
                    <h2 className="list-type">Emails</h2>
                    <ul>
                        {data.emails.map((emailItem) => {  
                            return (
                            <li key={emailItem.name}>
                                <span className="list-label">{emailItem.name}</span>
                                <span className="list-label">{emailItem.emails}</span>
                            </li>
                            );
                        })}
                    </ul>
                </div>                  






            </div>         
        </div>
    )
}
export default Person;