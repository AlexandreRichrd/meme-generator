import './meme.css'



export default function Meme(props) {

    const buildText = (nbTexts) => {
        let tabText = []
        console.log(nbTexts)
        /* for (let i = 0; i < Object.keys(nbTexts).length; i++){
            tabText.push(<h1>{props.memeText['input' + i]}</h1>)
        } */

        for (const [key, value] of  Object.entries(nbTexts)){
            console.log(key, value)
            tabText.push(<h1>{value}</h1>)
        }

        return tabText
        
    }
    
    return(
        
        <div className='meme'>
            <div className="meme-text">
                {buildText(props.memeText)}
            </div>
            <img src={props.meme.url} alt="" />
        </div>
    )
}