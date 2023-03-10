import React, { useCallback, useEffect, useState } from "react"
import ModalInfo from "../../components/ModalInfo"
import Card from "../../components/Card"
import Header from "../../components/Header"
import { api } from "../../lib/axios"
import {
  ButtonStyled,
  ListCardsStyled,
  PageStyled,
  SearchContentstyled,
  SearchStyled,
} from "./styles"
import { PokemonProps } from "./interface"

const Home = () => {
  let NUMBER_POKEMONS = 18
  const NUMBER_MAX_POKEMONS_API = 1279

  const [pokemons, setPokemons] = useState<any[]>([])
  const [pokemonSearch, setPokemonSearch] = useState("")
  const [pokemonsOffsetApi, setPokemonsOffsetApi] = useState(NUMBER_POKEMONS)

  const [show, setShow] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = (item: any) => {
    setItemSelecionado(item)
    setShow(true);
  }

  const handleSearchPokemons = useCallback(async () => {
    const response = await api.get(`pokemon?limit=${NUMBER_MAX_POKEMONS_API}`)
    setPokemonSearch(pokemonSearch.toLocaleLowerCase())
    const pokemonsSearch = response.data.results.filter(
      ({ name }: PokemonProps) => name.includes(pokemonSearch)
    )
    setPokemons(pokemonsSearch)
  }, [pokemonSearch])

  const handlePokemonsListDefault = useCallback(async () => {
    const response = await api.get("/pokemon", {
      params: {
        limit: NUMBER_POKEMONS,
      },
    })
    setPokemons(response.data.results)
  }, [NUMBER_POKEMONS])

  const handleMorePokemons = useCallback(
    async (offset: any) => {
      const response = await api.get(`/pokemon`, {
        params: {
          offset,
          limit: NUMBER_POKEMONS,
        },
      })

      setPokemons((state) => [...state, ...response.data.results])
      setPokemonsOffsetApi((state) => state + NUMBER_POKEMONS)
      console.log("pokemons", pokemons)
    },
    [NUMBER_POKEMONS, pokemons]
  )

  useEffect(() => {
    const isSearch = pokemonSearch.length >= 2

    if (isSearch) handleSearchPokemons()
    else handlePokemonsListDefault()
  }, [handlePokemonsListDefault, handleSearchPokemons, pokemonSearch.length])

  return (
    <PageStyled>
      <Header />
      <SearchContentstyled>
        <SearchStyled
          placeholder="Qual Pok??mon voc?? quer encontrar?"
          value={pokemonSearch}
          onChange={(event) => setPokemonSearch(event.target.value)}
        />
      </SearchContentstyled>
      {pokemons ? (
        <ListCardsStyled>
          {pokemons.map((element: any, index: number) => {
            return (
              <>
                <span onClick={() => handleShow(element.name)}>
                  <Card name={element.name} key={index} />
                </span>
                <ModalInfo
                  isOpen={show}
                  handleClose={handleClose}
                  name={itemSelecionado}
                />
              </>
            );
          })}
        </ListCardsStyled>
      ) : (
        "N??o foi encontrado nenhum pok??mon"
      )}
      {pokemonSearch.length <= 2 && (
        <ButtonStyled
          type="button"
          onClick={() => handleMorePokemons(pokemonsOffsetApi)}
        >
          CARREGAR MAIS
        </ButtonStyled>
      )}
    </PageStyled>
  )
}

export default Home
