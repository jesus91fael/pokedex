import React, { useEffect, useState } from 'react'
import { CardStyled, CardImageStyled, CardInfoStyled, CardInfoTitle,CardInfoType  } from './styles'
import { CardProps } from './interface'
import { api } from '../../lib/axios'
const Card = ({name}: CardProps) => {

  const [pokemon, setPokemon] = useState<any>({})

  useEffect(() => {
    api
      .get(`/${name}`)
      .then((response: any) => setPokemon(response.data))
      .catch((err: any) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);



  console.log('teste', pokemon.order)
  
  return(
    <CardStyled>
      <CardImageStyled>
        {/* <img src={pokemon?.abilities?.sprites.other.dream_world.front_default} alt={pokemon?.abilities.name} /> */}
      </CardImageStyled>
      <CardInfoStyled>
        <CardInfoTitle>
          <span>{pokemon?.order}</span> 
          {/* <span>{pokemon?.name}</span>  */}
        </CardInfoTitle>
        <CardInfoType>
          {/* {pokemon.types.map((element: any) => {
            return(
              <>
              {element.name}
              </>
            )
          })} */}
        </CardInfoType>
      </CardInfoStyled>
    </CardStyled>
  )
}

export default Card
