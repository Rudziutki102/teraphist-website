export const links = [
  {
    name: "Usługi",
    hash: "#skills",
  },
  {
    name: "Cennik",
    hash: "#pricing",
  },
  {
    name: "Opinie",
    hash: "#review",
  },
  {
    name: "Kontakt",
    hash: "#contact",
  },
] as const;
export const reviews = [
  "Zdecydowanie polecam ! Duży wybór masaży - od relaksacyjnych po gorącymi kamieniami a nawet świecą ! Dodatkowo Wiktoria potrafi pomóc z wieloma dolegliwościami bólowymi u sportowców czy osób pracujących fizycznie . Korzystałam nie raz podczas problemów z plecami i zawsze wychodziłam od niej zrelaksowana i bez bólu. !",
  "Jestem bardzo zadowolony z każdej wizyty. Za każdym razem mogę liczyć na profesjonalne podejście. Wysoka kultura osobista , niepowtarzalna atmosfera , bardzo przytulne miejsce. Gorąco polecam.",
  "Polecam bardzo masaże u Wiktorii, pełen profesjonalizm ,miła atmosfera . Można się zrelaksować 😊",
] as const;
export const skills = [
  {
    name: "Masaże relaksacyjne",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl: "/relaksacyjny.jpg",
  },
  {
    name: "Masasże klasyczne",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl: "/klasyczny.jpg",
  },
  {
    name: "Bańka chińska",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl: "/bańka.jpg",
  },
  {
    name: "Masaże gorącymi kamieniami",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl: "kamienie.jpg",
  },
  {
    name: "Drenaż limfatyczny",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl: "drenaż.jpg",
  },
  {
    name: "Kinesiotaping",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl: "/klasyczny.jpg",
  },
] as const;

export const pricingList = [
  {
    service: "Masaż",
    services: [
      {
        name: "relaksacyjny",
        prices: {
          half: 70,
          full: 120,
        },
      },
      {
        name: "klasyczny",
        prices: {
          half: 70,
          full: 120,
        },
      },
      {
        name: "sportowy",
        prices: {
          half: 80,
          full: 130,
        },
      },
      {
        name: "bańką chińska",
        prices: {
          half: 80,
          full: 130,
        },
      },
      {
        name: "świecą",
        prices: {
          half: 120,
          full: 160,
        },
      },
      {
        name: "drenaż limfatyczny",
        prices: {
          half: 80,
          full: 130,
        },
      },
      {
        name: "gorącymi kamieniami",
        prices: {
          half: 130,
          full: 170,
        },
      },
    ],
  },
  {
    service: "Inne",
    services: [
      {
        name: "kinesiotaping",
        prices: {
          stable: 30,
        },
      },
    ],
  },
] as const;
