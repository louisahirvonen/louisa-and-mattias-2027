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
    calendarButton: "Add to calendar",
    calendarAndroidNext: "Add the RSVP date",
    calendarDone: "Added to calendar",
    calendarOther: "Using another calendar?",
    calendarIntro: "Adds the wedding and the RSVP deadline to your calendar, with reminders.",
    calendarApple: "iPhone, iPad, Mac or Outlook",
    calendarGoogle: "Google Calendar (Android)",
    calendarGoogleWedding: "The wedding · July 24",
    calendarGoogleRsvp: "RSVP deadline · June 1",
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
      // Placeholders for 2023, 2024 and 2027 below: edit freely
      {
        year: "2023",
        title: "The Proposal",
        description:
          "On 14 October 2023, in Kyoto, Japan, Mattias asked Louisa to marry him. She said yes.",
      },
      {
        year: "2024",
        title: "Home Together",
        description:
          "In 2024 they moved in together and made their first home.",
      },
      {
        year: "2027",
        title: "The Wedding",
        description:
          "On 24 July 2027 they'll say yes once again, surrounded by family and friends, at Stora Rytterne church ruin and Fiholm.",
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
        description: "SJ trains run from Stockholm Central to Västerås Central (travel time: 1 h). We'll arrange pickup from the station – just tick the box when you RSVP. Please book a train that arrives at the station before 2 pm.",
      },
      {
        title: "By Car",
        description: "Driving to Fiholm takes about 1 h 30 min from Stockholm. Set your navigation to “Fiholm, 725 92 Västerås”, not Fiholms slott near Eskilstuna, which is a different place.",
      },
    ],
    whereToStay: "Where to Stay",
    bookLabel: "Book or read more",
    accommodations: [
      {
        title: "Rytterne Kyrkskola",
        description: "A cosy B&B in the old church school, the closest place to stay.",
        detail: "5 minutes from Fiholm · from 600 SEK/night",
        url: "https://www.instagram.com/rytternekyrkskola/",
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
      "Public transport is the recommended way to get around Stockholm. Trains and buses run frequently and reliably, and tickets are bought in the SL app.",
      "Sweden is almost cashless: cards and phone payments work nearly everywhere.",
      "Sockets are the European two-pin type (230 V), and tap water is excellent to drink.",
      "In late July the sun sets around 21:40, so evenings stay light for a long time.",
    ],
    steps: [
      {
        title: "Arrive at Arlanda",
        text: "Fly into Stockholm Arlanda. From there, the Arlanda Express takes 18 minutes to Stockholm Central. The SL commuter train (40 min) and the Flygbussarna airport coach (45 min) are slower but cheaper options.",
      },
      {
        title: "Explore Stockholm",
        text: "Late July is a lovely time to visit, so why not spend a few days in Stockholm before the wedding?",
        columns: [
          {
            title: "Where to stay",
            items: [
              {
                icon: "station",
                name: "Norrmalm",
                text: "Right by Central Station, where the airport trains and the trains to Västerås leave. The most practical base.",
              },
              {
                icon: "lantern",
                name: "Gamla Stan",
                text: "The medieval old town: cobbled lanes, candlelit restaurants and the Royal Palace around the corner.",
              },
              {
                icon: "vinyl",
                name: "Södermalm",
                text: "Relaxed and creative, with cafés, vintage shops, rooftop bars and the best views of the city.",
              },
              {
                icon: "bag",
                name: "Östermalm",
                text: "Elegant streets and boutiques, the waterfront promenade along Strandvägen and the Östermalm food hall.",
              },
            ],
          },
          {
            title: "What to do",
            items: [
              {
                icon: "houses",
                name: "Gamla Stan's colourful houses",
                text: "Snap the famous gabled houses on Stortorget, then squeeze through Mårten Trotzigs gränd, the city's narrowest alley.",
              },
              {
                icon: "fika",
                name: "Fika",
                text: "Coffee and a cinnamon bun is a Swedish ritual. Try a classic café like Vete-Katten, or any cosy spot in Gamla Stan.",
              },
              {
                icon: "boat",
                name: "Archipelago boat trip",
                text: "Hop on a boat from the city centre out among the islands. Vaxholm and Fjäderholmarna make easy day trips.",
              },
              {
                icon: "sunset",
                name: "Sunset at Monteliusvägen",
                text: "The classic view over Gamla Stan and the water, magical on a long July evening.",
              },
              {
                icon: "metro",
                name: "Subway art",
                text: "Many metro stations are works of art: T-Centralen's blue cave and the colourful Kungsträdgården are favourites.",
              },
              {
                icon: "ferris",
                name: "Djurgården",
                text: "A leafy island with the Gröna Lund amusement park, ABBA The Museum and the Skansen open-air museum.",
              },
              {
                icon: "ship",
                name: "The Vasa Museum",
                text: "A 17th-century warship that sank on its maiden voyage and was raised almost intact more than 300 years later.",
              },
              {
                icon: "camera",
                name: "Fotografiska",
                text: "World-class photography exhibitions, and a café with one of the best views over the water.",
              },
            ],
          },
        ],      },
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
        answer: "Dressy summer attire – dresses of any length, jumpsuits and suits are all welcome. The ceremony will take place among church ruins with wooden benches, and the reception venue is reached via a gravel path, so please keep this in mind when choosing footwear.",
      },
      {
        question: "Can I bring a plus one?",
        answer: "Unfortunately, we're not able to welcome more guests than those invited. Everyone who is invited is named in the message we sent you with the link to this page.",
      },
      {
        question: "Are children welcome?",
        answer: "Yes, children who are named in the invitation are very welcome.",
      },
      {
        question: "Will there be transport to the venue?",
        answer: "We would be delighted to collect you from Västerås Central Station. Just tick the pickup box when you RSVP and we will be in touch with times closer to the day. Fiholm lies in quiet countryside with very little public transport, so if you are making your own way, please book an Uber or a taxi in advance. The celebration goes on late into the night. At the end of the evening there will be rides back to Västerås Central Station, or you can book an Uber or a taxi.",
      },
      {
        question: "What about dietary requirements?",
        answer: "Of course – just let us know about any dietary requirements or allergies when you RSVP.",
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
    calendarButton: "Lägg till i kalendern",
    calendarAndroidNext: "Lägg till OSA-datumet",
    calendarDone: "Tillagt i kalendern",
    calendarOther: "Annan kalender?",
    calendarIntro: "Lägger till bröllopet och sista dagen att OSA i din kalender, med påminnelser.",
    calendarApple: "iPhone, iPad, Mac eller Outlook",
    calendarGoogle: "Google Kalender (Android)",
    calendarGoogleWedding: "Bröllopet · 24 juli",
    calendarGoogleRsvp: "Sista OSA-dag · 1 juni",
  },
  countdown: { days: "Dagar", hours: "Timmar", minutes: "Min", seconds: "Sek" },
  story: {
    eyebrow: "Hur allt började",
    title: "Vår historia",
    milestones: [
      {
        year: "2019",
        title: "Där allt började",
        description:
          "Louisa och Mattias träffades på ett sommarläger i Ardingly i England – första gången de pratade satt de inlåsta i ett escape room. Resten av lägret trodde Mattias att hon hette Elenor, och under en match mopphockey lyckades han till och med bita henne. Men han tog igen det: han hoppade över en stranddag för att hjälpa henne med disken och vann en käpphästtävling i lånade skor. En natt tittade de på stjärnfall och bytte handmålade stenar – och där var det bestämt.",
      },
      {
        year: "2020",
        title: "Äntligen ett par",
        description:
          "Hösten gick åt till helger tillsammans, i Ekebyholm eller Skogås. Mattias drömde att de skulle gifta sig (han fick rätt). På nyårsafton firade de med vänner i en stuga i skogen, och klockan tre på natten blev det officiellt.",
      },
      {
        year: "2021",
        title: "På distans",
        description:
          "När Louisa flyttade till Linköping för att plugga blev det distansförhållande. Det var både läskigt och jobbigt, men det gav nya vänner – och gjorde dem ännu starkare tillsammans.",
      },
      // Placeholders for 2023, 2024 and 2027 below: edit freely
      {
        year: "2023",
        title: "Frieriet",
        description:
          "Den 14 oktober 2023 i Kyoto i Japan friade Mattias till Louisa. Hon sa ja.",
      },
      {
        year: "2024",
        title: "Ett gemensamt hem",
        description:
          "2024 flyttade de ihop och skapade sitt första gemensamma hem.",
      },
      {
        year: "2027",
        title: "Bröllopet",
        description:
          "Den 24 juli 2027 säger de ja till varandra igen, omgivna av familj och vänner, i Stora Rytterne kyrkoruin och på Fiholm.",
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
        description: "SJ:s tåg går från Stockholm C till Västerås C (restid: 1 h). Vi ordnar upphämtning från stationen – kryssa bara i rutan när du OSA:r. Boka gärna en resa som är framme vid stationen före kl. 14.",
      },
      {
        title: "Med bil",
        description: "Med bil tar det ungefär 1 h 30 min från Stockholm till Fiholm. Ställ in navigationen på ”Fiholm, 725 92 Västerås” – inte Fiholms slott vid Eskilstuna, som är en helt annan plats.",
      },
    ],
    whereToStay: "Boende",
    bookLabel: "Boka eller läs mer",
    accommodations: [
      {
        title: "Rytterne Kyrkskola",
        description: "Mysigt B&B i den gamla kyrkskolan – närmast av alla.",
        detail: "5 minuter från Fiholm · från 600 kr/natt",
        url: "https://www.instagram.com/rytternekyrkskola/",
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
      "Kollektivtrafiken är det smidigaste sättet att ta sig runt i Stockholm. Tåg och bussar går ofta och pålitligt, och biljetter köper du i SL-appen.",
      "Sverige är nästan kontantfritt – kort och mobilbetalning fungerar nästan överallt.",
      "Eluttagen är av europeisk typ (230 V), och kranvattnet är utmärkt att dricka.",
      "I slutet av juli går solen ner runt 21.40, så kvällarna är ljusa länge.",
    ],
    steps: [
      {
        title: "Landa på Arlanda",
        text: "Flyg till Stockholm Arlanda. Därifrån tar Arlanda Express 18 minuter till Stockholm C. SL:s pendeltåg (40 min) och Flygbussarna (45 min) är långsammare men billigare alternativ.",
      },
      {
        title: "Upptäck Stockholm",
        text: "Slutet av juli är en härlig tid att besöka Sverige – passa gärna på att stanna några dagar i Stockholm före bröllopet.",
        columns: [
          {
            title: "Var du kan bo",
            items: [
              {
                icon: "station",
                name: "Norrmalm",
                text: "Precis vid Centralstationen, där tågen till Arlanda och Västerås går. Smidigast av allt.",
              },
              {
                icon: "lantern",
                name: "Gamla stan",
                text: "Den medeltida stadskärnan: kullerstensgränder, mysiga restauranger och Kungliga slottet runt hörnet.",
              },
              {
                icon: "vinyl",
                name: "Södermalm",
                text: "Avslappnat och kreativt, med kaféer, vintagebutiker, takbarer och stadens bästa utsikt.",
              },
              {
                icon: "bag",
                name: "Östermalm",
                text: "Eleganta gator och butiker, strandpromenaden längs Strandvägen och Östermalms saluhall.",
              },
            ],
          },
          {
            title: "Vad du kan göra",
            items: [
              {
                icon: "houses",
                name: "Gamla stans färgglada hus",
                text: "Fota de kända gavelhusen på Stortorget och kläm dig sedan igenom Mårten Trotzigs gränd, stadens smalaste gränd.",
              },
              {
                icon: "fika",
                name: "Fika",
                text: "Kaffe och kanelbulle är ett måste. Testa ett klassiskt kafé som Vete-Katten, eller något mysigt ställe i Gamla stan.",
              },
              {
                icon: "boat",
                name: "Skärgårdstur",
                text: "Ta båten från stan ut bland öarna. Vaxholm och Fjäderholmarna är enkla dagsutflykter.",
              },
              {
                icon: "sunset",
                name: "Solnedgång på Monteliusvägen",
                text: "Den klassiska utsikten över Gamla stan och vattnet, magisk en lång julikväll.",
              },
              {
                icon: "metro",
                name: "Tunnelbanekonst",
                text: "Många tunnelbanestationer är konstverk – T-Centralens blå grotta och färgsprakande Kungsträdgården är favoriter.",
              },
              {
                icon: "ferris",
                name: "Djurgården",
                text: "En grönskande ö med nöjesparken Gröna Lund, ABBA The Museum och friluftsmuseet Skansen.",
              },
              {
                icon: "ship",
                name: "Vasamuseet",
                text: "Ett 1600-talsskepp som sjönk på sin första resa och bärgades nästan helt intakt mer än 300 år senare.",
              },
              {
                icon: "camera",
                name: "Fotografiska",
                text: "Fotoutställningar i världsklass och ett kafé med en av de finaste utsikterna över vattnet.",
              },
            ],
          },
        ],      },
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
        answer: "Kavaj. Vi önskar en somrig och uppklädd klädsel – klänning, byxdress eller kostym går lika bra. Vigseln äger rum utomhus i kyrkoruiner med träbänkar, och festlokalen nås via en grusväg, så välj gärna skor därefter.",
      },
      {
        question: "Får jag ta med en +1?",
        answer: "Vi har tyvärr inte möjlighet att ta emot fler gäster än de inbjudna. Alla som är bjudna står med namn i meddelandet där du fick länken till den här sidan.",
      },
      {
        question: "Är barn välkomna?",
        answer: "Ja, barn som står med namn i inbjudan är varmt välkomna.",
      },
      {
        question: "Ordnas det transport till festen?",
        answer: "Vi hämtar dig gärna vid Västerås centralstation – kryssa i rutan för upphämtning när du OSA:r, så hör vi av oss med tider närmare dagen. Fiholm ligger lugnt på landet med väldigt lite kollektivtrafik, så tar du dig dit själv rekommenderar vi att du förbokar Uber eller taxi. Festen håller på till sent. När kvällen är slut finns skjuts till Västerås centralstation, eller så kan du ta en Uber eller taxi.",
      },
      {
        question: "Hur gör jag med specialkost?",
        answer: "Självklart – ange specialkost eller allergier när du OSA:r.",
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
    calendarButton: "Agregar al calendario",
    calendarAndroidNext: "Agregar fecha límite",
    calendarDone: "Agregado al calendario",
    calendarOther: "¿Usas otro calendario?",
    calendarIntro: "Agrega la boda y la fecha límite para confirmar a tu calendario, con recordatorios.",
    calendarApple: "iPhone, iPad, Mac u Outlook",
    calendarGoogle: "Google Calendar (Android)",
    calendarGoogleWedding: "La boda · 24 de julio",
    calendarGoogleRsvp: "Fecha límite · 1 de junio",
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
      // Placeholders for 2023, 2024 and 2027 below: edit freely
      {
        year: "2023",
        title: "La propuesta",
        description:
          "El 14 de octubre de 2023, en Kioto, Japón, Mattias le pidió matrimonio a Louisa. Ella dijo que sí.",
      },
      {
        year: "2024",
        title: "Un hogar juntos",
        description:
          "En 2024 se mudaron juntos y formaron su primer hogar.",
      },
      {
        year: "2027",
        title: "La boda",
        description:
          "El 24 de julio de 2027 volverán a decirse que sí, rodeados de familia y amigos, en las ruinas de Stora Rytterne y en Fiholm.",
      },
    ],
  },
  schedule: {
    eyebrow: "La celebración",
    title: "Itinerario",
    mapLabel: "Mapa",
    groups: [
      {
        location: "Ruinas de Stora Rytterne",
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
        description: "Los trenes de SJ van de la estación central de Estocolmo a la de Västerås (duración: 1 h). Nosotros te recogemos en la estación; solo marca la opción al confirmar tu asistencia. Por favor, reserva un tren que llegue a la estación antes de las 2:00 p. m.",
      },
      {
        title: "En auto",
        description: "En auto, el viaje de Estocolmo a Fiholm dura aproximadamente 1 h 30 min. Ingresa “Fiholm, 725 92 Västerås” en tu GPS, no “Fiholms slott” cerca de Eskilstuna, que es otro lugar.",
      },
    ],
    whereToStay: "Dónde hospedarse",
    bookLabel: "Reservar o ver más",
    accommodations: [
      {
        title: "Rytterne Kyrkskola",
        description: "Un acogedor B&B en la antigua escuela parroquial, el hospedaje más cercano.",
        detail: "A 5 minutos de Fiholm · desde 600 coronas por noche",
        url: "https://www.instagram.com/rytternekyrkskola/",
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
      "El transporte público es la mejor forma de moverse por Estocolmo. Los trenes y buses pasan seguido y son puntuales, y los pasajes se compran en la app de SL.",
      "En Suecia casi no se usa efectivo: se paga con tarjeta o con el celular casi en todas partes.",
      "Los enchufes son de tipo europeo de dos clavijas (230 V), y el agua del caño es excelente para tomar.",
      "A fines de julio el sol se pone alrededor de las 9:40 p. m., así que las noches son claras hasta tarde.",
    ],
    steps: [
      {
        title: "Llegada a Arlanda",
        text: "Vuela al aeropuerto de Estocolmo-Arlanda. Desde allí, el Arlanda Express llega en 18 minutos a la estación central de Estocolmo. El tren de cercanías SL (40 min) y el bus Flygbussarna (45 min) son opciones más lentas pero más baratas.",
      },
      {
        title: "Conoce Estocolmo",
        text: "Fines de julio es una época linda para visitar, así que vale la pena quedarse unos días en Estocolmo antes de la boda.",
        columns: [
          {
            title: "Dónde hospedarte",
            items: [
              {
                icon: "station",
                name: "Norrmalm",
                text: "Junto a la estación central, de donde salen los trenes al aeropuerto y a Västerås. La opción más práctica.",
              },
              {
                icon: "lantern",
                name: "Gamla Stan",
                text: "El casco antiguo medieval: calles empedradas, restaurantes a la luz de las velas y el Palacio Real a la vuelta de la esquina.",
              },
              {
                icon: "vinyl",
                name: "Södermalm",
                text: "Relajado y creativo, con cafés, tiendas vintage, bares en azoteas y las mejores vistas de la ciudad.",
              },
              {
                icon: "bag",
                name: "Östermalm",
                text: "Calles elegantes y boutiques, el paseo junto al agua de Strandvägen y el mercado gastronómico Östermalms Saluhall.",
              },
            ],
          },
          {
            title: "Qué hacer",
            items: [
              {
                icon: "houses",
                name: "Las casas de colores de Gamla Stan",
                text: "Fotografía las famosas casas de Stortorget y pasa por Mårten Trotzigs gränd, el callejón más angosto de la ciudad.",
              },
              {
                icon: "fika",
                name: "Fika",
                text: "Un café con un rollo de canela es todo un ritual sueco. Prueba un café clásico como Vete-Katten, o cualquier rincón acogedor de Gamla Stan.",
              },
              {
                icon: "boat",
                name: "Paseo en barco por el archipiélago",
                text: "Toma un barco desde el centro hacia las islas. Vaxholm y Fjäderholmarna son paseos fáciles de un día.",
              },
              {
                icon: "sunset",
                name: "Atardecer en Monteliusvägen",
                text: "La vista clásica sobre Gamla Stan y el agua, mágica en una larga tarde de julio.",
              },
              {
                icon: "metro",
                name: "Arte en el metro",
                text: "Muchas estaciones de metro son obras de arte: la cueva azul de T-Centralen y la colorida Kungsträdgården son las favoritas.",
              },
              {
                icon: "ferris",
                name: "Djurgården",
                text: "Una isla verde con el parque de diversiones Gröna Lund, ABBA The Museum y el museo al aire libre Skansen.",
              },
              {
                icon: "ship",
                name: "El Museo Vasa",
                text: "Un barco de guerra del siglo XVII que se hundió en su primer viaje y fue rescatado casi intacto más de 300 años después.",
              },
              {
                icon: "camera",
                name: "Fotografiska",
                text: "Exposiciones de fotografía de primer nivel y un café con una de las mejores vistas sobre el agua.",
              },
            ],
          },
        ],      },
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
        answer: "Formal de verano: vestidos de cualquier largo, enterizos y ternos son bienvenidos. La ceremonia será al aire libre, entre las ruinas de una iglesia con bancas de madera, y a la recepción se llega por un camino de grava, así que tenlo en cuenta al elegir tus zapatos.",
      },
      {
        question: "¿Puedo ir con acompañante?",
        answer: "Lamentablemente no podemos recibir a más invitados que los que figuran en la invitación. Todas las personas invitadas aparecen con su nombre en el mensaje en el que te enviamos el enlace a esta página.",
      },
      {
        question: "¿Los niños están invitados?",
        answer: "Sí, los niños que aparecen con su nombre en la invitación son muy bienvenidos.",
      },
      {
        question: "¿Habrá transporte hasta el local?",
        answer: "Con gusto te recogemos en la estación central de Västerås: marca la opción de recojo al confirmar tu asistencia y te escribiremos con los horarios cuando se acerque la fecha. Fiholm está en pleno campo y casi no hay transporte público, así que si llegas por tu cuenta te recomendamos reservar un Uber o un taxi con anticipación. La fiesta terminará tarde. Al final de la noche habrá movilidad hacia la estación central de Västerås, o puedes pedir un Uber o un taxi.",
      },
      {
        question: "¿Y si tengo alguna restricción alimentaria?",
        answer: "¡Claro! Indícanos cualquier dieta especial o alergia al confirmar tu asistencia.",
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
