const hotels = [
  {
    id: "BH1",
    name: "The Oberoi, Bangalore",
    rating: "9.8",
    stars: 5,
    description: "Delux Room | 2 Queen bed ",
    breakfast: false,
    cancellationPolicy: true,
    taxAmount: "720",
    amout: "6000",
    isOffer: true,
    offer: "Get  INR 536 Cashback to Card on payments via credit/debit cards",
    image: "/bengalore/oberoi.jpg",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9725107069935!2d77.61582757581104!3d12.973610014832772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16835c3ada19%3A0x7065f59042b7b2db!2sThe%20Oberoi%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1688228082253!5m2!1sen!2sin",
    address: "37 - 39 Mahatma Gandhi Road, Bengaluru 560001 India",
    about:
      "The Oberoi Bengaluru is a 5-star hotel located on Mahatma Gandhi Road in the heart of the business, financial, and shopping districts of Bangalore. It is within 1.2 miles of M.G. Road, Brigade Road, and Commercial Street, and is a 30-minute drive from Cantonment Railway Station and a 1-hour, 30-minute drive from Bangalore Airport. The hotel features award-winning gardens with century-old raintrees, private bathrooms with hot-water showers and Ayurvedic toiletries, a well-equipped business center, and a 24-hour concierge desk.",
  },
  {
    id: "BH2",
    name: "Taj West End",
    rating: "9.5",
    stars: 5,
    description: "Delux Room | 2 Queen bed | Living Room | Private Pool",
    breakfast: true,
    cancellationPolicy: false,
    taxAmount: "499",
    amout: "4500",
    isOffer: false,
    image: "/bengalore/Taj-west-end.jpg",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8049134526855!2d77.57965628476727!3d12.984326181952826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1614ae4e21cb%3A0x43e3a50b3b1a3d3b!2sTaj%20West%20End%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1688231520084!5m2!1sen!2sin",
    address: "Race Course Road High Grounds, Bengaluru 560001 India",
    about:
      "Taj West End, Bengaluru is home to a range of spectacular fine-dining experiences, with flavors crafted for every palate. Relish authentic Vietnamese cuisine at the award-winning Blue Ginger and sip on delectable cocktails at the Blue Bar. Try some traditional Indian fare at Masala Klub and indulge in the lavish Sunday brunch buffet at Machan.",
  },
  {
    id: "BH3",
    name: "The Leela Palace Bangalore",
    rating: "9.7",
    stars: 5,
    description: "Super Delux Room | 2 Queen bed | 1 Kitchen",
    breakfast: true,
    cancellationPolicy: true,
    taxAmount: "459",
    amout: "5300",
    isOffer: false,
    image: "/bengalore/The-leela-palace.png",
    location:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3888.1799154560813!2d77.6484361!3d12.9603365!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14067cca9bdd%3A0x111bbe37cc24e71a!2sThe%20Leela%20Palace%20Bengaluru%20-%20Garden%20City's%20Only%20Modern%20Palace%20Hotel!5e0!3m2!1sen!2sin!4v1688236437912!5m2!1sen!2sin",
    address:
      "23 The Leela Palace Bengaluru Hal Old Airport Rd HAL 2nd Stage, Bengaluru 560008 India",
    about:
      "Drawing inspiration from the grand architectural style of the erstwhile Vijayanagara empire, this rose-hued palace is adorned with copper domes and ornate ceilings that reflect the grandeur of palaces of a bygone era. Set in its own expanse of verdant gardens, a sparkling lagoon and grand open spaces, this stunning edifice is located at the heart of Garden City. Embellished with antiques and exquisite artefacts from across India, this enchanting palace is an impressive reminder of everything regal.",
  },
  {
    id: "BH4",
    name: "ITC Gardenia, Bengaluru",
    rating: "9.0",
    stars: 4,
    description: "Delux Room | 1 Queen bed ",
    breakfast: false,
    cancellationPolicy: true,
    taxAmount: "710",
    amout: "5259",
    isOffer: true,
    offer: "Get 20% off on Deluxe Rooms",
    image: "/bengalore/itc-gardenia.jpg",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0759773206296!2d77.59297717581092!3d12.966990014977844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276dd2cf216d3%3A0x523e0c08edd084f2!2sITC%20Gardenia%2C%20a%20Luxury%20Collection%20Hotel%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1688232631161!5m2!1sen!2sin",
    address: "1, Residency Rd, Ashok Nagar, Bengaluru, Karnataka 560025",
    about:
      "ITC Hotels’ Responsible Luxury journey started at ITC Gardenia in 2009 when it was conferred the highest rating for green buildings in the world - the LEED India Platinum Rating. This recognition made it Asia’s first platinum rated hotel and is yet another manifestation of ITC's leadership in Sustainability Practices. ITC Gardenia, Bengaluru has been accredited the LEED Zero Carbon Certification by the USGBC (United States Green Building Council), making it the third hotel in the world to achieve this recognition.",
  },
  {
    id: "BH5",
    name: "The Ritz-Carlton, Bangalore",
    rating: "9.3",
    stars: 4,
    description: "Delux Room | 2 Queen bed ",
    breakfast: false,
    cancellationPolicy: false,
    taxAmount: "256",
    amout: "4500",
    isOffer: false,
    image: "/bengalore/ritz.jpeg",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.056424233315!2d77.59873357581104!3d12.968241314950381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1678b41def33%3A0xfe8ae8000ba8c87f!2sThe%20Ritz-Carlton%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1688232715059!5m2!1sen!2sin",
    address: "99 Residency Road, Bengaluru 560025 India",
    about:
      "The distractions of a fast pace city fade away as guests arrive at The Ritz-Carlton, Bangalore, one of the 4-star hotels in the High-tech epicenter of India. Centrally located and in close proximity to MG Road, Cubbon Park, UB City and other business districts, it is ideal for business and leisure and boasts of the largest rooms and suites in the city. With over 1200 artworks the hotel epitomizes contemporary elegance while weaving a traditional jaali design throughout. It features seven fine dining restaurants and bars, BANG the finest rooftop bar, Riwaz serving authentic Northwest frontier cuisine along with a wellness floor with a luxurious spa, gym and an outdoor temperature controlled pool.",
  },
  {
    id: "BH6",
    name: "JW Marriott Hotel Bengaluru",
    rating: "9.0",
    stars: 4,
    description: "Delux Room | 2 Twin bed ",
    breakfast: true,
    cancellationPolicy: true,
    taxAmount: "359",
    amout: "3800",
    isOffer: true,
    offer: "Get 10% off on Deluxe Rooms",
    image: "/bengalore/jw-marriott.jpg",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9919420063866!2d77.59247637581102!3d12.972367014859936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1679c4616049%3A0x21e7060fdb88a82b!2sJW%20Marriott%20Hotel%20Bengaluru!5e0!3m2!1sen!2sin!4v1688232800675!5m2!1sen!2sin",
    address:
      "24/1, Vittal Mallya Rd, KG Halli, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001",
    about:
      "Discover the subtle luxury and exceptional convenience of JW Marriott Hotel Bengaluru. Situated in the heart of Bengaluru, India, just steps from the green gardens of Cubbon Park and moments from UB City, Koramangala and Mahatma Gandhi (MG) Road, our five-star hotel provides you with a personal location near some of Bengaluru's finest attractions. Find a deeper luxury from our hotel amenities, which include access to a well-equipped fitness center, a scenic outdoor pool, tranquil spa and many on-site restaurants.",
  },
  {
    id: "BH7",
    name: "Shangri-La Hotel",
    rating: "9.7",
    stars: 5,
    description: "Delux Room | 2 Queen bed | Living Room",
    breakfast: false,
    cancellationPolicy: true,
    taxAmount: "600",
    amout: "4200",
    isOffer: false,
    image: "/bengalore/shangri.jpg",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31101.494792830243!2d77.5676936347656!3d12.99187000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae160d16f18803%3A0x93e9c670e6e9c7e6!2sShangri-La%20Bengaluru!5e0!3m2!1sen!2sin!4v1688232908528!5m2!1sen!2sin",
    address:
      "No. 56, 6B, Palace Rd, Abshot Layout, Vasanth Nagar, Bengaluru, Karnataka 560001",
    about:
      "Shangri-La Bengaluru, is the perfect place to take in the charm and character of India’s Garden City. Perched high above the horizon, offering a birds-eye view of Bangalore Palace, the hotel is ideally located between the business district and historic attractions. With panoramic views of the city from both the Horizon Club and rooftop lounge, Asian-inspired dining options and luxurious facilities, the hotel provides a peaceful escape for business and leisure travelers alike.",
  },
  {
    id: "BH8",
    name: "The Lalit Ashok",
    rating: "9.4",
    stars: 5,
    description: "Super Delux Room | 2 Queen bed ",
    breakfast: true,
    cancellationPolicy: true,
    taxAmount: "540",
    amout: "4560",
    isOffer: false,
    image: "/bengalore/the-lalit-ashok.jpg",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7309806642897!2d77.57652508476757!3d12.98905068183813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1734231b1789%3A0xe65b24846692d631!2sThe%20LaLiT%20Ashok%20Bengaluru!5e0!3m2!1sen!2sin!4v1688233846382!5m2!1sen!2sin",
    address:
      "Kumarakrupa Rd, opposite Golf Club, Seshadripuram, Bengaluru, Karnataka 560001",
    about:
      "Nestled in an oasis of 10 acres of sprawling landscape and manicured lawns, The LaLiT Ashok is one of the finest five star hotel amongst all Bangalore luxury hotels. Built in 1971 The LaLiT Ashok has welcomed guests over more than 35 years and has been an experience of luxury in contemporary and relaxed homely comfort. This 5 star hotel in bangalore is strategically located in the highly secured diplomatic enclave, while sharing its wall with the Chief Minister’s house and offers a lovely view of the sprawling Bangalore Golf Club.",
  },
  {
    id: "BH9",
    name: "Conrad Bengaluru",
    rating: "9.4",
    stars: 5,
    description: "Super Delux Room | 1 Queen bed ",
    breakfast: true,
    cancellationPolicy: false,
    taxAmount: "345",
    amout: "6300",
    isOffer: true,
    image: "/bengalore/conrad.jpg",
    offer: "Get 30% OFF on your first booking with us",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.94642017671!2d77.61792527581102!3d12.975278814796129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae169b41c32eeb%3A0xd7be5acf89a61a1d!2sConrad%20Bengaluru!5e0!3m2!1sen!2sin!4v1688233970590!5m2!1sen!2sin",
    address:
      "25/3, Kensington Rd, Halasuru, Someshwarpura, Bengaluru, Karnataka 560008",
    about:
      "Soaring 24 stories above Bengaluru’s Central Business District, Conrad Bengaluru offers 285 guestrooms and suites with picturesque views of the Ulsoor Lake. The hotel also features amongst the largest, most elegant meeting and event spaces in the city. Five eclectic dining options, the signature Conrad Spa and infinity pool are now open for inspiring and impressive stays, on business or leisure. Spacious and contemporary accommodations bathed in natural daylight offering panoramic views of the city and the scenic Ulsoor Lake from floor-to-ceiling windows. Enjoy a range of spaces guestrooms and suites featuring a 42-inch HDTV, plush sofa seating by the window, an artistic jewelry box, a marble bathroom with a soak tub, walk-in rain shower, bathrobes and premium bath amenities. ",
  },
  {
    id: "BH10",
    name: "Sheraton Grand Bangalore Hotel",
    rating: "9.2",
    stars: 5,
    description: "Super Delux Room | 2 Queen bed | BathTub",
    breakfast: true,
    cancellationPolicy: true,
    taxAmount: "550",
    amout: "5800",
    isOffer: false,
    image: "/bengalore/sheraton-grand.jpg",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3599930445575!2d77.5524607758114!3d13.012732313973666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d78c39ed1d7%3A0x6832860dbb5cd434!2sSheraton%20Grand%20Bangalore%20Hotel%20at%20Brigade%20Gateway!5e0!3m2!1sen!2sin!4v1688234052882!5m2!1sen!2sin",
    address:
      "26/1 Dr. Rajkumar Road Malleswaram, Rajajinagar, Bengaluru, Karnataka 560055",
    about:
      "Featuring skyway access to the World Trade Center and Orion Mall, the city's largest shopping mall, this Sheraton hotel feature 8 food and beverage options, an infinity-edge swimming pool and a 24-hour fitness center. The hotel is also connected to the World Trade Center via a skyway and is footsteps away from Orion Mall. Rooms with contemporary furnishings are equipped with a flat-screen TV with DVD player, an electric kettle and mini-bar with free bottled water. The private bathroom comes with a rain shower.",
  },
];

export default hotels;
