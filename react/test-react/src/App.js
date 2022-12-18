import "./App.css";

function App() {
  const { name, city } = db;
  const a = [1, 2, 3];
  const b = [4, 5, 6];
  const c = [...a, 99, ...b];
  const o1 = obj;
  const clone = { ...o1 };
  const students = [{
    'name':'kunar','status':'present'
  },{'name':'draupadi','status':'present'},{'name':'kans','status':'absent'}]

  const goodStudnets = students.filter(student=>(student.status==='present'))
  return (
    <div className="App">
      <p>hello {dosomething()}</p>
      <p>
        'name is {name} and city is {city} and salay is {clone.salary}'
      </p>
      <div>
        {goodStudnets.map((x,i)=>{
          return <div key={i}>{x.name} {x.status}</div>
        })}
      </div>
      <ul>
        {b.map((x, i) => {
          return <li key={i}>{x}</li>;
        })}
      </ul>

      <ul>
        {c.map((x, i) => {
          return <li key={i}>{x}</li>;
        })}
      </ul>
    </div>
  );
}
const dosomething = () => {
  return "hello";
};
const db = {
  name: "kunar",
  city: "pataal",
};
const obj = {
  company: "MF",
  salary: "100",
};
export default App;
