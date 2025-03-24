import LocationPin from "../assets/images/marker.svg";
import { countryList } from "./data.js";

export default function Entry(){
    return countryList.map(({ src, alt, country, link, title, date, text }, index) => (
        <article className="journal-entry" id = {index} key={index}>
            <div className="main-image-container">
                <img className="main-image" src = {src} alt = {alt} />
            </div>
            <div className="info-container">
                <div className="location-maps">
                    <img className="marker" src={LocationPin} alt="location marker" />
                    
                    <span className="country">{country}</span>
                    
                    <a href={link}>View on Google Maps</a>
                </div>

                <h2 className="entry-title">{title}</h2>
                
                <p className="trip-dates">{date}</p>
                
                <p className="entry-text">{text}</p>
            </div>
        </article>
    ));
}