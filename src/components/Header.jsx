import './Header.css'
import trol_face from '../assets/troll-face.png'

export default function Header() {
    return (
        <header className="header">
            <img className="header--image" src={trol_face}/>
            <h2 className="header--title">Meme generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}