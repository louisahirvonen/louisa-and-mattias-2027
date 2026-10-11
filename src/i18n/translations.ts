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
        location: "Stora Rytterne Kyrkoruin",
        description: "Join us as we exchange our vows below the arch of Rytterne church ruin.",
      },
      {
        time: "4:30 PM",
        title: "Cocktail Hour",
        location: "Fiholm orangeri",
        description: "Enjoy champagne, hors d'oeuvres, and mingling.",
      },
      {
        time: "6:00 PM",
        title: "Dinner Reception",
        location: "Fiholm orangeri",
        description: "A candlelit evening of fine dining, heartfelt toasts, and the company of loved ones.",
      },
      {
        time: "8:30 PM",
        title: "Dancing Begins",
        location: "Fiholm orangeri",
        description:
          "The orchestra strikes up for our first dance — and then the floor is yours for an evening of joy and celebration.",
      },
    ],
  },
  travel: {
    eyebrow: "Getting There",
    title: "Travel & Accommodations",
    venueAlt: "Fiholm Manor — the wedding venue",
    venueCaption: "Fiholm Manor · Västerås, Sweden",
    // Same order as the icons in TravelAccommodations: train, car, address
    info: [
      {
        title: "By Public Transport",
        description: "Pickup from Västerås Centralstation is available on request — just let us know when you RSVP.",
      },
      {
        title: "By Car",
        description:
          "Thornfield Manor is located just off the A44 between Chipping Norton and Moreton-in-Marsh. Ample parking is available on site.",
      },
      {
        title: "Address",
        description: "Thornfield Manor, Chipping Norton Road, Cotswolds, Oxfordshire OX7 5YH, England",
      },
    ],
    whereToStay: "Where to Stay",
    accommodations: [
      {
        title: "Thornfield Manor Guest Rooms",
        description: "A limited number of rooms are available on the estate grounds. Contact us for availability and booking.",
        detail: "From £250/night",
      },
      {
        title: "The Cotswold Arms Inn",
        description: "A charming country inn just 5 minutes from the venue. We have reserved a block of rooms at a special rate.",
        detail: "Use code ELEANOR&BENEDICT",
      },
      {
        title: "The Lavender House B&B",
        description: "A lovely bed and breakfast in the nearby village of Chipping Norton with beautiful garden views.",
        detail: "From £120/night",
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
        question: "Will there be transportation from the hotels?",
        answer:
          "Yes! We will be arranging horse-drawn carriages (weather permitting) and shuttle buses between the recommended hotels and Thornfield Manor.",
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
        question: "Is there parking at the venue?",
        answer: "Yes, complimentary parking is available on the manor grounds. Please follow the signs upon arrival.",
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
    venueAlt: "Fiholms slott – platsen för bröllopet",
    venueCaption: "Fiholms slott · Västerås",
    info: [
      {
        title: "Med kollektivtrafik",
        description: "Vi kan hämta upp dig vid Västerås centralstation – säg bara till när du OSA:r.",
      },
      {
        title: "Med bil",
        description:
          "Thornfield Manor ligger precis vid A44 mellan Chipping Norton och Moreton-in-Marsh. Det finns gott om parkering på plats.",
      },
      {
        title: "Adress",
        description: "Thornfield Manor, Chipping Norton Road, Cotswolds, Oxfordshire OX7 5YH, England",
      },
    ],
    whereToStay: "Boende",
    accommodations: [
      {
        title: "Gästrum på Thornfield Manor",
        description: "Ett begränsat antal rum finns på godset. Hör av dig till oss för tillgänglighet och bokning.",
        detail: "Från 250 £/natt",
      },
      {
        title: "The Cotswold Arms Inn",
        description: "Ett charmigt värdshus på landet bara 5 minuter från festplatsen. Vi har reserverat ett antal rum till specialpris.",
        detail: "Använd koden ELEANOR&BENEDICT",
      },
      {
        title: "The Lavender House B&B",
        description: "Ett mysigt bed and breakfast i den närliggande byn Chipping Norton med vacker utsikt över trädgården.",
        detail: "Från 120 £/natt",
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
        question: "Ordnas det transport från hotellen?",
        answer:
          "Ja! Vi ordnar hästdroskor (om vädret tillåter) och bussar mellan de rekommenderade hotellen och Thornfield Manor.",
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
        answer: "Ja, det finns kostnadsfri parkering på slottsområdet. Följ skyltarna när du kommer fram.",
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
    attending: "Kommer du? *",
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
    venueAlt: "Castillo de Fiholm, el lugar de la boda",
    venueCaption: "Castillo de Fiholm · Västerås, Suecia",
    info: [
      {
        title: "En transporte público",
        description: "Podemos recogerte en la estación central de Västerås si lo necesitas; solo indícalo al confirmar tu asistencia.",
      },
      {
        title: "En auto",
        description:
          "Thornfield Manor está muy cerca de la carretera A44, entre Chipping Norton y Moreton-in-Marsh. Hay amplio estacionamiento en el lugar.",
      },
      {
        title: "Dirección",
        description: "Thornfield Manor, Chipping Norton Road, Cotswolds, Oxfordshire OX7 5YH, Inglaterra",
      },
    ],
    whereToStay: "Dónde hospedarse",
    accommodations: [
      {
        title: "Habitaciones en Thornfield Manor",
        description: "Hay un número limitado de habitaciones dentro de la propiedad. Escríbenos para consultar la disponibilidad y hacer tu reserva.",
        detail: "Desde £250 por noche",
      },
      {
        title: "The Cotswold Arms Inn",
        description: "Una encantadora posada campestre a solo 5 minutos del local de la boda. Hemos reservado varias habitaciones con una tarifa especial.",
        detail: "Usa el código ELEANOR&BENEDICT",
      },
      {
        title: "The Lavender House B&B",
        description: "Un lindo bed & breakfast en el pueblo cercano de Chipping Norton, con hermosas vistas al jardín.",
        detail: "Desde £120 por noche",
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
        question: "¿Habrá transporte desde los hoteles?",
        answer:
          "¡Sí! Organizaremos carruajes tirados por caballos (si el clima lo permite) y buses de traslado entre los hoteles recomendados y Thornfield Manor.",
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
        answer: "Sí, hay estacionamiento gratuito dentro de la propiedad. Sigue la señalización al llegar.",
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
