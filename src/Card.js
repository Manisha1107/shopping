
const Card = (props) => {
  return(
  <div>
 <div className="bg-stone-400  w-32  h-48 rounded-2xl md:w-52 md:h-60 md:ml-3 md:mr-3 sm:w-48 lg:w-60" >
<div className="  mt-10 ">
<img className="h-36 w-80 rounded-2xl mt-10 md:w-60 md:h-48 " src={props.imageURL}  />
</div>


<div className="font-sans ml-5">
{props.title}
</div>
<div className="ml-5 ">
{props.price}
</div>
</div>
</div>

  )
};
  export default Card;
  