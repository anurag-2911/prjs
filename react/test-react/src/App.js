import './App.css';

function App() {
 const {name,city} = db;
 const a =[1,2,3];
 const b= [4,5,6];
 const c= [...a];
  return (
    <div className="App">
      <p>hello {dosomething()}</p>
      <p>'name is {name} and city is {city}'</p>
      <ul>
     {b.map((x,i)=>{
      return(<li key={i}>{x}</li>);
     })}
      </ul>

      <ul>
        {c.map((x,i)=>{
          return (<li key={i}>{x}</li>);
        })}
      </ul>
    </div>
  );
}
const dosomething = ()=>{return 'hello'};
const db = {
  'name':'kunar',
  'city':'pataal'

}
export default App;
