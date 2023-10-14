
import Card from "./Card";
 import {cardsData} from "./Cards";
 import Navbar from "./Navbar";
function Main(){
   

function Cards(items) {


    return (
      <Card
        imageURL={items.imageURL}
        title={items.title}
        price={items.price}
       />

    );
}
    return(
        
        <div className=" ml-5 md:ml-8 md:mr-8">
        
            <Navbar/>
        <div className=" grid grid-cols-2   md:grid-cols-3 lg:grid-cols-4   " >
        {cardsData.map(Cards)}</div>
        </div>
    )
  }
  export default Main;