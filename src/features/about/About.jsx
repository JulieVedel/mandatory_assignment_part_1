import Joke from "../jokes/Joke"
import { useState } from "react"

export default function About() {
    return (
        <div className="content">
            <h1>About Julies Blog-base</h1>
            <p>Denne side er udviklet med React. <br />For at navigere rundt på de forskellige sider er der benyttet React Route. Desuden er der gjort brug af en .json fil til at opbevare de forskellige blogs, som der kan findes på denne side.</p>
            <p>På Home-siden kan man klikke ind på hver individuel blog, som vil komme ind på bloggen.</p>
            <p>Under Create Blog er det muligt at oprette en ny blog, som bliver gemt på .json-filen som er min database.</p>
            <p>Herunder på siden har jeg oprettet en lille joke-creator, som henter nogle jokes fra en API. Ved et tryk på knappen "Ny joke" kommer der en ny joke frem.</p>
            <h1>Til at vise API-kald med RTK-Query:</h1>
            <Joke></Joke>
        </div>
        
    )
}



