Een Lichess schaakanalyse tool gebouwd met Astro. De applicatie haalt via de Lichess API de geanalyseerde schaakpartijen van een speler op en visualiseert de ratingontwikkeling over tijd als een interactieve grafiek. Gebruikers kunnen via twee sleepbare handles een tijdsperiode selecteren op de grafiek, waarna de applicatie de beste en slechtste partij op basis van accuraatheid binnen die periode naast elkaar toont, inclusief metadata zoals tegenstander, resultaat, rating en datum.

Het project combineert de volgende technologieën en API's:


### Content API
**Lichess API** — haalt geanalyseerde schaakpartijen op per speler. Geen API key nodig. De endpoint `api/games/user/{username}?perfType=rapid&analysed=true&accuracy=true` geeft NDJSON terug met accuracy data per partij.

### Web API's
**Pointer Events API** — gebruikt voor de twee sleepbare handles op de rating grafiek. `pointerdown`, `pointermove` en `pointerup` events detecteren wanneer de gebruiker een handle aanraakt en slepen, inclusief touch support op mobiel.

**Web Animations API** — `element.animate()` zorgt voor de bounce animatie op de accuracy percentages en ratings wanneer de kaarten inladen. De getallen tellen op van 0 naar de echte waarde met een ease-out curve, en bij het bereiken van de eindwaarde springt het element kort op naar 105% schaal.

**Web Share API** — de share knop op elke game kaart opent het native share menu van het apparaat. Op desktop valt het terug op het kopiëren van de game link naar het klembord.



![alt text](image-7.png)
Lichess API integratie is gelukt. Het scheelt ook dat ik geen KEY nodig heb om toegang te krijgen. De fetch naar de Lichess API werkt nu correct met de parameters perfType=rapid, analysed=true en accuracy=true. De response komt binnen als NDJSON en wordt per regel geparsed naar een array van game-objecten.

![alt text](image.png)
Rating timeline gebouwd. Chart.js rendert de volledige ratinggeschiedenis van een speler als een filled line chart. De grafiek toont alle geanalyseerde rapid games over tijd, met datum op de x-as en rating op de y-as.

![alt text](image-1.png)
Best/worst game cards geïmplementeerd. Onder de grafiek worden twee kaarten naast elkaar getoond — de game met de hoogste accuracy en de game met de laagste accuracy. Per kaart is zichtbaar: accuracy percentage, rating, kleur, datum, tegenstander (naam, rating, accuracy) en het resultaat.

![alt text](image-2.png)
Dark theme toegepast. De UI is omgezet naar een donker kleurenschema met cyaan als primary accent, consistent door de hele pagina.

![alt text](image-3.png)
Draggable range sliders toegevoegd aan de grafiek. Twee sleepbare verticale lijnen op de Chart.js grafiek laten de gebruiker een tijdsperiode selecteren. Het geselecteerde gebied wordt visueel gehighlight. 

![alt text](image-4.png)
Wanneer de start handle voorbij de end handle wordt gesleept, inverteert de selectie en wordt alles buiten het bereik gehighlight in een andere kleur. Onder de grafiek toont een tekstlabel live de geselecteerde datumrange en het aantal games in die periode.

![alt text](image-5.png)
De geselecteerde tijd periode van de rating graph update nu live en vertelt ook hoeveel games er zijn binnen die params.  

![alt text](image-6.png)
"Analyze period" knop geïmplementeerd. Na het selecteren van een range verschijnt een knop die de games filtert op de gekozen periode en de best en worst game daaruit toont in de kaarten.


![alt text](image-8.png)



![duplicte results](image-3.png)


![snake border on cta](image-9.png)

![header flex](image-10.png)


<img width="913" height="863" alt="image" src="https://github.com/user-attachments/assets/4afdd428-61cf-4d79-a71e-5dba32a7b38a" />


<img width="905" height="848" alt="image" src="https://github.com/user-attachments/assets/0215edb2-7f3c-45c0-a7d2-c6d1380b3c38" />


<img width="1906" height="848" alt="image" src="https://github.com/user-attachments/assets/006abb96-749c-443d-b618-9d1d693297c7" />


