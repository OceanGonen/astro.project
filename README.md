Een Lichess schaakanalyse tool gebouwd met Astro. De applicatie haalt via de Lichess API de geanalyseerde schaakpartijen van een speler op en visualiseert de ratingontwikkeling over tijd als een interactieve grafiek. Gebruikers kunnen via twee sleepbare handles een tijdsperiode selecteren op de grafiek, waarna de applicatie de beste en slechtste partij op basis van accuraatheid binnen die periode naast elkaar toont, inclusief metadata zoals tegenstander, resultaat, rating en datum.

Het project combineert de volgende technologieën en API's:

Lichess API — content API voor het ophalen van schaakpartijen met accuraatheidsdata
Pointer Events API — voor de draggable range sliders op de grafiek
Web Share API — voor het delen van een game vergelijking
Clipboard API — voor het kopiëren van PGN notatie naar het klembord
Chart.js — voor de interactieve rating timeline visualisatie


![alt text](image-7.png)
Lichess API integratie is gelukt. Het scheelt ook dat ik geen KEY nodig heb om toegang te krijgen. De fetch naar de Lichess API werkt nu correct met de parameters perfType=rapid, analysed=true en accuracy=true. De response komt binnen als NDJSON en wordt per regel geparsed naar een array van game-objecten.

![alt text](image.png)
<img width="754" height="220" alt="image" src="https://github.com/user-attachments/assets/762aed9c-daca-4a88-a9bc-4ec3e05be41c" />

Rating timeline gebouwd. Chart.js rendert de volledige ratinggeschiedenis van een speler als een filled line chart. De grafiek toont alle geanalyseerde rapid games over tijd, met datum op de x-as en rating op de y-as.


![alt text](image-1.png)
<img width="1090" height="480" alt="image" src="https://github.com/user-attachments/assets/1d34e932-843b-414d-b8c5-c2ce1275a902" />

Best/worst game cards geïmplementeerd. Onder de grafiek worden twee kaarten naast elkaar getoond — de game met de hoogste accuracy en de game met de laagste accuracy. Per kaart is zichtbaar: accuracy percentage, rating, kleur, datum, tegenstander (naam, rating, accuracy) en het resultaat.

## Feedbackmoment

Tijdens de feedbackronde had Jad verteld dat de gekozen Web API's — de Clipboard API en de Web Share API — te eenvoudig zijn voor het niveau van het project. Beide API's zijn met een paar regels code geïmplementeerd en voegen weinig technische diepgang toe aan de applicatie. De feedback was om een API te kiezen die functioneel relevanter is en meer integratie vereist met de bestaande applicatielogica. Als vervolgstap ga ik onderzoeken welke Web API's beter aansluiten bij de kern van de app, zoals de Pointer Events API die al actief gebruikt wordt voor de draggable sliders, of de Web Animations API die de nummers animeert bij het laden van de resultatenkaarten.

![alt text](image-2.png)
Dark theme toegepast. De UI is omgezet naar een donker kleurenschema met cyaan als primary accent, consistent door de hele pagina.

![alt text](image-3.png)
<img width="900" height="196" alt="image" src="https://github.com/user-attachments/assets/0f1d806a-c5ff-4002-afb5-50f5a1b84523" />

Draggable range sliders toegevoegd aan de grafiek. Twee sleepbare verticale lijnen op de Chart.js grafiek laten de gebruiker een tijdsperiode selecteren. Het geselecteerde gebied wordt visueel gehighlight. 

![alt text](image-4.png)
Wanneer de start handle voorbij de end handle wordt gesleept, inverteert de selectie en wordt alles buiten het bereik gehighlight in een andere kleur. Onder de grafiek toont een tekstlabel live de geselecteerde datumrange en het aantal games in die periode.

![alt text](image-5.png)
De geselecteerde tijd periode van de rating graph update nu live en vertelt ook hoeveel games er zijn binnen die params.  

![alt text](image-6.png)
"Analyze period" knop geïmplementeerd. Na het selecteren van een range verschijnt een knop die de games filtert op de gekozen periode en de best en worst game daaruit toont in de kaarten.


![alt text](image-8.png)


![snake border on cta](image-9.png)
De CTA heb ik wat opvallender gemaakt met een snakeborder die alleen actief is als de sliders positie geupdate wordt. Dat maakt het duidelijk aan de gebruiker wanneer hij al de grafiek heeft aangepast. 

![header flex](image-10.png)

De header heb ik een display flex gegeven voor wat betere lay-out en tegelijk de website ook responsive gemaakt voor mobiel. 
<img width="913" height="863" alt="image" src="https://github.com/user-attachments/assets/4afdd428-61cf-4d79-a71e-5dba32a7b38a" />

Ik heb nu ook de beste game card wat spectaculairder gemaakt door hem een goude shimmer te geven op hover en de nummers te animeren met webanimations door ze omhoog te laten tellen tot het daadwerkelijke getal. 
<img width="905" height="848" alt="image" src="https://github.com/user-attachments/assets/0215edb2-7f3c-45c0-a7d2-c6d1380b3c38" />
<img width="718" height="380" alt="image" src="https://github.com/user-attachments/assets/a9e8f9c5-8f15-4d09-bf5d-a83cc60cbdd4" />



<img width="1906" height="848" alt="image" src="https://github.com/user-attachments/assets/006abb96-749c-443d-b618-9d1d693297c7" />

## Feedbackmoment 
Deze feedbackronde richtte zich op de landingspagina van ChessLens. Op dit moment bestaat de landingspagina alleen uit een invoerveld met een knop, zonder context of visuele identiteit. De feedback was dat de pagina meer karakter nodig heeft en direct duidelijk moet maken wat de applicatie doet. Als reactie hierop heb ik een verbeterd ontwerp uitgewerkt met een centrale tagline, een subtiele achtergrondanimatie met schaakstukken, een beschrijving van de kernfunctionaliteit.

Before:
<img width="1912" height="908" alt="image" src="https://github.com/user-attachments/assets/9811aef7-e9f2-4b82-a32b-ecc8c89216d9" />



