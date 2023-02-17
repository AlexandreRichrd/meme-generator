import './meme.css'



export default function Meme(props) {

    let gap;

    if (props.meme.box_count === 2){
        gap = 75
    } else if (props.meme.box_count > 2){
        gap = 100/props.meme.box_count
    } 

    const buildText = (nbTexts) => {
        let tabText = []
        console.log(props.meme.id)
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
            <div className="meme-text" style={{'height': ((props.meme.height * 649)/props.meme.width) + 'px', 'gap': gap + '%'}}>
                {buildText(props.memeText)}
            </div>
            <img src={props.meme.url} alt="" />
        </div>
    )
}