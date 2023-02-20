let countryСapital = new Map();
countryСapital.set("Россия", "Москва");
countryСapital.set("Франция", "Париж");
countryСapital.set("Италия", "Рим");
countryСapital.set("Испания", "Мадрид");
for (let country of countryСapital.keys()) {
  console.log(`Ключ-${country}, Значение-${countryСapital.get(country)}`);
}
