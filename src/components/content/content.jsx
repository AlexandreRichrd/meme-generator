import './content.css'

import { useState } from 'react'

import Formulaire from './formulaire/formulaire'
import Meme from './meme/meme'
import ChampTexte from './formulaire/champTexte/champTexte'

export default function Content(props) {
    const [memeText, setMemeText] = useState({})

    const setText = (event) => {
        setMemeText(prevMemeText =>{
          return{
              ...prevMemeText,
              [event.target.name]: event.target.value
          }
        })
      }


      const buildInput = (nbInput) => {
        let tabInputs = []

        for(let i = 0; i < nbInput; i++){
            tabInputs.push(<ChampTexte key={i} value={memeText['input'+i]} name={'input' + i} onChange={setText}/>)
        }
        return tabInputs
    }

    return(
        <section>
           {/*  <Formulaire setMemeText={setText} memeText={memeText} boxCount={props.meme.box_count}/> */}

            <Formulaire >
                {buildInput(props.meme.box_count)}
            </Formulaire>
            <Meme meme={props.meme} memeText={memeText}/>
        </section>
    )
}