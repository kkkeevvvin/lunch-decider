// Replace in what you love to eat in the lunchSet!

let lunchSet = [
  {
    name: "阿嬤的飯桶",
    meal: ["人參滷雞腿", "古早味大魯腿", "清蒸鮮魚飯", "蒜泥白肉"],
  },
  {
    name: "隆太郎",
    meal: ["鴨腿飯", "迷迭香豬排", "蜜汁叉燒"],
  },
  {
    name: "MacDonald",
    meal: ["大麥克", "嫩煎雞腿堡", "麥香魚"],
  },
  {
    name: "翁記滷肉飯",
    meal: ["滷肉飯", "滷肉飯便當"],
  },
];

// say resource:
// https://www.adaymag.com/2020/11/20/eating-quotes.html
// https://www.adaymag.com/2019/08/20/foodie-quotes.html
// https://girlstyle.com/tw/article/197165/%E5%90%83%E9%A3%BD%E5%B0%B1%E6%B2%92%E4%BA%8B%E4%BA%86-%E5%90%83%E8%B2%A8%E5%80%91%E7%9A%84%E6%B1%82%E7%94%9F%E5%BF%83%E9%9D%88%E9%9B%9E%E6%B9%AF-%E5%A5%BD%E5%A5%BD%E5%90%83%E9%A3%AF-%E7%99%82%E7%99%92%E7%BE%8E%E9%A3%9F-%E5%B9%B8%E7%A6%8F

// add any saying you like!

let saying = [
  "即便一無所有，也不能沒有胃口。",
  "別人搶不走的，第一個是夢想，第二個是吃進肚裡的食物。",
  "什麼都會背叛你，只有食物不會。",
  "別人愛情講究三觀，我比較簡單，講究三餐。",
  "好吃就要多吃點，不好吃也要多少吃一點。",
];

const lunchChoice = () => {
  console.log("\n" + saying[Math.floor(Math.random() * saying.length)] + "\n");

  let resChoice = lunchSet[Math.floor(Math.random() * lunchSet.length)];
  let mealChoice =
    resChoice.meal[Math.floor(Math.random() * resChoice.meal.length)];

  console.log(
    "今天我想來點「" + resChoice.name + "」的「" + mealChoice + "」~~\n"
  );
};

lunchChoice();
