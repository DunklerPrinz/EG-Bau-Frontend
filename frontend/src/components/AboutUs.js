import React from 'react';
import './AboutUs.css';


function AboutUs() {
    return (
        <div id="über-uns" className="about-us">
            {/* Intro Section */}
            <section className="section intro-section">
                <div className="content">
                    <h1>Über uns</h1>
                    <p>
                        Wir sind Gartenbau Gjocaj – Ihr Partner für nachhaltige Gartenpflege und
                        Landschaftsgestaltung in Hannover und Umgebung.
                    </p>
                </div>
            </section>

            {/* Founder Section */}
            <section className="section founder-section">
                <div className="content">
                    <h2>Unser Gründer</h2>
                    <p><strong>Egzon Gjocaj</strong></p>
                    <p>
                        Egzon Gjocaj ist der Kopf und die treibende Kraft hinter Gartenbau Gjocaj. Mit über
                        15 Jahren Erfahrung in der Gartenpflege und Landschaftsgestaltung bringt er sowohl
                        Fachwissen als auch Leidenschaft mit, um Ihre Gartenträume wahr werden zu lassen.
                    </p>
                </div>
            </section>

            {/* History Section */}
            <section className="section history-section">
                <div className="content">
                    <h2>Unsere Geschichte</h2>
                    <p>
                        Die Idee zu Gartenbau Gjocaj entstand, als Egzon erkannte, dass viele Gärten in Hannover
                        Pflege und eine umweltfreundliche Gestaltung benötigten. Er wusste schon früh: Nur die Harten, kommen in den Garten! Seit unserer Gründung haben wir es
                        uns zur Aufgabe gemacht, Gärten in grüne Oasen zu verwandeln, die sowohl Menschen als auch
                        der Natur dienen.
                    </p>
                </div>
            </section>

            {/* Goal Section */}
            <section className="section goal-section">
                <div className="content">
                    <h2>Unser Ziel</h2>
                    <p>
                        Unser Ziel ist es, nachhaltige, pflegeleichte und optisch ansprechende Gartenlandschaften
                        zu schaffen, die zu einer höheren Lebensqualität und einer besseren Umwelt beitragen.
                        Jedes Projekt wird individuell geplant und umgesetzt, um die natürlichen Gegebenheiten
                        optimal zu nutzen.
                    </p>
                </div>
            </section>

            {/* Map Section */}
            {/* Map Section */}

        </div>
    );
}

export default AboutUs;
