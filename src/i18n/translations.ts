// All text on the site, in every language. Lists (milestones, events, FAQ, ...)
// must have the same number of items, in the same order, in every language.

const en = {
  pageTitle: "Louisa & Mattias — July 24, 2027",
  gate: {
    prompt: "Please enter the password we sent you",
    placeholder: "Password",
    open: "Open invitation",
    wrong: "That's not quite right. Please try again.",
  },
  envelope: {
    invited: "You are invited",
    date: "July 24th, 2027",
    opening: "Opening your invitation…",
  },
  nav: {
    story: "Our Story",
    schedule: "Schedule",
    travel: "Travel",
    faq: "FAQ",
    photobook: "Photobook",
    gifts: "Gifts",
    rsvp: "RSVP",
    menu: "Menu",
  },
  hero: {
    date: "Saturday, July 24th, 2027",
    location: "Fiholm, Västerås, Sweden",
    photoAlt: "Louisa's hand with engagement ring on Mattias' chest",
    rsvpCta: "RSVP by June 1st",
  },
  countdown: { days: "Days", hours: "Hours", minutes: "Min", seconds: "Sec" },
  story: {
    eyebrow: "How It All Began",
    title: "Our Story",
    milestones: [
      {
        year: "2019",
        title: "The Meet-Cute",
        description:
          "Louisa and Mattias met at a summer camp in Ardingly, England. They started talking while being locked in an escape room together. Mattias spent most of the camp thinking Louisa was called \"Elenor\" and even bit her during a game of mop hockey - but redeemed himself by sacrificing a beach trip to help her with dish duty and winning a hobbyhorse competition in borrowed shoes. Their connection was sealed by a night of watching shooting stars and exchanging hand-painted rocks.",
      },
      {
        year: "2020",
        title: "Official At Last",
        description:
          "They stayed close throughout autumn, spending every spare weekend together in Ekebyholm or Skogås. Mattias had a prophetic dream that they would get married. The year ended with Louisa and Mattias celebrating New Year's Eve together with friends in a forest lodge. At 3 AM, they officially became a couple.",
      },
      {
        year: "2021",
        title: "Two Cities, One Us",
        description:
          "When Louisa moved to Linköping for her university studies, their relationship became long distance. What was scary and painful ended up leading to new friendships and a stronger relationship.",
      },
    ],
  },
  schedule: {
    eyebrow: "The Celebration",
    title: "Schedule",
    mapLabel: "Map",
    groups: [
      {
        location: "Stora Rytterne church ruin",
        events: [
          {
            time: "3:00 PM",
            title: "Ceremony",
          },
        ],
      },
      {
        location: "The Orangery at Fiholm",
        events: [
          {
            time: "4:30 PM",
            title: "Cocktail hour",
          },
          {
            time: "6:00 PM",
            title: "Dinner",
          },
          {
            time: "8:30 PM",
            title: "Dancing",
          },
        ],
      },
    ],
  },
  travel: {
    eyebrow: "Getting There",
    title: "Travel & Accommodations",
    venueAlt: "Fiholm Manor near Västerås, where we celebrate",
    venueCaption: "Fiholm Manor · Rytterne, Västerås, Sweden",
    // Same order as the icons in TravelAccommodations: train, car
    info: [
      {
        title: "By Train",
        description: "Trains run from Stockholm Central to Västerås Central in about an hour. Buy tickets in the SJ app or at sj.se before boarding, as they can't be bought on the train. There are hardly any buses out to Rytterne, so we'll pick you up at Västerås Central: just tick the box when you RSVP.",
      },
      {
        title: "By Car",
        description: "Fiholm lies about 25 km southwest of Västerås, around 30 minutes by car, and about 1 hour 45 minutes from Stockholm. Take the E18, then road 56 towards Kvicksund. Set your navigation to “Fiholm, 725 92 Västerås”, not Fiholms slott near Eskilstuna, which is a different place.",
      },
    ],
    whereToStay: "Where to Stay",
    bookLabel: "Book or read more",
    accommodations: [
      {
        title: "Rytterne Kyrkskola",
        description: "A cosy B&B in the old church school, the closest place to stay.",
        detail: "5 minutes from Fiholm · from 600 SEK/night",
        url: "https://www.booking.com/hotel/se/rytterne-kyrkskola-bed-and-breakfast.html",
      },
      {
        title: "Thottska Villan, Strömsholm",
        description: "A restored 18th-century villa by Strömsholm Palace, breakfast included.",
        detail: "15 minutes from Fiholm · from 1,500 SEK/night",
        url: "https://www.booking.com/hotel/se/thottska-villan.html",
      },
      {
        title: "Strömsholms Vandrarhem",
        description: "A friendly hostel near Strömsholm Palace, with rooms for one to four.",
        detail: "15 minutes from Fiholm · from 500 SEK/night",
        url: "http://www.stromsholmsvandrarhem.com/kontakt-bokning",
      },
      {
        title: "Elite Stadshotellet Västerås",
        description: "A grand 1907 hotel on the main square, a short walk from the station.",
        detail: "30 minutes from Fiholm · from 900 SEK/night",
        url: "https://www.elite.se/en/hotels/vasteras/elite-stadshotellet-vasteras/",
      },
    ],
  },
  international: {
    toggle: "Travelling from abroad?",
    intro: "We're so grateful you're making the journey! Here's a simple guide from the airport, via Stockholm, all the way to us.",
    beforeTitle: "Before You Go",
    before: [
      "Many nationalities can visit Sweden for short stays without a visa. Check the EU's entry requirements (EES and ETIAS) at travel-europe.europa.eu.",
      "Sweden is almost cashless: cards and phone payments work nearly everywhere.",
      "Sockets are the European two-pin type (230 V), and tap water is excellent to drink.",
      "In late July the sun sets around 21:40, so evenings stay light for a long time.",
    ],
    steps: [
      {
        title: "Arrive at Arlanda",
        text: "Fly into Stockholm Arlanda (ARN), Sweden's main international airport, about 40 km north of the city. The Arlanda Express train takes 18 minutes to Stockholm Central Station (about 340 SEK; extra adults travelling with you pay about 120 SEK each, and under-18s ride free). The SL commuter train (about 200 SEK, 40 min) and the Flygbussarna coach (from about 129 SEK, 45 min) are cheaper.",
      },
      {
        title: "Explore Stockholm",
        text: "Late July is a lovely time to visit, so why not spend a few days in Stockholm before the wedding?",
        columns: [
          {
            title: "Where to stay",
            items: [
              "Norrmalm, around Central Station: the most practical base, as trains to the airport and to Västerås leave from here.",
              "Gamla Stan: the charming medieval old town, a short walk from Central Station.",
              "Södermalm: relaxed and creative, with cafés, vintage shops and great views.",
              "Östermalm: elegant, with waterfront promenades and the Östermalm food hall.",
            ],
          },
          {
            title: "What to do",
            items: [
              "Wander the cobbled lanes of Gamla Stan and see the Royal Palace.",
              "Visit the Vasa Museum and its almost intact 17th-century warship.",
              "Spend a day on leafy Djurgården: Skansen open-air museum, ABBA The Museum and Gröna Lund.",
              "Take a boat out into the archipelago. Vaxholm is an easy day trip.",
              "Catch the summer evening view from Monteliusvägen on Södermalm.",
              "See photography with a view at Fotografiska, or modern art at Moderna Museet.",
            ],
          },
        ],
      },
      {
        title: "On the Big Day",
        text: "When the big day comes, here's how to get from Stockholm to us:",
      },
    ],
  },
  faq: {
    eyebrow: "Common Questions",
    title: "Frequently Asked",
    items: [
      {
        question: "What is the dress code?",
        answer: "Formal, as for a typical Swedish wedding: a suit, a jumpsuit, a dress, or whatever you feel wonderful in. Summery colours are very welcome!",
      },
      {
        question: "Can I bring a plus one?",
        answer: "We're not able to include plus-ones. Everyone who is invited is named in the message we sent you with the link to this page.",
      },
      {
        question: "Are children welcome?",
        answer: "Children who are named in your invitation are very welcome. Beyond that, we've chosen to make our wedding an adults-only celebration, and we hope you understand.",
      },
      {
        question: "Will there be transport to the venue?",
        answer: "We would be delighted to collect you from Västerås Central Station. Just tick the pickup box when you RSVP and we will be in touch with times closer to the day. Fiholm lies in quiet countryside with very little public transport, so if you are making your own way, please book a taxi in advance. The celebration goes on late into the night. At the end of the evening there will be rides back to Västerås Central Station, or you can book an Uber or a taxi.",
      },
      {
        question: "What about dietary requirements?",
        answer:
          "Please let us know of any dietary requirements or allergies when you RSVP, and our chef will be delighted to accommodate you.",
      },
      {
        question: "Is there parking?",
        answer: "Yes, there is parking at both the church ruin and Fiholm. As the two are only five minutes apart, we warmly encourage car-sharing.",
      },
      {
        question: "What if it rains?",
        answer: "If it rains, the ceremony will be moved inside Fiholm, so it will be lovely whatever the weather.",
      },
    ],
  },
  photobook: {
    eyebrow: "Through the Years",
    title: "Our Photobook",
    previous: "Previous page",
    next: "Next page",
  },
  gifts: {
    eyebrow: "With Gratitude",
    title: "Gifts & Speeches",
    giftTitle: "Our Honeymoon",
    giftText: "Having you with us on our day is the greatest gift of all. If you would like to give us something, we would be so grateful for a contribution towards our honeymoon.",
    swishButton: "Contribute with Swish",
    speechTitle: "Speeches & Toasts",
    speechText: "Would you like to give a speech, sing a song or surprise us with something during dinner? Our toastmasters will be putting together the evening's programme.",
    speechSoon: "We'll share our toastmasters' names and contact details here soon.",
  },
  rsvp: {
    eyebrow: "We Hope You Can Join Us",
    title: "RSVP",
    deadline: "Kindly respond by June 1st, 2027",
    guestNames: "Guests *",
    yourName: "Your full name",
    guestName: (n: number) => `Guest ${n} full name`,
    guestHeading: (n: number) => `Guest ${n}`,
    fullName: "Full name",
    phone: "Phone",
    addGuest: "Add another guest",
    removeGuest: "Remove guest",
    email: "Email",
    emailPlaceholder: "your@email.com",
    attending: "Will you be attending? *",
    chooseAttending: "Please let us know whether you can attend",
    accept: "Joyfully Accept",
    decline: "Regretfully Decline",
    dietary: "Dietary Restrictions",
    dietaryPlaceholder: "Any allergies or dietary needs",
    pickup: "Pickup from Västerås Centralstation? *",
    pickupYes: "Yes, please",
    pickupNo: "No, thank you",
    carpool: "Do you have room in your car for other guests?",
    carpoolYes: "Yes",
    carpoolNo: "No / not driving",
    carpoolSeats: "Free seats",
    carpoolFrom: "Driving from",
    carpoolFromPlaceholder: "e.g. Stockholm",
    message: "Message for the Couple",
    messagePlaceholder: "Share your well wishes...",
    send: "Send RSVP",
    sending: "Sending...",
    thankYou: "Thank You",
    recorded: "Your response has been recorded. We look forward to celebrating with you!",
    recordedDecline: "Your response has been recorded. We will miss you, and thank you for letting us know.",
    needName: "Please enter at least one guest name",
    notOpen: "RSVP isn't set up yet",
    notOpenDescription: "Please check back soon.",
    error: "Something went wrong",
    errorDescription: "Please try again later.",
  },
  footer: {
    date: "July 24th, 2027 · Fiholm, Västerås",
    madeWith: "Made with love for the most anticipated day",
    contact: "Questions? Get in touch",
  },
  notFound: {
    message: "Oops! Page not found",
    home: "Return to Home",
  },
};

export type Translations = typeof en;

const sv: Translations = {
  pageTitle: "Louisa & Mattias — 24 juli 2027",
  gate: {
    prompt: "Skriv lösenordet vi skickade till dig",
    placeholder: "Lösenord",
    open: "Öppna inbjudan",
    wrong: "Det stämmer inte riktigt – försök igen.",
  },
  envelope: {
    invited: "Du är inbjuden",
    date: "24 juli 2027",
    opening: "Öppnar din inbjudan…",
  },
  nav: {
    story: "Vår historia",
    schedule: "Program",
    travel: "Resa",
    faq: "Frågor",
    photobook: "Fotobok",
    gifts: "Gåvor",
    rsvp: "OSA",
    menu: "Meny",
  },
  hero: {
    date: "Lördag 24 juli 2027",
    location: "Fiholm, Västerås",
    photoAlt: "Louisas hand med förlovningsringen mot Mattias bröst",
    rsvpCta: "OSA senast 1 juni",
  },
  countdown: { days: "Dagar", hours: "Timmar", minutes: "Min", seconds: "Sek" },
  story: {
    eyebrow: "Hur allt började",
    title: "Vår historia",
    milestones: [
      {
        year: "2019",
        title: "Första mötet",
        description:
          "Louisa och Mattias träffades på ett sommarläger i Ardingly i England. De började prata när de satt inlåsta i ett escape room tillsammans. Mattias trodde större delen av lägret att Louisa hette ”Elenor” och bet henne till och med under en match mopphockey – men tog igen det genom att offra en stranddag för att hjälpa henne med disken och vinna en käpphästtävling i lånade skor. Deras band beseglades en natt då de tittade på stjärnfall och bytte handmålade stenar med varandra.",
      },
      {
        year: "2020",
        title: "Äntligen officiellt",
        description:
          "De höll kontakten hela hösten och tillbringade varje ledig helg tillsammans i Ekebyholm eller Skogås. Mattias drömde en profetisk dröm om att de skulle gifta sig. Året avslutades med att Louisa och Mattias firade nyårsafton med vänner i en stuga i skogen. Klockan tre på natten blev de officiellt ett par.",
      },
      {
        year: "2021",
        title: "Två städer, ett vi",
        description:
          "När Louisa flyttade till Linköping för att plugga blev det ett distansförhållande. Det som kändes läskigt och jobbigt ledde till slut till nya vänskaper och en starkare relation.",
      },
    ],
  },
  schedule: {
    eyebrow: "Firandet",
    title: "Program",
    mapLabel: "Karta",
    groups: [
      {
        location: "Stora Rytterne kyrkoruin",
        events: [
          {
            time: "15.00",
            title: "Vigsel",
          },
        ],
      },
      {
        location: "Orangeriet på Fiholm",
        events: [
          {
            time: "16.30",
            title: "Mingel",
          },
          {
            time: "18.00",
            title: "Middag",
          },
          {
            time: "20.30",
            title: "Dans",
          },
        ],
      },
    ],
  },
  travel: {
    eyebrow: "Hitta hit",
    title: "Resa & boende",
    venueAlt: "Fiholm utanför Västerås, där vi firar",
    venueCaption: "Fiholm · Rytterne, Västerås",
    info: [
      {
        title: "Med tåg",
        description: "Tåget från Stockholm C till Västerås C tar ungefär en timme. Köp biljett i SJ-appen eller på sj.se innan du kliver på – det går inte att köpa ombord. Det går nästan inga bussar ut till Rytterne, så vi hämtar dig vid Västerås C – kryssa bara i rutan när du OSA:r.",
      },
      {
        title: "Med bil",
        description: "Fiholm ligger cirka 2,5 mil sydväst om Västerås, ungefär 30 minuter med bil och 1 timme 45 minuter från Stockholm. Ta E18 och sedan väg 56 mot Kvicksund. Ställ in navigationen på ”Fiholm, 725 92 Västerås” – inte Fiholms slott vid Eskilstuna, som är en helt annan plats.",
      },
    ],
    whereToStay: "Boende",
    bookLabel: "Boka eller läs mer",
    accommodations: [
      {
        title: "Rytterne Kyrkskola",
        description: "Mysigt B&B i den gamla kyrkskolan – närmast av alla.",
        detail: "5 minuter från Fiholm · från 600 kr/natt",
        url: "https://www.booking.com/hotel/se/rytterne-kyrkskola-bed-and-breakfast.html",
      },
      {
        title: "Thottska Villan, Strömsholm",
        description: "Renoverad 1700-talsvilla vid Strömsholms slott, frukost ingår.",
        detail: "15 minuter från Fiholm · från 1 500 kr/natt",
        url: "https://www.booking.com/hotel/se/thottska-villan.html",
      },
      {
        title: "Strömsholms Vandrarhem",
        description: "Trevligt vandrarhem nära Strömsholms slott, rum för en till fyra.",
        detail: "15 minuter från Fiholm · från 500 kr/natt",
        url: "http://www.stromsholmsvandrarhem.com/kontakt-bokning",
      },
      {
        title: "Elite Stadshotellet Västerås",
        description: "Anrikt hotell från 1907 vid Stora torget, nära stationen.",
        detail: "30 minuter från Fiholm · från 900 kr/natt",
        url: "https://www.elite.se/en/hotels/vasteras/elite-stadshotellet-vasteras/",
      },
    ],
  },
  international: {
    toggle: "Reser du från utlandet?",
    intro: "Vad roligt att du gör den långa resan! Här är en enkel guide från flygplatsen, via Stockholm, hela vägen till oss.",
    beforeTitle: "Före resan",
    before: [
      "Många nationaliteter kan besöka Sverige en kortare tid utan visum. Kolla EU:s inresekrav (EES och ETIAS) på travel-europe.europa.eu.",
      "Sverige är nästan kontantfritt – kort och mobilbetalning fungerar nästan överallt.",
      "Eluttagen är av europeisk typ (230 V), och kranvattnet är utmärkt att dricka.",
      "I slutet av juli går solen ner runt 21.40, så kvällarna är ljusa länge.",
    ],
    steps: [
      {
        title: "Landa på Arlanda",
        text: "Flyg till Stockholm Arlanda (ARN), Sveriges största internationella flygplats, cirka 4 mil norr om Stockholm. Arlanda Express tar 18 minuter till Stockholm C (cirka 340 kr; fler vuxna som reser tillsammans betalar cirka 120 kr var, och under 18 år åker gratis). SL:s pendeltåg (cirka 200 kr, 40 min) och Flygbussarna (från cirka 129 kr, 45 min) är billigare.",
      },
      {
        title: "Upptäck Stockholm",
        text: "Slutet av juli är en härlig tid att besöka Sverige – passa gärna på att stanna några dagar i Stockholm före bröllopet.",
        columns: [
          {
            title: "Var du kan bo",
            items: [
              "Norrmalm, runt Centralstationen: smidigast, eftersom tågen till Arlanda och Västerås går härifrån.",
              "Gamla stan: den charmiga medeltida stadskärnan, en kort promenad från Centralen.",
              "Södermalm: avslappnat och kreativt, med kaféer, vintagebutiker och fina utsikter.",
              "Östermalm: elegant, med strandpromenader och Östermalms saluhall.",
            ],
          },
          {
            title: "Vad du kan göra",
            items: [
              "Strosa längs kullerstensgränderna i Gamla stan och se Kungliga slottet.",
              "Besök Vasamuseet och det nästan helt bevarade 1600-talsskeppet.",
              "Ägna en dag åt gröna Djurgården: Skansen, ABBA The Museum och Gröna Lund.",
              "Ta båten ut i skärgården – Vaxholm är en enkel dagsutflykt.",
              "Njut av sommarkvällens utsikt från Monteliusvägen på Södermalm.",
              "Se fotografi med utsikt på Fotografiska, eller modern konst på Moderna Museet.",
            ],
          },
        ],
      },
      {
        title: "På den stora dagen",
        text: "När den stora dagen kommer tar du dig från Stockholm till oss så här:",
      },
    ],
  },
  faq: {
    eyebrow: "Vanliga frågor",
    title: "Frågor & svar",
    items: [
      {
        question: "Vilken är klädkoden?",
        answer: "Kavaj, som på ett vanligt svenskt bröllop: kostym, jumpsuit, klänning eller det du känner dig fin i. Somriga färger uppmuntras!",
      },
      {
        question: "Får jag ta med en +1?",
        answer: "Vi har tyvärr inte möjlighet att bjuda in fler än de inbjudna. Alla som är bjudna står med namn i meddelandet där du fick länken till den här sidan.",
      },
      {
        question: "Är barn välkomna?",
        answer: "Barn som står med namn i inbjudan är varmt välkomna. Utöver dem har vi valt att ha ett bröllop för vuxna – vi hoppas att ni förstår.",
      },
      {
        question: "Ordnas det transport till festen?",
        answer: "Vi hämtar dig gärna vid Västerås centralstation – kryssa i rutan för upphämtning när du OSA:r, så hör vi av oss med tider närmare dagen. Fiholm ligger lugnt på landet med väldigt lite kollektivtrafik, så tar du dig dit själv rekommenderar vi att du förbokar taxi. Festen håller på till sent. När kvällen är slut finns skjuts till Västerås centralstation, eller så kan du ta en Uber eller taxi.",
      },
      {
        question: "Hur gör jag med specialkost?",
        answer: "Berätta om specialkost eller allergier när du OSA:r, så ordnar vår kock gärna något som passar dig.",
      },
      {
        question: "Finns det parkering?",
        answer: "Ja, det finns parkering både vid kyrkoruinen och på Fiholm. Eftersom de bara ligger fem minuter från varandra uppmuntrar vi samåkning.",
      },
      {
        question: "Vad händer om det regnar?",
        answer: "Då flyttas vigseln in på Fiholm, så det blir fint oavsett väder.",
      },
    ],
  },
  photobook: {
    eyebrow: "Genom åren",
    title: "Vår fotobok",
    previous: "Föregående sida",
    next: "Nästa sida",
  },
  gifts: {
    eyebrow: "Med tacksamhet",
    title: "Gåvor & tal",
    giftTitle: "Vår bröllopsresa",
    giftText: "Att du firar med oss är den finaste gåvan. Vill du ändå ge oss något blir vi jätteglada för ett bidrag till vår bröllopsresa.",
    swishButton: "Swisha ett bidrag",
    speechTitle: "Tal & skålar",
    speechText: "Vill du hålla tal, sjunga en sång eller överraska oss med något under middagen? Våra toastmasters sätter ihop kvällens program.",
    speechSoon: "Vi lägger upp toastmasternas namn och kontaktuppgifter här snart.",
  },
  rsvp: {
    eyebrow: "Vi hoppas att du kan komma",
    title: "OSA",
    deadline: "Vänligen svara senast den 1 juni 2027",
    guestNames: "Gäster *",
    yourName: "Ditt för- och efternamn",
    guestName: (n: number) => `Gäst ${n}, för- och efternamn`,
    guestHeading: (n: number) => `Gäst ${n}`,
    fullName: "För- och efternamn",
    phone: "Telefon",
    addGuest: "Lägg till en gäst till",
    removeGuest: "Ta bort gäst",
    email: "E-post",
    emailPlaceholder: "din@epost.se",
    attending: "Kommer du/ni? *",
    chooseAttending: "Berätta om du kan komma",
    accept: "Ja, med glädje",
    decline: "Tyvärr inte",
    dietary: "Specialkost",
    dietaryPlaceholder: "Allergier eller andra kostbehov",
    pickup: "Upphämtning vid Västerås centralstation? *",
    pickupYes: "Ja tack",
    pickupNo: "Nej tack",
    carpool: "Har du plats i bilen för andra gäster?",
    carpoolYes: "Ja",
    carpoolNo: "Nej / kör inte",
    carpoolSeats: "Lediga platser",
    carpoolFrom: "Kör från",
    carpoolFromPlaceholder: "t.ex. Stockholm",
    message: "Hälsning till brudparet",
    messagePlaceholder: "Skriv en hälsning…",
    send: "Skicka svar",
    sending: "Skickar…",
    thankYou: "Tack!",
    recorded: "Vi har tagit emot ditt svar. Vi ser fram emot att fira med dig!",
    recordedDecline: "Vi har tagit emot ditt svar. Vi kommer att sakna dig – tack för att du hörde av dig.",
    needName: "Skriv minst ett gästnamn",
    notOpen: "OSA är inte öppet än",
    notOpenDescription: "Titta gärna in igen snart.",
    error: "Något gick fel",
    errorDescription: "Försök igen lite senare.",
  },
  footer: {
    date: "24 juli 2027 · Fiholm, Västerås",
    madeWith: "Gjord med kärlek inför den mest efterlängtade dagen",
    contact: "Frågor? Hör av dig",
  },
  notFound: {
    message: "Hoppsan! Sidan hittades inte",
    home: "Tillbaka till startsidan",
  },
};

const es: Translations = {
  pageTitle: "Louisa & Mattias — 24 de julio de 2027",
  gate: {
    prompt: "Ingresa la contraseña que te enviamos",
    placeholder: "Contraseña",
    open: "Abrir invitación",
    wrong: "La contraseña no es correcta. Inténtalo de nuevo.",
  },
  envelope: {
    invited: "Te invitamos",
    date: "24 de julio de 2027",
    opening: "Abriendo tu invitación…",
  },
  nav: {
    story: "Nuestra historia",
    schedule: "Itinerario",
    travel: "Viaje",
    faq: "Preguntas",
    photobook: "Álbum",
    gifts: "Regalos",
    rsvp: "Confirmar",
    menu: "Menú",
  },
  hero: {
    date: "Sábado 24 de julio de 2027",
    location: "Fiholm, Västerås, Suecia",
    photoAlt: "La mano de Louisa con el anillo de compromiso sobre el pecho de Mattias",
    rsvpCta: "Confirma hasta el 1 de junio",
  },
  countdown: { days: "Días", hours: "Horas", minutes: "Min", seconds: "Seg" },
  story: {
    eyebrow: "Cómo empezó todo",
    title: "Nuestra historia",
    milestones: [
      {
        year: "2019",
        title: "El primer encuentro",
        description:
          "Louisa y Mattias se conocieron en un campamento de verano en Ardingly, Inglaterra. Empezaron a conversar mientras estaban encerrados juntos en un escape room. Mattias pasó casi todo el campamento creyendo que Louisa se llamaba “Elenor” y hasta la mordió durante un partido de hockey con trapeadores, pero se redimió al quedarse sin su paseo a la playa para ayudarla a lavar los platos y al ganar un concurso de caballitos de palo con zapatos prestados. Su conexión quedó sellada una noche en la que miraron estrellas fugaces e intercambiaron piedras pintadas a mano.",
      },
      {
        year: "2020",
        title: "¡Por fin, oficial!",
        description:
          "Siguieron muy unidos durante todo el otoño y pasaban juntos cada fin de semana libre en Ekebyholm o Skogås. Mattias tuvo un sueño profético en el que se casaban. El año terminó con Louisa y Mattias recibiendo el Año Nuevo con amigos en una cabaña en el bosque. A las tres de la mañana se hicieron enamorados oficialmente.",
      },
      {
        year: "2021",
        title: "Dos ciudades, un nosotros",
        description:
          "Cuando Louisa se mudó a Linköping para estudiar en la universidad, su relación pasó a ser a distancia. Lo que daba miedo y dolía terminó trayéndoles nuevas amistades y una relación más fuerte.",
      },
    ],
  },
  schedule: {
    eyebrow: "La celebración",
    title: "Itinerario",
    mapLabel: "Mapa",
    groups: [
      {
        location: "Ruinas de la iglesia de Stora Rytterne",
        events: [
          {
            time: "3:00 p. m.",
            title: "Ceremonia",
          },
        ],
      },
      {
        location: "Orangería de Fiholm",
        events: [
          {
            time: "4:30 p. m.",
            title: "Cóctel",
          },
          {
            time: "6:00 p. m.",
            title: "Cena",
          },
          {
            time: "8:30 p. m.",
            title: "Baile",
          },
        ],
      },
    ],
  },
  travel: {
    eyebrow: "Cómo llegar",
    title: "Viaje y hospedaje",
    venueAlt: "Fiholm, cerca de Västerås, donde celebraremos",
    venueCaption: "Fiholm · Rytterne, Västerås, Suecia",
    info: [
      {
        title: "En tren",
        description: "El tren de la estación central de Estocolmo a la de Västerås demora alrededor de una hora. Compra tu pasaje en la app de SJ o en sj.se antes de subir, porque no se venden a bordo. Casi no hay buses hacia Rytterne, así que te recogemos en la estación central de Västerås: solo marca la opción al confirmar tu asistencia.",
      },
      {
        title: "En auto",
        description: "Fiholm está a unos 25 km al suroeste de Västerås, a unos 30 minutos en auto, y a 1 hora 45 minutos de Estocolmo. Toma la E18 y luego la carretera 56 hacia Kvicksund. Ingresa “Fiholm, 725 92 Västerås” en tu GPS, no “Fiholms slott” cerca de Eskilstuna, que es otro lugar.",
      },
    ],
    whereToStay: "Dónde hospedarse",
    bookLabel: "Reservar o ver más",
    accommodations: [
      {
        title: "Rytterne Kyrkskola",
        description: "Un acogedor B&B en la antigua escuela parroquial, el hospedaje más cercano.",
        detail: "A 5 minutos de Fiholm · desde 600 coronas por noche",
        url: "https://www.booking.com/hotel/se/rytterne-kyrkskola-bed-and-breakfast.html",
      },
      {
        title: "Thottska Villan, Strömsholm",
        description: "Una villa del siglo XVIII restaurada junto al palacio de Strömsholm, con desayuno incluido.",
        detail: "A 15 minutos de Fiholm · desde 1500 coronas por noche",
        url: "https://www.booking.com/hotel/se/thottska-villan.html",
      },
      {
        title: "Strömsholms Vandrarhem",
        description: "Un albergue acogedor cerca del palacio de Strömsholm, con habitaciones para una a cuatro personas.",
        detail: "A 15 minutos de Fiholm · desde 500 coronas por noche",
        url: "http://www.stromsholmsvandrarhem.com/kontakt-bokning",
      },
      {
        title: "Elite Stadshotellet Västerås",
        description: "Un elegante hotel de 1907 en la plaza principal, cerca de la estación.",
        detail: "A 30 minutos de Fiholm · desde 900 coronas por noche",
        url: "https://www.elite.se/en/hotels/vasteras/elite-stadshotellet-vasteras/",
      },
    ],
  },
  international: {
    toggle: "¿Viajas desde el extranjero?",
    intro: "¡Gracias por hacer este viaje tan largo para acompañarnos! Aquí tienes una guía sencilla desde el aeropuerto, pasando por Estocolmo, hasta nosotros.",
    beforeTitle: "Antes de viajar",
    before: [
      "Muchas nacionalidades pueden visitar Suecia por estadías cortas sin visa. Revisa los requisitos de ingreso de la UE (EES y ETIAS) en travel-europe.europa.eu.",
      "En Suecia casi no se usa efectivo: se paga con tarjeta o con el celular casi en todas partes.",
      "Los enchufes son de tipo europeo de dos clavijas (230 V), y el agua del caño es excelente para tomar.",
      "A fines de julio el sol se pone alrededor de las 9:40 p. m., así que las noches son claras hasta tarde.",
    ],
    steps: [
      {
        title: "Llegada a Arlanda",
        text: "Vuela al aeropuerto de Estocolmo-Arlanda (ARN), el principal aeropuerto internacional de Suecia, a unos 40 km al norte de la ciudad. El tren Arlanda Express llega en 18 minutos a la estación central de Estocolmo (unas 340 coronas; cada adulto adicional que viaje contigo paga unas 120 coronas y los menores de 18 años viajan gratis). El tren de cercanías SL (unas 200 coronas, 40 min) y el bus Flygbussarna (desde unas 129 coronas, 45 min) son más baratos.",
      },
      {
        title: "Conoce Estocolmo",
        text: "Fines de julio es una época linda para visitar, así que vale la pena quedarse unos días en Estocolmo antes de la boda.",
        columns: [
          {
            title: "Dónde hospedarte",
            items: [
              "Norrmalm, alrededor de la estación central: lo más práctico, porque de ahí salen los trenes al aeropuerto y a Västerås.",
              "Gamla Stan: el encantador casco antiguo medieval, a pocos minutos a pie de la estación central.",
              "Södermalm: relajado y creativo, con cafés, tiendas vintage y lindas vistas.",
              "Östermalm: elegante, con paseos junto al agua y el mercado gastronómico Östermalms Saluhall.",
            ],
          },
          {
            title: "Qué hacer",
            items: [
              "Recorre las calles empedradas de Gamla Stan y visita el Palacio Real.",
              "Visita el Museo Vasa y su barco de guerra del siglo XVII casi intacto.",
              "Pasa un día en la verde isla de Djurgården: el museo al aire libre Skansen, ABBA The Museum y el parque de diversiones Gröna Lund.",
              "Toma un barco hacia el archipiélago; Vaxholm es un paseo fácil de un día.",
              "Disfruta la vista de las noches de verano desde el mirador Monteliusvägen, en Södermalm.",
              "Mira fotografía con vista al mar en Fotografiska, o arte moderno en el Moderna Museet.",
            ],
          },
        ],
      },
      {
        title: "El gran día",
        text: "Cuando llegue el gran día, así puedes llegar desde Estocolmo hasta nosotros:",
      },
    ],
  },
  faq: {
    eyebrow: "Dudas frecuentes",
    title: "Preguntas frecuentes",
    items: [
      {
        question: "¿Cuál es el código de vestimenta?",
        answer: "Formal, como en una boda típica en Suecia: terno, enterizo, vestido o lo que te haga sentir bien. ¡Los colores veraniegos son muy bienvenidos!",
      },
      {
        question: "¿Puedo ir con acompañante?",
        answer: "Lamentablemente no podemos recibir acompañantes adicionales. Todas las personas invitadas aparecen con su nombre en el mensaje en el que te enviamos el enlace a esta página.",
      },
      {
        question: "¿Los niños están invitados?",
        answer: "Los niños que aparecen con su nombre en la invitación son muy bienvenidos. Fuera de ellos, hemos decidido que la boda sea solo para adultos; esperamos que lo entiendas.",
      },
      {
        question: "¿Habrá transporte hasta el local?",
        answer: "Con gusto te recogemos en la estación central de Västerås: marca la opción de recojo al confirmar tu asistencia y te escribiremos con los horarios cuando se acerque la fecha. Fiholm está en pleno campo y casi no hay transporte público, así que si llegas por tu cuenta te recomendamos reservar un taxi con anticipación. La fiesta terminará tarde. Al final de la noche habrá movilidad hacia la estación central de Västerås, o puedes pedir un Uber o un taxi.",
      },
      {
        question: "¿Y si tengo alguna restricción alimentaria?",
        answer:
          "Indícanos cualquier dieta especial o alergia al confirmar tu asistencia, y nuestro chef con gusto se encargará de atenderte.",
      },
      {
        question: "¿Hay estacionamiento?",
        answer: "Sí, hay estacionamiento tanto en las ruinas de la iglesia como en Fiholm. Como están a solo cinco minutos, te animamos a compartir el auto.",
      },
      {
        question: "¿Y si llueve?",
        answer: "Si llueve, la ceremonia se trasladará al interior de Fiholm, así que será linda llueva o no.",
      },
    ],
  },
  photobook: {
    eyebrow: "A lo largo de los años",
    title: "Nuestro álbum",
    previous: "Página anterior",
    next: "Página siguiente",
  },
  gifts: {
    eyebrow: "Con gratitud",
    title: "Regalos y brindis",
    giftTitle: "Nuestra luna de miel",
    giftText: "Tu presencia en nuestra boda es el mejor regalo. Si deseas obsequiarnos algo, te agradeceríamos mucho un aporte para nuestra luna de miel.",
    swishButton: "Aportar con Swish",
    speechTitle: "Discursos y brindis",
    speechText: "¿Te gustaría dar un discurso, cantar una canción o sorprendernos con algo durante la cena? Nuestros maestros de ceremonia van a armar el programa de la noche.",
    speechSoon: "Muy pronto publicaremos aquí sus nombres y datos de contacto.",
  },
  rsvp: {
    eyebrow: "Esperamos que puedas acompañarnos",
    title: "Confirma tu asistencia",
    deadline: "Por favor, confirma hasta el 1 de junio de 2027",
    guestNames: "Invitados *",
    yourName: "Tu nombre completo",
    guestName: (n: number) => `Nombre completo del invitado ${n}`,
    guestHeading: (n: number) => `Invitado ${n}`,
    fullName: "Nombre completo",
    phone: "Celular",
    addGuest: "Agregar otro invitado",
    removeGuest: "Quitar invitado",
    email: "Correo electrónico",
    emailPlaceholder: "tu@correo.com",
    attending: "¿Nos acompañarás? *",
    chooseAttending: "Cuéntanos si podrás acompañarnos",
    accept: "Con mucho gusto asistiré",
    decline: "Lamentablemente, no podré asistir",
    dietary: "Restricciones alimentarias",
    dietaryPlaceholder: "Alergias o necesidades alimentarias",
    pickup: "¿Quieres que te recojamos en la estación central de Västerås? *",
    pickupYes: "Sí, por favor",
    pickupNo: "No, gracias",
    carpool: "¿Tienes espacio en tu auto para llevar a otros invitados?",
    carpoolYes: "Sí",
    carpoolNo: "No / no voy en auto",
    carpoolSeats: "Asientos libres",
    carpoolFrom: "Sales desde",
    carpoolFromPlaceholder: "p. ej. Estocolmo",
    message: "Un mensaje para los novios",
    messagePlaceholder: "Escribe tus buenos deseos…",
    send: "Enviar respuesta",
    sending: "Enviando…",
    thankYou: "¡Gracias!",
    recorded: "Recibimos tu respuesta. ¡Qué ganas de celebrar contigo!",
    recordedDecline: "Recibimos tu respuesta. Te vamos a extrañar; gracias por avisarnos.",
    needName: "Ingresa al menos el nombre de un invitado",
    notOpen: "La confirmación todavía no está disponible",
    notOpenDescription: "Vuelve a visitarnos pronto.",
    error: "Algo salió mal",
    errorDescription: "Por favor, inténtalo nuevamente más tarde.",
  },
  footer: {
    date: "24 de julio de 2027 · Fiholm, Västerås",
    madeWith: "Hecho con amor para el día más esperado",
    contact: "¿Preguntas? Escríbenos",
  },
  notFound: {
    message: "¡Ups! No encontramos esta página",
    home: "Volver al inicio",
  },
};

export const translations = { sv, en, es };
export type Language = keyof typeof translations;

// Shown in the language switcher, in this order
export const languageNames: Record<Language, string> = {
  sv: "Svenska",
  en: "English",
  es: "Español",
};
