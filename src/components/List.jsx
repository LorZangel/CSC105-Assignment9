import Card from "./Card";
function List() {
  const person = [
    { Name: "Max Verstappen", job: "FIA F1 Lover", hobby: "Drink tea with P" },
    { Name: "Sergio Perez", job: "Minister of Defend", hobby: "Defend" },
    { Name: "Charles Leclerc", job: "Cursed", hobby: "Radio to team and shout 'NOOOO!!!!'" },
    { Name: "Carlos Sainz", job: "F1 'real' Driver", hobby: "Get penalty himself" },
    { Name: "Lewis Hamilton", job: "Ex-FIA F1 Lover", hobby: "Drive 'that' year season car" },
  ];

  return (
    <>
      {person.map((e) => {
        return <Card name={e.Name} job={e.job} hobby={e.hobby}></Card>;
      })}
    </>
  );
}
export default List;