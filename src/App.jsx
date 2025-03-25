import Header from "./components/Header.jsx";
import Entry from './components/Entry.jsx';
import Data from './components/data.js';

export default function App() {
    
    const entryElements = Data.map(({ img, title, country, googleMapsLink, dates, text }) => {
        return (
            <Entry
                img={img}
                title={title}
                country={country}
                googleMapsLink={googleMapsLink}
                dates={dates}
                text={text}
            />
        )
    })
    
    return (
        <>
            <Header />
            <main className="container">
                {entryElements}
            </main>
        </>
    )
}