Videreudvikling af digital løsning for KISMET – v. Anastasia

Dette projekt er en selvstændig videreudvikling af en digital løsning udarbejdet i samarbejde med Gruppe 10. Fokus i denne fase ligger på at optimere og udvide design og funktionalitet med udgangspunkt i den eksisterende kodebase og struktur, udviklet i forbindelse med vores eksamensprojekt.

Da projektet nu videreudvikles af én person, vil visse strukturer og retningslinjer være forenklede, men stadig bygge videre på de principper og løsninger, der blev aftalt i det oprindelige fælles arbejde.


# Teknisk dokumentation for Kismet gruppe 10 eksamen

Når man er flere der bidrager til en kodebase, lærer man hurtigt, at ens sædvanlige måder at gøre tingene på ikke nødvendigvis er logisk for alle.

Skriv derfor jeres fælles retningslinjer for punkterne herunder(tilføj gerne flere selv), sådan som det giver bedst mening for jer som gruppe. Dokumentationen sikre, at jeres fælles kodebase forbliver overskuelig, er let at arbejde med og til at forstå for alle, og at I undgå konflikter, og har nemmere ved at hjælpe hinanden undervejs.

## Projektstruktur:

Beslut, hvordan I vil organisere jeres projekt – struktur for mapper og filer.

- Hvordan organiserer I billeder, fonte og andre ressourcer?
  En mappe for billeder (img), en mappe for fonte (font), og mapper til andre ressourcer med matchende navne, og de ligger aller i src-mappen.

- Hvor placerer I boilerplate?(fx CSS- og JavaScript-filer, der bruges på tværs af projektet)
  I src-mappen har vi en css mappe, en javascript mappe og en pages mappe.

- Hvor placerer I HTML, CSS- og JavaScript-filer til fx detaljevisning og listevisning?
  De er inde i deres parent-mappe, så style.css og layout.css bor i css-mappen fra boilerplaten osv.

## Navngivning:

Beslutte hvordan i vil navngive filer og mapper for at sikre en ensartet struktur og undgå forvirring.

- Hvordan navngiver I filnavne? (fx små bogstaver, ingen mellemrum, brug af - eller \_)
  Components starter med stort forbogstav. resten er i udgangspunktet små bogstaver - men ex. i MainLayout, er begge ord i sætningen med stort.

- Hvordan sikre I at det er til at forstå hvilke HTML-, CSS- og JavaScript-filer der høre sammen?
  De kommer til at have det samme navn, til dem der tilhører hinanden - ex. Header.astro, Header.js osv.

## Link til scripts:

- Hvor placerer I script referencer i HTML'en? (fx i <head> med defer attribute, eller sidst i <body>)
  Vi placerer al script i head, pånær javascript, det er i bunden af body.

## Git branches:

- Hvordan navngiver I branches, så alle kan forstår hvem der arbejder i branchen og på hvad?(fx feature-lotte-formular)
  Vi bruger Linear til at holde styr på vores branches, og inde i Linear kan man lave et issue, ved at trykke på SHIFT . Og så laver linear et branch navn, som man kan putte ind i VScode. Dette gør det enklere at holde styr på hvilke branches der er blevet lavet, hvad der er in progress, og hvad der stadig mangler at blive lavet - og det hele vises i Linear.

## Arbejdsflow:

- Hvordan fordeler I arbejdet, så I undgår at flere arbejder i de samme filer samtidigt?
  Gennem Linear, laver vi alle opgaver som issues - når man tager en opgave, bliver den placeret i progress, og hvem fra gruppen der laver den. Det gør at ingen kommer til at arbejde på det samme.

- Hvordan sikrer I, at commit-beskeder er beskrivende?
  feat-navn-det der er blevet lavet.

- Hvordan kommunikerer i om ændringer i main branchen når feature merges?
  Altid pull og push inden man går ind og ændre i noget, eller laver ny branch.

## Kode:

- Hvordan skriver i funktioner i JavaScript?(fx med function keyword eller som arrow functions)
  Vi bruger begge dele. Både keyword og arrow functions.

- Beslut hvilken CSS selector i benyttes til referener i henholdsvis CSS og JavaScript(fx. id'er til JavaScript og Classes til CSS)
  Vi bruger id på java og Class på css.

- Skal filer have korte forklaringer som kommentarer?
  Nej, vi syntes at navnene på filerne siger sig selv.

# Funktionalitet

Dette afsnit skal forklare hvad I konkret har arbejde med, for at udvikle websitet. Tænk over hvilke interaktioner brugeren kan foretage på sitet? Eller hvordan websitet håndterer og præsenterer data? Eksempler på funktionalitet, der kan beskrives:

- Hentning af produkter fra API.
- Filtrering af produkter baseret på brugerens valg.
- Dynamisk visning af produkter i HTML.

Brug korte beskrivelser, som i eksemplerne herover

# API endpoints

Dette afsnit skal liste de endpoints fra API'et i har benyttet:

- (fx. https://dummyjson.com/products)

# Dokumentation af Funktion

Dette afsnit skal beskrive en funktion I selv har udviklet. Det kunne eksempelvis være en funktion der generere en listen over fx. produkter:

- Beskrivelse: Hvad gør funktionen? Hvordan spiller den sammen med resten af koden?
- Parametre: Hvilke input forventes (fx en værdi fra en dropdown eller URL'en)?
- Returnerer: Beskriv, om funktionen returnerer en værdi eller blot manipulerer DOM’en.
- Eksempel på brug: Indsæt funktions-koden herunder(der hvor koden er i eksemplet) og vis, hvordan funktionen kaldes:

```javascript
//funktionens kode:
function voresFunktion(sprog) {
  console.log(`${sprog} syntax highlighting`);
}
//hvordan funktionen kaldes:
voresFunktion("JavaScript");
```
