//import Pikachu from '../assets/Pikachu.jpg';

export const Listitem= ({ListItem, fileSrc, id})=>{
    return(
     <>
     <h1 className="item">{ListItem}</h1>
     <img src={`../assets/${ListItem}.jpg`}/>
  

     </> 
    )
}