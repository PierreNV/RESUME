"use strict";

export const elements = {
  any: {
    navLinkHome: document.getElementById("nav-link-home"),
    navLinkResume: document.getElementById("nav-link-resume"),
    navLinkContact: document.getElementById("nav-link-contact"),
    flag: document.getElementById("flag"),
    resumePDF: document.getElementById("resume-pdf"),
  },
  index: {
    welcome: document.getElementById("index__main__welcome"),
    firstParagraph: document.getElementById("index__main__firstParagraph"),
    secondParagraph: document.getElementById("index__main__secondParagraph"),
    thirdParagraph: document.getElementById("index__main__thirdParagraph"),
    cardCSS: {
      listItem1: document.getElementById("css-card-list-item-1"),
      listItem2: document.getElementById("css-card-list-item-2"),
      listItem3: document.getElementById("css-card-list-item-3"),
    },
    cardHTML: {
      listItem1: document.getElementById("html-card-list-item-1"),
      listItem2: document.getElementById("html-card-list-item-2"),
      listItem3: document.getElementById("html-card-list-item-3"),
    },
    cardJS: {
      listItem1: document.getElementById("js-card-list-item-1"),
      listItem2: document.getElementById("js-card-list-item-2"),
      listItem3: document.getElementById("js-card-list-item-3"),
    },
    cardReactJS: {
      listItem1: document.getElementById("reactjs-card-list-item-1"),
      listItem2: document.getElementById("reactjs-card-list-item-2"),
      listItem3: document.getElementById("reactjs-card-list-item-3"),
    },
  },
  resume: {
    contact: {
      home: document.getElementById("home"),
      phone: document.getElementById("phone"),
      email: document.getElementById("email"),
      webpage: document.getElementById("webpage"),
      webpageURL: document.getElementById("webpageURL"),
    },
    skills: {
      skills: document.getElementById("h2-skills"),
      ul1: {
        programming: document.getElementById("h3-programming"),
        codes: document.getElementById("codes"),
        libraries: document.getElementById("libraries"),
        frameworks: document.getElementById("frameworks"),
      },
      ul2: {
        service: document.getElementById("h3-service"),
        techsupport: document.getElementById("techsupport"),
        custsupport: document.getElementById("custsupport"),
        finance: document.getElementById("finance"),
      },
      ul3: {
        languages: document.getElementById("h3-languages"),
        french: document.getElementById("french"),
        english: document.getElementById("english"),
        swedish: document.getElementById("swedish"),
      },
    },
    education: {
      education: document.getElementById("h2-education"),
      program: document.getElementById("h3-program"),
      codewithmosh: document.getElementById("codewithmosh"),
      eco: document.getElementById("h3-eco"),
      master: document.getElementById("master"),
      bc: document.getElementById("bc"),
    },
    projects: {
      projects: document.getElementById("h2-projects"),
      repository1: document.getElementById("repository1"),
      repository2: document.getElementById("repository2"),
      repository3: document.getElementById("repository3"),
    },
    exp: {
      exp: document.getElementById("h2-exp"),
      acc: document.getElementById("h3-acc"),
      smidig: document.getElementById("smidig-period"),
      smidigLi1: document.getElementById("smidig-li-1"),
      smidigLi2: document.getElementById("smidig-li-2"),
      salesAdmin: document.getElementById("h3-sales-admin"),
      tetraPeriod: document.getElementById("tetra-period"),
      tetraLi1: document.getElementById("tetra-li-1"),
      tetraLi2: document.getElementById("tetra-li-2"),
      tetraLi3: document.getElementById("tetra-li-3"),
      tetraLi4: document.getElementById("tetra-li-4"),
      tetraLi5: document.getElementById("tetra-li-5"),
      tetraLi6: document.getElementById("tetra-li-6"),
      contractAdmin: document.getElementById("h3-contract"),
      sapPeriod: document.getElementById("sap-period"),
      sapLi1: document.getElementById("sap-li-1"),
      sapLi2: document.getElementById("sap-li-2"),
      sapLi3: document.getElementById("sap-li-3"),
      sapLi4: document.getElementById("sap-li-4"),
      sapLi5: document.getElementById("sap-li-5"),
      hrAdmin: document.getElementById("h3-hr"),
      jjPeriod: document.getElementById("jj-period"),
      jjLi1: document.getElementById("jj-li-1"),
      jjLi2: document.getElementById("jj-li-2"),
      jjLi3: document.getElementById("jj-li-3"),
      jjLi4: document.getElementById("jj-li-4"),
      jjLi5: document.getElementById("jj-li-5"),
      jjLi6: document.getElementById("jj-li-6"),
      jjLi7: document.getElementById("jj-li-7"),
      jjLi8: document.getElementById("jj-li-8"),
      travelAdv: document.getElementById("h3-travel-ad"),
      tbPeriod: document.getElementById("travelbird-period"),
      tbLi1: document.getElementById("travelbird-li-1"),
      tbLi2: document.getElementById("travelbird-li-2"),
      tbLi3: document.getElementById("travelbird-li-3"),
      tbLi4: document.getElementById("travelbird-li-4"),
    },
  },
  contact: {
    contact: document.getElementById("h1-contact"),
    inputname: document.getElementById("inputname"),
    inputemail: document.getElementById("inputemail"),
    inputmessage: document.getElementById("message"),
    checkbox: document.getElementById("checkbox-label"),
    submit: document.getElementById("submit-button"),
  },
};

export const elementsContent = {
  any: {
    sv: {
      navLinkHome: "Start",
      navLinkResume: "CV",
      navLinkContact: "Kontakt",
      flag: "https://cdn-icons-png.flaticon.com/512/197/197374.png",
      resumePDF: "files/Pierre-Neveu_resume-sv.pdf",
    },
  },
  index: {
    sv: {
      welcome: "Hej och välkommen till min webbsida.",
      firstParagraph:
        "Jag heter Pierre och den här statiska webbsidan är avsedd att visa en del av mina HTML, CSS och JS kunskaper. Jag hoppas att du kommer att finna det vänligt.",
      secondParagraph:
        "Jag har följt en väg med utbildningsmoduler för professionella front-end-utvecklare tillhandahållna av codewithmosh.com inklusive lektioner, tips om bästa praxis och övningar med utmaningar som jag skulle kunna möta i verkliga arbetssituationer.",
      thirdParagraph:
        " Du kan komma åt mitt faktiska CV via navigeringsfältet där du hittar min övergripande yrkeserfarenhet. I projektsektionen kan du också hitta en länk till en dynamik React-appen som heter movly som jag utvecklar för att träna det väsentliga i React. Vissa av programmeringsvalen är inte de mest effektiva alternativen tillgängliga men medvetet att experimentera med de olika aspekterna som React måste erbjudande. Till exempel valde jag att använda både klass- och funktionskomponenter för träning eftersom jag troligen skulle behöva underhålla befintliga appar med klasser i framtiden.",
      cardCSS: {
        listItem1: "Struktur & hud",
        listItem2: "Lyhördhet",
        listItem3: "Stilvalidering...",
      },
      cardHTML: {
        listItem1: "sökmotoroptimering",
        listItem2: "Tillgänglighet",
        listItem3: "Markup validering...",
      },
      cardJS: {
        listItem1: "Notation/konvention",
        listItem2: "Objektorienterad",
        listItem3: "Optimering...",
      },
      cardReactJS: {
        listItem1: "Funktion, klass, HO komponenter",
        listItem2: "Formulär, validering, filtrering",
        listItem3: "Hooks...",
      },
    },
  },
  resume: {
    sv: {
      contact: {
        home: "Hemadress",
        phone: "Telefonnummer",
        email: "E-post",
        webpage: "Webbsida",
        webpageURL: "https://pierre-neveu-resume.netlify.app/#sv",
      },
      skills: {
        skills: "Kompetens",
        ul1: {
          programming: "Programmering",
          codes: "Programspråk",
          libraries: "Bibliotek",
          frameworks: "Ramverk",
        },
        ul2: {
          service: "Tjänster",
          techsupport: "Teknisksupport, installationer och felsökning",
          custsupport: "Kundsupport och försäljning (SAP, SFDC)",
          finance: "Redovisning (SAP, Visma eAccounting)",
        },
        ul3: {
          languages: "Språk",
          french: "Franska (modersmål)",
          english: "Engelska (flytande)",
          swedish: "Svenska (mellanliggande)",
        },
      },
      education: {
        education: "Utbildning",
        program: "Programmering",
        codewithmosh:
          "Onlinekurser och praktik med en professionell utvecklare med",
        eco: "Ekonomi",
        master: "Magisterexamen",
        bc: "Licence AES (kandidatexamen i ekonomi)",
      },
      projects: {
        projects: "Projekt",
        repository: "- (förvar) -",
      },
      exp: {
        exp: "Arbetserfarenhet",
        acc: "Bokhållare och styrelsesuppleant",
        smidig: "@ Smidig Redovisningsbyrå NN AB / Jan 2021 till Okt 2022",
        smidigLi1: "Bokföring",
        smidigLi2: "Skattedeklaration",
        salesAdmin: "Försäljningsadministratör",
        tetraPeriod: "@ Tetrapak / Mar 2020 till Jan 2021",
        tetraLi1:
          "Kundsupport och försäljning, agerar huvudkontakt för kunder & marknadsföretag för reservdelsbeställningar och förfrågningar",
        tetraLi2:
          "Svara på inkommande beställningar och frågor per telefon och e-post",
        tetraLi3:
          "Utför säljadministrativa uppgifter i SAP ECC och CRM och andra interna verktyg & system",
        tetraLi4:
          "Uppföljning av beställningar, servicenivåavtal och andra nyckelmätningar",
        tetraLi5: "Se till att delar levereras i tid och till bästa pris",
        tetraLi6:
          "Insamling av inköpsorder, vilket säkerställer snabb och korrekt kundfakturering",
        contractAdmin: "Kontraktsadministratör",
        sapPeriod: "@ SAP / Okt 2018 till Nov 2019",
        sapLi1:
          "Skapande av installationer, kundinformation, mjukvara och licensleverans",
        sapLi2:
          "Insamling av inköpsorder, Säkerställande av snabb och korrekt kundfakturering",
        sapLi3:
          "Intäktsredovisning, bokföring av journalposter, underhåll och avstämning av reskontrakonton",
        sapLi4:
          "Säkerställa noggrannhet i de finansiella handlingar genom övervakning och rapportering",
        sapLi5:
          "Skapa, bokföra och stämma av koncerninterna transaktioner samtidigt som man säkerställer överensstämmelse med SAPs redovisningsprinciper",
        hrAdmin: "HR-administratör",
        jjPeriod: "@ Johnson&Johnson / Sep 2017 till Aug 2018",
        jjLi1:
          "Stödja affärsenheter genom att tillhandahålla expertis på Workday",
        jjLi2: "Samordning av program och aktiviteter inom mänskliga resurser",
        jjLi3:
          "Supporting development and maintenance of human resources policies",
        jjLi4:
          "Assistera vid uppföljning av personalbudgeten och ge input till avdelningens verksamhet",
        jjLi5:
          "Uppdatering av medarbetarfiler för att dokumentera personalåtgärder och för att tillhandahålla information för löner och annan användning",
        jjLi6: "Skapa rapporter med sammanställd data från personalregister",
        jjLi7:
          "Granska anslagstavlor för anställningsannonser för att säkerställa uppdaterade och lagligt överensstämmande meddelanden",
        jjLi8:
          "Behandling av löneändringsblanketter och sammanställning av nya medarbetares uppgifter",
        travelAdv: "Reserådgivare",
        tbPeriod: "@ TravelBird / maj 2015 till juni 2017",
        tbLi1: "Kunder och partners stödjer",
        tbLi2:
          "Långdistansavtal utvecklingsteam projekt och dokument översättning",
        tbLi3: "Administration av sociala nätverk",
        tbLi4: "Telefonförsäljning",
      },
    },
  },
  contact: {
    sv: {
      contact: "Hej, du kan skicka ett meddelande till mig här.",
      inputname: "Ditt namn",
      inputemail: "Din epost",
      inputmessage: "Ditt meddelande",
      checkbox: "Godkänner att aktivera",
      submit: "Skicka",
    },
  },
};
