import React, { useEffect, useState } from 'react'
import { CardStyled, CardImageStyled, CardInfoStyled, CardInfoTitle,CardInfoType, TextIdStyled, TextNameStyled, CardDetailsStyled  } from './styles'
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
  }, [name]);



  console.log('teste', pokemon.types)
  
  return(
    <CardStyled>
      <CardInfoStyled>
        <CardImageStyled>
          <img src={pokemon?.sprites.other.dream_world.front_default} alt={pokemon?.name} />
        </CardImageStyled>
      </CardInfoStyled>
      <CardDetailsStyled>
        <CardInfoTitle>          
          <TextIdStyled>#{pokemon?.order}</TextIdStyled> 
          <TextNameStyled>{pokemon?.name}</TextNameStyled> 
        </CardInfoTitle>        
        <CardInfoType>
          {pokemon.types.map((element: any) => {
            return(
              <>
                {element.type.name}
              </>
            )
          })}
        </CardInfoType>
      </CardDetailsStyled>
    </CardStyled>
  )
}

export default Card
