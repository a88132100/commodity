// 產品數據
const products = [
    {
        id: 1,
        name: '紫蘇梅',
        description: 'QQ梅子加入紫蘇葉，淡淡清香又微酸。',
        image: 'images/51953_0.jpg',
        mainCategory: '蜜餞',
        subCategory: '梅子',  // 添加小分類
        weight: '180g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 2,
        name: '檸檬梅',
        description: '每顆梅子加入檸檬汁一起醃漬，微酸甜的檸檬滋味，別有一番風味。',
        image: 'images/51940_0.jpg',
        mainCategory: '蜜餞',
        subCategory: '梅子',  // 添加小分類
        weight: '180g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'      // 添加優惠信息
    },
    {
        id: 3,
        name: '紹興酒梅',
        description: '精選Q梅加入淡淡的紹興酒香氣，更加濃醇香。',
        image: 'images/51942_0.jpg',
        mainCategory: '蜜餞',
        subCategory: '梅子',  // 添加小分類
        weight: '180g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 4,
        name: '原味Q梅',
        description: 'QQ的口感，微酸甜的好滋味，是您的選擇。',
        image: 'images/51943_0.jpg',
        mainCategory: '蜜餞',
        subCategory: '梅子',  // 添加小分類
        weight: '180g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'   // 添加優惠信息
    },
    {
        id: 5,
        name: '茶葉梅',
        description: '茶葉加入Q梅醃製而成，入口後微微茶香與微甘甜滋味。',
        image: 'images/51949_0.jpg',
        mainCategory: '蜜餞',
        subCategory: '梅子',  // 添加小分類
        weight: '180g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'  // 添加優惠信息
    },
    {
        id: 6,
        name: '咖啡梅',
        description: '每顆梅子帶有香醇濃厚的咖啡香，果內厚實，甘甜好滋味。',
        image: 'images/51950_0.jpg',
        mainCategory: '蜜餞',
        subCategory: '梅子',  // 添加小分類
        weight: '150g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 7,
        name: '脆梅',
        description: '口口微甘甜且香脆口感，打造頂級蜜餞極致風味。',
        image: 'images/51954_0.jpg',
        mainCategory: '蜜餞',
        subCategory: '梅子',  // 添加小分類
        weight: '180g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 8,
        name: '甘甜梅(有籽)',
        description: '酸甜解膩，古早風味。',
        image: 'images/51955_0.jpg',
        mainCategory: '蜜餞',
        subCategory: '梅子',  // 添加小分類
        weight: '100g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'       // 添加優惠信息
    },
    {
        id: 9,
        name: '陳皮梅',
        description: '酸甜可口，帶有陳皮的獨特香氣，味道濃郁，深受大眾喜愛。',
        image: 'images/51956_0.jpg',
        mainCategory: '蜜餞',
        subCategory: '梅子',  // 添加小分類
        weight: '200g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 10,
        name: '梅有芭樂',
        description: '梅子與芭樂的搭配，酸酸甜甜順口好滋味，獨立包裝，衛生不沾手方便好攜帶。',
        image: 'images/51154_0.jpg',
        mainCategory: '蜜餞',
        subCategory: '水果梅',  // 添加小分類
        weight: '100g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一' // 添加優惠信息
    },
    {
        id: 11,
        name: '梅有芒果',
        description: '梅子與芒果的搭配，香甜的芒果口感，與梅子的口感融合，口感綿密，口感美味，獨立包裝，衛生不沾手方便好攜帶。',
        image: 'images/51156_0.jpg',
        mainCategory: '蜜餞',
        subCategory: '水果梅',  // 添加小分類
        weight: '100g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 12,
        name: '小紅梅',
        description: '選用楊梅製成，微酸甘甜好滋味。',
        image: 'images/51945_0.jpg',
        mainCategory: '蜜餞',
        subCategory: '梅子',  // 添加小分類
        weight: '180g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 13,
        name: '化核李',
        description: '去籽化核李，果內回甘美味，古早好滋味。',
        image: 'images/51946_0.jpg',
        mainCategory: '蜜餞',
        subCategory: '李子',  // 添加小分類
        weight: '180g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 14,
        name: '仙李',
        description: '道地台灣口味，由新鮮李子製成，酸中帶甜好滋味。',
        image: 'images/51952_0.jpg',
        mainCategory: '蜜餞',
        subCategory: '李子',  // 添加小分類
        weight: '200g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 15,
        name: '無籽黑橄欖',
        description: '傳承古早風味的經典蜜餞！選用嚴選台灣橄欖，經低溫蜜煉、五香入味，搭配甘草鹹香滋味，鹹甜交織、口感紮實，是許多人成長記憶中的懷舊零嘴。無籽設計食用方便，適合喜愛台式甘草果乾的你！。',
        image: 'images/52003_0.jpg',
        mainCategory: '蜜餞',
        subCategory: '橄欖',  // 添加小分類
        weight: '180g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 16,
        name: '甘草橄欖',
        description: '古早味橄欖，甘甜美味微甜不膩，果肉新鮮扎實。',
        image: 'images/52002_0.jpg',
        mainCategory: '蜜餞',
        subCategory: '橄欖',  // 添加小分類
        weight: '170g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 17,
        name: '精選椰棗',
        description: '選用來自中東的特級椰棗，豐富營養，又稱"沙漠中的麵包"，營養價值極高。',
        image: 'images/51933_0.jpg',
        mainCategory: '蜜餞',
        subCategory: '其他',  // 添加小分類
        weight: '170g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 18,
        name: '糖醋洛神花',
        description: '新鮮洛神花性寒涼味甘酸，醞釀出最美好的酸甜好滋味。',
        image: 'images/51938_0.jpg',
        mainCategory: '蜜餞',
        subCategory: '其他',  // 添加小分類
        weight: '160g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 19,
        name: '相思果',
        description: '酸酸甜甜的相思果，擁有令人難以抗拒的好滋味。',
        image: 'images/51948_0.jpg',
        mainCategory: '蜜餞',
        subCategory: '其他',  // 添加小分類
        weight: '180g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 20,
        name: '無花果',
        description: '傳統古早味，鹹中帶甜，帶你重溫兒時回憶。',
        image: 'images/51951_0.jpg',
        mainCategory: '蜜餞',
        subCategory: '其他',  // 添加小分類
        weight: '160g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 21,
        name: '宜蘭金棗',
        description: '金桔粒粒晶瑩剔透，黃金比例的鹹、酸、甜度，遵循古法熬煮的味道，小包裝，易攜帶、好分享。',
        image: 'images/52004_0.jpg',
        mainCategory: '蜜餞',
        subCategory: '其他',  // 添加小分類
        weight: '150g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 22,
        name: '蜜黑棗',
        description: '嚴選蜜黑棗，經去籽低溫烘製，保留濃郁果香與滑順果肉。天然無添加糖、不漂白，富含膳食纖維與天然酚類，是每日保健與腸道順暢的理想零嘴。',
        image: 'images/52027_0.jpg',
        mainCategory: '蜜餞',
        subCategory: '其他',  // 添加小分類
        weight: '180g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買5送1'     // 添加優惠信息
    },
    {
        id: 23,
        name: '麻辣鱈魚條',
        description: '嚴選新鮮鱈魚漿製成，切片烘烤再佐以特調麻辣配方，每一口都帶有香、辣、鮮的絕妙平衡。薄脆口感中藏著海味與辣香，是追劇、打牌、旅途中最過癮的零嘴好夥伴！',
        image: 'images/51999_0.jpg',
        mainCategory: '海之味',
        weight: '100g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 24,
        name: '宋楚魚',
        description: '嚴選台灣黃絲魚去刺醃製、炙燒熟成，保留魚肉鮮甜與煙燻鹹香，外酥內Q、口感層次豐富。無需料理，開袋即食，是配茶、配酒、宵夜、露營的超人氣零嘴選擇！',
        image: 'images/52000_0.jpg',
        mainCategory: '海之味',
        weight: '內含8-10隻',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 25,
        name: '香蔥櫻花蝦',
        description: '嚴選高品質東港櫻花蝦，搭配特調酸甜梅子醬與香蔥酥拌炒，加入芝麻增香提味，香氣四溢、酥脆涮嘴。每一口都吃得到蝦殼酥香與蔥香交融，是茶點、佐飯、下酒菜的極致選擇！',
        image: 'images/52001_0.jpg',
        mainCategory: '海之味',
        weight: '100g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 26,
        name: '高速製冷手持電風扇',
        description: '夏日酷暑救星登場！全新升級雙渦輪強風＋半導體製冷片設計，按鍵即啟動冰感循環，秒速降溫，清涼直達肌膚！告別悶熱汗黏感，辦公、出遊、通勤、戶外全都適用！',
        image: 'images/52028_0.jpg',
        mainCategory: '3C',
        subCategory: '電風扇',  // 添加小分類
        weight: '224g',         // 添加重量信息
        price: 399,          // 添加價格信息
        price: 399,             // 添加價格信息
    },
    {
        id: 27,
        name: '新花茶玻璃杯(白色皮套)',
        description: '每日飲水不再無趣！這款高顏值玻璃杯結合大容量、時間刻度、吸管飲口與皮革杯套設計，讓你在工作、運動、讀書、咖啡廳裡都能輕鬆喝足水份，時時刻刻都保持優雅又健康！',
        image: 'images/52030_0.jpg',
        mainCategory: '生活用品',
        subCategory: '水杯',  // 添加小分類
        weight: '容量800ML',         // 添加重量信息
        price: 220,             // 添加價格信息
    },
    {
        id: 28,
        name: '新花茶玻璃杯(灰色皮套)',
        description: '每日飲水不再無趣！這款高顏值玻璃杯結合大容量、時間刻度、吸管飲口與皮革杯套設計，讓你在工作、運動、讀書、咖啡廳裡都能輕鬆喝足水份，時時刻刻都保持優雅又健康！',
        image: 'images/52031_0.jpg',
        mainCategory: '生活用品',
        subCategory: '水杯',  // 添加小分類
        weight: '容量800ML',         // 添加重量信息
        price: 220,             // 添加價格信息
    },
    {
        id: 29,
        name: '新花茶玻璃杯(粉色皮套)',
        description: '每日飲水不再無趣！這款高顏值玻璃杯結合大容量、時間刻度、吸管飲口與皮革杯套設計，讓你在工作、運動、讀書、咖啡廳裡都能輕鬆喝足水份，時時刻刻都保持優雅又健康！',
        image: 'images/52029_0.jpg',
        mainCategory: '生活用品',
        subCategory: '水杯',  // 添加小分類
        weight: '容量800ML',         // 添加重量信息
        price: 220,             // 添加價格信息
    },
    {
        id: 30,
        name: '大容量不銹鋼保溫杯(白色/黑色)',
        description: '不只裝得多，還保得久！嚴選食品級 304 不鏽鋼打造，保溫保冷雙效設計，長達 12 小時鎖溫力，無論是冬天熱茶還是夏天冰飲，都能隨時享受恆溫口感。附手提繩設計，通勤、露營、登山、學生通勤通通適用！',
        image: 'images/52032_0.jpg',
        mainCategory: '生活用品',
        subCategory: '保溫杯',  // 添加小分類
        weight: '容量850ML',         // 添加重量信息
        price: 390,             // 添加價格信息
    },
    {
        id: 31,
        name: '高顏值不銹鋼保溫杯(多種款式，請洽客服詢問)',
        description: '可愛到讓人一秒融化的保溫杯來了！超Q萌小熊、小兔、韓系插畫風格，加上粉嫩糖果色系或純白系搭配，無論是學生族、上班族、送禮或自用都能打動人心。不只可愛，還擁有304不鏽鋼保溫內膽 + 12小時長效保溫，顏值與實力兼具！',
        image: 'images/52033_0.jpg',
        mainCategory: '生活用品',
        subCategory: '保溫杯',  // 添加小分類
        weight: '容量420ML/480ML',         // 添加重量信息
        price: 290,             // 添加價格信息
    },
    {
        id: 32,
        name: '闆娘精選各式包款(多種款式，請洽客服詢問)',
        description: '闆娘精選各式包款，每款都有其獨特的設計與風格，適用於各種场合。',
        image: 'images/52034_0.jpg',
        mainCategory: '生活用品',
        subCategory: '包款',  // 添加小分類
        price: '價格請洽客服'    // 添加價格信息
    },
    {
        id: 33,
        name: '凍乾無花果',
        description: '嚴選新鮮無花果，以超低溫急速凍乾，保留無花果香味。',
        image: 'images/51936_0.jpg',
        mainCategory: '其他',
        subCategory: '乾燥蔬果',  // 添加小分類
        weight: '70g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 34,
        name: '紅棗片',
        description: '紅紅火火，養顏美容，早生貴子喜迎門！嚴選純天然紅棗無任何添加物，獨家乾燥！ 工法製成，富含微生物及多種微量元素，促進消化補養身體。',
        image: 'images/52005_0.jpg',
        mainCategory: '其他',
        subCategory: '乾燥蔬果',  // 添加小分類
        weight: '200g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
     {
        id: 35,
        name: '烘乾檸檬片',
        description: '經低溫乾燥處理，完整保留果皮與果肉的營養與天然風味。泡一杯檸檬片茶，微酸清爽、芳香撲鼻，是每日保健、醒腦提神的好選擇！',
        image: 'images/51934_0.jpg',
        mainCategory: '其他',
        subCategory: '乾燥蔬果',  // 添加小分類
        weight: '100g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 36,
        name: '有籽山楂乾',
        description: '嚴選新鮮山楂果實，經低溫烘乾製成，完整保留天然酸香與果肉營養。不含糖、不含添加物，清爽解膩，是現代人飲食調理的良伴。',
        image: 'images/51939_0.jpg',
        mainCategory: '其他',
        subCategory: '乾燥蔬果',  // 添加小分類
        weight: '150g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 37,
        name: '山苦瓜片',
        description: '嚴選成熟山苦瓜原片，採自然風乾製程，保留豐富營養與原始苦甘風味。不含硫磺、不添加防腐劑，是泡茶、煮湯、藥膳調理的健康良品。',
        image: 'images/51941_0.jpg',
        mainCategory: '其他',
        subCategory: '乾燥蔬果',  // 添加小分類
        weight: '100g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 38,
        name: '粉紅玫瑰',
        description: '用最溫柔的方式，守護每一朵盛開的粉紅玫瑰，來自天然花田，手工精選、自然日曬，完整保留花型與香氣，花苞飽滿，色澤鮮艷，是您日常花茶與芳香生活的完美選擇。',
        image: 'images/51152_0.jpg',
        mainCategory: '其他',
        subCategory: '花茶',  // 添加小分類
        weight: '60g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 39,
        name: '嚴選黃菊花',
        description: '保留最天然的金黃花色與濃郁草本香氣。採摘後低溫乾燥，完整保留花形與營養，是養生族群的首選花茶素材。',
        image: 'images/51935_0.jpg',
        mainCategory: '其他',
        subCategory: '花茶',  // 添加小分類
        weight: '50g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 40,
        name: '洛神花茶',
        description: '新鮮洛神花經人工採摘後立即乾燥製成，保留豔紅花萼與獨特花果酸香。酸中帶甜、層次豐富，是深受歡迎的養生沖泡茶材。',
        image: 'images/51937_0.jpg',
        mainCategory: '其他',
        subCategory: '花茶',  // 添加小分類
        weight: '80g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 41,
        name: '焦糖瓜子',
        description: '選飽滿黑瓜子，經慢火翻炒與獨門焦糖配方烘焙，香氣濃郁、外殼酥脆、果仁厚實。甜而不膩、香中帶甘，讓人一吃就停不下來，是休閒時光、追劇配茶、辦公零嘴的絕佳良伴!',
        image: 'images/51947_0.jpg',
        mainCategory: '其他',
        subCategory: '瓜子',  // 添加小分類
        weight: '200g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 42,
        name: '古早味手工麻花捲-海苔風味',
        description: '嚴選小麥粉與海苔粉手工揉製，油炸後酥脆不硬、香氣濃郁，搭配海苔微鹹風味，口感鹹甜交融，是童年回憶裡最懷念的滋味。無人工色素、防腐劑，純素也可食用！',
        image: 'images/52013_0.jpg',
        mainCategory: '其他',
        subCategory: '麻花捲',  // 添加小分類
        weight: '200g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 43,
        name: '古早味手工麻花捲-黑糖風味',
        description: '選用台灣黑糖以慢火熬煮製成糖漿，與特選麵糰融合後手工扭轉成型，油炸後表面包覆濃郁黑糖香。外酥內Q、甜而不膩，是記憶中外婆手裡的零嘴，也是現代人懷念的古早味。',
        image: 'images/52014_0.jpg',
        mainCategory: '其他',
        subCategory: '麻花捲',  // 添加小分類
        weight: '200g',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 44,
        name: '黑芝麻糕',
        description: '嚴選高品質黑芝麻，以低糖配方手工熬製，口感Q彈不黏牙，芝香濃郁、甜而不膩，是兼顧美味與健康的經典漢方零嘴。全素可食，長輩小孩皆宜，讓你在嘴饞之餘也能安心享用。',
        image: 'images/51998_0.jpg',
        mainCategory: '其他',
        subCategory: '其他',  // 添加小分類
        weight: '內含10份',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 45,
        name: '海苔燒米菓',
        description: '嚴選製作的香脆米果，搭配嚴選海苔片包裹，一口咬下，外酥內脆、鹹甜平衡，層次豐富。獨立包裝設計，方便攜帶、乾淨不沾手，是大人小孩都愛的安心零食。',
        image: 'images/52006_0.jpg',
        mainCategory: '其他',
        subCategory: '其他',  // 添加小分類
        weight: '內含12份',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 46,
        name: '黑糖五榖沙琪瑪',
        description: '經典沙琪瑪升級！加入多種五穀堅果，融合香濃黑糖漿製成。每一口都酥脆有層次，甜而不膩、營養加倍，是老少咸宜的健康系甜點。',
        image: 'images/51996_0.jpg',
        mainCategory: '其他',
        subCategory: '其他',  // 添加小分類
        weight: '內含5份',         // 添加重量信息
        price: 100,             // 添加價格信息
        discount: '買五送一'     // 添加優惠信息
    },
    {
        id: 47,
        name: '食用桃膠',
        description: '嚴選野生桃樹分泌的天然樹脂，經天然風乾與手工篩選，無添加、無漂白。泡發後晶瑩剔透、滑嫩彈牙，富含植物膠質，是素食者與養生族群的美顏聖品，被譽為「平民版燕窩」。',
        image: 'images/52015_0.jpg',
        mainCategory: '其他',
        subCategory: '其他',  // 添加小分類
        weight: '600g',         // 添加重量信息
        price: 280,             // 添加價格信息
        discount: '2包只要$500'     // 添加優惠信息
    },

    
];

// 獲取所有主分類
const mainCategories = [...new Set(products.map(product => product.mainCategory))];

// 獲取所有小分類（按主分類分組）
const subCategories = {};
mainCategories.forEach(mainCat => {
    // 獲取該主分類下的所有產品
    const productsInMainCat = products.filter(product => product.mainCategory === mainCat);
    // 獲取該主分類下的所有小分類
    subCategories[mainCat] = [...new Set(productsInMainCat.map(product => product.subCategory))];
});

// 向後兼容，保留原有的categories變數
const categories = [...mainCategories];

// 檢查產品是否有小分類
const hasSubCategories = products.some(product => product.subCategory);
