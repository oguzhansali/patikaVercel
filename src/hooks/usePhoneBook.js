import { phoneBookReducer } from '../reducers/phoneBookReducers';
import { useReducer, useState } from 'react';
import {initialPhoneBook} from  '../data'

const usePhonebook = (initialPhoneBook) => {
    const [phoneBook,dispatchPhoneBook] = useReducer(
        phoneBookReducer,
        initialPhoneBook
      );   
    const handleAddPerson = (person) => {
        dispatchPhoneBook({type:"ADD_PERSON", payload:person});
      };
    const handleRemovePerson = (index) =>{
        dispatchPhoneBook({type:"REMOVE_PERSON", index});
      };
    return {
      phoneBook,
      handleAddPerson,
      handleRemovePerson,
    };  
};
export default usePhonebook;