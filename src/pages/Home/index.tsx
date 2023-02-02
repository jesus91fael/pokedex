import React, { useEffect, useState } from "react"
import ModalInfo from "../../components/ModalInfo";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { api } from "../../lib/axios"
import { ListCardsStyled, PageStyled } from "./styles";

const Home = () => {

  const [pokemons, setPokemons] = useState<any[]>([])

  useEffect(() => {
    api
      .get("/")
      .then((response: any) => setPokemons(response.data.results))
      .catch((err: any) => {
        console.error("ops! ocorreu um erro" + err);
      });
    }, []);
    
  const [show, setShow] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (item: any) => {
    setItemSelecionado(item)
    setShow(true)
  }


  console.log('pokemon', pokemons)
const teste = [{"name": "pikachu"}, {"name": "ditto"}, {"name": "psyduck"}, {"name": "bulbasaur"}, {"name": "charmander"}, {"name": "squirtle"}]
  return(
    <PageStyled>
      <Header />
      <ListCardsStyled>
        {pokemons.map((element: any, index: number) => {
          return(
            <>
              <span onClick={() => handleShow(element.name)}>
                <Card name={element.name} key={index}/>
              </span>            
              <ModalInfo isOpen={show} handleClose={handleClose} name={itemSelecionado}/>              
          </>
          )
        })}
      </ListCardsStyled>
    </PageStyled>   
  )
}

export default Home