
export type AirportType = {
    airport_name: string;
    country_code: string;
    iata_code: string;
    city: string;
  }
const airports: readonly AirportType[] = [
    {
        "airport_name": "Honiara International Airport",
        "country_code": "SB",
        "iata_code": "HIR",
        "city": "Honiara"
    },
    {
        "airport_name": "Port Moresby Jacksons International Airport",
        "country_code": "PG",
        "iata_code": "POM",
        "city": "Port"
    },
    {
        "airport_name": "Keflavik International Airport",
        "country_code": "IS",
        "iata_code": "KEF",
        "city": "Keflavik"
    },
    {
        "airport_name": "Edmonton International Airport",
        "country_code": "CA",
        "iata_code": "YEG",
        "city": "Edmonton"
    },
    {
        "airport_name": "Halifax \/ Stanfield International Airport",
        "country_code": "CA",
        "iata_code": "YHZ",
        "city": "Halifax"
    },
    {
        "airport_name": "Ottawa Macdonald-Cartier International Airport",
        "country_code": "CA",
        "iata_code": "YOW",
        "city": "Ottawa"
    },
    {
        "airport_name": "Quebec Jean Lesage International Airport",
        "country_code": "CA",
        "iata_code": "YQB",
        "city": "Quebec"
    },
    {
        "airport_name": "Montreal \/ Pierre Elliott Trudeau International Airport",
        "country_code": "CA",
        "iata_code": "YUL",
        "city": "Montreal"
    },
    {
        "airport_name": "Vancouver International Airport",
        "country_code": "CA",
        "iata_code": "YVR",
        "city": "Vancouver"
    },
    {
        "airport_name": "Winnipeg \/ James Armstrong Richardson International Airport",
        "country_code": "CA",
        "iata_code": "YWG",
        "city": "Winnipeg"
    },
    {
        "airport_name": "Prince George Airport",
        "country_code": "CA",
        "iata_code": "YXS",
        "city": "Prince"
    },
    {
        "airport_name": "Houari Boumediene Airport",
        "country_code": "DZ",
        "iata_code": "ALG",
        "city": "Houari"
    },
    {
        "airport_name": "Kotoka International Airport",
        "country_code": "GH",
        "iata_code": "ACC",
        "city": "Kotoka"
    },
    {
        "airport_name": "Nnamdi Azikiwe International Airport",
        "country_code": "NG",
        "iata_code": "ABV",
        "city": "Nnamdi"
    },
    {
        "airport_name": "Murtala Muhammed International Airport",
        "country_code": "NG",
        "iata_code": "LOS",
        "city": "Murtala"
    },
    {
        "airport_name": "Diori Hamani International Airport",
        "country_code": "NE",
        "iata_code": "NIM",
        "city": "Diori"
    },
    {
        "airport_name": "Tunis Carthage International Airport",
        "country_code": "TN",
        "iata_code": "TUN",
        "city": "Tunis"
    },
    {
        "airport_name": "Brussels Airport",
        "country_code": "BE",
        "iata_code": "BRU",
        "city": "Brussels"
    },
    {
        "airport_name": "Berlin Brandenburg Airport",
        "country_code": "DE",
        "iata_code": "BER",
        "city": "Berlin"
    },
    {
        "airport_name": "Frankfurt Airport",
        "country_code": "DE",
        "iata_code": "FRA",
        "city": "Frankfurt"
    },
    {
        "airport_name": "Hamburg Helmut Schmidt Airport",
        "country_code": "DE",
        "iata_code": "HAM",
        "city": "Hamburg"
    },
    {
        "airport_name": "Cologne Bonn Airport",
        "country_code": "DE",
        "iata_code": "CGN",
        "city": "Cologne"
    },
    {
        "airport_name": "D\u00fcsseldorf Airport",
        "country_code": "DE",
        "iata_code": "DUS",
        "city": "D\u00fcsseldorf"
    },
    {
        "airport_name": "Munich Airport",
        "country_code": "DE",
        "iata_code": "MUC",
        "city": "Munich"
    },
    {
        "airport_name": "Nuremberg Airport",
        "country_code": "DE",
        "iata_code": "NUE",
        "city": "Nuremberg"
    },
    {
        "airport_name": "Leipzig\/Halle Airport",
        "country_code": "DE",
        "iata_code": "LEJ",
        "city": "Leipzig\/Halle"
    },
    {
        "airport_name": "Lennart Meri Tallinn Airport",
        "country_code": "EE",
        "iata_code": "TLL",
        "city": "Lennart"
    },
    {
        "airport_name": "Helsinki Vantaa Airport",
        "country_code": "FI",
        "iata_code": "HEL",
        "city": "Helsinki"
    },
    {
        "airport_name": "Belfast International Airport",
        "country_code": "GB",
        "iata_code": "BFS",
        "city": "Belfast"
    },
    {
        "airport_name": "Birmingham International Airport",
        "country_code": "GB",
        "iata_code": "BHX",
        "city": "Birmingham"
    },
    {
        "airport_name": "Manchester Airport",
        "country_code": "GB",
        "iata_code": "MAN",
        "city": "Manchester"
    },
    {
        "airport_name": "London Luton Airport",
        "country_code": "GB",
        "iata_code": "LTN",
        "city": "London"
    },
    {
        "airport_name": "London Gatwick Airport",
        "country_code": "GB",
        "iata_code": "LGW",
        "city": "London"
    },
    {
        "airport_name": "London Heathrow Airport",
        "country_code": "GB",
        "iata_code": "LHR",
        "city": "London"
    },
    {
        "airport_name": "Glasgow International Airport",
        "country_code": "GB",
        "iata_code": "GLA",
        "city": "Glasgow"
    },
    {
        "airport_name": "Edinburgh Airport",
        "country_code": "GB",
        "iata_code": "EDI",
        "city": "Edinburgh"
    },
    {
        "airport_name": "Amsterdam Airport Schiphol",
        "country_code": "NL",
        "iata_code": "AMS",
        "city": "Amsterdam"
    },
    {
        "airport_name": "Eindhoven Airport",
        "country_code": "NL",
        "iata_code": "EIN",
        "city": "Eindhoven"
    },
    {
        "airport_name": "Ezhou Huahu Airport",
        "country_code": "CN",
        "iata_code": "EHU",
        "city": "Ezhou"
    },
    {
        "airport_name": "Dublin Airport",
        "country_code": "IE",
        "iata_code": "DUB",
        "city": "Dublin"
    },
    {
        "airport_name": "Shannon Airport",
        "country_code": "IE",
        "iata_code": "SNN",
        "city": "Shannon"
    },
    {
        "airport_name": "Billund Airport",
        "country_code": "DK",
        "iata_code": "BLL",
        "city": "Billund"
    },
    {
        "airport_name": "Copenhagen Kastrup Airport",
        "country_code": "DK",
        "iata_code": "CPH",
        "city": "Copenhagen"
    },
    {
        "airport_name": "Luxembourg-Findel International Airport",
        "country_code": "LU",
        "iata_code": "LUX",
        "city": "Luxembourg-Findel"
    },
    {
        "airport_name": "Bergen Airport, Flesland",
        "country_code": "NO",
        "iata_code": "BGO",
        "city": "Bergen"
    },
    {
        "airport_name": "Oslo Airport, Gardermoen",
        "country_code": "NO",
        "iata_code": "OSL",
        "city": "Oslo"
    },
    {
        "airport_name": "Troms\u00f8 Airport, Langnes",
        "country_code": "NO",
        "iata_code": "TOS",
        "city": "Troms\u00f8"
    },
    {
        "airport_name": "Trondheim Airport, V\u00e6rnes",
        "country_code": "NO",
        "iata_code": "TRD",
        "city": "Trondheim"
    },
    {
        "airport_name": "Stavanger Airport, Sola",
        "country_code": "NO",
        "iata_code": "SVG",
        "city": "Stavanger"
    },
    {
        "airport_name": "Gda\u0144sk Lech Wa\u0142\u0119sa Airport",
        "country_code": "PL",
        "iata_code": "GDN",
        "city": "Gda\u0144sk"
    },
    {
        "airport_name": "Krak\u00f3w John Paul II International Airport",
        "country_code": "PL",
        "iata_code": "KRK",
        "city": "Krak\u00f3w"
    },
    {
        "airport_name": "Warsaw Chopin Airport",
        "country_code": "PL",
        "iata_code": "WAW",
        "city": "Warsaw"
    },
    {
        "airport_name": "Gothenburg-Landvetter Airport",
        "country_code": "SE",
        "iata_code": "GOT",
        "city": "Gothenburg-Landvetter"
    },
    {
        "airport_name": "Stockholm-Arlanda Airport",
        "country_code": "SE",
        "iata_code": "ARN",
        "city": "Stockholm-Arlanda"
    },
    {
        "airport_name": "Riga International Airport",
        "country_code": "LV",
        "iata_code": "RIX",
        "city": "Riga"
    },
    {
        "airport_name": "Vilnius International Airport",
        "country_code": "LT",
        "iata_code": "VNO",
        "city": "Vilnius"
    },
    {
        "airport_name": "Cape Town International Airport",
        "country_code": "ZA",
        "iata_code": "CPT",
        "city": "Cape"
    },
    {
        "airport_name": "King Shaka International Airport",
        "country_code": "ZA",
        "iata_code": "DUR",
        "city": "King"
    },
    {
        "airport_name": "OR Tambo International Airport",
        "country_code": "ZA",
        "iata_code": "JNB",
        "city": "OR"
    },
    {
        "airport_name": "Sir Seretse Khama International Airport",
        "country_code": "BW",
        "iata_code": "GBE",
        "city": "Sir"
    },
    {
        "airport_name": "King Mswati III International Airport",
        "country_code": "SZ",
        "iata_code": "SHO",
        "city": "King"
    },
    {
        "airport_name": "Sir Seewoosagur Ramgoolam International Airport",
        "country_code": "MU",
        "iata_code": "MRU",
        "city": "Sir"
    },
    {
        "airport_name": "Kenneth Kaunda International Airport",
        "country_code": "ZM",
        "iata_code": "LUN",
        "city": "Kenneth"
    },
    {
        "airport_name": "Roland Garros Airport",
        "country_code": "RE",
        "iata_code": "RUN",
        "city": "Roland"
    },
    {
        "airport_name": "Ivato Airport",
        "country_code": "MG",
        "iata_code": "TNR",
        "city": "Ivato"
    },
    {
        "airport_name": "Quatro de Fevereiro International Airport",
        "country_code": "AO",
        "iata_code": "LAD",
        "city": "Quatro"
    },
    {
        "airport_name": "Maputo Airport",
        "country_code": "MZ",
        "iata_code": "MPM",
        "city": "Maputo"
    },
    {
        "airport_name": "Seychelles International Airport",
        "country_code": "SC",
        "iata_code": "SEZ",
        "city": "Seychelles"
    },
    {
        "airport_name": "N'Djamena International Airport",
        "country_code": "TD",
        "iata_code": "NDJ",
        "city": "N'Djamena"
    },
    {
        "airport_name": "Robert Gabriel Mugabe International Airport",
        "country_code": "ZW",
        "iata_code": "HRE",
        "city": "Robert"
    },
    {
        "airport_name": "Ndjili International Airport",
        "country_code": "CD",
        "iata_code": "FIH",
        "city": "Ndjili"
    },
    {
        "airport_name": "Modibo Keita International Airport",
        "country_code": "ML",
        "iata_code": "BKO",
        "city": "Modibo"
    },
    {
        "airport_name": "Banjul International Airport",
        "country_code": "GM",
        "iata_code": "BJL",
        "city": "Banjul"
    },
    {
        "airport_name": "Fuerteventura Airport",
        "country_code": "ES",
        "iata_code": "FUE",
        "city": "Fuerteventura"
    },
    {
        "airport_name": "Gran Canaria Airport",
        "country_code": "ES",
        "iata_code": "LPA",
        "city": "Gran"
    },
    {
        "airport_name": "C\u00e9sar Manrique-Lanzarote Airport",
        "country_code": "ES",
        "iata_code": "ACE",
        "city": "C\u00e9sar"
    },
    {
        "airport_name": "Tenerife Sur Airport",
        "country_code": "ES",
        "iata_code": "TFS",
        "city": "Tenerife"
    },
    {
        "airport_name": "Lungi International Airport",
        "country_code": "SL",
        "iata_code": "FNA",
        "city": "Lungi"
    },
    {
        "airport_name": "Roberts International Airport",
        "country_code": "LR",
        "iata_code": "ROB",
        "city": "Roberts"
    },
    {
        "airport_name": "Mohammed V International Airport",
        "country_code": "MA",
        "iata_code": "CMN",
        "city": "Mohammed"
    },
    {
        "airport_name": "Blaise Diagne International Airport",
        "country_code": "SN",
        "iata_code": "DSS",
        "city": "Blaise"
    },
    {
        "airport_name": "Nouakchott\u2013Oumtounsy International Airport",
        "country_code": "MR",
        "iata_code": "NKC",
        "city": "Nouakchott\u2013Oumtounsy"
    },
    {
        "airport_name": "Am\u00edlcar Cabral International Airport",
        "country_code": "CV",
        "iata_code": "SID",
        "city": "Am\u00edlcar"
    },
    {
        "airport_name": "Addis Ababa Bole International Airport",
        "country_code": "ET",
        "iata_code": "ADD",
        "city": "Addis"
    },
    {
        "airport_name": "Djibouti-Ambouli Airport",
        "country_code": "DJ",
        "iata_code": "JIB",
        "city": "Djibouti-Ambouli"
    },
    {
        "airport_name": "Cairo International Airport",
        "country_code": "EG",
        "iata_code": "CAI",
        "city": "Cairo"
    },
    {
        "airport_name": "Hurghada International Airport",
        "country_code": "EG",
        "iata_code": "HRG",
        "city": "Hurghada"
    },
    {
        "airport_name": "Sharm El Sheikh International Airport",
        "country_code": "EG",
        "iata_code": "SSH",
        "city": "Sharm"
    },
    {
        "airport_name": "Juba International Airport",
        "country_code": "SS",
        "iata_code": "JUB",
        "city": "Juba"
    },
    {
        "airport_name": "Jomo Kenyatta International Airport",
        "country_code": "KE",
        "iata_code": "NBO",
        "city": "Jomo"
    },
    {
        "airport_name": "Moi International Airport",
        "country_code": "KE",
        "iata_code": "MBA",
        "city": "Moi"
    },
    {
        "airport_name": "Mitiga International Airport",
        "country_code": "LY",
        "iata_code": "MJI",
        "city": "Mitiga"
    },
    {
        "airport_name": "Kigali International Airport",
        "country_code": "RW",
        "iata_code": "KGL",
        "city": "Kigali"
    },
    {
        "airport_name": "Khartoum International Airport",
        "country_code": "SD",
        "iata_code": "KRT",
        "city": "Khartoum"
    },
    {
        "airport_name": "Julius Nyerere International Airport",
        "country_code": "TZ",
        "iata_code": "DAR",
        "city": "Julius"
    },
    {
        "airport_name": "Abeid Amani Karume International Airport",
        "country_code": "TZ",
        "iata_code": "ZNZ",
        "city": "Abeid"
    },
    {
        "airport_name": "Entebbe International Airport",
        "country_code": "UG",
        "iata_code": "EBB",
        "city": "Entebbe"
    },
    {
        "airport_name": "Joint Base Andrews",
        "country_code": "US",
        "iata_code": "ADW",
        "city": "Joint"
    },
    {
        "airport_name": "Hartsfield Jackson Atlanta International Airport",
        "country_code": "US",
        "iata_code": "ATL",
        "city": "Hartsfield"
    },
    {
        "airport_name": "Austin Bergstrom International Airport",
        "country_code": "US",
        "iata_code": "AUS",
        "city": "Austin"
    },
    {
        "airport_name": "Nashville International Airport",
        "country_code": "US",
        "iata_code": "BNA",
        "city": "Nashville"
    },
    {
        "airport_name": "Logan International Airport",
        "country_code": "US",
        "iata_code": "BOS",
        "city": "Logan"
    },
    {
        "airport_name": "Buffalo Niagara International Airport",
        "country_code": "US",
        "iata_code": "BUF",
        "city": "Buffalo"
    },
    {
        "airport_name": "Baltimore\/Washington International Thurgood Marshall Airport",
        "country_code": "US",
        "iata_code": "BWI",
        "city": "Baltimore\/Washington"
    },
    {
        "airport_name": "Cleveland Hopkins International Airport",
        "country_code": "US",
        "iata_code": "CLE",
        "city": "Cleveland"
    },
    {
        "airport_name": "Tirana International Airport Mother Teresa",
        "country_code": "AL",
        "iata_code": "TIA",
        "city": "Tirana"
    },
    {
        "airport_name": "Burgas Airport",
        "country_code": "BG",
        "iata_code": "BOJ",
        "city": "Burgas"
    },
    {
        "airport_name": "Sofia Airport",
        "country_code": "BG",
        "iata_code": "SOF",
        "city": "Sofia"
    },
    {
        "airport_name": "Varna Airport",
        "country_code": "BG",
        "iata_code": "VAR",
        "city": "Varna"
    },
    {
        "airport_name": "Larnaca International Airport",
        "country_code": "CY",
        "iata_code": "LCA",
        "city": "Larnaca"
    },
    {
        "airport_name": "Zagreb Airport",
        "country_code": "HR",
        "iata_code": "ZAG",
        "city": "Zagreb"
    },
    {
        "airport_name": "Alicante-Elche Miguel Hern\u00e1ndez Airport",
        "country_code": "ES",
        "iata_code": "ALC",
        "city": "Alicante-Elche"
    },
    {
        "airport_name": "Josep Tarradellas Barcelona-El Prat Airport",
        "country_code": "ES",
        "iata_code": "BCN",
        "city": "Josep"
    },
    {
        "airport_name": "Ibiza Airport",
        "country_code": "ES",
        "iata_code": "IBZ",
        "city": "Ibiza"
    },
    {
        "airport_name": "Adolfo Su\u00e1rez Madrid\u2013Barajas Airport",
        "country_code": "ES",
        "iata_code": "MAD",
        "city": "Adolfo"
    },
    {
        "airport_name": "Bordeaux-M\u00e9rignac Airport",
        "country_code": "FR",
        "iata_code": "BOD",
        "city": "Bordeaux-M\u00e9rignac"
    },
    {
        "airport_name": "Toulouse-Blagnac Airport",
        "country_code": "FR",
        "iata_code": "TLS",
        "city": "Toulouse-Blagnac"
    },
    {
        "airport_name": "Lyon Saint-Exup\u00e9ry Airport",
        "country_code": "FR",
        "iata_code": "LYS",
        "city": "Lyon"
    },
    {
        "airport_name": "Marseille Provence Airport",
        "country_code": "FR",
        "iata_code": "MRS",
        "city": "Marseille"
    },
    {
        "airport_name": "Nice-C\u00f4te d'Azur Airport",
        "country_code": "FR",
        "iata_code": "NCE",
        "city": "Nice-C\u00f4te"
    },
    {
        "airport_name": "Charles de Gaulle International Airport",
        "country_code": "FR",
        "iata_code": "CDG",
        "city": "Charles"
    },
    {
        "airport_name": "Paris-Orly Airport",
        "country_code": "FR",
        "iata_code": "ORY",
        "city": "Paris-Orly"
    },
    {
        "airport_name": "EuroAirport Basel-Mulhouse-Freiburg Airport",
        "country_code": "FR",
        "iata_code": "BSL",
        "city": "Euro"
    },
    {
        "airport_name": "Athens Eleftherios Venizelos International Airport",
        "country_code": "GR",
        "iata_code": "ATH",
        "city": "Athens"
    },
    {
        "airport_name": "Heraklion International Nikos Kazantzakis Airport",
        "country_code": "GR",
        "iata_code": "HER",
        "city": "Heraklion"
    },
    {
        "airport_name": "Thessaloniki Macedonia International Airport",
        "country_code": "GR",
        "iata_code": "SKG",
        "city": "Thessaloniki"
    },
    {
        "airport_name": "Budapest Liszt Ferenc International Airport",
        "country_code": "HU",
        "iata_code": "BUD",
        "city": "Budapest"
    },
    {
        "airport_name": "Bari Karol Wojty\u0142a Airport",
        "country_code": "IT",
        "iata_code": "BRI",
        "city": "Bari"
    },
    {
        "airport_name": "Brindisi Airport",
        "country_code": "IT",
        "iata_code": "BDS",
        "city": "Brindisi"
    },
    {
        "airport_name": "Catania-Fontanarossa Airport",
        "country_code": "IT",
        "iata_code": "CTA",
        "city": "Catania-Fontanarossa"
    },
    {
        "airport_name": "Falcone\u2013Borsellino Airport",
        "country_code": "IT",
        "iata_code": "PMO",
        "city": "Falcone\u2013Borsellino"
    },
    {
        "airport_name": "Cagliari Elmas Airport",
        "country_code": "IT",
        "iata_code": "CAG",
        "city": "Cagliari"
    },
    {
        "airport_name": "Malpensa International Airport",
        "country_code": "IT",
        "iata_code": "MXP",
        "city": "Malpensa"
    },
    {
        "airport_name": "Milan Bergamo Airport",
        "country_code": "IT",
        "iata_code": "BGY",
        "city": "Milan"
    },
    {
        "airport_name": "Turin Airport",
        "country_code": "IT",
        "iata_code": "TRN",
        "city": "Turin"
    },
    {
        "airport_name": "Ljubljana Jo\u017ee Pu\u010dnik Airport",
        "country_code": "SI",
        "iata_code": "LJU",
        "city": "Ljubljana"
    },
    {
        "airport_name": "V\u00e1clav Havel Airport Prague",
        "country_code": "CZ",
        "iata_code": "PRG",
        "city": "V\u00e1clav"
    },
    {
        "airport_name": "Ben Gurion International Airport",
        "country_code": "IL",
        "iata_code": "TLV",
        "city": "Ben"
    },
    {
        "airport_name": "Ramon International Airport",
        "country_code": "IL",
        "iata_code": "ETM",
        "city": "Ramon"
    },
    {
        "airport_name": "Malta International Airport",
        "country_code": "MT",
        "iata_code": "MLA",
        "city": "Malta"
    },
    {
        "airport_name": "Vienna International Airport",
        "country_code": "AT",
        "iata_code": "VIE",
        "city": "Vienna"
    },
    {
        "airport_name": "Faro Airport",
        "country_code": "PT",
        "iata_code": "FAO",
        "city": "Faro"
    },
    {
        "airport_name": "Jo\u00e3o Paulo II Airport",
        "country_code": "PT",
        "iata_code": "PDL",
        "city": "Jo\u00e3o"
    },
    {
        "airport_name": "Francisco de S\u00e1 Carneiro Airport",
        "country_code": "PT",
        "iata_code": "OPO",
        "city": "Francisco"
    },
    {
        "airport_name": "Humberto Delgado Airport (Lisbon Portela Airport)",
        "country_code": "PT",
        "iata_code": "LIS",
        "city": "Humberto"
    },
    {
        "airport_name": "Henri Coand\u0103 International Airport",
        "country_code": "RO",
        "iata_code": "OTP",
        "city": "Henri"
    },
    {
        "airport_name": "Geneva Cointrin International Airport",
        "country_code": "CH",
        "iata_code": "GVA",
        "city": "Geneva"
    },
    {
        "airport_name": "Z\u00fcrich Airport",
        "country_code": "CH",
        "iata_code": "ZRH",
        "city": "Z\u00fcrich"
    },
    {
        "airport_name": "Esenbo\u011fa International Airport",
        "country_code": "TR",
        "iata_code": "ESB",
        "city": "Esenbo\u011fa"
    },
    {
        "airport_name": "Antalya International Airport",
        "country_code": "TR",
        "iata_code": "AYT",
        "city": "Antalya"
    },
    {
        "airport_name": "\u0130stanbul Atat\u00fcrk Airport",
        "country_code": "TR",
        "iata_code": "ISL",
        "city": "\u0130stanbul"
    },
    {
        "airport_name": "Adnan Menderes International Airport",
        "country_code": "TR",
        "iata_code": "ADB",
        "city": "Adnan"
    },
    {
        "airport_name": "Dalaman International Airport",
        "country_code": "TR",
        "iata_code": "DLM",
        "city": "Dalaman"
    },
    {
        "airport_name": "Milas Bodrum International Airport",
        "country_code": "TR",
        "iata_code": "BJV",
        "city": "Milas"
    },
    {
        "airport_name": "Istanbul Sabiha G\u00f6k\u00e7en International Airport",
        "country_code": "TR",
        "iata_code": "SAW",
        "city": "Istanbul"
    },
    {
        "airport_name": "\u0130stanbul Airport",
        "country_code": "TR",
        "iata_code": "IST",
        "city": "\u0130stanbul"
    },
    {
        "airport_name": "Skopje International Airport",
        "country_code": "MK",
        "iata_code": "SKP",
        "city": "Skopje"
    },
    {
        "airport_name": "Belgrade Nikola Tesla Airport",
        "country_code": "RS",
        "iata_code": "BEG",
        "city": "Belgrade"
    },
    {
        "airport_name": "Podgorica Airport \/ Podgorica Golubovci Airbase",
        "country_code": "ME",
        "iata_code": "TGD",
        "city": "Podgorica"
    },
    {
        "airport_name": "M. R. \u0160tef\u00e1nik Airport",
        "country_code": "SK",
        "iata_code": "BTS",
        "city": "M."
    },
    {
        "airport_name": "Providenciales International Airport",
        "country_code": "TC",
        "iata_code": "PLS",
        "city": "Providenciales"
    },
    {
        "airport_name": "Punta Cana International Airport",
        "country_code": "DO",
        "iata_code": "PUJ",
        "city": "Punta"
    },
    {
        "airport_name": "Las Am\u00e9ricas International Airport",
        "country_code": "DO",
        "iata_code": "SDQ",
        "city": "Las"
    },
    {
        "airport_name": "La Aurora Airport",
        "country_code": "GT",
        "iata_code": "GUA",
        "city": "La"
    },
    {
        "airport_name": "Norman Manley International Airport",
        "country_code": "JM",
        "iata_code": "KIN",
        "city": "Norman"
    },
    {
        "airport_name": "Aeropuerto Internacional Juan N. \u00c1lvarez",
        "country_code": "MX",
        "iata_code": "ACA",
        "city": "Aeropuerto"
    },
    {
        "airport_name": "Aeropuerto Internacional de Cozumel",
        "country_code": "MX",
        "iata_code": "CZM",
        "city": "Aeropuerto"
    },
    {
        "airport_name": "Aeropuerto Internacional Gral, Guadalupe Victoria",
        "country_code": "MX",
        "iata_code": "DGO",
        "city": "Aeropuerto"
    },
    {
        "airport_name": "Aeropuerto Internacional Miguel Hidalgo",
        "country_code": "MX",
        "iata_code": "GDL",
        "city": "Aeropuerto"
    },
    {
        "airport_name": "General Ignacio P. Garcia International Airport",
        "country_code": "MX",
        "iata_code": "HMO",
        "city": "General"
    },
    {
        "airport_name": "Aeropuerto Internacional Del Baj\u00edo",
        "country_code": "MX",
        "iata_code": "BJX",
        "city": "Aeropuerto"
    },
    {
        "airport_name": "Aeropuerto Internacional Manuel Crescencio Rej\u00f3n",
        "country_code": "MX",
        "iata_code": "MID",
        "city": "Aeropuerto"
    },
    {
        "airport_name": "Aeropuerto Internacional Lic. Benito Ju\u00e1rez",
        "country_code": "MX",
        "iata_code": "MEX",
        "city": "Aeropuerto"
    },
    {
        "airport_name": "Tocumen International Airport",
        "country_code": "PA",
        "iata_code": "PTY",
        "city": "Tocumen"
    },
    {
        "airport_name": "Guanacaste Airport",
        "country_code": "CR",
        "iata_code": "LIR",
        "city": "Guanacaste"
    },
    {
        "airport_name": "Monse\u00f1or \u00d3scar Arnulfo Romero International Airport",
        "country_code": "SV",
        "iata_code": "SAL",
        "city": "Monse\u00f1or"
    },
    {
        "airport_name": "Toussaint Louverture International Airport",
        "country_code": "HT",
        "iata_code": "PAP",
        "city": "Toussaint"
    },
    {
        "airport_name": "Jos\u00e9 Mart\u00ed International Airport",
        "country_code": "CU",
        "iata_code": "HAV",
        "city": "Jos\u00e9"
    },
    {
        "airport_name": "Juan Gualberto Gomez International Airport",
        "country_code": "CU",
        "iata_code": "VRA",
        "city": "Juan"
    },
    {
        "airport_name": "Owen Roberts International Airport",
        "country_code": "KY",
        "iata_code": "GCM",
        "city": "Owen"
    },
    {
        "airport_name": "Lynden Pindling International Airport",
        "country_code": "BS",
        "iata_code": "NAS",
        "city": "Lynden"
    },
    {
        "airport_name": "Philip S. W. Goldson International Airport",
        "country_code": "BZ",
        "iata_code": "BZE",
        "city": "Philip"
    },
    {
        "airport_name": "Faa'a International Airport",
        "country_code": "PF",
        "iata_code": "PPT",
        "city": "Faa'a"
    },
    {
        "airport_name": "Bauerfield International Airport",
        "country_code": "VU",
        "iata_code": "VLI",
        "city": "Bauerfield"
    },
    {
        "airport_name": "Noum\u00e9a Magenta Airport",
        "country_code": "NC",
        "iata_code": "GEA",
        "city": "Noum\u00e9a"
    },
    {
        "airport_name": "Auckland International Airport",
        "country_code": "NZ",
        "iata_code": "AKL",
        "city": "Auckland"
    },
    {
        "airport_name": "Christchurch International Airport",
        "country_code": "NZ",
        "iata_code": "CHC",
        "city": "Christchurch"
    },
    {
        "airport_name": "Wellington International Airport",
        "country_code": "NZ",
        "iata_code": "WLG",
        "city": "Wellington"
    },
    {
        "airport_name": "Bahrain International Airport",
        "country_code": "BH",
        "iata_code": "BAH",
        "city": "Bahrain"
    },
    {
        "airport_name": "King Fahd International Airport",
        "country_code": "SA",
        "iata_code": "DMM",
        "city": "King"
    },
    {
        "airport_name": "King Abdulaziz Air Base",
        "country_code": "SA",
        "iata_code": "DHA",
        "city": "King"
    },
    {
        "airport_name": "King Abdulaziz International Airport",
        "country_code": "SA",
        "iata_code": "JED",
        "city": "King"
    },
    {
        "airport_name": "Prince Mohammad Bin Abdulaziz Airport",
        "country_code": "SA",
        "iata_code": "MED",
        "city": "Prince"
    },
    {
        "airport_name": "King Khaled International Airport",
        "country_code": "SA",
        "iata_code": "RUH",
        "city": "King"
    },
    {
        "airport_name": "Imam Khomeini International Airport",
        "country_code": "IR",
        "iata_code": "IKA",
        "city": "Imam"
    },
    {
        "airport_name": "Mehrabad International Airport",
        "country_code": "IR",
        "iata_code": "THR",
        "city": "Mehrabad"
    },
    {
        "airport_name": "Mashhad International Airport",
        "country_code": "IR",
        "iata_code": "MHD",
        "city": "Mashhad"
    },
    {
        "airport_name": "Shiraz Shahid Dastghaib International Airport",
        "country_code": "IR",
        "iata_code": "SYZ",
        "city": "Shiraz"
    },
    {
        "airport_name": "Queen Alia International Airport",
        "country_code": "JO",
        "iata_code": "AMM",
        "city": "Queen"
    },
    {
        "airport_name": "Kuwait International Airport",
        "country_code": "KW",
        "iata_code": "KWI",
        "city": "Kuwait"
    },
    {
        "airport_name": "Beirut Rafic Hariri International Airport",
        "country_code": "LB",
        "iata_code": "BEY",
        "city": "Beirut"
    },
    {
        "airport_name": "Duqm International Airport",
        "country_code": "OM",
        "iata_code": "DQM",
        "city": "Duqm"
    },
    {
        "airport_name": "Abu Dhabi International Airport",
        "country_code": "AE",
        "iata_code": "AUH",
        "city": "Abu"
    },
    {
        "airport_name": "Dubai International Airport",
        "country_code": "AE",
        "iata_code": "DXB",
        "city": "Dubai"
    },
    {
        "airport_name": "Al Maktoum International Airport",
        "country_code": "AE",
        "iata_code": "DWC",
        "city": "Al"
    },
    {
        "airport_name": "Sharjah International Airport",
        "country_code": "AE",
        "iata_code": "SHJ",
        "city": "Sharjah"
    },
    {
        "airport_name": "Muscat International Airport",
        "country_code": "OM",
        "iata_code": "MCT",
        "city": "Muscat"
    },
    {
        "airport_name": "Islamabad International Airport",
        "country_code": "PK",
        "iata_code": "ISB",
        "city": "Islamabad"
    },
    {
        "airport_name": "Jinnah International Airport",
        "country_code": "PK",
        "iata_code": "KHI",
        "city": "Jinnah"
    },
    {
        "airport_name": "Allama Iqbal International Airport",
        "country_code": "PK",
        "iata_code": "LHE",
        "city": "Allama"
    },
    {
        "airport_name": "Baghdad International Airport \/ New Al Muthana Air Base",
        "country_code": "IQ",
        "iata_code": "BGW",
        "city": "Baghdad"
    },
    {
        "airport_name": "Damascus International Airport",
        "country_code": "SY",
        "iata_code": "DAM",
        "city": "Damascus"
    },
    {
        "airport_name": "Hamad International Airport",
        "country_code": "QA",
        "iata_code": "DOH",
        "city": "Hamad"
    },
    {
        "airport_name": "Antonio B. Won Pat International Airport",
        "country_code": "GU",
        "iata_code": "GUM",
        "city": "Antonio"
    },
    {
        "airport_name": "Kaohsiung International Airport",
        "country_code": "TW",
        "iata_code": "KHH",
        "city": "Kaohsiung"
    },
    {
        "airport_name": "Taiwan Taoyuan International Airport",
        "country_code": "TW",
        "iata_code": "TPE",
        "city": "Taiwan"
    },
    {
        "airport_name": "Narita International Airport",
        "country_code": "JP",
        "iata_code": "NRT",
        "city": "Narita"
    },
    {
        "airport_name": "Kansai International Airport",
        "country_code": "JP",
        "iata_code": "KIX",
        "city": "Kansai"
    },
    {
        "airport_name": "New Chitose Airport",
        "country_code": "JP",
        "iata_code": "CTS",
        "city": "New"
    },
    {
        "airport_name": "Fukuoka Airport",
        "country_code": "JP",
        "iata_code": "FUK",
        "city": "Fukuoka"
    },
    {
        "airport_name": "Kagoshima Airport",
        "country_code": "JP",
        "iata_code": "KOJ",
        "city": "Kagoshima"
    },
    {
        "airport_name": "Chubu Centrair International Airport",
        "country_code": "JP",
        "iata_code": "NGO",
        "city": "Chubu"
    },
    {
        "airport_name": "Osaka International Airport",
        "country_code": "JP",
        "iata_code": "ITM",
        "city": "Osaka"
    },
    {
        "airport_name": "Sendai Airport",
        "country_code": "JP",
        "iata_code": "SDJ",
        "city": "Sendai"
    },
    {
        "airport_name": "Muan International Airport",
        "country_code": "KR",
        "iata_code": "MWX",
        "city": "Muan"
    },
    {
        "airport_name": "Jeju International Airport",
        "country_code": "KR",
        "iata_code": "CJU",
        "city": "Jeju"
    },
    {
        "airport_name": "Gimhae International Airport",
        "country_code": "KR",
        "iata_code": "PUS",
        "city": "Gimhae"
    },
    {
        "airport_name": "Incheon International Airport",
        "country_code": "KR",
        "iata_code": "ICN",
        "city": "Incheon"
    },
    {
        "airport_name": "Gimpo International Airport",
        "country_code": "KR",
        "iata_code": "GMP",
        "city": "Gimpo"
    },
    {
        "airport_name": "Ninoy Aquino International Airport",
        "country_code": "PH",
        "iata_code": "MNL",
        "city": "Ninoy"
    },
    {
        "airport_name": "Francisco Bangoy International Airport",
        "country_code": "PH",
        "iata_code": "DVO",
        "city": "Francisco"
    },
    {
        "airport_name": "Mactan Cebu International Airport",
        "country_code": "PH",
        "iata_code": "CEB",
        "city": "Mactan"
    },
    {
        "airport_name": "Lipetsk Air Base",
        "country_code": "RU",
        "iata_code": null,
        "city": "Lipetsk"
    },
    {
        "airport_name": "Jorge Newbery Airpark",
        "country_code": "AR",
        "iata_code": "AEP",
        "city": "Jorge"
    },
    {
        "airport_name": "Minister Pistarini International Airport",
        "country_code": "AR",
        "iata_code": "EZE",
        "city": "Minister"
    },
    {
        "airport_name": "Val de Cans\/J\u00falio Cezar Ribeiro International Airport",
        "country_code": "BR",
        "iata_code": "BEL",
        "city": "Val"
    },
    {
        "airport_name": "Presidente Juscelino Kubitschek International Airport",
        "country_code": "BR",
        "iata_code": "BSB",
        "city": "Presidente"
    },
    {
        "airport_name": "Tancredo Neves International Airport",
        "country_code": "BR",
        "iata_code": "CNF",
        "city": "Tancredo"
    },
    {
        "airport_name": "Eduardo Gomes International Airport",
        "country_code": "BR",
        "iata_code": "MAO",
        "city": "Eduardo"
    },
    {
        "airport_name": "Herc\u00edlio Luz International Airport",
        "country_code": "BR",
        "iata_code": "FLN",
        "city": "Herc\u00edlio"
    },
    {
        "airport_name": "Rio Gale\u00e3o \u2013 Tom Jobim International Airport",
        "country_code": "BR",
        "iata_code": "GIG",
        "city": "Rio"
    },
    {
        "airport_name": "Guarulhos - Governador Andr\u00e9 Franco Montoro International Airport",
        "country_code": "BR",
        "iata_code": "GRU",
        "city": "Guarulhos"
    },
    {
        "airport_name": "Deputado Luiz Eduardo Magalh\u00e3es International Airport",
        "country_code": "BR",
        "iata_code": "SSA",
        "city": "Deputado"
    },
    {
        "airport_name": "Comodoro Arturo Merino Ben\u00edtez International Airport",
        "country_code": "CL",
        "iata_code": "SCL",
        "city": "Comodoro"
    },
    {
        "airport_name": "Jos\u00e9 Joaqu\u00edn de Olmedo International Airport",
        "country_code": "EC",
        "iata_code": "GYE",
        "city": "Jos\u00e9"
    },
    {
        "airport_name": "Mariscal Sucre International Airport",
        "country_code": "EC",
        "iata_code": "UIO",
        "city": "Mariscal"
    },
    {
        "airport_name": "Aeropuerto Internacional Silvio Pettirossi",
        "country_code": "PY",
        "iata_code": "ASU",
        "city": "Aeropuerto"
    },
    {
        "airport_name": "Aeropuerto Internacional Guaran\u00ed",
        "country_code": "PY",
        "iata_code": "AGT",
        "city": "Aeropuerto"
    },
    {
        "airport_name": "Aeropuerto Internacional Dr. Luis Maria Arga\u00f1a",
        "country_code": "PY",
        "iata_code": "ESG",
        "city": "Aeropuerto"
    },
    {
        "airport_name": "Aeropuerto Internacional Dr. Augusto Roberto Fuster",
        "country_code": "PY",
        "iata_code": "PJC",
        "city": "Aeropuerto"
    },
    {
        "airport_name": "El Dorado International Airport",
        "country_code": "CO",
        "iata_code": "BOG",
        "city": "El"
    },
    {
        "airport_name": "Viru Viru International Airport",
        "country_code": "BO",
        "iata_code": "VVI",
        "city": "Viru"
    },
    {
        "airport_name": "Johan Adolf Pengel International Airport",
        "country_code": "SR",
        "iata_code": "PBM",
        "city": "Johan"
    },
    {
        "airport_name": "Cayenne \u2013 F\u00e9lix Ebou\u00e9 Airport",
        "country_code": "GF",
        "iata_code": "CAY",
        "city": "Cayenne"
    },
    {
        "airport_name": "Jorge Ch\u00e1vez International Airport",
        "country_code": "PE",
        "iata_code": "LIM",
        "city": "Jorge"
    },
    {
        "airport_name": "Alejandro Velasco Astete International Airport",
        "country_code": "PE",
        "iata_code": "CUZ",
        "city": "Alejandro"
    },
    {
        "airport_name": "Carrasco General Ces\u00e1reo L. Berisso International Airport",
        "country_code": "UY",
        "iata_code": "MVD",
        "city": "Carrasco"
    },
    {
        "airport_name": "General Jos\u00e9 Antonio Anzoategui International Airport",
        "country_code": "VE",
        "iata_code": "BLA",
        "city": "General"
    },
    {
        "airport_name": "Sim\u00f3n Bol\u00edvar International Airport",
        "country_code": "VE",
        "iata_code": "CCS",
        "city": "Sim\u00f3n"
    },
    {
        "airport_name": "Qingdao Jiaodong International Airport",
        "country_code": "CN",
        "iata_code": "TAO",
        "city": "Qingdao"
    },
    {
        "airport_name": "Martinique Aim\u00e9 C\u00e9saire International Airport",
        "country_code": "MQ",
        "iata_code": "FDF",
        "city": "Martinique"
    },
    {
        "airport_name": "Pointe-\u00e0-Pitre Le Raizet International  Airport",
        "country_code": "GP",
        "iata_code": "PTP",
        "city": "Pointe-\u00e0-Pitre"
    },
    {
        "airport_name": "Luis Munoz Marin International Airport",
        "country_code": "PR",
        "iata_code": "SJU",
        "city": "Luis"
    },
    {
        "airport_name": "Hewanorra International Airport",
        "country_code": "LC",
        "iata_code": "UVF",
        "city": "Hewanorra"
    },
    {
        "airport_name": "Queen Beatrix International Airport",
        "country_code": "AW",
        "iata_code": "AUA",
        "city": "Queen"
    },
    {
        "airport_name": "Flamingo International Airport",
        "country_code": "BQ",
        "iata_code": "BON",
        "city": "Flamingo"
    },
    {
        "airport_name": "Hato International Airport",
        "country_code": "CW",
        "iata_code": "CUR",
        "city": "Hato"
    },
    {
        "airport_name": "Princess Juliana International Airport",
        "country_code": "SX",
        "iata_code": "SXM",
        "city": "Princess"
    },
    {
        "airport_name": "Almaty International Airport",
        "country_code": "KZ",
        "iata_code": "ALA",
        "city": "Almaty"
    },
    {
        "airport_name": "Nursultan Nazarbayev International Airport",
        "country_code": "KZ",
        "iata_code": "NQZ",
        "city": "Nursultan"
    },
    {
        "airport_name": "Manas International Airport",
        "country_code": "KG",
        "iata_code": "FRU",
        "city": "Manas"
    },
    {
        "airport_name": "Hazrat Sultan International Airport",
        "country_code": "KZ",
        "iata_code": "HSA",
        "city": "Hazrat"
    },
    {
        "airport_name": "Heydar Aliyev International Airport",
        "country_code": "AZ",
        "iata_code": "GYD",
        "city": "Heydar"
    },
    {
        "airport_name": "Zvartnots International Airport",
        "country_code": "AM",
        "iata_code": "EVN",
        "city": "Zvartnots"
    },
    {
        "airport_name": "Tbilisi International Airport",
        "country_code": "GE",
        "iata_code": "TBS",
        "city": "Tbilisi"
    },
    {
        "airport_name": "Vladivostok International Airport",
        "country_code": "RU",
        "iata_code": "VVO",
        "city": "Vladivostok"
    },
    {
        "airport_name": "Boryspil International Airport",
        "country_code": "UA",
        "iata_code": "KBP",
        "city": "Boryspil"
    },
    {
        "airport_name": "Lviv International Airport",
        "country_code": "UA",
        "iata_code": "LWO",
        "city": "Lviv"
    },
    {
        "airport_name": "Pulkovo Airport",
        "country_code": "RU",
        "iata_code": "LED",
        "city": "Pulkovo"
    },
    {
        "airport_name": "Minsk National Airport",
        "country_code": "BY",
        "iata_code": "MSQ",
        "city": "Minsk"
    },
    {
        "airport_name": "Krasnoyarsk International Airport",
        "country_code": "RU",
        "iata_code": "KJA",
        "city": "Krasnoyarsk"
    },
    {
        "airport_name": "Novosibirsk Tolmachevo Airport",
        "country_code": "RU",
        "iata_code": "OVB",
        "city": "Novosibirsk"
    },
    {
        "airport_name": "Platov International Airport",
        "country_code": "RU",
        "iata_code": "ROV",
        "city": "Platov"
    },
    {
        "airport_name": "Sochi International Airport",
        "country_code": "RU",
        "iata_code": "AER",
        "city": "Sochi"
    },
    {
        "airport_name": "Koltsovo Airport",
        "country_code": "RU",
        "iata_code": "SVX",
        "city": "Koltsovo"
    },
    {
        "airport_name": "Ashgabat International Airport",
        "country_code": "TM",
        "iata_code": "ASB",
        "city": "Ashgabat"
    },
    {
        "airport_name": "Tashkent International Airport",
        "country_code": "UZ",
        "iata_code": "TAS",
        "city": "Tashkent"
    },
    {
        "airport_name": "Chhatrapati Shivaji International Airport",
        "country_code": "IN",
        "iata_code": "BOM",
        "city": "Chhatrapati"
    },
    {
        "airport_name": "Dabolim Airport",
        "country_code": "IN",
        "iata_code": "GOI",
        "city": "Dabolim"
    },
    {
        "airport_name": "Bandaranaike International Colombo Airport",
        "country_code": "LK",
        "iata_code": "CMB",
        "city": "Bandaranaike"
    },
    {
        "airport_name": "Mattala Rajapaksa International Airport",
        "country_code": "LK",
        "iata_code": "HRI",
        "city": "Mattala"
    },
    {
        "airport_name": "Phnom Penh International Airport",
        "country_code": "KH",
        "iata_code": "PNH",
        "city": "Phnom"
    },
    {
        "airport_name": "Siem Reap International Airport",
        "country_code": "KH",
        "iata_code": "REP",
        "city": "Siem"
    },
    {
        "airport_name": "Netaji Subhash Chandra Bose International Airport",
        "country_code": "IN",
        "iata_code": "CCU",
        "city": "Netaji"
    },
    {
        "airport_name": "Hazrat Shahjalal International Airport",
        "country_code": "BD",
        "iata_code": "DAC",
        "city": "Hazrat"
    },
    {
        "airport_name": "Hong Kong International Airport",
        "country_code": "HK",
        "iata_code": "HKG",
        "city": "Hong"
    },
    {
        "airport_name": "Indira Gandhi International Airport",
        "country_code": "IN",
        "iata_code": "DEL",
        "city": "Indira"
    },
    {
        "airport_name": "Macau International Airport",
        "country_code": "MO",
        "iata_code": "MFM",
        "city": "Macau"
    },
    {
        "airport_name": "Tribhuvan International Airport",
        "country_code": "NP",
        "iata_code": "KTM",
        "city": "Tribhuvan"
    },
    {
        "airport_name": "Kempegowda International Airport",
        "country_code": "IN",
        "iata_code": "BLR",
        "city": "Kempegowda"
    },
    {
        "airport_name": "Cochin International Airport",
        "country_code": "IN",
        "iata_code": "COK",
        "city": "Cochin"
    },
    {
        "airport_name": "Rajiv Gandhi International Airport",
        "country_code": "IN",
        "iata_code": "HYD",
        "city": "Rajiv"
    },
    {
        "airport_name": "Chennai International Airport",
        "country_code": "IN",
        "iata_code": "MAA",
        "city": "Chennai"
    },
    {
        "airport_name": "Mal\u00e9 International Airport",
        "country_code": "MV",
        "iata_code": "MLE",
        "city": "Mal\u00e9"
    },
    {
        "airport_name": "Don Mueang International Airport",
        "country_code": "TH",
        "iata_code": "DMK",
        "city": "Don"
    },
    {
        "airport_name": "Suvarnabhumi Airport",
        "country_code": "TH",
        "iata_code": "BKK",
        "city": "Suvarnabhumi"
    },
    {
        "airport_name": "Chiang Mai International Airport",
        "country_code": "TH",
        "iata_code": "CNX",
        "city": "Chiang"
    },
    {
        "airport_name": "Phuket International Airport",
        "country_code": "TH",
        "iata_code": "HKT",
        "city": "Phuket"
    },
    {
        "airport_name": "Noi Bai International Airport",
        "country_code": "VN",
        "iata_code": "HAN",
        "city": "Noi"
    },
    {
        "airport_name": "Tan Son Nhat International Airport",
        "country_code": "VN",
        "iata_code": "SGN",
        "city": "Tan"
    },
    {
        "airport_name": "Mandalay International Airport",
        "country_code": "MM",
        "iata_code": "MDL",
        "city": "Mandalay"
    },
    {
        "airport_name": "Yangon International Airport",
        "country_code": "MM",
        "iata_code": "RGN",
        "city": "Yangon"
    },
    {
        "airport_name": "Hasanuddin International Airport",
        "country_code": "ID",
        "iata_code": "UPG",
        "city": "Hasanuddin"
    },
    {
        "airport_name": "Ngurah Rai (Bali) International Airport",
        "country_code": "ID",
        "iata_code": "DPS",
        "city": "Ngurah"
    },
    {
        "airport_name": "Dortheys Hiyo Eluay International Airport",
        "country_code": "ID",
        "iata_code": "DJJ",
        "city": "Dortheys"
    },
    {
        "airport_name": "Sultan Aji Muhammad Sulaiman Sepinggan International Airport",
        "country_code": "ID",
        "iata_code": "BPN",
        "city": "Sultan"
    },
    {
        "airport_name": "Juanda International Airport",
        "country_code": "ID",
        "iata_code": "SUB",
        "city": "Juanda"
    },
    {
        "airport_name": "Brunei International Airport",
        "country_code": "BN",
        "iata_code": "BWN",
        "city": "Brunei"
    },
    {
        "airport_name": "Soekarno-Hatta International Airport",
        "country_code": "ID",
        "iata_code": "CGK",
        "city": "Soekarno-Hatta"
    },
    {
        "airport_name": "Kualanamu International Airport",
        "country_code": "ID",
        "iata_code": "KNO",
        "city": "Kualanamu"
    },
    {
        "airport_name": "Kuala Lumpur International Airport",
        "country_code": "MY",
        "iata_code": "KUL",
        "city": "Kuala"
    },
    {
        "airport_name": "Singapore Changi Airport",
        "country_code": "SG",
        "iata_code": "SIN",
        "city": "Singapore"
    },
    {
        "airport_name": "Brisbane International Airport",
        "country_code": "AU",
        "iata_code": "BNE",
        "city": "Brisbane"
    },
    {
        "airport_name": "Melbourne International Airport",
        "country_code": "AU",
        "iata_code": "MEL",
        "city": "Melbourne"
    },
    {
        "airport_name": "Yantai Penglai International Airport",
        "country_code": "CN",
        "iata_code": "YNT",
        "city": "Yantai"
    },
    {
        "airport_name": "Adelaide International Airport",
        "country_code": "AU",
        "iata_code": "ADL",
        "city": "Adelaide"
    },
    {
        "airport_name": "Darwin International Airport \/ RAAF Darwin",
        "country_code": "AU",
        "iata_code": "DRW",
        "city": "Darwin"
    },
    {
        "airport_name": "Perth International Airport",
        "country_code": "AU",
        "iata_code": "PER",
        "city": "Perth"
    },
    {
        "airport_name": "Sydney Kingsford Smith International Airport",
        "country_code": "AU",
        "iata_code": "SYD",
        "city": "Sydney"
    },
    {
        "airport_name": "Beijing Capital International Airport",
        "country_code": "CN",
        "iata_code": "PEK",
        "city": "Beijing"
    },
    {
        "airport_name": "Beijing Daxing International Airport",
        "country_code": "CN",
        "iata_code": "PKX",
        "city": "Beijing"
    },
    {
        "airport_name": "Hohhot Baita International Airport",
        "country_code": "CN",
        "iata_code": "HET",
        "city": "Hohhot"
    },
    {
        "airport_name": "Tianjin Binhai International Airport",
        "country_code": "CN",
        "iata_code": "TSN",
        "city": "Tianjin"
    },
    {
        "airport_name": "Taiyuan Wusu Airport",
        "country_code": "CN",
        "iata_code": "TYN",
        "city": "Taiyuan"
    },
    {
        "airport_name": "Ulaanbaatar Chinggis Khaan International Airport",
        "country_code": "MN",
        "iata_code": "UBN",
        "city": "Ulaanbaatar"
    }
  ];
  export default airports;