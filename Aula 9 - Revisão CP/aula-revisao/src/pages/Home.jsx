import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from "../components/Card";

export default function Home() {

  const [reactRepos, setReactRepos] = useState([]);
  const API = import.meta.env.VITE_GITHUB_API;

  useEffect (()=> {
      fetch(`${API}react&per_page=5`)
      .then(res => res.json())
      .then(data => setReactRepos(data.items))
  }, [])
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">GitHub Repositories Explorer</h1>
        {reactRepos.map(pegaItem => (
          <Card key={pegaItem.id} title={pegaItem.full_name} description={pegaItem.owner.url}></Card>
        ))}
    </div>
  );
}
