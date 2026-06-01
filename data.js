// 所有咖啡廳
var cafeList = [
    { 
        num: 1,
        pic: "./img/agora_1.jpg",
        pic2: "./img/agora_2.jpg", 
        name: "Agora Cafe", 
        highlight: "充滿書香與哲思氣息的靜巷咖啡館。", 
        tag: ["#閱讀角落","#安靜角落","#貓咪駐店","#質感小店","#流浪書櫃","#適合讀書辦公","#手沖咖啡","#輕食"], 
        recommend: "推薦給：喜歡閱讀、思考與享受獨處時光的人。",
        dist: "南區", 
        map: "https://maps.app.goo.gl/SgW6afQoSrVaJ8Nu5"          
    },
    { 
        num: 2, 
        pic: "./img/andorfin_1.jpg", 
        pic2: "./img/andorfin_2.jpg", 
        name: "悅癮咖啡 Andorfin Coffee", 
        highlight: "清新明亮的小空間，安靜舒適。", 
        tag: ["#安靜角落","#明亮光感","#閱讀角落","#適合讀書辦公","#適合交談","#不限時","#插座","#手沖咖啡","#甜點/輕食"], 
        recommend: "推薦給：早上想喝杯咖啡或是想找安靜地方做事的人。",
        dist: "南屯區", 
        map: "https://maps.app.goo.gl/mZusecTtjSugi6rS6" 
    },
    { 
        num: 3, 
        pic: "./img/mu_1.jpg", 
        pic2: "./img/mu_2.jpg", 
        name: "沐蒔珈琲", 
        highlight: "溫暖木質調的療癒系咖啡館。", 
        tag: ["#明亮光感","#安靜角落","#貓咪駐店","#質感小店","#適合交談","#適合久坐","#特調咖啡","#甜點"], 
        recommend: "推薦給：喜歡木質調空間、舒服座位，配杯特調咖啡的人。",
        dist: "西區", 
        map: "https://maps.app.goo.gl/PhcqLQYudHAueD776" 
    },
    { 
        num: 4, 
        pic: "./img/mijin_1.jpg", 
        pic2: "./img/mijin_2.jpg", 
        name: "覓靚mijin 咖啡店", 
        highlight: "藏在巷弄裡的小院咖啡廳。", 
        tag: ["#巷弄秘境","#貓咪駐店","#生活感咖啡廳","#質感小店","#適合聊天","#每日限定餐點"], 
        recommend: "推薦給：喜歡在庭院裡吃一頓家常料理，看陽光穿過樹葉和貓一起發呆的人。",
        dist: "中區", 
        map: "https://maps.app.goo.gl/22qBqDdWGjaAabAD8" 
    },
    { 
        num: 5, 
        pic: "./img/si_1.jpg", 
        pic2: "./img/si_2.jpg", 
        name: "矽穀珈琲所", 
        highlight: "穿過層疊巷弄，彷彿走進奶奶家庭院。", 
        tag: ["#巷弄秘境","#老宅","#復古","#質感小店","#適合讀書辦公","#適合交談","#不限時","#插座","#甜點"],
        recommend: "推薦給：想遠離城市步調，在老宅裡享受悠閒午後的人。", 
        dist: "北屯區", 
        map: "https://maps.app.goo.gl/EZvvwX7cuvFx52ix9"  
    },    
    { 
        num: 6, 
        pic: "./img/south_1.jpg", 
        pic2: "./img/south_2.jpg", 
        name: "南青山咖啡", 
        highlight: "挑高寬敞的空間裡，有貓店長親切招呼。", 
        tag: ["#安靜角落","#貓咪駐店","#適合讀書辦公","#適合交談","#不限時","#插座","#輕食"], 
        recommend: "推薦給：想在貓咪陪伴下，安靜度過一個午後的人",
        dist: "南區", 
        map: "https://maps.app.goo.gl/Xir8xgHPArYdqdKg9" 
    },
    { 
        num: 7, 
        pic: "./img/eat_1.jpg", 
        pic2: "./img/eat_2.jpg", 
        name: "喫茶月滿 · 月滿小書店", 
        highlight: "老宅改建的日式喫茶空間，沿著旋轉樓梯而上，藏著小書店。", 
        tag: ["#日式","#閱讀角落","#老宅","#復古","#適合讀書辦公","#不限時"], 
        recommend: "推薦給：喜歡逛獨立書店，或想坐進喫茶店吃份熱煎餅的人。",
        dist: "中區", 
        map: "https://maps.app.goo.gl/bs14P3gbzi3QDafe7" 
    },    
    { 
        num: 8, 
        pic: "./img/here_1.jpg", 
        pic2: "./img/here_2.jpg", 
        name: "Coffee Here", 
        highlight: "市區巷弄裡的鄉村風貓咪咖啡館", 
        tag: ["#深夜","#安靜角落","#貓咪駐店","#巷弄秘境","#適合讀書辦公","#插座","#甜點"], 
        recommend: "推薦給：想找個舒服角落，和貓咪一起悠閒度過午後或夜晚的人。",
        dist: "北區", 
        map: "https://maps.app.goo.gl/8oru3hTBs2Wy51nh6" 
    },    
    { 
        num: 9, 
        pic: "./img/satorui_1.jpg", 
        pic2: "./img/satorui_2.jpg", 
        name: "悟い Satorui coffee",
        highlight: "住宅區裡的木質暖光咖啡店。", 
        tag: ["#質感小店","#明亮光感","#適合交談","#手沖咖啡","#手作甜點","#咖哩飯"], 
        recommend: "推薦給：喜歡咖啡、手作甜點與溫暖空間的人。",
        dist: "南區",
        map: "https://maps.app.goo.gl/GTcXWzuGKAT3LHyW8" 
    },   
    { 
        num: 10, 
        pic: "./img/jacu_2.jpg", 
        pic2: "./img/jacu_1.jpg", 
        name: "JACU CAFE", 
        highlight: "簡潔明亮的綠植手沖咖啡館。", 
        tag: ["#室內綠植","#明亮光感","#安靜角落","#適合讀書辦公","#不限時","#插座","#輕食"], 
        recommend: "推薦給：喜歡喝咖啡、感受綠意空間的人。",
        dist: "南屯區", 
        map: "https://maps.app.goo.gl/hbjdT9ZioP6csC4D8" 
    },   
    { 
        num: 11, 
        pic: "./img/sir_1.jpg", 
        pic2: "./img/sir_2.jpg", 
        name: "睦舍 || 深夜咖啡廳 ||", 
        highlight: "復古昏光包裹的深夜咖啡館。", 
        tag: ["#深夜","#復古","#適合聊天","#輕食"], 
        recommend: "推薦給：想在夜晚放鬆聊天或續攤的人。",
        dist: "西區", 
        map: "https://maps.app.goo.gl/eE2bELvL93EFFWqPA" 
    },
    { 
        num: 12, 
        pic: "./img/fifteen_1.jpg", 
        pic2: "./img/fifteen_2.jpg", 
        name: "干城拾伍咖啡廳", 
        highlight: "巷內老宅裡的小型溫馨咖啡廳", 
        tag: ["#巷弄秘境","#老宅","#質感小店","#插座","#甜點"], 
        recommend: "推薦給：喜歡西西里咖啡與肉桂捲，想找可愛小店的人。",
        dist: "南屯區", 
        map: "https://maps.app.goo.gl/yA2bw5TfEsxYtnuq6" 
    },
    { 
        num: 13, 
        pic: "./img/same_1.jpg", 
        pic2: "./img/same_2.jpg", 
        name: "同齊咖吡", 
        highlight: "三層樓的複合型咖啡廳，兼具工作與休憩機能。", 
        tag: ["#明亮光感","#深夜","#適合讀書辦公","#適合聊天","#不限時","#插座","#輕食"], 
        recommend: "推薦給：喜歡喝咖啡、感受綠意空間的人。",
        dist: "西區", 
        map: "https://maps.app.goo.gl/Qnc9p6cgu6zUrHz6A" 
    },
    
    
];