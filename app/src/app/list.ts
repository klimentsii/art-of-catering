import { listItem } from "./components/carousel/carousel.component";

const servicesString = '/assets/images/services/';
const buffetsString = '/assets/images/buffets/';

export const serviceList: Array<listItem> = [
  {
    title: 'Flower',
    img: servicesString + 'flower.jpg',
    description: 'Blossom Elegance – Elevate your events with our exquisite floral arrangements, adding a touch of natural beauty to every celebration.',
  },
  {
    title: 'Decoration',
    img: servicesString + 'decoration.jpg',
    description: 'Decorate with Distinction – Transform your venue into a stunning masterpiece with our tasteful decorations, ensuring a visually captivating atmosphere.',
  },
  {
    title: 'Setup',
    img: servicesString + 'setup.jpg',
    description: 'Setup Serenity – Let us handle the logistics with our seamless setup services, ensuring a stress-free and well-organized event experience.',
  },
  {
    title: 'Waiters',
    img: servicesString + 'waiters.jpg',
    description: 'Service with a Smile – Our professional waiters are ready to cater to your guests, ensuring a smooth and delightful dining experience.',
  },
  {
    title: 'Tatima (Table Setting)',
    img: servicesString + 'tatima.jpg',
    description: 'Table Elegance, Tailored for You – Our Tatima service creates a refined and inviting table setting, setting the perfect ambiance for your celebration.',
  },
]

export const corporateList: Array<listItem> = [
  {
    title: 'Corporate Meals',
    img: servicesString + 'meals.jpg',
    description: 'Culinary Excellence for Business – Elevate your corporate gatherings with our gourmet Corporate Meal options, tailored to impress and satisfy.',
  },
  {
    title: 'Corporate Events',
    img: servicesString + 'events.png',
    description: 'Crafting Memorable Moments – Let us curate your Corporate Events with precision and style, ensuring a seamless and me.',
  },
  {
    title: 'Celebration',
    img: servicesString + 'celebration.jpg',
    description: 'Will be added in future',
  },
]

export const leftBuffetsList: Array<listItem> = [
  {
    title: 'Breakfast',
    description: 'Begin your day with Breakfast Bliss – a delightful selection of morning treats to add a touch of joy to your mornings.',
    img: buffetsString + 'breakfast.jpeg',
  },
  {
    title: 'Lunch',
    description: 'Savor the moment with Lunch Delights – a delicious array of dishes, perfect for a satisfying midday break.',
    img: buffetsString + 'lunch.jpg',
  },
  {
    title: 'Dinner',
    description: 'Dine in Style – Our Dinner Collection brings together flavorful choices for a tasteful and enjoyable evening meal.',
    img: buffetsString + 'dinner.jpeg',
  },
  {
    title: 'Finger Food',
    description: 'Bite-sized Perfection – Elevate your gatherings with our Finger Food Extravaganza, offering tasty treats for every occasion.',
    img: buffetsString + 'fingerfood.jpg',
  },
]

export const rightBuffetsList: Array<listItem> = [
  {
    title: 'Refreshment',
    description: 'Stay refreshed with our Beverage Harmony – a thoughtfully curated selection to keep you cool and satisfied at any event.',
    img: buffetsString + 'refreshment.jpg',
  },
  {
    title: 'BBQ',
    description: 'Grill & Chill – Enjoy the warmth and flavor of our BBQ Feast, bringing friends and family together for a delightful experience.',
    img: buffetsString + 'bbq.jpg',
  },
  {
    title: 'Live Cooking',
    description: 'Experience the magic of Live Cooking – where our skilled chefs craft delicious dishes right before your eyes, making every event a culinary adventure.',
    img: buffetsString + 'live-coocking.jpg',
  },
]
