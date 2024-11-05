import * as Images from '../../assets/index.js';

const productsData = [
    {
        id: 1,
        title: "Quantum Grey Hover Hoodie",
        category: 'women',
        description: "A comfortable oversized grey hoodie perfect for casual wear.",
        longDescription: "This Quantum Grey Hover Hoodie is made from a soft blend of cotton and polyester, providing exceptional comfort and style. The oversized fit makes it perfect for layering over your favorite outfits, ensuring you stay warm and fashionable during chilly days. With its versatile design, it can easily be paired with jeans, joggers, or leggings for a relaxed yet trendy look.",
        price: 59.99,
        ratings: 4,
        images: [
            Images.img0,
            Images.img1,
        ]
    },
    {
        id: 2,
        title: "Vortex Alloy Earrings",
        category: 'women',
        description: "Minimalistic V-shaped earrings, silver finish with elegant design.",
        longDescription: "The Vortex Alloy Earrings feature a sleek V-shaped design crafted from high-quality alloy with a stunning silver finish. These minimalist earrings are perfect for adding a touch of elegance to any outfit, whether you're dressing up for a special occasion or looking to enhance your everyday wear. Their lightweight construction ensures comfort throughout the day, making them a must-have accessory.",
        price: 29.99,
        ratings: 5,
        images: [
            Images.earring1,
            Images.earring2,
            Images.earring3
        ]
    },
    {
        id: 3,
        title: "Gravity Sneakers V2",
        category: 'men',
        description: "Lightweight grey shoes, ideal for sports and casual outings.",
        longDescription: "The Gravity Sneakers V2 are designed for both performance and style, featuring a lightweight grey construction that provides breathability and comfort. Whether you're heading to the gym or out for a casual day, these sneakers will keep you looking sharp. The cushioned sole offers support for all-day wear, while the sleek design ensures you stay fashionable.",
        price: 89.99,
        ratings: 4,
        images: [
            Images.greyshoe,
            Images.greyshoe1,
            Images.greyshoe2
        ]
    },
    {
        id: 4,
        title: "NeoCore Graphic Hoodie",
        category: 'men',
        description: "Black hoodie with graphic print, comfy and stylish for everyday wear.",
        longDescription: "Stay on-trend with the NeoCore Graphic Hoodie, featuring a striking graphic print on a classic black background. Made from soft, durable fabric, this hoodie offers both comfort and style, making it perfect for everyday wear or lounging at home. Pair it with jeans or joggers for a casual look that stands out from the crowd.",
        price: 79.99,
        ratings: 5,
        images: [
            Images.hoodiehand,
            Images.hoodiehand1,
            Images.hoodiehand2
        ]
    },
    {
        id: 5,
        title: "Zenith Parallel Pants",
        category: 'men',
        description: "Oversized wide fit pants with a relaxed silhouette for a bold look.",
        longDescription: "The Zenith Parallel Pants are designed with a bold, oversized silhouette that combines comfort with contemporary street style. Made from a blend of high-quality materials, these pants feature an elastic waistband for a snug fit. Ideal for layering with your favorite tops, they are perfect for making a fashion statement while ensuring all-day comfort.",
        price: 65.99,
        ratings: 4,
        images: [
            Images.noidea,
            Images.noidea1,
            Images.noidea2,
            Images.noidea3,
        ]
    },
    {
        id: 6,
        title: "Eclipse Overdrive Trousers",
        category: 'men',
        description: "A unique graphic trousers, oversized and loose fit.",
        longDescription: "Step out in style with the Eclipse Overdrive Trousers, featuring a unique graphic design that makes a statement. These oversized trousers are not only fashionable but also incredibly comfortable, thanks to their loose fit and soft fabric. Whether you're hitting the streets or chilling at home, these trousers will keep you looking effortlessly cool.",
        price: 45.99,
        ratings: 3,
        images: [
            Images.skirtpants,
            Images.skirtpants1,
            Images.skirtpants2
        ]
    },
    {
        id: 7,
        title: "Hovercraft White Highs",
        category: 'men',
        description: "Classic white sneakers, comfortable and perfect for everyday wear.",
        longDescription: "The Hovercraft White Highs are a must-have for any sneaker lover. With their classic white color and timeless design, these sneakers are perfect for pairing with any outfit. The cushioned insole and breathable material ensure maximum comfort, making them ideal for daily wear, whether you're running errands or heading out with friends.",
        price: 99.99,
        ratings: 5,
        images: [
            Images.menshoe1,
            Images.menshoe2,
            Images.menshoe3
        ]
    },
    {
        id: 8,
        title: "Xenon-Wide Fusion Pants",
        category: 'women',
        description: "Black wide-leg pants, tailored for comfort and style in urban settings.",
        longDescription: "Elevate your wardrobe with the Xenon-Wide Fusion Pants, designed for those who appreciate both comfort and style. These black wide-leg pants are tailored to perfection, offering a flattering silhouette that transitions seamlessly from day to night. Made from soft, breathable fabric, they are ideal for urban settings, allowing for easy movement and all-day comfort.",
        price: 69.99,
        ratings: 4,
        images: [
            Images.trousers,
            Images.trouserss1,
            Images.trouserss2,
            Images.trouserss3,
        ]
    },
    {
        id: 9,
        title: "Grey Nebula Sweat",
        category: 'women',
        description: "An oversized grey sweatshirt, ideal for relaxed casual wear.",
        longDescription: "The Grey Nebula Sweat is the perfect blend of comfort and style. This oversized sweatshirt is crafted from high-quality fabric, ensuring warmth and coziness on cooler days. The relaxed fit makes it ideal for pairing with leggings or jeans, whether you're lounging at home or out and about. Embrace casual elegance with this versatile piece.",
        price: 55.99,
        ratings: 5,
        images: [
            Images.img7,
            Images.earring2,
            Images.earring3
        ]
    },
    {
        id: 10,
        title: "Neo-Black Thermal Exo-Jacket",
        category: 'men',
        description: "Engineered for both urban explorers and cold-weather adventurers.",
        longDescription: "Conquer the elements with the Neo-Black Thermal Exo-Jacket, designed for urban explorers and cold-weather adventurers alike. This jacket combines style and functionality, featuring a thermal lining to keep you warm and protected from the cold. With its sleek design and multiple pockets, it's perfect for both outdoor activities and city life, ensuring you look great while staying comfortable.",
        price: 70.99,
        ratings: 4,
        images: [
            Images.img10,
            Images.img11,
            Images.img12,
            Images.img13,
        ]
    },
    {
        id: 11,
        title: "Dark Matter Tunic",
        category: 'men',
        description: "An avant-garde black shirt with unique tailoring and oversized fit.",
        longDescription: "The Dark Matter Tunic is an avant-garde piece that challenges conventional fashion norms. With its unique tailoring and oversized fit, this black shirt is perfect for those who dare to express their individuality. Made from high-quality materials, it offers comfort and style, making it a versatile addition to any wardrobe, whether paired with jeans or layered over trousers.",
        price: 80.99,
        ratings: 3,
        images: [
            Images.mantshirt2,
            Images.mantshirt3,
            Images.mantshirt1
        ]
    },
    {
        id: 12,
        title: "Optic-Tech Sneaks",
        category: 'men',
        description: "High-top sneakers with bold graphics, combining comfort and style.",
        longDescription: "The Optic-Tech Sneaks are not just shoes; they're a statement. These high-top sneakers feature bold graphics that add a touch of flair to your outfit. Designed for comfort, they come with a cushioned insole and supportive structure, making them perfect for all-day wear. Whether you're hitting the gym or hanging out with friends, these sneakers will keep you looking stylish.",
        price: 109.99,
        ratings: 5,
        images: [
            Images.menshoe2,
            Images.menshoe1,
            Images.menshoe3
        ]
    },
    {
        id: 13,
        title: "HyperBlack Cargo Trousers",
        category: 'men',
        description: "Comfortable black trousers featuring multiple pockets for utility and style.",
        longDescription: "The HyperBlack Cargo Trousers blend utility and style effortlessly. With multiple pockets and a comfortable fit, these trousers are perfect for those who value both functionality and fashion. Made from durable fabric, they are ideal for outdoor activities or casual outings. Pair them with a simple tee or a stylish shirt for a complete look.",
        price: 64.99,
        ratings: 4,
        images: [
            Images.trouser,
            Images.trouser1,
            Images.trouser2,
            Images.trouser3,
        ]
    },
    {
        id: 14,
        title: "Galactic Zip-Up Jacket",
        category: 'women',
        description: "A sleek grey zip-up jacket with a minimalist design.",
        longDescription: "The Galactic Zip-Up Jacket combines sleek design with functionality. This minimalist grey jacket features a zip-up front and is crafted from high-quality materials, ensuring warmth and comfort. Perfect for layering or wearing on its own, it pairs beautifully with both casual and more dressed-up outfits. Whether you're out for a run or heading out for the day, this jacket is an essential piece for your wardrobe.",
        price: 95.99,
        ratings: 5,
        images: [
            Images.img2,
            Images.img3,
            Images.img4,
            Images.img5
        ]
    },
    {
        id: 15,
        title: "VoidWalker Flowy Pants",
        category: 'men',
        description: "Flowy and relaxed fit black pants, ideal for contemporary streetwear.",
        longDescription: "The VoidWalker Flowy Pants are designed for those who love to combine comfort with contemporary streetwear. With their relaxed fit and flowy fabric, these pants allow for easy movement while making a bold fashion statement. Pair them with your favorite graphic tee or hoodie for a laid-back yet stylish look that works for any casual outing.",
        price: 84.99,
        ratings: 3,
        images: [
            Images.manPants,
            Images.manPants1,
            Images.manPants2
        ]
    },
    {
        id: 16,
        title: "IonShift Tailored Trousers",
        category: 'men',
        description: "High-waisted black pants with a tailored fit and trendy look.",
        longDescription: "The IonShift Tailored Trousers offer a sophisticated yet trendy look, featuring a high-waisted design that flatters any figure. Made from high-quality fabric, these trousers are tailored for a sleek fit, perfect for both work and casual occasions. Pair them with a stylish shirt for a polished appearance, or dress them down with a casual tee for a more relaxed vibe.",
        price: 75.99,
        ratings: 4,
        images: [
            Images.trouserss,
            Images.trouserss1,
            Images.trouserss2,
            Images.trouserss3
        ]
    },
    {
        id: 17,
        title: "Dark Grin Graphic Hoodie",
        category: 'men',
        description: "Ideal for those who dare to stand out in the fashion-forward crowd.",
        longDescription: "The Dark Grin Graphic Hoodie is perfect for those who want to make a bold statement. With its eye-catching graphic and comfortable fit, this hoodie is made from high-quality fabric that feels great against the skin. Ideal for casual outings or lounging at home, it pairs well with jeans, joggers, or shorts for a trendy yet comfortable look.",
        price: 59.99,
        ratings: 3,
        images: [
            Images.hoodieSmile1,
            Images.hoodieSmile,
            Images.hoodieSmile2
        ]
    },
    {
        id: 18,
        title: "Hovercraft White Highs",
        category: 'men',
        description: "Classic white sneakers, comfortable and perfect for everyday wear.",
        longDescription: "The Hovercraft White Highs are your go-to sneakers for everyday comfort and style. Featuring a timeless design in classic white, these sneakers are versatile enough to match any outfit. The cushioned sole provides all-day comfort, making them perfect for everything from running errands to enjoying a casual day out.",
        price: 99.99,
        ratings: 5,
        images: [
            Images.menshoe1,
            Images.menshoe2,
            Images.menshoe3
        ]
    },
];

export default productsData;