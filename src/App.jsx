import './App.css'
import Person from './components/Person';
import {initialPhoneBook} from "./data";
import usePhonebook from './hooks/usePhoneBook';


function App() {
  const {phoneBook,handleAddPerson,handleRemovePerson} = usePhonebook(initialPhoneBook);
  
  return (
    <>
    <button 
      onClick={()=>
        handleAddPerson({ 
          avatar:"https://i.pravatar.cc/150?img=2",
          name:"Oguz Sali" ,
          phoneNumbers:[
              {name:"home", number:"123456789"},
              {name:"work", number:"987654321"}
          ],
          addresses: [
              {name:"home", address:"1234 Main St"},
              {name:"work", address:"4321 Main St"}
          ],
          emails: [],    
      })} 
    
    >Oguzu ekle</button>
    {phoneBook.map((person,idx) => (
        <Person
          onRemovePerson={()=>handleRemovePerson(idx)}
          key={person.name}
          avatar={person.avatar}
          name={person.name}
          phoneNumbers={person.phoneNumbers}
          addresses={person.addresses}
          emails={person.emails}
        />
      ))}
    </>
  )
}

export default App
