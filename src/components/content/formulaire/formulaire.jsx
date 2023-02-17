import './formulaire.css'

import MyButton from './myButton/myButton'

export default function Formulaire(props) {
    return(
        <form action="">
            <div className='inputs'>
                {/* <input type="text" name="input1" id="" onChange={inputChanges} />
                <input type="text" name="input2" id="" onChange={inputChanges} /> */}

                
                {props.children}
               

            </div>
            <MyButton />
        </form>
    )
}