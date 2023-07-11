import Img0 from "@@/images/carousel/0.webp";
import Img1 from "@@/images/carousel/1.webp";
import Img2 from "@@/images/carousel/2.webp";
import Img3 from "@@/images/carousel/3.webp";
import Img4 from "@@/images/carousel/4.webp";
import Img5 from "@@/images/carousel/5.webp";
import Img6 from "@@/images/carousel/6.webp";
import Img7 from "@@/images/carousel/7.webp";
import Img8 from "@@/images/carousel/8.webp";
import Img9 from "@@/images/carousel/9.webp";
import Img10 from "@@/images/carousel/10.webp";
import Img11 from "@@/images/carousel/11.webp";
import Img12 from "@@/images/carousel/12.webp";
import Img13 from "@@/images/carousel/13.webp";
import Img14 from "@@/images/carousel/14.webp";
import Img15 from "@@/images/carousel/15.webp";
import Img16 from "@@/images/carousel/16.webp";
import Img17 from "@@/images/carousel/17.webp";
import Img18 from "@@/images/carousel/18.webp";
import Img19 from "@@/images/carousel/19.webp";
import Img20 from "@@/images/carousel/20.webp";

let randomCost: number[] = [];
let randomRating: string[] = [];
let randomViews: string[] = [];

for (let i = 0; i < 5; i++) {

  randomViews.push((
    Math.floor(Math.random() * (50000 - 5000 + 1)) + 5000
  ).toLocaleString());

  randomRating.push((Math.random() * (5 - 3) + 3).toFixed(2));

  randomCost.push(Math.floor(Math.random() * (500 - 50 + 1)) + 50);
}


const ApartmentItems = [
  {
    images: [Img0, Img1, Img2, Img3, Img4],
    title: "Ajah, Lagos, Nigeria",
    views: `Viewed ${randomViews[0]} times last week`,
    availability: "Jul 23 - 28",
    cost: randomCost[0],
    rating: randomRating[0],
  },
  {
    images: [Img5, Img6, Img7, Img8, Img9],
    title: "Lekki, Lagos, Nigeria",
    views: `Viewed ${randomViews[1]} times last week`,
    availability: "Sep 09 - 15",
    cost: randomCost[1],
    rating: randomRating[1],
  },
  {
    images: [Img10, Img11, Img12, Img13, Img14],
    title: "Magodo, Lagos, Nigeria",
    views: `Viewed ${randomViews[2]} times last week`,
    availability: "Jan 18 - 25",
    cost: randomCost[2],
    rating: randomRating[2],
  },
  {
    images: [Img15, Img16, Img17, Img18, Img19],
    title: "Ikeja, Lagos, Nigeria",
    views: `Viewed ${randomViews[3]} times last week`,
    availability: "Apr 10 - 19",
    cost: randomCost[3],
    rating: randomRating[3],
  },
  {
    images: [Img20, Img11, Img16, Img6, Img1],
    title: "Victoria Island, Lagos, Nigeria",
    views: `Viewed ${randomViews[4]} times last week`,
    availability: "Dec 02 - 29",
    cost: randomCost[4],
    rating: randomRating[4],
  },
  {
    images: [Img0, Img1, Img2, Img3, Img4],
    title: "Ajah, Lagos, Nigeria",
    views: `Viewed ${randomViews[0]} times last week`,
    availability: "Jul 23 - 28",
    cost: randomCost[0],
    rating: randomRating[0],
  },
  {
    images: [Img5, Img6, Img7, Img8, Img9],
    title: "Lekki, Lagos, Nigeria",
    views: `Viewed ${randomViews[1]} times last week`,
    availability: "Sep 09 - 15",
    cost: randomCost[1],
    rating: randomRating[1],
  },
  {
    images: [Img10, Img11, Img12, Img13, Img14],
    title: "Magodo, Lagos, Nigeria",
    views: `Viewed ${randomViews[2]} times last week`,
    availability: "Jan 18 - 25",
    cost: randomCost[2],
    rating: randomRating[2],
  },
  {
    images: [Img15, Img16, Img17, Img18, Img19],
    title: "Ikeja, Lagos, Nigeria",
    views: `Viewed ${randomViews[3]} times last week`,
    availability: "Apr 10 - 19",
    cost: randomCost[3],
    rating: randomRating[3],
  },
  {
    images: [Img20, Img11, Img16, Img6, Img1],
    title: "Victoria Island, Lagos, Nigeria",
    views: `Viewed ${randomViews[4]} times last week`,
    availability: "Dec 02 - 29",
    cost: randomCost[4],
    rating: randomRating[4],
  },
  {
    images: [Img0, Img1, Img2, Img3, Img4],
    title: "Ajah, Lagos, Nigeria",
    views: `Viewed ${randomViews[0]} times last week`,
    availability: "Jul 23 - 28",
    cost: randomCost[0],
    rating: randomRating[0],
  },
  {
    images: [Img5, Img6, Img7, Img8, Img9],
    title: "Lekki, Lagos, Nigeria",
    views: `Viewed ${randomViews[1]} times last week`,
    availability: "Sep 09 - 15",
    cost: randomCost[1],
    rating: randomRating[1],
  },
  {
    images: [Img10, Img11, Img12, Img13, Img14],
    title: "Magodo, Lagos, Nigeria",
    views: `Viewed ${randomViews[2]} times last week`,
    availability: "Jan 18 - 25",
    cost: randomCost[2],
    rating: randomRating[2],
  },
  {
    images: [Img15, Img16, Img17, Img18, Img19],
    title: "Ikeja, Lagos, Nigeria",
    views: `Viewed ${randomViews[3]} times last week`,
    availability: "Apr 10 - 19",
    cost: randomCost[3],
    rating: randomRating[3],
  },
  {
    images: [Img20, Img11, Img16, Img6, Img1],
    title: "Victoria Island, Lagos, Nigeria",
    views: `Viewed ${randomViews[4]} times last week`,
    availability: "Dec 02 - 29",
    cost: randomCost[4],
    rating: randomRating[4],
  },
  {
    images: [Img0, Img1, Img2, Img3, Img4],
    title: "Ajah, Lagos, Nigeria",
    views: `Viewed ${randomViews[0]} times last week`,
    availability: "Jul 23 - 28",
    cost: randomCost[0],
    rating: randomRating[0],
  },
  {
    images: [Img5, Img6, Img7, Img8, Img9],
    title: "Lekki, Lagos, Nigeria",
    views: `Viewed ${randomViews[1]} times last week`,
    availability: "Sep 09 - 15",
    cost: randomCost[1],
    rating: randomRating[1],
  },
  {
    images: [Img10, Img11, Img12, Img13, Img14],
    title: "Magodo, Lagos, Nigeria",
    views: `Viewed ${randomViews[2]} times last week`,
    availability: "Jan 18 - 25",
    cost: randomCost[2],
    rating: randomRating[2],
  },
  {
    images: [Img15, Img16, Img17, Img18, Img19],
    title: "Ikeja, Lagos, Nigeria",
    views: `Viewed ${randomViews[3]} times last week`,
    availability: "Apr 10 - 19",
    cost: randomCost[3],
    rating: randomRating[3],
  },
  {
    images: [Img20, Img11, Img16, Img6, Img1],
    title: "Victoria Island, Lagos, Nigeria",
    views: `Viewed ${randomViews[4]} times last week`,
    availability: "Dec 02 - 29",
    cost: randomCost[4],
    rating: randomRating[4],
  },
];

export default ApartmentItems;
