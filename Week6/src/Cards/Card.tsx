import "./card.css";

type PropType = {
   
    title:string,
    description:string
}

const Card = ({description,title}:PropType) => {
  return (
    <div className="card">
      <div className="title">{title}</div>
      <div className="description">
       {description}
      </div>
    </div>
  );
};

export default Card;
