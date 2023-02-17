import './champTexte.css'


export default function ChampTexte(props){

    
    return(
        <input type="text" value={props.value} name={props.name} onChange={props.onChange}/>
    )
}