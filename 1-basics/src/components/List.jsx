import { Button } from './Button';
import {Listitem} from './Listitem';

const list = ['Pikachu', 'Bulbazaur', 'Charmander', 'Squirtle']

export const List = () => (
  <div>
    <ul>
      {list.map((listItem) => (
        <Listitem ListItem={listItem}key={listItem}/>
      ))}
    </ul>
   
    <Button text = 'Do it!'/>
    
  </div>
);
