import GlobeImage from "../assets/images/Globe.svg"

export default function Header(){
    return (
        <header>
            <img src= {GlobeImage} alt="Globe Icon" />
            <h1>my travel journal.</h1>
        </header>
    );
};