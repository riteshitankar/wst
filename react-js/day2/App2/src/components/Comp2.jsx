function Part2(props) {
  return (
    <div id="part2" style={{color:'darkgreen', backgroundColor:'yellow'}}>
      <h3>
        Hello, my name is <i> {props.name} </i>, I am  <i>{props.age}</i> years old and I live in <i>{props.city}</i>.
      </h3>
    </div>
  );
}



export default Part2