const categories = {
  desserts: [
      {
        name: "Нарезное мороженое", 
        target: "specialCutIce" 
      },
      { 
        name: "Мороженое снэки", 
        target: "iceCreamSnacks"
      },
      { 
        name: "Специальные чашки", 
        target: "specialCoupe" 
      },
      { 
        name: "Горячие десерты", 
        target: "hotDeserts" 
      },
      { 
        name: "Фисташковая пахлава", 
        target: "phistaBaklava" 
      },
      { 
        name: "Пахлава с грецким орехом", 
        target: "walnutsBaklava" 
      },
      { 
        name: "Десертная тарелка", 
        target: "desertPlate" 
      },
  ],
  breakfestCat: [
    {
      name: "Завтраки", 
      target: "breakfest" 
    },
    {
      name: "Тосты и Гозлеме", 
      target: "toastsGozleme" 
    },
],
  bar: [
      {
        name: "Чай", 
        target: "tea" 
      },
      { 
        name: "Кофе", 
        target: "coffee" 
      },
      { 
        name: "Милкшейк", 
        target: "milksheik" 
      },
      { 
        name: "Свежевыжатый сок", 
        target: "juice" 
      },
      { 
        name: "Лимонады", 
        target: "lemonades" 
      },
      { 
        name: "Холодные напитки", 
        target: "coldDrinks" 
      },
  ]
};

const cardsData = {
    specialCutIce: [
      {
        title: 'Специальное Нарезное Мороженое',
        description: 'Простое шоколоданое, фисташковое морожеое с молочным джемом',
        weight: '300 г',
        price: '810 с',
        image: './img/ice-cream/special-narez-icream.png'
      },
      {
        title: 'Классическое Нарезное Мороженое',
        description: 'Классическое, фисташковое мороженое, с джемом',
        weight: '200 г',
        price: '610 с',
        image: './img/ice-cream/kesme-ice-cream.png'
      },
      {
        title: 'Нарезное Мороженое "MADO"',
        description: 'Два ломтика классического мороженого и две баклавы',
        weight: '200 г',
        price: '550 с',
        image: './img/ice-cream/narezannoe-iceCream-mado.png'
      },
      {
        title: 'Мороженое с молочным джемом',
        description: 'Классическое мороженое с джемом',
        weight: '100 г',
        price: '450 с',
        image: './img/ice-cream/ice-cream-jem.png'
      },
      {
        title: 'Мороженое между пахлавой',
        description: 'мороженое "Дёвме" между двумя слоями пахлавы',
        weight: '100 г',
        price: '880 с',
        image: './img/ice-cream/ice-cream-baklava.png'
      },
      {
        title: 'Мороженое с фисташковым Кадайыф',
        description: 'Классическое мороженое поверх Кадайыф',
        weight: '150 г',
        price: '450 с',
        image: './img/ice-cream/ice-cream-kadayif.png'
      },
    ],
    iceCreamSnacks: [
    {
        title: 'Мороженое "Тартуфо" в крышке какао',
        description: 'Классическое мороженое в крышке какао',
        weight: '100 г',
        price: '300 с',
        image: './img/ice-cream/tartufo.png'
    },
    {
        title: 'Мороженое между макаронсами',
        description: 'Готовится с мороженным между двумя макаронами и подается вместе с джемом',
        weight: '4 шт',
        price: '450 с',
        image: './img/ice-cream/macaron.png'
    },
    {
      title: 'Мороженое Бон-Бон',
      description: 'Подается вместе с малиновым соусом и ломтиками банана',
      weight: '4 шт',
      price: '450 с',
      image: './img/ice-cream/bon-bon.png'
  },
  {
    title: 'Мороженое палец',
    description: 'Подается вместе с шоколадным соусом и ломтиками банана',
    weight: '4 шт',
    price: '450 с',
    image: './img/ice-cream/ice-cream-palchiki.png'
  },
  {
    title: 'Мороженое палец',
    description: 'Подается вместе с шоколадным соусом и ломтиками банана',
    weight: '4 шт',
    price: '450 с',
    image: './img/ice-cream/ice-cream-with-coockies.png'
  },
    ],
    specialCoupe: [
    {
      title: 'Куп Тирамису',
      description: 'Ванильное, шоколадное мороженое, Тирамису с какао порошком',
      weight: ' г',
      price: '900 с',
      image: './img/coupe/coupe-tiramisu.png'
    },
    {
      title: 'Куп MADO ',
      description: 'Классическое, фисташковое, шоколадное и клубничное мороженое, с фруктами',
      weight: ' г',
      price: '800 с',
      image: './img/coupe/coupe-mado.png'
    },
    {
      title: 'Куп Фит ',
      description: 'Классическое, шоколадное мороженое, кусочки банана, с арахисом',
      weight: ' г',
      price: '800 с',
      image: './img/coupe/coupe-fit.png'
    },
    {
      title: 'Куп Профитроля ',
      description: 'Виншневое и лимонное мороженое, профитроля, тертый шоколад и корнетик',
      weight: ' г',
      price: '900 с',
      image: './img/coupe/coupe-profitolya.png'
    },
    {
      title: 'Куп Дарк',
      description: 'Шоколадное и классическое мороженое, вместе с шоколадным соусом',
      weight: ' г',
      price: '650 с',
      image: './img/coupe/coupe-dark.png'
    },
     {
      title: 'Куп Микс',
      description: 'Фруктовое мороженое, сезонные фрукты, малиновый соус в рожке',
      weight: ' г',
      price: '750 с',
      image: './img/coupe/coupe-mix.png'
    },
     {
      title: 'Куп Сан-Себастьян',
      description: 'Классическое и карамельное мороженое, "Сан-Себастьян", лесные орехи',
      weight: ' г',
      price: '800 с',
      image: './img/coupe/coupe-san-sebastian.png'
    },
    {
      title: 'Куп Баклава',
      description: 'Фисташковое и классическое мороженое, баклава и молотая фисташка',
      weight: ' г',
      price: '650 с',
      image: './img/coupe/coupe-baklava.png'
    },
    {
      title: 'Красная страсть',
      description: 'Клубничное мороженое и красные фрукты',
      weight: ' г',
      price: '650 с',
      image: './img/coupe/coupe-baklava.png'
    },
    {
      title: 'Банана сплит',
      description: 'Клубничное мороженое и красные фрукты',
      weight: ' г',
      price: '800 с',
      image: './img/coupe/coupe-banan-split.png'
    },
    ],
    hotDeserts: [
    {
      title: 'Кунефе с горячим шоколадом',
      description: 'Подается с горячим шоколадом и небольшим стаканом теплого молока',
      weight: '100 г',
      price: '600 с',
      image: './img/hot-deserts/kunefeh-wirh-jam.png'
    },
    {
      title: 'Кунефе',
      description: 'Подается вместе с классическим мороженым и стаканом теплого молока',
      weight: '150 г',
      price: '600 с',
      image: './img/hot-deserts/kunefeh.png'
    },
    {
      title: 'Медовый пирог',
      description: 'Подается вместе с классическим мороженым, процеженного меда и стаканом теплого молока',
      weight: '100 г',
      price: '700 с',
      image: './img/hot-deserts/pie-with-honey.png'
    },
    {
      title: 'Анаели с фисташками',
      description: 'Подается вместе с классическим мороженым, процеженного меда и стаканом теплого молока',
      weight: '100 г',
      price: '500 с',
      image: './img/hot-deserts/anaeli.png'
    },
    {
      title: 'Горячее суфле',
      description: 'Подается вместе с классическим мороженым, процеженного меда и стаканом теплого молока',
      weight: '100 г',
      price: '500 с',
      image: './img/hot-deserts/sufle-hot.png'
    },
    ],
    phistaBaklava: [
      {
        title: 'Фисташковая пахлава',
        description: 'Подается вместе с молотым фисташкой',
        weight: '4 шт',
        price: '670 с',
        image: './img/baklava-desert/classic-baklava(4oct).png'
      },
      {
        title: 'Пахлава (длинный нарез)',
        description: 'Подается вместе с молотым фисташкой',
        weight: '100 г',
        price: '740 с',
        image: './img/baklava-desert/baklava-long.png'
      },
      {
        title: 'Фисташковая бурма',
        description: 'Подается вместе c мелко натертыми фисташками',
        weight: '4 шт',
        price: '550 с',
        image: './img/baklava-desert/fit-burma.png'
      },
      {
        title: '"Тель" кадайыф с фисташками',
        description: 'Подается вместе c мелко натертыми фисташками',
        weight: '3 шт',
        price: '500 с',
        image: './img/baklava-desert/tel-kadayuf.png'
      },
      {
        title: '"Сарма" с фисташками',
        description: 'Подается вместе c мелко натертыми фисташками',
        weight: '4 шт',
        price: '930 с',
        image: './img/baklava-desert/sarma-with-fit.png'
      },
      {
        title: '"Долама" с фисташками',
        description: 'Подается вместе c мелко натертыми фисташками',
        weight: '4 шт',
        price: '950 с',
        image: './img/baklava-desert/dolama-with-fit.png'
      },
      {
        title: 'Фисташковая специальная пахлава',
        description: 'Подается вместе c мелко натертыми фисташками',
        weight: '3 шт',
        price: '750 с',
        image: './img/baklava-desert/classic-special-baklava(3oct).png'
      },
      {
        title: 'Мидии пахлава',
        description: 'Подается вместе c мелко натертыми фисташками',
        weight: '3 шт',
        price: '750 с',
        image: './img/baklava-desert/BAKLAVA-midi.png'
      },
      {
        title: 'Шоколадная пахлава',
        description: 'Подается вместе c мелко натертыми фисташками',
        weight: '4 шт',
        price: '750 с',
        image: './img/baklava-desert/chocolate-baklava.png'
      },
    ],
    walnutsBaklava: [
      {
        title: 'Пахлава с грецким орехом',
        description: 'Подается вместе c мелко натертым грецким орехом',
        weight: '4 шт',
        price: '620 с',
        image: './img/baklava-desert/classic-baklava-with-walnuts(4oct).png'
      },
      {
        title: 'Домашняя пахлава с грецким орехом',
        description: 'Подается вместе с молотым орехом',
        weight: '4 шт',
        price: '560 с',
        image: './img/baklava-desert/home-baklava-walnuts.png'
      },
      {
        title: 'Специальная пахлава с грецким орехом',
        description: 'Подается вместе c мелко натертым грецким орехом',
        weight: '3 шт',
        price: '640 с',
        image: './img/baklava-desert/classic-special-baklava-with-walnuts(3oct).png'
      },
      {
        title: 'Холодная баклава',
        description: '',
        weight: '4 шт',
        price: '640 с',
        image: './img/baklava-desert/.png'
      },
    ],
    desertPlate: [
      {
        title: 'Десерт с мороженым',
        description: 'Два шт шобиет, медовое тесто, пахлава с грецким орехом, домашняя пахлава, мороженое, ломтики банана, мед и теплое молоко',
        weight: '650 г',
        price: '2350 с',
        image: './img/baklava-desert/desert-with-ice-cream.png'
      },
      {
        title: 'Смешанная десертная тарелка',
        description: 'Долама, фисташковая пахлава, пахлава с грецким орехом, домашняя пахлава и мороженое "Кесме"',
        weight: '200 г',
        price: '1050 с',
        image: './img/baklava-desert/mix-plate-desert.png'
      },
      {
        title: 'Десертная тарелка с фисташками',
        description: 'Шобиет, "Тель" кадайыф мороженое "Кесме"',
        weight: '200 г',
        price: '1150 с',
        image: './img/baklava-desert/desert-plate-fit.png'
      },
    ],
    breakfest: [
      {
        title: 'Разнообразный завтрак',
        description: 'Омлет менемен, сыр Мараш с нашей фермы, жирный сыр фета, сыр чеддер, сыр с травами, сыр тулум, булочка Мараш...',
        price: '1600 с',
        image: './img/breakfest/breakfest-mixed.png'
      },
      {
        title: 'Завтрак с кусочками Борека',
        description: 'Два вареных яйца, сыр Мараш с нашей фермы, белый сыр, сыр тулум, аджика, грецкие орехи, помидоры черри, огурец...',
        price: '990 с',
        image: './img/breakfest/breakfest-borek.png'
      },
      {
        title: 'Поздний завтрак',
        description: 'Омлет из трех яиц, колбаса, картофель фри, белый сыр, сыр "Тулум", су борек, картофельные лепешки, ажика, грецкие орехи...',
        price: '1450 с',
        image: './img/breakfest/brakfest-late.png'
      },
      {
        title: 'Вечерний завтрак',
        description: 'Сыр "Мараш" с нашей фермы, белый сыр, сыр "Тулум", 2 картофельных шашлыка, фрикадельки, йогурт, перечное масло, суп, сырые...',
        price: '1450 с',
        image: './img/breakfest/brakfest-evening.png'
      },
      {
        title: 'Мой завтрак',
        description: 'Сыр Мараш, сыр фета, сыр чеддер, Выпечка с сыром Мараш, вареное яйцо, зеленые и черные оливки, аджука, помидоры черри, огурец...',
        price: '750 с',
        image: './img/breakfest/brakfest-my.png'
      },
      {
        title: 'Завтрак с моно бореком',
        description: 'Выдержанный сыр кашкавал, белый сыр, огурец, помидоры черри, руколла, соты, каймак, аджика, грецкий орех, сушеные абрикосы, зеленые...',
        price: '650 с',
        image: './img/breakfest/brakfest-mono-borek.png'
      },
      {
        title: 'Завтрак с круассаном',
        description: 'Круассан, 2 ломтика телячьей ветчины, кашкавальский сыр, белый сыр, огурец, помидоры черри, руколла, варенье, из кислой черешни...',
        price: '650 с',
        image: './img/breakfest/brakfest-krusan.png'
      },
      {
        title: 'Деревенский завтрак MADO',
        description: 'Сыр Мараш, сыр с травами, сыр тулум, сыр чеддер, фруктовый джем, аджука, товрог, сливки, масло, зеленые и черные оливки, две выпечки...',
        price: '900 с',
        image: './img/breakfest/brakfest-village.png'
      },
      {
        title: 'Быстрый завтрак',
        description: 'Полножирный сыр фета, сыр чеддер, зеленые и черные оливки, помидоры черри, аджука, огурец, перец, вареное яйцо и фруктовый джем',
        price: '450 с',
        image: './img/breakfest/brakfest-fast.png'
      },
      {
        title: 'Яичница с турецкой колбасой',
        description: '2 яйца с турецкой колбасой',
        weight: '150 г',
        price: '380 с',
        image: './img/breakfest/egg-with-sausage.png'
      },
      {
        title: 'Менемен',
        description: 'Яйцо скрэмбл, с овощами',
        weight: '270 г',
        price: '390 с',
        image: './img/breakfest/menemen.png'
      },
      {
        title: 'Классический омлет',
        description: 'На выбор: с зеленью/грибами/сыром',
        weight: '270 г',
        price: '380 с',
        image: './img/breakfest/omlet-with-egg.png'
      },
    ],
    toastsGozleme: [
      {
        title: 'Тост с турецким сыром',
        description: 'Тосты "Джамбо" с начинкой из турецкого сыра, подаются с зеленью и картофелем фри',
        weight: '170 г',
        price: '340 с',
        image: './img/breakfest/toast-with-turkish-cheese.jpg'
      },
      {
        title: 'Тост с сыром',
        description: 'Средиземноморская зелень, помидоры черри и картофель фри со свежим сыром',
        weight: '170 г',
        price: '340 с',
        image: './img/breakfest/tost-with-brynza.png'
      },
      {
        title: 'Тост с брынзой',
        description: 'Заквашенный деревенский хлеб, оливковая паста, сыр фета, помидоры и зелень',
        weight: '170 г',
        price: '340 с',
        // image: './img/breakfest/tost-with-brynza.png'
      },
      {
        title: 'Гозлеме с сыром "Мараш"',
        description: 'Гозлеме приготовленные с сыром мараш и петрушкой, помидоры, огурцы и аджука',
        weight: '100 г',
        price: '390 с',
        image: './img/gozleme/gozleme-with-.png'
      },
      {
        title: 'Гозлеме с фаршем',
        description: 'Гозлеме приготовленные из фарша и лука, сухой джаджык с укропом и аджука',
        weight: '100 г',
        price: '390 с',
        image: './img/gozleme/gozleme-with-farsh.png'
      },
      {
        title: 'Гозлеме со шпинатом',
        description: 'Гозлеме приготовленные со шпинатом, сухой джаджык с укропом и аджука',
        weight: '100 г',
        price: '380 с',
        image: './img/gozleme/gozleme-with-shpinat.png'
      },
    ],
    soup: [
      {
        title: 'Чечевичный суп',
        description: 'Со сливочным соусом, долькой лимона и чесночными гренками',
        weight: '300 г',
        price: '300 с',
        image: './img/soupe/soup-chechevichka.jpg'
      },
      {
        title: 'Грибной суп',
        // description: 'Со сливочным соусом, долькой лимона и чесночными гренками',
        weight: '300 г',
        price: '300 с',
        image: './img/soupe/soup-.jpg'
      },
      {
        title: 'Томатный суп',
        description: 'Суп, приготовленный с жареными помидорами луком и тертым сыром Чеддер',
        weight: '300 г',
        price: '300 с',
        image: './img/soupe/soup-tomat.jpg'
      },
    ],
    snacks: [
      {
        title: 'Картошка фри',
        description: 'Жареная картошка, подаетяс вместе с кетчупом',
        weight: '150 г',
        price: '150 с',
        image: './img/snack/fries.png'
      },
      {
        title: 'Тарелка закусок',
        description: 'Картофель фри, луковые кольца подается вместе с кетчупом',
        weight: '150 г',
        price: '550 с',
        image: './img/snack/plate-snack.png'
      },
      {
        title: 'Куриные пальчики',
        description: 'Картошка фри и обжаренная курица',
        weight: '220 г',
        price: '490 с',
        image: './img/snack/chicken-fingers.png'
      },
      {
        title: 'Перекус',
        description: '',
        weight: '6 шт',
        price: '800 с',
        image: './img/snack/snacks.jpg'
      },
    ],
    salade: [
      {
        title: 'Салат "Цезарь"',
        description: 'Листья салата, смешанные с соусом цезарь, острыми гренками и сыром Пармезан',
        weight: '480 г',
        price: '450 с',
        image: './img/salade/cezar-chicken.jpg'
      },
      {
        title: 'Салат с руколлой и фркутами',
        description: 'Фрукты, заправленные с листьями салата',
        weight: '350 г',
        price: '350 с',
        image: './img/salade/rukolla-with-fruit.jpg'
      },
      {
        title: 'Салат с тунцом',
        description: 'Зеленые листья, смешанные с лимоном и оливковым маслом, руколлой, укропом, и тунцом',
        weight: '575 г',
        price: '480 с',
        image: './img/salade/salade-with-tunec.png'
      },
      {
        title: 'Салат с хрустящей курицей',
        description: 'Хрустящие кусочки курицы, листья салата, помидоры, огурцы, морковь и сухари',
        weight: '460 г',
        price: '480 с',
        image: './img/salade/salade-with-chicken.png'
      },
      {
        title: 'Салат из филе с горчичным соусом',
        description: 'Смесь зеленой зелени, с лимоном и оливковым маслом, руколлой, зеленым яблоком и жеренный стейк',
        weight: '525 г',
        price: '550 с',
        image: './img/salade/salade-with-steak.png'
      },
      {
        title: 'Салат из авокадо и с сыром "Тулум"',
        description: 'Смесь сезонной, зелени, и лимоном и оливковым маслом, ломтиками авокадо, с сыром тулум и огурцом',
        weight: '430 г',
        price: '450 с',
        image: './img/salade/salade-with-tulum-avacado.png'
      },
      {
        title: 'Хрустящий баклажан',
        description: 'Жареные баклажаны с помидорами и с соусом',
        weight: '400 г',
        price: '400 с',
        image: './img/salade/salade-baklazhan.png'
      },
      {
        title: 'Греческий салат',
        description: 'Помидоры и огурцы, лук, оливки и сыр Фета',
        weight: '415 г',
        price: '480 с',
        image: './img/salade/salade-grek.png'
      },
      {
        title: 'Бурата с томатами',
        description: '',
        weight: '380 г',
        price: '520 с',
        image: './img/special-menu/special-burata-tomata.png'
      },
    ],
    pastas: [
      {
        title: 'Пенне с острым соусом"',
        description: 'Паста пенне, смешанная с острым соусом, оливками и свежим базиликом',
        weight: '340 г',
        price: '400 с',
        image: './img/pasta/pasta-arabiata.png'
      },
      {
        title: 'Спагетти Болоньезе',
        description: 'Спагетти с говяжьим фаршем, томатным соусом и свежим базиликом',
        weight: '315 г',
        price: '450 с',
        image: './img/pasta/pasta-bolonyeze.jpg'
      },
      {
        title: 'Фетучини "Альфредо"',
        description: 'Спагетти со сливочным соусом, курицей, грибами и свежим базиликом',
        weight: '465 г',
        price: '550 с',
        image: './img/pasta/pasta-fetuchini.png'
      },
    ],
    manty: [
      {
        title: 'Хрустящие манты',
        description: 'Жареные манты с начинкой из фарша, йогурта, сливочного масла',
        weight: '220 г',
        price: '550 с',
        image: './img/manty/manty-mado-crispy.png'
      },
      {
        title: 'Мадо манты',
        description: 'Манты с говяжьим фаршем, подается с йогуртом, маслом и заправками',
        weight: '220 г',
        price: '530 с',
        image: './img/manty/manty-mado.png'
      },
    ],
    pizza: [
      {
        title: 'Пицца с разными ингредиентами',
        description: 'Моцарелла, томатный соус, острая колбаса, салями, помидоры, грибы и руколла',
        weight: '600 г',
        price: '670 с',
        image: './img/pizza/pizza-other-ingr.png'
      },
      {
        title: 'Пицца 4 сыра',
        description: 'Сыр моцарелла, в томатном соусе, сыр чеддер, сыр тулум, сыр мараш с нашей фермы и руколла',
        weight: '490 г',
        price: '600 с',
        image: './img/pizza/pizza-4-cheese.png'
      },
      {
        title: 'Пицца с овощами',
        description: 'Томатный соус, моцарелла, помидоры, грибы, кукуруза и бакалжаны',
        weight: '470 г',
        price: '550 с',
        image: './img/pizza/pizza-vegatables.png'
      },
      {
        title: 'Пицца с курицей',
        description: 'Куриная грудка, моцарелла, помидоры, грибы на томатном соусе',
        weight: '570 г',
        price: '650 с',
        image: './img/pizza/pizza-chicken.png'
      },
      {
        title: 'Пицца маргарита',
        description: 'Моцарелла, помидоры, руколла в томатном соусе',
        weight: '430 г',
        price: '530 с',
        image: './img/pizza/pizza-margarita.png'
      },
      {
        title: 'Лахмаджун',
        description: 'На выбор: с сыром/без',
        weight: '350 г',
        price: '250 с',
        image: './img/special-menu/special-lahmajun.jpg'
      },
      {
        title: 'Пиде с сыром',
        description: '',
        weight: '350 г',
        price: '320 с',
        image: './img/special-menu/special-pide.jpg'
      },
      {
        title: 'Пиде с фаршем',
        description: '',
        weight: '350 г',
        price: '350 с',
        image: './img/special-menu/special-pide.jpg'
      },
      {
        title: 'Пиде с сыром и яйцом',
        description: '',
        weight: '350 г',
        price: '350 с',
        image: './img/special-menu/special-pide.jpg'
      },
    ],
    dyurum: [
      {
        title: 'Дюрюм с курицей',
        description: 'Грибы, зеленый и красный перец, куриная грудка с луком, подается вместе с картофелем-фри и кетчуп',
        weight: '350 г',
        price: '500 с',
        image: './img/durum/durum.png'
      },
      {
        title: 'Дюрюм с мясом',
        description: 'Грибы, зеленый и красный перец бон-филе с луком, подается вместе с картофелем-фри и кетчуп',
        weight: '350 г',
        price: '550 с',
        image: './img/durum/durum.png'
      },
      {
        title: 'Тантуни ролл с йогуртом',
        description: 'Тантуни подается с зеленью, зеленым перцем, картофелем фри, йогуртом и томатно-масляным соусом',
        weight: '530 г',
        price: '650 с',
        image: './img/durum/second-tantuni-roll-with-yougurt.png'
      },
    ],
    burgers: [
      {
        title: 'Бургер с сыром чеддер',
        description: 'Сыр чеддер, листья салата, помидоры, маринованный огурец, картофель фри и луковые кольца',
        weight: '465 г',
        price: '450 с',
        image: './img/burgers/burger-with-chedder.png'
      },
      {
        title: 'MADO бургер',
        description: 'Листья салата, помидор, соленый огурец и картофель спичка',
        weight: '465 г',
        price: '520 с',
        image: './img/burgers/burger-mado.png'
      },
      {
        title: 'BBQ бургер',
        description: 'Хрустящий лук, сыр чеддер, соус барбекью, картофель фри и луковые кольца',
        weight: '465 г',
        price: '400 с',
        image: './img/burgers/.png'
      },
      {
        title: 'Цезарь бургер с курицей',
        description: 'Хрустящая курица, листья салата, маринованные огурцы, сыр пармезан и картофель фри',
        weight: '465 г',
        price: '400 с',
        image: './img/burgers/.png'
      },
    ],
    meatballs: [
      {
        title: 'Котлетки с йогуртовым соусом',
        description: 'Котлеты на гриле, йогурт, томатный соус, хрустящий картофель, обжаренный зеленый и красный перец и помидоры',
        weight: '585 г',
        price: '680 с',
        image: './img/dish-with-meatbalss/meatballs-with-yougurt.png'
      },
      {
        title: 'Фрикадельки с соусом',
        description: 'Лук и грибы, смешанные со сливочным соусом, вместе с картофельным пюре с сыром и отварными овощами',
        weight: '545 г',
        price: '680 с',
        image: './img/dish-with-meatbalss/meatballs-frikadelki.png'
      },
      {
        title: 'Котлетки гриль',
        description: 'Котлетки на гриле с жареннымы помидорами и зеленым перцем картофелем фри, рисом, аджукой и лавашом',
        weight: '600 г',
        price: '680 с',
        image: './img/dish-with-meatbalss/meatballs-grill.png'
      },
      {
        title: 'Котлетки "Бегенди"',
        description: 'Котлетки на гриле, лаваш, зеленый перец в баклажановом соусе',
        weight: '545 г',
        price: '750 с',
        image: './img/dish-with-meatbalss/meatballs-begendu.png'
      },
      {
        title: 'Фрикадельки с кортефельным пюре',
        description: 'Маленькие фрикадельки, обжаренные в сливочном масле, подается вместе с картофельным пюре и с турецким сыром',
        weight: '400 г',
        price: '680 с',
        image: './img/dish-with-meatbalss/meatballs-pure.png'
      },
    ],
    dishMeat: [
      {
        title: 'Мясной шиш-кебаб',
        description: 'Шиш, жереный зеленый перец, помидоры, с рисом и картофелем фри',
        weight: '595 г',
        price: '940 с',
        image: './img/dish-with-meat/meat-shish.png'
      },
      {
        title: 'Кебаб "Чельтик"',
        description: 'Нарезное филе телятины, жареный картофель, йогурт, масляной томатный соус ',
        weight: '500 г',
        price: '750 с',
        image: './img/dish-with-meat/meat-cheltik.png'
      },
      {
        title: '"Сач-Кавурма"',
        description: 'Традиционное припущенное мясо на сковороде с луком, зеленым перцем и помидорами',
        weight: '400 г',
        price: '620 с',
        image: './img/dish-with-meat/meat-sach-kavurna.png'
      },
      {
        title: 'Вырезка с соусом "Cafe de Paris"',
        description: 'Кусочки говяжьей вырезки на гриле с соусом "Cafe de Paris"',
        weight: '470 г',
        price: '780 с',
        image: './img/dish-with-meat/meat-antrikot.png'
      },
      {
        title: 'Бараньи ребрышки',
        description: 'Бараньи ребрышки, подается вместе с рисом и соусом Демиглас',
        weight: '650 г',
        price: '990 с',
        image: './img/dish-with-sheep/lamb-ribs.png'
      },
    ],
    dishChicken: [
      {
        title: 'Курица со сливочно-грибным соусом и сыром',
        description: 'Куриное филе гриль, со сливочно-грибным соусом и сыром, подается вместе с рисом и картофелем фри',
        weight: '470 г',
        price: '650 с',
        image: './img/dish-with-chicken/chicken-with-creamy-sause.png'
      },
      {
        title: 'Куриный шашлык',
        description: 'Кусочки маринованных куриных бедрышек, жареные помидоры и зеленый перец',
        weight: '595 г',
        price: '640 с',
        image: './img/dish-with-chicken/chicken-shish.png'
      },
      {
        title: 'Курица с соусом "Бегенди"',
        description: 'Куриные бедра на гриле с баклажанами, зеленым и красным перцем и вареными овощами',
        weight: '690 г',
        price: '640 с',
        image: './img/dish-with-chicken/chicken-begendi.png'
      },
      {
        title: 'Курица с соусом "Карри"',
        description: 'Сливочный соус карри, куриное филе, подается с рисом и картофелем фри',
        weight: '550 г',
        price: '640 с',
        image: './img/dish-with-chicken/chicken-with-carry.png'
      },
      {
        title: 'Куриный шницель',
        description: 'Курица в панировке ломтиком лимона, картофелем фри и зеленью из капусты и моркови',
        weight: '400 г',
        price: '610 с',
        image: './img/dish-with-chicken/chicken-shinicel.png'
      },
      {
        title: 'Куриная вырезка в соусе "Cafe de Paris"',
        description: 'Кусочки куриной вырезки на гриле с соусом "Cafe de Paris" и картофелем фри',
        weight: '470 г',
        price: '610 с',
        image: './img/dish-with-chicken/chicken-with-cafe-de-paris.png'
      },
      {
        title: 'Курица гриль',
        description: 'Кусочки куриной вырезки на гриле с рисом и свежим салатом',
        weight: '475 г',
        price: '580 с',
        image: './img/dish-with-chicken/chicken-with-grill.png'
      },
    ],
    tea: [
      {
        title: 'Бардак чай',
        description: '',
        weight: '0.1 мл',
        price: '50 с',
        image: './img/tea/turkish-bardak.png'
      },
      {
        title: 'Ассам',
        description: '',
        weight: '900 мл',
        price: '190 с',
        image: './img/tea/tea-assam.png'
      },
      {
        title: 'Эрл Грей',
        description: '',
        weight: '900 мл',
        price: '190 с',
        image: './img/tea/tea-assam.png'
      },
      {
        title: 'Ягодный чай',
        description: '',
        weight: '900 мл',
        price: '320 с',
        image: './img/tea/tea-strawbaerry.png'
      },
      {
        title: 'Облепиховый чай',
        description: '',
        weight: '900 мл',
        price: '320 с',
        image: './img/tea/tea-oblepiha.png'
      },
      {
        title: 'Имбирный чай',
        description: 'Имбирь, мята и лимон',
        weight: '900 мл',
        price: '320 с',
        image: './img/tea/tea-imbir.png'
      },
      {
        title: 'Чай с мятой и лимоном',
        description: '',
        weight: '900 мл',
        price: '320 с',
        image: './img/tea/tea-limon-mint.png'
      },
      {
        title: 'Ябочный чай',
        description: 'Яблоко и корица',
        weight: '900 мл',
        price: '320 с',
        image: './img/tea/tea-strawbaerry.png'
      },
      {
        title: 'Жасминовый чай',
        description: '',
        weight: '900 мл',
        price: '320 с',
        image: './img/tea/tea-jasmin.png'
      },
      {
        title: 'Турецкий чай',
        description: '',
        weight: '900 мл',
        price: '200 с',
        // image: './img/tea/tea-assam.png'
      },
      {
        title: 'Молочный улун',
        description: '',
        weight: '900 мл',
        price: '190 с',
        // image: './img/tea/tea-strawbaerry.png'
      },
      {
        title: 'Сенча',
        description: '',
        weight: '900 мл',
        price: '190 с',
        // image: './img/tea/tea-strawbaerry.png'
      },
      
    ],
    coffee: [
      {
        title: 'Турецкое кофе',
        description: 'На выбор: С мастикой, Дибек',
        weight: '250 г',
        price: '240 с',
        image: './img/coffee/turkish-coffee.png'
      },
      {
        title: 'Эспрессо',
        description: 'Чистое кофе',
        weight: '250 г',
        price: '120 с',
        image: './img/coffee/coffe-espresso.png'
      },
      {
        title: 'Капучино',
        description: '2 шота эспрессо, молоко',
        weight: '250/350 мл',
        price: '180/200 с',
        image: './img/coffee/coffe-capuch.png'
      },
      {
        title: 'Латте',
        description: 'Шот эспрессо, молоко',
        weight: '250/350 мл',
        price: '210/350 с',
        image: './img/coffee/coffe-latte.png'
      },
      {
        title: 'Американо',
        description: '2 шота эспрессо, вода',
        weight: '250/350 мл',
        price: '180/200 с',
        image: './img/coffee/coffee-amerikano.png'
      },
      {
        title: 'Флэт-Уайт',
        description: '2 шота эспрессо, молоко',
        weight: '250 мл',
        price: '220 с',
        image: './img/coffee/coffe-flet.png'
      },
      {
        title: 'Макиато',
        description: 'Шот эспрессо покрытый молочной пенкой',
        weight: '250/350 мл',
        price: '120 с',
        image: './img/coffee/coffe-mocchiatio.png'
      },
      {
        title: 'Матча',
        description: '',
        weight: '250/350 мл',
        price: '220/240 с',
        image: './img/coffee/coffe-macha.png'
      },
      {
        title: 'Раф',
        description: '',
        weight: '250 мл',
        price: '250 с',
        image: './img/coffee/coffe-raf.png'
      },
      {
        title: 'Фраппе',
        description: '',
        weight: '350 мл',
        price: '250 с',
        image: './img/ice-coffee/ice-frappe.png'
      },
      {
        title: 'Айс-Американо',
        description: '2 шота эспрессо и вода со льдом',
        weight: '350 мл',
        price: '190 с',
        image: './img/ice-coffee/ice-americano.png'
      },
      {
        title: 'Айс-Латте',
        description: 'Шот эспрессо и молоко со льдом',
        weight: '350 мл',
        price: '210 с',
        image: './img/ice-coffee/ice-latte.png'
      },
      {
        title: 'Айс-Капучино',
        description: '2 шота эспрессо и молоко со льдом',
        weight: '350 мл',
        price: '220 с',
        image: './img/ice-coffee/ice-capuch.png'
      },
      {
        title: 'Айс-Мокко',
        description: '',
        weight: '350 мл',
        price: '250 с',
        image: './img/ice-coffee/ice-mocha.png'
      },
      {
        title: 'Айс-Аффогато',
        description: '',
        weight: '350 мл',
        price: '310 с',
        image: './img/ice-coffee/ice-mocha.png'
      },
    ],
    milksheik: [
      {
        title: 'Клубничный милкшейк',
        description: 'Клубничное мороженое и молоко',
        weight: '250 мл',
        price: '360 с',
        image: './img/milksheik/milksheik-strawbaerry.png'
      },
      {
        title: 'Молочный милкшейк',
        description: 'Молочное мороженое и молоко',
        weight: '250 мл',
        price: '360 с',
        image: './img/milksheik/milksheik-classic.png'
      },
      {
        title: 'Шоколадный милкшейк',
        description: 'Шоколадное мороженое и молоко',
        weight: '250 мл',
        price: '360 с',
        image: './img/milksheik/milksheik-chocolate.png'
      },
      {
        title: 'Фисташковый милкшейк',
        description: 'Фисташковое мороженое и молоко',
        weight: '250 мл',
        price: '360 с',
        image: './img/milksheik/milksheik-phista.png'
      },
    ],
    juice: [
      {
        title: 'Свежевыжатый Апельсиновый сок',
        description: '',
        weight: '250 мл',
        price: '190 с',
        image: './img/juice/juice-orange.png'
      },
      {
        title: 'Свежевыжатый Яблочный сок',
        description: '',
        weight: '250 мл',
        price: '270 с',
        image: './img/juice/juice-apple.png'
      },
    ],
    lemonades: [
      {
        title: 'Лимонад манго-маракуйя',
        description: '',
        weight: '250/1 л',
        price: '250/520 с',
        image: './img/lemonades/lemonade-mango-marakuya.png'
      },
      {
        title: 'Лимонад мохито',
        description: '',
        weight: '250/1 л',
        price: '250/520 с',
        image: './img/lemonades/lemonade-mohito.png'
      },
      {
        title: 'Лимонад клубничный',
        description: '',
        weight: '250/1 л',
        price: '250/520 с',
        image: './img/lemonades/lemonade-strawberry.png'
      },
      {
        title: 'Лимонад лимон и апельсин',
        description: '',
        weight: '250/1 л',
        price: '250/520 с',
        image: './img/lemonades/lemonade-classic.png'
      },
    ],
    coldDrinks: [
      {
        title: 'Coca-Cola',
        description: '',
        weight: '250/0.5 мл',
        price: '130/175 с',
        image: './img/cold-drinks/coca-cola250ml.png'
      },
      {
        title: 'Fanta',
        description: '',
        weight: '350 мл',
        price: '150 с',
        image: './img/cold-drinks/fanta250ml.png'
      },
      {
        title: 'Sprite',
        description: '',
        weight: '350 мл',
        price: '150 с',
        image: './img/cold-drinks/sprite250ml.png'
      },
      {
        title: 'Содовая Beypazar',
        description: '',
        weight: '0.2 мл',
        price: '140 с',
        image: './img/cold-drinks/beypazari-soda250ml.png'
      },
      {
        title: 'Фруктовая Beypazar',
        description: '',
        weight: '0.2 мл',
        price: '140 с',
        image: './img/cold-drinks/beypazari-fruit250ml.png'
      },
      {
        title: 'Bonaqua',
        description: '',
        weight: '0.5/1 л',
        price: '65/130 с',
        image: './img/cold-drinks/bonawua.png'
      },
      {
        title: 'J7',
        description: '',
        weight: '0.5/1 л',
        price: '150/380 с',
        image: './img/cold-drinks/J7.png'
      },
    ]
  }

function loadContent(category) {
    // Очищаем текущие данные
    const contentContainer = document.getElementById("content-container");
    contentContainer.innerHTML = ''; // Очищаем содержимое контейнера
  
    // Проверяем, есть ли подкатегории для выбранной категории
    if (!categories[category] || categories[category].length === 0) {
      contentContainer.innerHTML = '<p>Нет доступных подкатегорий для этой категории.</p>';
      return;
    }
  
    // Генерация подкатегорий для выбранной категории
    categories[category].forEach(subcategory => {
      const subcategoryButton = document.createElement('button');
      subcategoryButton.classList.add('subcategory-btn');
      subcategoryButton.innerHTML = subcategory;
      subcategoryButton.addEventListener('click', () => loadCards(subcategory)); // Обработчик клика для подкатегорий
  
      contentContainer.appendChild(subcategoryButton);
    });
  }

document.querySelectorAll(".main-category").forEach(button => {
  button.addEventListener("click", function () {
      const category = this.dataset.category || this.dataset.target; // Получаем категорию
      const contentContainer = document.querySelector("#content-container");
      const subcategoriesContainer = document.querySelector(".subcategories-container");

      // Скрыть подкатегории, если они есть
      subcategoriesContainer.classList.add("hidden");
      
      contentContainer.innerHTML = ""; // Очищаем контейнер перед загрузкой новых данных

      // Если кнопка имеет подкатегории
      if (this.dataset.category) {
          // Показываем подкатегории
          subcategoriesContainer.classList.remove("hidden");

          // Очищаем подкатегории
          subcategoriesContainer.innerHTML = "";

          const categoryKey = this.dataset.category;
          if (categories[categoryKey]) {
              categories[categoryKey].forEach(sub => {
                  const subButton = document.createElement("button");
                  subButton.textContent = sub.name;
                  subButton.dataset.target = sub.target;
                  subButton.classList.add("subcategory");
                  subcategoriesContainer.appendChild(subButton);
              });
          }
      } else {
          // Если категория без подкатегорий
          if (cardsData[category] && cardsData[category].length > 0) {
              cardsData[category].forEach(item => {
                  const card = document.createElement("div");
                  card.classList.add("position-card");
                  card.innerHTML = `
                      <div class="card-img">
                          <img src="${item.image}" alt="${item.title}">
                      </div>
                      <div class="card-text">
                          <h5 class="card-text__title">${item.title}</h5>
                          <p class="card-text__descr">${item.description || 'Описание отсутствует.'}</p>
                      </div>
                      <div class="card-price">
                          <div class="card-price__weight">
                              <p class="card-price__weight-descr">${item.weight}</p>
                          </div>
                          <div class="card-price__sum">
                              <a class="card-price__sum-btn">${item.price}</a>
                          </div>
                      </div>
                  `;
                  contentContainer.appendChild(card);
              });
          } else {
              contentContainer.innerHTML = "<p>Нет доступного контента для этой категории.</p>";
          }
      }
  });
});

document.querySelector(".subcategories-container").addEventListener("click", function (event) {
  if (event.target.classList.contains("subcategory")) {
      const target = event.target.dataset.target;
      loadCards(target); // Загружаем карточки для выбранной подкатегории
  }
});

function loadCards(category) {
  const contentContainer = document.querySelector("#content-container");
  contentContainer.innerHTML = ""; // очищаем контент перед загрузкой

  if (cardsData[category]) {
      cardsData[category].forEach(item => {
          const card = document.createElement("div");
          card.classList.add("position-card"); // Здесь используем position-card
          card.innerHTML = `
              <div class="card-img">
                  <img src="${item.image}" alt="${item.title}">
              </div>
              <div class="card-text">
                  <h5 class="card-text__title">${item.title}</h5>
                  <p class="card-text__descr">${item.description || 'Описание отсутствует.'}</p>
              </div>
              <div class="card-price">
                  <div class="card-price__weight">
                      <p class="card-price__weight-descr">${item.weight || ''}</p>
                  </div>
                  <div class="card-price__sum">
                      <a class="card-price__sum-btn">${item.price}</a>
                  </div>
              </div>
          `;

          contentContainer.appendChild(card);
      });
  } else {
      contentContainer.innerHTML = `<p>Нет доступного контента для этой категории.</p>`;
  }
}

// Функция для отображения карточек при отсутствии подкатегорий
function displayCategoryCards(category) {
  const contentContainer = document.querySelector("#content-container");
  contentContainer.innerHTML = "";

  // Если категория существует в cardsData
  if (cardsData[category]) {
      cardsData[category].forEach(item => {
          const card = document.createElement("div");
          card.classList.add("position-card");
          card.innerHTML = `
              <div class="card-img">
                  <img src="${item.image}" alt="${item.title}">
              </div>
              <div class="card-text">
                  <h5 class="card-text__title">${item.title}</h5>
                  <p class="card-text__descr">${item.description || 'Описание отсутствует.'}</p>
              </div>
              <div class="card-text__line"></div>
              <div class="card-price">
                  <div class="card-price__weight">
                      <p class="card-price__weight-descr">${item.weight || ''}</p>
                  </div>
                  <div class="card-price__sum">
                      <a class="card-price__sum-btn">${item.price}</a>
                  </div>
              </div>
          `;
          contentContainer.appendChild(card);
      });
  }
}

  // Обработчик кликов по кнопкам меню
  document.querySelectorAll('.positions-menu button').forEach(button => {
    button.addEventListener('click', (event) => {
      const target = event.target.getAttribute('data-target'); // Получаем ID категории
      if (target) {
        // Скрываем все контейнеры .content
        document.querySelectorAll('.content').forEach(content => {
          content.classList.remove('active');
        });
  
        // Показываем активный контейнер и загружаем контент
        const targetContent = document.getElementById(target);
        if (targetContent) {
          targetContent.classList.add('active');
          loadContent(target); // Загружаем карточки
        } else {
          console.error('Контейнер с таким ID не найден:', target);
        }
      }
    });
  });

  // Обработчик кликов на контейнере подкатегорий
document.querySelector(".subcategories-container").addEventListener("click", function (event) {
  // Проверяем, что клик был именно по кнопке подкатегории
  if (event.target.classList.contains("subcategory")) {
      // Убираем класс "active" у всех кнопок подкатегорий
      document.querySelectorAll(".subcategory").forEach(btn => btn.classList.remove("active"));

      // Добавляем класс "active" только к текущей кнопке
      event.target.classList.add("active");
  }
});

  // Прокрутка к футеру при клике
  jQuery(document).ready(function () {
    jQuery("a.scrooll-footer").click(function () {
      const elementClick = jQuery(this).attr("href");
      const destination = jQuery(elementClick).offset().top;
      jQuery("html, body").animate({ scrollTop: destination }, 1100);
      return false;
    });
  });

  $(document).ready(function () {
    $(".owl-item.positions-menu").click(function () {
      $(".owl-item.positions-menu").removeClass("active"); // Убираем класс у всех
      $(this).addClass("active"); // Добавляем класс только к нажатому элементу
    });
  });


  let cart = []; // Массив для хранения товаров

  // Функция добавления товара в корзину
  function addToCart(item) {
      const existingItem = cart.find(cartItem => cartItem.title === item.title);
  
      if (existingItem) {
          existingItem.quantity++; // Увеличиваем количество товара
      } else {
          cart.push({ ...item, quantity: 1 }); // Добавляем новый товар
      }
  
      updateCartDisplay(); // Обновляем отображение корзины
  }
  
  // Функция обновления отображения корзины
  function updateCartDisplay() {
      const cartContainer = document.getElementById("cart-items-container");
      const cartCount = document.getElementById("cart-count");
  
      cartContainer.innerHTML = ""; // Очищаем корзину перед обновлением
  
      cart.forEach(item => {
          const cartItem = document.createElement("div");
          cartItem.classList.add("cart-item");
          cartItem.innerHTML = `
              <div class="cart-item-owl">
                <div class="cart-item-img">
                  <img src="${item.image}" alt="${item.title}">
                  <div class="cart-item-img__text">
                    <button class="cart-item-count-btn plus" data-title="${item.title}">+</button>
                    <span class="cart-item__count">${item.quantity}</span>
                    <button class="cart-item-count-btn minus" data-title="${item.title}">-</button>
                    <button class="cart-item-remove" data-title="${item.title}">
                      <img src="./img/trash.svg" alt="">
                    </button>
                  </div>
                </div>
                <div class="cart-item-text">
                  <h5 class="cart-item-title">${item.title}</h5>
                </div>
              </div>
          `;
          cartContainer.appendChild(cartItem);
      });
  
      cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0); // Обновляем счётчик товаров
  
      addCartEventListeners(); // Добавляем обработчики событий для кнопок
  }
  
  // Добавление обработчиков событий на кнопки внутри корзины
  function addCartEventListeners() {
      document.querySelectorAll(".cart-item-count-btn.plus").forEach(button => {
          button.addEventListener("click", function () {
              const title = this.dataset.title;
              const item = cart.find(i => i.title === title);
              if (item) {
                  item.quantity++;
                  updateCartDisplay();
              }
          });
      });
  
      document.querySelectorAll(".cart-item-count-btn.minus").forEach(button => {
          button.addEventListener("click", function () {
              const title = this.dataset.title;
              const item = cart.find(i => i.title === title);
              if (item) {
                  if (item.quantity > 1) {
                      item.quantity--;
                  } else {
                      cart = cart.filter(i => i.title !== title); // Удаляем товар, если количество 0
                  }
                  updateCartDisplay();
              }
          });
      });
  
      document.querySelectorAll(".cart-item-remove").forEach(button => {
          button.addEventListener("click", function () {
              const title = this.dataset.title;
              cart = cart.filter(i => i.title !== title);
              updateCartDisplay();
          });
      });
  }
  
  // Очистка корзины
  document.getElementById("clear-cart-btn").addEventListener("click", function () {
      cart = [];
      updateCartDisplay();
  });
  
  // Добавление товара в корзину при клике на цену
  document.addEventListener("click", function (event) {
      if (event.target.classList.contains("card-price__sum-btn")) {
          const card = event.target.closest(".position-card");
          const item = {
              title: card.querySelector(".card-text__title").textContent,
              price: event.target.textContent.replace(" ₽", ""),
              image: card.querySelector(".card-img img").src
          };
          addToCart(item);
      }
  });
  
// Функция открытия и закрытия модального окна
function toggleCart() {
    document.getElementById("my-modal").classList.toggle("open");
}

// Закрытие модального окна по кнопке
document.getElementById("close-my-modal__btn").addEventListener("click", function () {
    document.getElementById("my-modal").classList.remove("open");
});



  
function toggleMenu() {
  document.querySelector(".nav-list").classList.toggle("active");
  document.querySelector(".burger-menu").classList.toggle("active");
}

document.getElementById("cart-toggle").addEventListener("click", function() {
  document.getElementById("my-modal").classList.add("open")
});

document.getElementById("close-my-modal__btn").addEventListener("click", function() {
  document.getElementById("my-modal").classList.remove("open")
});




//        КОНТЕНТ КОРЗИНЫ
let totalItemsInCart = 0; // Переменная для отслеживания общего количества товаров

function updateCartCount() {
  const cartCountElement = document.getElementById('cart-count');
  cartCountElement.textContent = totalItemsInCart; // Обновляем счетчик
}

function loadContent(category) {
  const contentDiv = document.getElementById(category);
  
  if (!contentDiv) {
    console.error(`Контейнер с ID ${category} не найден.`);
    return;
  }

  contentDiv.innerHTML = ''; // Очищаем содержимое перед добавлением новых карточек

  if (!cardsData[category] || cardsData[category].length === 0) {
    contentDiv.innerHTML = '<p>Нет доступного контента для этой категории.</p>';
    return;
  }

  cardsData[category].forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('position-card');

    cardElement.innerHTML = `
      <div class="card-img">
        <img src="${card.image}" alt="${card.title}">
      </div>
      <div class="card-text">
        <h5 class="card-text__title">${card.title}</h5>
        <p class="card-text__descr">${card.description || 'Описание отсутствует.'}</p>
      </div>
      <div class="card-text__line"></div>
      <div class="card-price">
        <div class="card-price__weight">
          <p class="card-price__weight-descr">${card.weight || ''}</p>
        </div>
        <div class="card-price__sum">
          <a class="card-price__sum-btn">${card.price}</a>
        </div>
      </div>
    `;

    contentDiv.appendChild(cardElement);

    const priceButton = cardElement.querySelector('.card-price__sum-btn');

    if (priceButton) {
      priceButton.addEventListener('click', () => {
        console.log("Цена кнопки нажата!");
        const productData = {
          title: card.title,
          description: card.description || 'Описание отсутствует.',
          weight: card.weight || '',
          price: card.price,
          image: card.image
        };

        const cartContainer = document.querySelector('.cart-items-container');

        if (cartContainer) {
          const cartItem = document.createElement('div');
          cartItem.classList.add('cart-item');

          cartItem.innerHTML = `
            <div class="cart-item-owl">
              <div class="cart-item-img">
                <img src="${productData.image}" alt="${productData.title}">
                <div class="cart-item-img__text">
                  <button class="cart-item-count-btn plus">+</button>
                  <span class="cart-item__count">1</span>
                  <button class="cart-item-count-btn minus">-</button>
                  <button class="cart-item-remove">
                    <img src="./img/trash.svg" alt="">
                  </button>
                </div>
              </div>
              <div class="cart-item-text">
                <h5 class="cart-item-title">${productData.title}</h5>
                <p class="cart-item-description">${productData.description}</p>
              </div>
            </div>
          `;

          cartContainer.appendChild(cartItem);

          cartItem.querySelector('.plus').addEventListener('click', () => {
            updateQuantity(cartItem, 1);
          });
          cartItem.querySelector('.minus').addEventListener('click', () => {
            updateQuantity(cartItem, -1);
          });

          // Обработчик для кнопки очистки корзины
          const clearCartBtn = document.getElementById('clear-cart-btn');
          if (clearCartBtn) {
            clearCartBtn.addEventListener('click', function() {
              // Очищаем корзину, удаляем все элементы внутри контейнера
              const cartItemsContainer = document.querySelector('.cart-items-container');
              if (cartItemsContainer) {
                cartItemsContainer.innerHTML = ''; // Очищаем корзину
                totalItemsInCart = 0; // Сбрасываем количество товаров в корзине
                updateCartCount(); // Обновляем счетчик
              }
              console.log('Корзина очищена!');
            });
}

          const removeButton = cartItem.querySelector('.cart-item-remove');
          removeButton.addEventListener('click', () => {
            cartContainer.removeChild(cartItem);
            totalItemsInCart--; // Уменьшаем количество товаров в корзине
            updateCartCount(); // Обновляем счетчик
          });

          totalItemsInCart++; // Увеличиваем количество товаров в корзине
          updateCartCount(); // Обновляем счетчик
        }
      });
    }
  });
}

function updateQuantity(cartItem, change) {
  const quantityElement = cartItem.querySelector('.cart-item__count');
  let quantity = parseInt(quantityElement.textContent);

  if (quantity + change > 0) {
    quantityElement.textContent = quantity + change;
    totalItemsInCart += change; // Обновляем общее количество товаров в корзине
    updateCartCount(); // Обновляем счетчик
  } else {
    cartItem.remove(); // Если количество товара меньше 1, удаляем его из корзины
    totalItemsInCart--; // Уменьшаем общее количество
    updateCartCount(); // Обновляем счетчик
  }
}