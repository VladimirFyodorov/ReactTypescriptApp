import React, {useState} from 'react';
import { IState as Props } from '../app/app';

interface IProps {
  people: Props['people'],
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

const AddForm:React.FC<IProps> = ({people, setPeople}) => {

  const [input, setInput] = useState({
    name: '',
    age: '',
    url: '',
    note: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
    setInput({...input, [e.target.name]:e.target.value})
  }

  const handleClick = ():void => {
    console.log(input);
    console.log(!isNaN(+input.age));

    if (!input.name || !input.age || !input.url) {
      return
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        note: input.note
      }
    ])

    setInput({    
      name: '',
      age: '',
      url: '',
      note: ''
    })
  }

  return (
    <div className='AddToList'>
      <input
        value={input.name}
        name='name'
        onChange={handleChange}
        type="text"
        placeholder='Name'
        className='AddToList-input'/>
      <input
        value={input.age}
        name='age'
        onChange={handleChange}
        type="number"
        placeholder='Age'
        className='AddToList-input'/>
      <input
        value={input.url}
        name='url'
        onChange={handleChange}
        type="text"
        placeholder='Image url'
        className='AddToList-input'/>
      <textarea
        value={input.note}
        name='note'
        onChange={handleChange}
        placeholder='Note'
        className='AddToList-input'/>
      <button
        onClick={handleClick}
        className='AddToList-btn'>
        Add to list
      </button>
    </div>
  );
};

export default AddForm;