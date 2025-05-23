# Work Experience API

Detta repository innehåller ett REST API för hantering av arbetslivserfarenheter, byggt med Node.js, Express och MongoDB.

##  Live-URL

API:et är tillgängligt på: [https://experience-cd35.onrender.com](https://experience-cd35.onrender.com)

## Installation

1. **Klona repositoryt:**

   ```bash
   git clone https://github.com/Hananmutlak/experience.git

Starta servern med kommandot `npm start`.

##  Databasstruktur
API:et använder MongoDB med följande schema för arbetslivserfarenheter:
- "company" (String): Företagets namn
- "role" (String): Roll/position
- "description" (String): Arbetsbeskrivning
- "duration" (String): Anställningstid
- "createdAt" (Date): Skapandedatum (automatiskt)
- "updatedAt" (Date): Uppdateringsdatum (automatiskt)

##  API-användning
- `GET /api/experiences` – Hämtar alla arbetslivserfarenheter  
- `POST /api/experiences` – Skapar en ny arbetslivserfarenhet  
- `GET /api/experiences/:id` – Hämtar en specifik erfarenhet  
- `PUT /api/experiences/:id` – Uppdaterar en befintlig erfarenhet  
- `DELETE /api/experiences/:id` – Raderar en erfarenhet  

##  Exempel på anrop
För att hämta alla erfarenheter, använd:  
`GET /api/experiences`

## Felmeddelanden
API:et returnerar följande felkoder:
- `400 Bad Request`: Saknade eller ogiltiga fält vid POST/PUT
- `404 Not Found`: Erfarenhet med angivet ID hittades inte
- `500 Internal Server Error`: Serverfel

##  Teknologier
- **Backend:** Node.js, Express  
- **Databas:** MongoDB (med Mongoose ODM)  
- **Middleware:** CORS, dotenv  
- **Verktyg:** Nodemon (för utveckling)
