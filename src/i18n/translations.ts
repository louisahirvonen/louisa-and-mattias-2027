// All text on the site, in every language. Lists (milestones, events, FAQ, ...)
// must have the same number of items, in the same order, in every language.

const en = {
  pageTitle: "Louisa & Mattias — July 24, 2027",
  envelope: {
    invited: "You are invited",
    date: "July 24th, 2027",
    opening: "Opening your invitation…",
  },
  nav: {
    home: "Home",
    story: "Our Story",
    schedule: "Schedule",
    travel: "Travel",
    faq: "FAQ",
    photobook: "Photobook",
    rsvp: "RSVP",
    menu: "Menu",
  },
  hero: {
    date: "Saturday, July 24th, 2027",
    location: "Fiholm, Västerås, Sweden",
    photoAlt: "Louisa's hand with engagement ring on Mattias' chest",
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
    title: "Schedule of Events",
    events: [
      {
        time: "3:00 PM",
        title: "Ceremony",
        location: "Stora Rytterne church ruin",
        description: "Join us as we exchange our vows below the arch of Rytterne church ruin.",
      },
      {
        time: "4:30 PM",
        title: "Cocktail Hour",
        location: "The Orangery at Fiholm",
        description: "Enjoy champagne, hors d'oeuvres, and mingling.",
      },
      {
        time: "6:00 PM",
        title: "Dinner Reception",
        location: "The Orangery at Fiholm",
        description: "A candlelit evening of fine dining, heartfelt toasts, and the company of loved ones.",
      },
      {
        time: "8:30 PM",
        title: "Dancing Begins",
        location: "The Orangery at Fiholm",
        description:
          "The orchestra strikes up for our first dance — and then the floor is yours for an evening of joy and celebration.",
      },
    ],
  },
  travel: {
    eyebrow: "Getting There",
    title: "Travel & Accommodations",
    venueAlt: "Fiholm Manor near Västerås, where we celebrate",
    venueCaption: "Fiholm Manor · Rytterne, Västerås, Sweden",
    // Same order as the icons in TravelAccommodations: train, car, address
    info: [
      {
        title: "By Train",
        description: "Trains run regularly from Stockholm Central to Västerås Central (about 55 minutes). From Stockholm Arlanda Airport, change trains at Stockholm Central and allow 1½–2 hours in total. There are hardly any buses out to Rytterne, so we will happily collect you from Västerås Central: just tick the box when you RSVP.",
      },
      {
        title: "By Car",
        description: "Fiholm lies about 25 km southwest of Västerås, around 30 minutes by car, and about 1 hour 45 minutes from Stockholm. Take the E18, then road 56 towards Kvicksund. Set your navigation to “Fiholm, 725 92 Västerås”, not Fiholms slott near Eskilstuna, which is a different place.",
      },
      {
        title: "Addresses",
        description: "Ceremony: Stora Rytterne church ruin, Rytterne, Västerås. Celebration: The Orangery, Fiholm, 725 92 Västerås. The two are only 3 km apart, about five minutes by car.",
        links: [
          {
            label: "Church ruin on the map",
            url: "https://www.google.com/maps/search/?api=1&query=59.5128,16.3428",
          },
          {
            label: "Fiholm on the map",
            url: "https://www.google.com/maps/search/?api=1&query=59.4892,16.3656",
          },
        ],
      },
    ],
    whereToStay: "Where to Stay",
    accommodations: [
      {
        title: "Thottska Villan, Strömsholm",
        description: "A lovingly restored 18th-century villa by Strömsholm Palace, with breakfast included and a peaceful countryside setting.",
        detail: "About 15 minutes from Fiholm · from approx. 1,500 SEK/night",
      },
      {
        title: "Elite Stadshotellet Västerås",
        description: "A grand Art Nouveau hotel from 1907 on the main square in Västerås, a short walk from the station where our guest pickup leaves from.",
        detail: "Central Västerås · about 30 minutes from Fiholm · approx. 900–1,600 SEK/night",
      },
      {
        title: "Comfort Hotel Västerås",
        description: "A simple, good-value hotel right next to Västerås Central Station, handy if you are arriving by train.",
        detail: "By the station · about 30 minutes from Fiholm",
      },
    ],
  },
  faq: {
    eyebrow: "Common Questions",
    title: "Frequently Asked",
    items: [
      {
        question: "What is the dress code?",
        answer:
          "Regency-era formal attire is encouraged! Think elegant gowns, tailcoats, cravats, and empire-waist dresses. Soft pastels and florals are especially welcome. If you prefer modern formal wear, that is perfectly acceptable as well.",
      },
      {
        question: "Can I bring a plus one?",
        answer:
          "Your invitation will specify if you have been allocated a plus one. If you have any questions, please do not hesitate to reach out to us directly.",
      },
      {
        question: "Are children welcome?",
        answer:
          "While we adore your little ones, we have chosen to make our wedding an adults-only celebration. We hope you understand and enjoy the evening!",
      },
      {
        question: "Will there be transport to the venue?",
        answer: "We would be delighted to collect you from Västerås Central Station. Just tick the pickup box when you RSVP and we will be in touch with times closer to the day. Fiholm lies in quiet countryside with very little public transport, so if you are making your own way, please book a taxi in advance.",
      },
      {
        question: "What about dietary requirements?",
        answer:
          "Please let us know of any dietary requirements or allergies when you RSVP, and our chef will be delighted to accommodate you.",
      },
      {
        question: "Can I take photos during the ceremony?",
        answer:
          "We kindly ask that our ceremony be an unplugged event. Our photographer will capture every moment. You are welcome to take photos during the reception!",
      },
      {
        question: "Is there parking?",
        answer: "We will share parking details for the church ruin and Fiholm closer to the day. As the ceremony and the celebration are only five minutes apart, we warmly encourage car-sharing. Sweden's drink-driving limit is very strict (0.2‰), so please plan for a sober driver, a taxi or our pickup.",
      },
      {
        question: "I'm travelling from abroad. Anything I should know?",
        answer: "Fly into Stockholm Arlanda (ARN) and take the train to Västerås via Stockholm Central (about 1½–2 hours). In July, Sweden is 7 hours ahead of Peru. Cards are accepted almost everywhere, and many places don't take cash at all. Citizens of many countries, including Peru, the UK and the US, don't need a visa for short stays, but please check before you travel whether the EU's new ETIAS travel authorisation has started: travel-europe.europa.eu/etias.",
      },
    ],
  },
  photobook: {
    eyebrow: "Through the Years",
    title: "Our Photobook",
    photo: "Photo",
    coverTitle: "Our Memories",
    coverSubtitle: "A collection of moments that led us here",
    captions: [
      "Summer 2019 — The garden party where it all began",
      "Autumn 2020 — A quiet afternoon in the park",
      "Christmas 2020 — Our first holiday together",
      "Spring 2022 — The promenade through Hyde Park",
      "Summer 2022 — A weekend in the Cotswolds",
      "Winter 2023 — Dancing at the New Year's ball",
      "Spring 2024 — Tea at the manor",
      "Autumn 2025 — The night he proposed",
    ],
    endTitle: "To Be Continued...",
    endSubtitle: "July 24th, 2027",
    previous: "Previous page",
    next: "Next page",
  },
  rsvp: {
    eyebrow: "We Hope You Can Join Us",
    title: "RSVP",
    deadline: "Kindly respond by June 1st, 2027",
    guestNames: "Guest Names *",
    yourName: "Your full name",
    guestName: (n: number) => `Guest ${n} full name`,
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
  },
  notFound: {
    message: "Oops! Page not found",
    home: "Return to Home",
  },
};

export type Translations = typeof en;

const sv: Translations = {
  pageTitle: "Louisa & Mattias — 24 juli 2027",
  envelope: {
    invited: "Du är inbjuden",
    date: "24 juli 2027",
    opening: "Öppnar din inbjudan…",
  },
  nav: {
    home: "Hem",
    story: "Vår historia",
    schedule: "Program",
    travel: "Resa",
    faq: "Frågor",
    photobook: "Fotobok",
    rsvp: "OSA",
    menu: "Meny",
  },
  hero: {
    date: "Lördag 24 juli 2027",
    location: "Fiholm, Västerås",
    photoAlt: "Louisas hand med förlovningsringen mot Mattias bröst",
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
    events: [
      {
        time: "15.00",
        title: "Vigsel",
        location: "Stora Rytterne kyrkoruin",
        description: "Var med när vi säger ja till varandra under valvet i Rytterne kyrkoruin.",
      },
      {
        time: "16.30",
        title: "Mingel",
        location: "Fiholms orangeri",
        description: "Njut av champagne, tilltugg och mingel.",
      },
      {
        time: "18.00",
        title: "Middag",
        location: "Fiholms orangeri",
        description: "En kväll i levande ljus med god mat, varma tal och nära och kära.",
      },
      {
        time: "20.30",
        title: "Dansen börjar",
        location: "Fiholms orangeri",
        description: "Orkestern spelar upp till vår första dans – sedan är dansgolvet ert för en kväll full av glädje och fest.",
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
        description: "Tåg går regelbundet från Stockholm C till Västerås C (cirka 55 minuter). Från Arlanda byter du tåg i Stockholm C – räkna med 1,5–2 timmar totalt. Det går nästan inga bussar ut till Rytterne, så vi hämtar dig gärna vid Västerås C – kryssa bara i rutan när du OSA:r.",
      },
      {
        title: "Med bil",
        description: "Fiholm ligger cirka 2,5 mil sydväst om Västerås, ungefär 30 minuter med bil och 1 timme 45 minuter från Stockholm. Ta E18 och sedan väg 56 mot Kvicksund. Ställ in navigationen på ”Fiholm, 725 92 Västerås” – inte Fiholms slott vid Eskilstuna, som är en helt annan plats.",
      },
      {
        title: "Adresser",
        description: "Vigsel: Stora Rytterne kyrkoruin, Rytterne, Västerås. Fest: Orangeriet, Fiholm, 725 92 Västerås. Det är bara 3 km mellan dem – ungefär fem minuter med bil.",
        links: [
          {
            label: "Kyrkoruinen på kartan",
            url: "https://www.google.com/maps/search/?api=1&query=59.5128,16.3428",
          },
          {
            label: "Fiholm på kartan",
            url: "https://www.google.com/maps/search/?api=1&query=59.4892,16.3656",
          },
        ],
      },
    ],
    whereToStay: "Boende",
    accommodations: [
      {
        title: "Thottska Villan, Strömsholm",
        description: "En varsamt renoverad 1700-talsvilla vid Strömsholms slott, med frukost och lugn landsbygdsmiljö.",
        detail: "Cirka 15 minuter från Fiholm · från ca 1 500 kr/natt",
      },
      {
        title: "Elite Stadshotellet Västerås",
        description: "Anrikt jugendhotell från 1907 vid Stora torget, en kort promenad från stationen där vår upphämtning utgår.",
        detail: "Centrala Västerås · cirka 30 minuter från Fiholm · ca 900–1 600 kr/natt",
      },
      {
        title: "Comfort Hotel Västerås",
        description: "Enkelt och prisvärt hotell precis vid Västerås centralstation – smidigt om du kommer med tåg.",
        detail: "Vid stationen · cirka 30 minuter från Fiholm",
      },
    ],
  },
  faq: {
    eyebrow: "Vanliga frågor",
    title: "Frågor & svar",
    items: [
      {
        question: "Vilken är klädkoden?",
        answer:
          "Vi uppmuntrar högtidsklädsel i regencystil! Tänk eleganta klänningar, frack, kravatter och klänningar med empirelinje. Mjuka pasteller och blommönster är extra välkomna. Föredrar du modern högtidsklädsel går det precis lika bra.",
      },
      {
        question: "Får jag ta med mig någon?",
        answer:
          "Det framgår av din inbjudan om du får ta med dig någon. Har du frågor är du varmt välkommen att höra av dig direkt till oss.",
      },
      {
        question: "Är barn välkomna?",
        answer:
          "Hur mycket vi än älskar era små har vi valt att ha ett bröllop för enbart vuxna. Vi hoppas att ni förstår och får en härlig kväll!",
      },
      {
        question: "Ordnas det transport till festen?",
        answer: "Vi hämtar dig gärna vid Västerås centralstation – kryssa i rutan för upphämtning när du OSA:r, så hör vi av oss med tider närmare dagen. Fiholm ligger lugnt på landet med väldigt lite kollektivtrafik, så tar du dig dit själv rekommenderar vi att du förbokar taxi.",
      },
      {
        question: "Hur gör jag med specialkost?",
        answer: "Berätta om specialkost eller allergier när du OSA:r, så ordnar vår kock gärna något som passar dig.",
      },
      {
        question: "Får jag fotografera under vigseln?",
        answer:
          "Vi ber vänligen om en mobilfri vigsel. Vår fotograf fångar varje ögonblick. Under festen får du gärna ta så många bilder du vill!",
      },
      {
        question: "Finns det parkering?",
        answer: "Vi skickar information om parkering vid kyrkoruinen och på Fiholm närmare dagen. Eftersom vigseln och festen bara ligger fem minuter från varandra uppmuntrar vi samåkning. Kom ihåg att gränsen för rattfylleri är 0,2 promille – planera för en nykter chaufför, taxi eller vår upphämtning.",
      },
      {
        question: "Jag reser från utlandet – vad behöver jag veta?",
        answer: "Flyg till Stockholm Arlanda (ARN) och ta tåget till Västerås via Stockholm C (cirka 1,5–2 timmar). I juli ligger Sverige 7 timmar före Peru. Kort fungerar nästan överallt och många ställen tar inte kontanter alls. Medborgare i bland annat Peru, Storbritannien och USA behöver inget visum för kortare besök, men kolla före resan om EU:s nya inresetillstånd ETIAS har börjat gälla: travel-europe.europa.eu/etias.",
      },
    ],
  },
  photobook: {
    eyebrow: "Genom åren",
    title: "Vår fotobok",
    photo: "Foto",
    coverTitle: "Våra minnen",
    coverSubtitle: "Ögonblicken som ledde oss hit",
    captions: [
      "Sommaren 2019 — Trädgårdsfesten där allt började",
      "Hösten 2020 — En lugn eftermiddag i parken",
      "Julen 2020 — Vår första jul tillsammans",
      "Våren 2022 — Promenaden genom Hyde Park",
      "Sommaren 2022 — En helg i Cotswolds",
      "Vintern 2023 — Dans på nyårsbalen",
      "Våren 2024 — Te på herrgården",
      "Hösten 2025 — Kvällen då han friade",
    ],
    endTitle: "Fortsättning följer…",
    endSubtitle: "24 juli 2027",
    previous: "Föregående sida",
    next: "Nästa sida",
  },
  rsvp: {
    eyebrow: "Vi hoppas att du kan komma",
    title: "OSA",
    deadline: "Vänligen svara senast den 1 juni 2027",
    guestNames: "Gästernas namn *",
    yourName: "Ditt för- och efternamn",
    guestName: (n: number) => `Gäst ${n}, för- och efternamn`,
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
  },
  notFound: {
    message: "Hoppsan! Sidan hittades inte",
    home: "Tillbaka till startsidan",
  },
};

const es: Translations = {
  pageTitle: "Louisa & Mattias — 24 de julio de 2027",
  envelope: {
    invited: "Te invitamos",
    date: "24 de julio de 2027",
    opening: "Abriendo tu invitación…",
  },
  nav: {
    home: "Inicio",
    story: "Nuestra historia",
    schedule: "Itinerario",
    travel: "Viaje",
    faq: "Preguntas",
    photobook: "Álbum",
    rsvp: "Confirmar",
    menu: "Menú",
  },
  hero: {
    date: "Sábado 24 de julio de 2027",
    location: "Fiholm, Västerås, Suecia",
    photoAlt: "La mano de Louisa con el anillo de compromiso sobre el pecho de Mattias",
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
    title: "Itinerario del día",
    events: [
      {
        time: "3:00 p. m.",
        title: "Ceremonia",
        location: "Ruinas de la iglesia de Stora Rytterne",
        description: "Acompáñanos a darnos el “sí, acepto” bajo el arco de las ruinas de la iglesia de Rytterne.",
      },
      {
        time: "4:30 p. m.",
        title: "Cóctel",
        location: "Orangería de Fiholm",
        description: "Disfruta de champaña, bocaditos y buena compañía.",
      },
      {
        time: "6:00 p. m.",
        title: "Cena",
        location: "Orangería de Fiholm",
        description: "Una velada a la luz de las velas con una cena especial, brindis emotivos y la compañía de nuestros seres queridos.",
      },
      {
        time: "8:30 p. m.",
        title: "Comienza el baile",
        location: "Orangería de Fiholm",
        description: "La orquesta tocará nuestro primer baile y, después, la pista será de todos para una noche de alegría y celebración.",
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
        description: "Hay trenes frecuentes desde la estación central de Estocolmo hasta la estación central de Västerås (unos 55 minutos). Desde el aeropuerto de Arlanda, cambia de tren en la estación central de Estocolmo; calcula entre 1 h 30 min y 2 horas en total. Casi no hay buses hacia Rytterne, así que con gusto te recogemos en la estación central de Västerås: solo marca la opción al confirmar tu asistencia.",
      },
      {
        title: "En auto",
        description: "Fiholm está a unos 25 km al suroeste de Västerås, a unos 30 minutos en auto, y a 1 hora 45 minutos de Estocolmo. Toma la E18 y luego la carretera 56 hacia Kvicksund. Ingresa “Fiholm, 725 92 Västerås” en tu GPS, no “Fiholms slott” cerca de Eskilstuna, que es otro lugar.",
      },
      {
        title: "Direcciones",
        description: "Ceremonia: ruinas de la iglesia de Stora Rytterne, Rytterne, Västerås. Celebración: la Orangería, Fiholm, 725 92 Västerås. Están a solo 3 km de distancia, unos cinco minutos en auto.",
        links: [
          {
            label: "Ver las ruinas en el mapa",
            url: "https://www.google.com/maps/search/?api=1&query=59.5128,16.3428",
          },
          {
            label: "Ver Fiholm en el mapa",
            url: "https://www.google.com/maps/search/?api=1&query=59.4892,16.3656",
          },
        ],
      },
    ],
    whereToStay: "Dónde hospedarse",
    accommodations: [
      {
        title: "Thottska Villan, Strömsholm",
        description: "Una villa del siglo XVIII restaurada con mucho cariño junto al palacio de Strömsholm, con desayuno incluido y un entorno campestre muy tranquilo.",
        detail: "A unos 15 minutos de Fiholm · desde aprox. 1500 coronas suecas por noche",
      },
      {
        title: "Elite Stadshotellet Västerås",
        description: "Un elegante hotel art nouveau de 1907 en la plaza principal de Västerås, a pocos minutos a pie de la estación desde donde sale nuestro recojo.",
        detail: "Centro de Västerås · a unos 30 minutos de Fiholm · aprox. 900–1600 coronas suecas por noche",
      },
      {
        title: "Comfort Hotel Västerås",
        description: "Un hotel sencillo y económico justo al lado de la estación central de Västerås, ideal si llegas en tren.",
        detail: "Junto a la estación · a unos 30 minutos de Fiholm",
      },
    ],
  },
  faq: {
    eyebrow: "Dudas frecuentes",
    title: "Preguntas frecuentes",
    items: [
      {
        question: "¿Cuál es el código de vestimenta?",
        answer:
          "¡Te animamos a venir de gala al estilo de la época de la Regencia! Imagina vestidos largos elegantes, fracs, pañuelos de cuello y vestidos de corte imperio. Los tonos pastel y los estampados florales son especialmente bienvenidos. Si prefieres un atuendo formal moderno, también es totalmente válido.",
      },
      {
        question: "¿Puedo ir con acompañante?",
        answer:
          "En tu invitación se indicará si puedes ir con acompañante. Si tienes alguna pregunta, no dudes en escribirnos directamente.",
      },
      {
        question: "¿Los niños están invitados?",
        answer:
          "Aunque adoramos a tus pequeños, hemos decidido que nuestra boda sea una celebración solo para adultos. ¡Esperamos que lo entiendas y disfrutes de la noche!",
      },
      {
        question: "¿Habrá transporte hasta el local?",
        answer: "Con gusto te recogemos en la estación central de Västerås: marca la opción de recojo al confirmar tu asistencia y te escribiremos con los horarios cuando se acerque la fecha. Fiholm está en pleno campo y casi no hay transporte público, así que si llegas por tu cuenta te recomendamos reservar un taxi con anticipación.",
      },
      {
        question: "¿Y si tengo alguna restricción alimentaria?",
        answer:
          "Indícanos cualquier dieta especial o alergia al confirmar tu asistencia, y nuestro chef con gusto se encargará de atenderte.",
      },
      {
        question: "¿Puedo tomar fotos durante la ceremonia?",
        answer:
          "Te pedimos amablemente que la ceremonia sea sin celulares. Nuestro fotógrafo capturará cada momento. ¡Durante la recepción puedes tomar todas las fotos que quieras!",
      },
      {
        question: "¿Hay estacionamiento?",
        answer: "Te enviaremos los detalles del estacionamiento en las ruinas y en Fiholm cuando se acerque la fecha. Como la ceremonia y la celebración están a solo cinco minutos, te animamos a compartir el auto. En Suecia el límite de alcohol para manejar es muy estricto (0,2 g/l), así que planifica un conductor designado, un taxi o nuestro recojo.",
      },
      {
        question: "Viajo desde el extranjero, ¿qué debo saber?",
        answer: "Vuela al aeropuerto de Estocolmo-Arlanda (ARN) y toma el tren a Västerås vía la estación central de Estocolmo (entre 1 h 30 min y 2 horas). En julio, Suecia está 7 horas adelante de Perú. Se paga con tarjeta casi en todas partes y muchos lugares ya no aceptan efectivo. Los peruanos no necesitan visa para estadías cortas (hasta 90 días), pero antes de viajar revisa si ya está vigente el nuevo permiso de viaje ETIAS de la Unión Europea: travel-europe.europa.eu/etias. Tu pasaporte debe tener al menos 3 meses de vigencia después de la fecha de tu regreso.",
      },
    ],
  },
  photobook: {
    eyebrow: "A lo largo de los años",
    title: "Nuestro álbum",
    photo: "Foto",
    coverTitle: "Nuestros recuerdos",
    coverSubtitle: "Momentos que nos trajeron hasta aquí",
    captions: [
      "Verano de 2019 — La fiesta en el jardín donde empezó todo",
      "Otoño de 2020 — Una tarde tranquila en el parque",
      "Navidad de 2020 — Nuestra primera Navidad juntos",
      "Primavera de 2022 — El paseo por Hyde Park",
      "Verano de 2022 — Un fin de semana en los Cotswolds",
      "Invierno de 2023 — Bailando en la fiesta de Año Nuevo",
      "Primavera de 2024 — Hora del té en la mansión",
      "Otoño de 2025 — La noche de la propuesta",
    ],
    endTitle: "Continuará…",
    endSubtitle: "24 de julio de 2027",
    previous: "Página anterior",
    next: "Página siguiente",
  },
  rsvp: {
    eyebrow: "Esperamos que puedas acompañarnos",
    title: "Confirma tu asistencia",
    deadline: "Por favor, confirma hasta el 1 de junio de 2027",
    guestNames: "Nombres de los invitados *",
    yourName: "Tu nombre completo",
    guestName: (n: number) => `Nombre completo del invitado ${n}`,
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
