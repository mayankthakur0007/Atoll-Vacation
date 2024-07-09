import bali from './assets/bali.jpg';
import bali2 from './assets/bali2.jpg';
import maldives1 from './assets/maldives1.jpg';
import dubai1 from './assets/dubai.jpg';
import dubai2 from './assets/dubai2.jpg';
import thailand1 from './assets/thailand1.jpg';
import thailand2 from './assets/thailand2.jpg';
import singapore1 from './assets/singapore1.jpg';
import italy from './assets/italy3.jpg';
import maur from './assets/mauritius1.jpg';
import maur2 from './assets/mauritius2.jpg';
import himachal from './assets/himachal.jpg';
import him from './assets/him.jpg';
import rajasthan from './assets/rajasthan.jpg';
import goa from './assets/goa.jpg';
import leh from './assets/leh.jpg';
import Kashmir from './assets/kashmir.jpg';
import kerela from './assets/kerela.jpg';
import andaman from './assets/andaman.jpg';
import cor from './assets/cor.jpg';
import assam from './assets/assam.jpg';

export const locationData = [
  {
    id: 1,
    value: "BALI",
    image: "",
    packages: [
      {
        id: "1",
        price: "17,800",
        plan: "4N/5D",
        image: bali,
        points: [
          "4 Nights stay at hotel with Breakfast",
          "Kintamani Ubud tour",
          "Nusa Penida tour with Lunch -Snorkelling",
          "Water sports -Jet ski, Parasailing and Banana boat Ride",
          "Tanah Lot temple tour",
          "All transfer",
        ],
      },
      {
        id: "2",
        price: "21,999",
        plan: "5N/6D",
        image: bali2,
        points: [
          "2 NIGHTS STAY AT UBUD WITH BREAKFAST",
          "3 NIGHTS STAY AT KUTA/SEMINYAK WITH BREAKFAST",
          "AIRPORT TRANSFER ROUND-TRIP ON PRIVATE",
          "KIMTAMANI TOUR WITH UBUD MARKET",
          "BALI SWING",
          "TANAH LOT TEMPLE TOUR",
          "NUSA PENIDA TOUR WITH LUNCH",
        ],
      },
    ],
  },
  {
    id: 2,
    value: "DUBAI",
    image: "",
    packages: [
      {
        id: "1",
        price: "32,550",
        plan: "4N/5D",
        points: [
          "4 Nights stay at Good Hotels",
          "Pick up and drop from Dubai Airport",
          "City tour of Dubai",
          "Dhow Marina cruise with International buffet dinner",
          "Dessert safari with BBQ dinner belly dance",
          "Burj khalifa 124th Floor with entry tickets Visa",
        ],
        image: dubai1,
      },
      {
        id: 2,
        price: "39,900",
        plan: "5N/6D",
        points: [
          "5 nights accommodation at good hotels with breakfast",
          "Airport to hotel round-trip transfer on private basis",
          "City tour of Dubai",
          "Dhow marina cruise with Dinner",
          "Desert safari with BBQ dinner",
          "Burj khalifa 124th floor",
          "Fountain show",
          "Dubai Mall",
          "Future of museum",
          "Visa",
        ],
        image: dubai2,
      },
    ],
  },
  {
    id: 3,
    value: "MALDIVES",
    image: "",
    packages: [
      {
        id: "1",
        price: "35,999",
        plan: "4N/5D",
        points: [
          "4 nights stay at Good resort",
          "Breakfast and dinner included",
          "Speedboat transfer",
          "Green tax",
          "Snorkelling",
          "Lunch on sand bank",
          "Honeymoon freebies",
        ],
        image: maldives1,
      },
    ],
  },
  {
    id: 4,
    value: "THAILAND",
    image: "",
    packages: [
      {
        id: "1",
        price: "15,999",
        plan: "4N/5D",
        points: [
          "2 nights stay at Pattaya",
          "2 nights stay at Bangkok",
          "Breakfast included",
          "Bangkok airport to Pattaya hotel transfer",
          "Coral island tour",
          "Alcazar show",
          "Pattaya to Bangkok hotel transfer",
          "City tour of Bangkok",
          "Bangkok hotel to Bangkok airport transfer",
        ],
        image: thailand1,
      },
      {
        id: "2",
        price: "24,999",
        plan: "5N/6D",
        points: [
          "5 nights stay at good hotels with breakfast",
          "Airport to hotel round-trip transfer",
          "City tour of Bangkok",
          "Coral island with lunch",
          "Safari world and marine park",
          "All tours and transfers on private",
        ],
        image: thailand2,
      },
    ],
  },
  {
    id: 5,
    value: "SINGAPORE",
    image: "",
    packages: [
      {
        id: "1",
        price: "33,000",
        plan: "4N/5D",
        points: [
          "4 Nights Stay at Hotel with Breakfast",
          "Singapore Airport to Singapore Hotel transfer on private basis",
          "Singapore city tour",
          "Sentosa island tour",
          "Universal Studio",
          "Nights safari",
          "Garden by the way",
          "Marina Sky park",
          "Visa",
          "Singapore Hotel to SINGAPORE Airport transfer on private basis",
          "Minimum 2 person Required",
        ],
        image: singapore1,
      },
    ],
  },
  {
    id: 7,
    value: "CORDELIA CRUISE",
    image: "",
    packages: [
      {
        id: "1",
        price: "26,000",
        points: [
          "All meals included",
          "All taxes included",
          "Port charges included",
        ],
        plan: "2N/3D",
        image: cor,
      },
    ],
  },
  {
    id: 14,
    value: "KASHMIR",
    image: "",
    packages: [
      {
        id: "1",
        price: "14,999",
        points: [
          "2 nights stay at Srinagar",
          "1 night stay at Pahalgam",
          "1 Night stay at Houseboat in Dal lake",
          "1 Hrs Shikara Ride complimentary",
          "Breakfast and Dinner Included",
          "Pick up and drop From Srinagar Airport",
          "All tours and transfer on Private basis",
          "Minimum 2 person Required",
        ],
        plan: "4N/5D",
        image: Kashmir,
      },
    ],
  },
  {
    id: 15,
    value: "HIMACHAL PRADESH",
    image: "",
    packages: [
      {
        id: "1",
        price: "14,999",
        points: [
          "2 nights Shimla +3 Nights Manali",
          "Breakfast and dinner",
          "Delhi /Chandigarh Pick up and drop",
          "3* Best hotels",
          "Best view resort",
          "Minimum 2 person required",
        ],
        plan: "5N/6D",
        image: him,
      },
      {
        id: "2",
        price: "24,500",
        points: [
          '2 nights Shimla at good hotels', 
          '3 nights Manali stay at good hotels', 
          'Breakfast and dinner',
          'Pick up and drop from Chandigarh or Delhi', 
          'Solang vally trip', 
          'Kufri trip',
          'Manali local city tour', 
          'Mall road', 
          'Manikaran sahib and kullu trip', 
          'All tours and transfers on private basis'
        ],
        plan: "5N/6D",
        image: himachal,
      }
    ],
  },
  {
    id: 16,
    value: "ANDAMAN AND NICOBAR",
    image: "",
    packages: [
      {
        id: "1",
        price: "19,800",
        points: [
          "2 nights Portblair",
          "2 nights Havelock",
          "1 night Neil Island",
          "Good hotels for stay",
          "breakfast and dinner included",
          "All ferry tickets included",
          "Minimum 2 Person required",
        ],
        plan: "5N/6D",
        image: andaman,
      },
    ],
  },
  {
    id: 18,
    value: "RAJASTHAN",
    image: "",
    packages: [
      {
        id: "1",
        price: "28,500",
        points: [
          "3 Nights accommodation in Jaipur",
          "3* Good rating Hotels",
          "Breakfast and dinner included",
          "Pick up and drop from Jaipur airport /Railway station",
          "all tours and transfer on private basis",
          "Minimum 2 person required",
        ],
        plan: "3N/4D",
        image: rajasthan,
      },
    ],
  },
  {
    id: 19,
    value: "NORTH EAST",
    image: "",
    packages: [
      {
        id: "1",
        price: "16,999",
        points: [
          "2 nights Gangtok",
          "2 Nights Darjeeling",
          "Breakfast and dinner included ",
          "Pick up and drop from Bagdogra Airport",
          "All tours and Transfer on Private basis",
          "Stay in Good hotels",
          "Minimum 2 person Required",
        ],
        plan: "4N/5D",
        image: assam,
      },
    ],
  },
  {
    id: 20,
    value: "GOA",
    image: "",
    packages: [
      {
        id: "1",
        price: "15,500",
        points: [
          "3 Nights stay at Good Resort",
          "Breakfast included",
          "Pick up and drop from Goa Airport",
          "North Goa Tour",
          "South Goa Tour",
          "All tours and transfer on Private basis",
          "Minimum 2 person required",
        ],
        plan: "3N/4D",
        image: goa,
      },
    ],
  },
  {
    id: 21,
    value: "LEH",
    image: "",
    packages: [
      {
        id: "1",
        price: "18,310",
        points: [
          "1 Nigh Accommodation in Delhi.",
          " 4 Nighs Accommodation in Leh.",
          "Accommodation on twin sharing basis.",
          "Airport-Hotel transfers. Welcome Drinks on arrival.",
          "Daily Breakfast at the Hotel.",
          "AC Car for transfers and sightseeing with a dedicated Chauffeur.",
        ],
        plan: "5N/6D",
        image: leh,
      },
    ],
  },
  {
    id: 22,
    value: "KERELA",
    image: "",
    packages: [
      {
        id: "1",
        price: "15,500",
        points: [
          "Accommodation in Hotel/Resorts/Houseboat",
          "Rs 1,00,000 accidental insurance for each traveler.",
          "Personal Car with a dedicated Chauffeur",
          "Breakfast at the Resorts/Hotels.",
        ],
        plan: "4N/5D",
        image: kerela,
      },
    ],
  },
  {
    id: 23,
    value: "EUROPE",
    image: "",
    packages: [
      {
        id: "1",
        price: "59,400",
        image: italy,
        points: [
          "Accommodation in 3 Star Hotels",
          "Hotel pickup and drop-off",
          "Ferry tranfer",
          "All sightseeing as per itinerary.",
          "English Speaking Local Guides",
        ],
        plan: "5N/6D",
      },
    ],
  },
  {
    id: 24,
    value: "MAURITIUS",
    image: "",
    packages: [
      {
        id: "1",
        price: "32,999",
        image: maur,
        points: [
          "All Transfers on SIC Basis",
          "Daily Breakfast",
          "All sightseeing as per itinerary",
          "Hotel activities (snorkelling, kayaking, wind surfing, pedal boat, glass bottom boat)",
        ],
        plan: "4N/5D",
      },
      {
        id: "2",
        price: "38,999",
        image: maur2,
        points: [
          "6 nights accommodation at good resort on beach",
          "Breakfast and dinner",
          "Airport round-trip transfer",
          "North Island tour",
          "South Island tour",
          "Ile Aux cerfs tour",
        ],
        plan: "6N/7D",
      },
    ],
  },
];

