export interface Country {
  name: string;
  capital: string;
}

const mockCountries: Country[] = [
  { name: "Estonia", capital: "Tallinn" },
  { name: "Finland", capital: "Helsinki" },
  { name: "Sweden", capital: "Stockholm" },
  { name: "Norway", capital: "Oslo" },
  { name: "Denmark", capital: "Copenhagen" },
  { name: "Iceland", capital: "Reykjavik" },
  { name: "Lithuania", capital: "Vilnius" },
  { name: "Latvia", capital: "Riga" },
  { name: "Poland", capital: "Warsaw" },
  { name: "Czech Republic", capital: "Prague" },
  { name: "Slovakia", capital: "Bratislava" },
  { name: "Hungary", capital: "Budapest" },
  { name: "United Kingdom", capital: "London" },
  { name: "France", capital: "Paris" },
  { name: "Germany", capital: "Berlin" },
  { name: "Spain", capital: "Madrid" },
];

export async function fetchCountries(): Promise<Country[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockCountries);
    }, 1000); // Simulate a 1 second delay
  });
}
