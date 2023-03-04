// prettier-ignore
import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

// Define a function expression to get the formatted date string with an offset
const getDateWithOffset = offset => {
  // Create a new date object set to the current date
  const date = new Date()
  // Add the offset in days to the date
  date.setDate(date.getDate() + offset)

  // Get the day of the month
  const day = date.getDate()
  // Determine the suffix for the day (st, nd, rd, or th)
  const suffix = getDaySuffix(day)
  // Get the month name in full text format
  const month = date.toLocaleString('default', { month: 'long' })
  // Get the year
  const year = date.getFullYear()

  // Return the formatted date string
  return `${month} ${day}${suffix}, ${year}`
}

// Define a helper function expression to get the suffix for the day of the month
const getDaySuffix = day => {
  if (day >= 11 && day <= 13) {
    return 'th'
  }
  switch (day % 10) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
]

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-twitter', text: 'twitter' },
  { id: 2, href: 'https://www.facebook.com/', icon: 'fab fa-facebook', text: 'facebook' },
  { id: 3, href: 'https://www.squarespace.com/', icon: 'fab fa-squarespace', text: 'squarespace' },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: `We guarantee that we'll save you money for your tours, that's our promise!`,
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: `Hike anywhere in the world! We'll take you to the most beautiful places on earth.`,
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: `Your comfort is our priority. We'll make sure you're always comfortable!`,
  },
]

export const tours = [
  {
    id: 1,
    image: tour1,
    date: getDateWithOffset(14),
    title: `Tibet Adventure`,
    info: `Tibet is a region on the Tibetan Plateau in Asia, spanning about 2.5 million km2 (970,000 sq mi) and nearly a quarter of China's territory. It is the highest region on Earth, with an average elevation of 4,900 metres (16,000 ft).`,
    location: `china`,
    duration: 6,
    cost: 1000,
  },
  {
    id: 2,
    image: tour2,
    date: getDateWithOffset(21),
    title: `Lagos Adventure`,
    info: `Lagos is a city in the Nigerian state of Lagos. The city, with its adjoining conurbation, is the largest in Nigeria, and the second-largest in Africa, with an estimated population of 21 million.`,
    location: `nigeria`,
    duration: 7,
    cost: 1500,
  },
  {
    id: 3,
    image: tour3,
    date: getDateWithOffset(28),
    title: `Johannesburg Adventure`,
    info: `Johannesburg is the largest city in South Africa and one of the 50 largest urban areas in the world. It is the provincial capital and largest city of Gauteng, which is the wealthiest province in South Africa.`,
    location: `south africa`,
    duration: 8,
    cost: 2000,
  },
  {
    id: 4,
    image: tour4,
    date: getDateWithOffset(35),
    title: `Madagascar Adventure`,
    info: `Madagascar is an island country in the Indian Ocean, off the coast of Southeast Africa. The nation comprises the island of Madagascar, and numerous smaller peripheral islands.`,
    location: `madagascar`,
    duration: 10,
    cost: 2500,
  },
]
