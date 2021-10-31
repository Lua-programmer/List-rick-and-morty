import Card from "./Card";

const List = ({ characters = [] }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
          <Card data={item} key={index}/>
      ))}
    </div>
  );
};

export default List;
