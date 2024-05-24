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
    category: "Masaż",
    priceTypes: ["30 '", "60 '"],
    services: [
      {
        name: "relaksacyjny",
        prices: [
          { type: "half", amount: 70 },
          { type: "full", amount: 120 },
        ],
      },
      {
        name: "klasyczny",
        prices: [
          { type: "half", amount: 70 },
          { type: "full", amount: 120 },
        ],
      },
      {
        name: "sportowy",
        prices: [
          { type: "half", amount: 80 },
          { type: "full", amount: 130 },
        ],
      },
      {
        name: "bańką chińska",
        prices: [
          { type: "half", amount: 80 },
          { type: "full", amount: 130 },
        ],
      },
      {
        name: "świecą",
        prices: [
          { type: "half", amount: 120 },
          { type: "full", amount: 160 },
        ],
      },
      {
        name: "drenaż limfatyczny",
        prices: [
          { type: "half", amount: 80 },
          { type: "full", amount: 130 },
        ],
      },
      {
        name: "gorącymi kamieniami",
        prices: [
          { type: "half", amount: 130 },
          { type: "full", amount: 170 },
        ],
      },
    ],
  },
  {
    category: "Inne",
    priceTypes: false,
    services: [
      {
        name: "kinesiotaping",
        prices: [{ type: "stable", amount: 30 }],
      },
    ],
  },
] as const;
