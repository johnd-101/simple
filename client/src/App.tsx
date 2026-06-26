import { useEffect, useState } from "react";
import api from "./services/api";
import { Person } from "./types/Person";

function App() {
  const [people, setPeople] = useState<Person[]>([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const fetchPeople = async () => {
    const res = await api.get("/people");
    setPeople(res.data);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  const addPerson = async () => {
    await api.post("/people", { name, surname });
    setName("");
    setSurname("");
    fetchPeople();
  };

  const deletePerson = async (id: number) => {
    await api.delete(`/people/${id}`);
    fetchPeople();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>People CRUD</h1>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />

      <button onClick={addPerson}>Add</button>

      <ul>
        {people.map((p) => (
          <li key={p.id}>
            {p.name} {p.surname}
            <button onClick={() => deletePerson(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;