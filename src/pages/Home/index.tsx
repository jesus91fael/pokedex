import React, { useEffect, useState } from "react"
import Card from "../../components/Card";
import Header from "../../components/Header";
import { api } from "../../lib/axios"

const Home = () => {

  const [pokemons, setPokemons] = useState<any>({})

  useEffect(() => {
    api
      .get("/")
      .then((response: any) => setPokemons(response.data))
      .catch((err: any) => {
        console.error("ops! ocorreu um erro" + err);
      });
    }, []);
    
  console.log('pokemon', pokemons)
const teste = [{"name": "ditto"}, {"name": "pikachu"}]
  return(
    <>
      <Header />
      {teste.map((element: any, index: number) => {
        return(
          <Card name={element.name} key={index}/>
        )
      })}
    </>   
  )
}

export default Home