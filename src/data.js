
import Pancakes from './images/pancakes.jpg';
import Milkshake from './images/milkshake.jpg';
import Delight from './images/delight.jpg';
import Oreo from './images/oreo.jpg';
import Egg from './images/egg.jpg';
import Bacon from './images/bacon.jpg';
import Dinner from './images/dinner.jpg';
import Steak from './images/steak.jpg';
import American from './images/american.jpg';

let Menu = [
    {
        id: 1 + Math.random(),
        name: "Buttermilk Pancakes",
        image: Pancakes,
        price: "15.99",
        category: "breakfast",
        description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
    },
    {
        id: 1 + Math.random(),
        name: "Godzilla Milkshake",
        image: Milkshake,
        price: "6.99",
        category: "breakfast",
        description: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
    },
    {
        id: 1 + Math.random(),
        name: "Bacon Overflow",
        image: Bacon,
        price: "8.99",
        category: "dinner",
        description: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird"
    },
    {
        id: 1 + Math.random(),
        name: "Egg Attack!",
        image: Egg,
        price: "22.99",
        category: "lunch",
        description: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up"
    },
    {
        id: 1 + Math.random(),
        name: "Dinner Double",
        image: Dinner,
        price: "13.99",
        category: "lunch",
        description: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
    },
    {
        id: 1 + Math.random(),
        name: "Country Delight",
        image: Delight,
        price: "20.99",
        category: "lunch",
        description: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut"
    },
    {
        id: 1 + Math.random(),
        name: "Oreo Dream",
        image: Oreo,
        price: "15.99",
        category: "breakfast",
        description: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"
    },
    {
        id: 1 + Math.random(),
        name: "American Classic",
        image: American,
        price: "12.99",
        category: "dinner",
        description: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"
    },
    {
        id: 1 + Math.random(),
        name: "Steak Paradise",
        image: Steak,
        price: "25.99",
        category: "lunch",
        description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing"
    }
];

export default Menu;