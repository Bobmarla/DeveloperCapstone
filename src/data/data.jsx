import images from '../constants/images';

export const menuItems = [
  { name: 'Coffee', price: '$3.00', section: 'Drinks' },
  { name: 'Tea', price: '$2.50', section: 'Drinks' },
  { name: 'Soda', price: '$1.50', section: 'Drinks' },
  { name: 'Chocolate Cake', price: '$4.00', section: 'Desserts' },
  { name: 'Ice Cream', price: '$3.50', section: 'Desserts' },
  { name: 'Grilled Chicken', price: '$10.00', section: 'Main Dishes' },
  { name: 'Vegetable Stir Fry', price: '$9.00', section: 'Main Dishes' },
  { name: 'Pancakes', price: '$5.00', section: 'Breakfast' },
  { name: 'Omelette', price: '$6.00', section: 'Breakfast' },
];
export const testimonialsData = [
  {
    id: 1,
    name: 'Alice Johnson',
    quote: "The best Italian food I've ever had! Highly recommend the pizza.",
    image: images.testimonials,
  },
  {
    id: 2,
    name: 'Bob Smith',
    quote: 'A lovely atmosphere and delicious pasta dishes!',
    image: images.testimonials,
  },
  {
    id: 3,
    name: 'Catherine Brown',
    quote: 'Amazing service and the risotto was out of this world!',
    image: images.testimonials,
  },
  {
    id: 4,
    name: 'David Wilson',
    quote: 'The tiramisu was heavenly! Will definitely come back.',
    image: images.testimonials,
  },
];
export const aboutData = {
  title: 'Little Lemon',
  subTitle: 'Chicago',
  description: `Based in Chicago, Illinois, Little Lemon is a family-owned
   Mediterranean restaurant, 
  focused on traditional recipes served with a modern twist. 
  The chefs draw inspiration from Italian,
   Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. 
   The restaurant has a rustic and relaxed 
  atmosphere with moderate prices, 
  making it a popular place for a meal any 
  time of the day. Little Lemon is owned by 
  two Italian brothers, Mario and Adrian, 
  who moved to the United States to pursue their shared dream of owning a 
  restaurant. To craft the menu, Mario relies on family recipes and his experience 
  as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to 
    expand the menu beyond classic Italian to incorporate 
  additional cuisines from the Mediterranean region. `,
};
