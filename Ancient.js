function animateCloud(cloud, delay = 0) {
    let x = -200;
    function move() {
      x += 1;
      if (x > window.innerWidth + 100) {
        x = -200;
      }
      cloud.style.left = x + 'px';
      requestAnimationFrame(move);
    }
    setTimeout(move, delay);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const cloud1 = document.querySelector('.cloud1');
    const cloud2 = document.querySelector('.cloud2');
    const cloud3 = document.querySelector('.cloud3');
    const themeToggle = document.querySelector('.theme-toggle');
  
    animateCloud(cloud1);
    animateCloud(cloud2, 5000);
    animateCloud(cloud3, 10000);
  
    // Theme toggle
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('night');
      document.body.classList.toggle('day');
    });
  
    // Fade in/out effect
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.classList.remove('hidden');
        } else {
          entry.target.classList.add('hidden');
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('.fade-section').forEach(section => {
      observer.observe(section);
    });
  
    // Set initial theme
    document.body.classList.add('day');
  });



 const translations = {
  ko: {
    section1: {
      title: "반남고분군 소개",
      content: [
        "반남고분군은 고대 한반도 남부 지역에서 독자적인 문화를 형성하였던 마한(馬韓) 세력의 지배층이 남긴 대표적인 고분 유적으로,",
        "기원후 4세기부터 6세기경까지 축조된 것으로 알려져 있습니다. 마한은 삼한 중 하나로, 나주를 중심으로 한 지역에 자리잡고 있었으며, 그 중에서도 반남 지역은 정치적·문화적으로 매우 중심적인 역할을 했습니다."
      ]
    },
    section2: {
      title: "위치 및 규모",
      content: [
        "반남고분군은 전라남도 나주시 반남면 일대에 위치하며, 총 176기의 고분이 분포하고 있습니다.",
        "최대 봉토 직경은 약 50m에 달하며, 마한의 권력 중심지를 보여주는 중요한 유적지입니다."
      ]
    },
    section3: {
      title: "고분이 들려주는 마한 사람들의 삶과 문화",
      content: [
        "반남고분군은 단순한 무덤이 아닙니다. 이곳은 1,500년 전 마한 사람들의 삶과 정신, 문화의 정수가 켜켜이 쌓인 시간의 캡슐입니다.",
        "고분 속에서 출토된 유물 하나하나에는 생존의 지혜, 공동체의 질서, 그리고 삶과 죽음에 대한 깊은 성찰이 담겨 있습니다.",
        "마한 사람들은 농경을 중심으로 한 정착 생활을 하며, 강과 평야를 따라 마을을 이루고 살았습니다.",
        "풍요로운 곡식과 맑은 물, 비옥한 토양은 그들의 생계 기반이 되었고, 이를 바탕으로 정치적 지배체계와 복합적인 사회구조도 발달해갔습니다."
      ]
    },
    section4: {
      title: "대표 유물 스토리　➡ CLICK!",
      content: [
        "반남고분군에서 출토된 유물 가운데 가장 주목받는 것은 단연 금동관이다.",
        "이 금동관은 1917년 전라남도 나주 반남면 신촌리 일대에서 처음으로 출토되었으며, 그 정교한 제작기술과 상징성 덕분에 현재까지도 마한 사회의 권위와 장례문화를 대표하는 유물로 평가되고 있다"
      ]
    },
    section5: {
      title: "한반도 남서부, 문명이 흐르던 강 – 영산강 유역의 고대사",
      content: [
        "영산강 유역은 고대 한반도 남서부에서 가장 중요한 문화와 문명의 중심지 중 하나였습니다. ",
        "이 지역은 오늘날의 전라남도 일대에 해당하며, 풍부한 수자원과 비옥한 평야, 해양과 연결된 지리적 이점 덕분에 수천 년 전부터 사람들이 정착하고 삶을 이어온 장소입니다.",
        "이 지역에서 출토된 대형 철제 무기, 일본 야마토 지역과 유사한 토기, 금속 장신구 등은 영산강 유역이 국제적인 교류의 허브였음을 시사합니다. ",
        "이는 단순한 지역 세력에 그치지 않고, 백제의 성립 과정에도 큰 영향을 미쳤다는 연구 결과로도 이어집니다."
      ]
    },
    section6: {
      title: "현장에서 박물관으로, 과거와 현재를 잇는 문화의 다리 – 국립나주박물관과 반남고분군의 연계",
      content: [
        "반남고분군은 마한 문화의 정수이자, 영산강 유역 고대사 연구의 핵심 유적으로 평가받고 있습니다.",
        "이러한 반남고분군의 가치를 보다 풍부하게 체험할 수 있도록 안내하는 기관이 바로 국립나주박물관입니다.",
        "박물관은 고분군과 밀접한 위치에 있어, 현장 유적과 실내 전시를 유기적으로 연결하는 ‘문화 복합 공간’의 역할을 하고 있습니다."
      ]
    },
        section7: {
      title: "마한의 숨결을 느끼는 최고의 시간! 반남고분군 탐방 꿀팁　➡ CLICK!",
      content: [
        "반남고분군은 광활한 들판에 펼쳐진 고분들이 마치 과거로 시간 여행을 떠난 듯한 기분을 선사하는 역사적 명소입니다.",
        "탐방을 더욱 알차고 의미 있게 즐기기 위한 몇 가지 팁을 알려드릴게요!"
      ]
    },
        section8: {
      title: "📸반남고분군, 렌즈에 담는 천년의 시간📷",
      content: [
        "반남고분군은 그 자체로 거대한 자연과 역사가 어우러진 야외 전시장이며, 사계절 내내 사진 촬영을 즐기기에 최적의 장소입니다.",
        "특히 푸른 하늘과 넓게 펼쳐진 초록의 봉분들이 조화를 이루는 봄과 가을, 노을이 봉분 너머로 퍼지는 석양 시간대는 SNS에 올릴 만한 감성적인 사진을 찍을 수 있는 황금 포인트입니다.",
        "🎞추천 사진 명소🎞",
        "고분 전경을 한눈에 담을 수 있는 언덕 위",
        "– 마치 시간이 멈춘 듯한 고요한 풍경을 배경으로 인생샷을 남길 수 있습니다.",
        "고분 사이 산책길",
        "– 연인 또는 가족과 함께 걸으며 자연스럽고 따뜻한 분위기의 사진을 찍기에 좋습니다.",
        "국립나주박물관과 연계한 야외 조각과 고분의 조화",
        "– 예술적 감성이 묻어나는 구도 사진을 원하는 사람에게 추천합니다.",
        "드론 촬영 명소",
        "– 위에서 내려다보면 고분의 배치와 형태가 하나의 거대한 작품처럼 보입니다."
      ]
    },
        section9: {
      title: "🗺️반남고분군 연계 관광 코스 지도🗺️　➡ CLICK!",
      content: [
        "역사와 자연이 어우러진 나주 여행, 반남고분군에서 시작하세요!",
        "전라남도 나주에는 마한의 고대문화를 간직한 반남고분군이 자리하고 있습니다.",
        "이곳은 40기 이상의 옹관고분이 밀집되어 있어 삼국시대 이전의 문화를 생생하게 느낄 수 있는 귀중한 유산입니다.",
        "고분군을 둘러본 뒤에는 국립나주박물관에서 출토 유물을 감상하며 마한 사람들의 삶과 문화를 더욱 깊이 있게 이해할 수 있습니다.",
        "과거와 현재가 만나는 연계 관광 코스로 여행의 즐거움을 더하세요!",
        "반남고분군과 함께 즐길 수 있는 나주의 연계 관광지는 다양합니다.",
        "나주읍성과 금성관에서는 조선시대 건축미를 감상할 수 있고, 영산포 홍어거리에서는 지역의 별미를 맛볼 수 있습니다.",
        "또한 영산강 유람선과 빛가람호수공원은 자연 속에서 힐링하기에 안성맞춤이죠. 이번 여행, 지도 하나로 역사와 맛, 자연을 모두 누려보세요!"
      ]
    }
  },
  en: {
    section1: {
      title: "Introduction to Bannam Tumuli",
      content: [
        "The Bannam Tumuli are representative tombs left by the ruling class of the Mahan, who formed an independent culture in the southern Korean Peninsula.",
        "They are known to have been built between the 4th and 6th centuries CE. Mahan, one of the Samhan, was based around Naju, and Bannam played a very central political and cultural role."
      ]
    },
    section2: {
      title: "Location and Scale",
      content: [
        "The Bannam Tumuli are located in the Bannam-myeon area of Naju, Jeollanam-do, with 176 tombs in total.",
        "The largest tomb has a diameter of about 50 meters, showing the core of Mahan's power."
      ]
    },
    section3: {
      title: "Life and Culture of the Mahan People",
      content: [
        "The Bannam Tumuli are not just simple tombs. They are time capsules layered with the lives, spirit, and culture of the Mahan people 1,500 years ago.",
        "Each artifact unearthed from the tombs reflects wisdom for survival, community order, and deep contemplation of life and death.",
        "The Mahan people lived a settled life centered on agriculture, forming villages along rivers and plains.",
        "Abundant crops, clean water, and fertile soil formed their livelihood base, which supported the development of a political ruling system and a complex social structure."
      ]
    },
    section4: {
      title: "The Story of Representative Antiquities　➡ CLICK!",
      content: [
        "Among the artifacts unearthed from the Bannam Tombs, the most iconic and celebrated item is the Gilt-Bronze Crown.",
        "First discovered in 1917 in Sinchon-ri, Bannam-myeon, Naju City, South Jeolla Province, this exquisite artifact has since come to symbolize the authority and funerary practices of the ancient Mahan society."
      ]
    },
        section5: {
      title: "A River of Civilization – The Ancient History of the Yeongsan River Basin",
      content: [
        "The Yeongsan River Basin, located in the southwestern part of the Korean Peninsula, was one of the most vital centers of culture and civilization in ancient Korea.",
        "Rich in water resources, fertile plains, and strategic access to the sea, this region has been continuously inhabited for thousands of years.",
        "The discovery of large iron weapons, pottery resembling that of Japan’s Yamato region, and ornate metal ornaments reveals that this basin served as a hub of international exchange.",
        " Some scholars argue that the cultural and political strength of this area played a significant role in the formation of the Baekje Kingdom."
      ]
    },
        section6: {
      title: "A Cultural Bridge Linking Past and Present The Connection Between the Bannam Tombs and the National Naju Museum",
      content: [
        "The Bannam Tombs are a core archaeological site that showcases the essence of Mahan culture and the ancient history of the Yeongsan River Basin.",
        " To fully appreciate and explore the significance of these tombs, visitors are encouraged to also experience the National Naju Museum,",
        "which serves as a cultural hub connecting the outdoor heritage site with curated indoor exhibitions."
      ]
    },
        section7: {
      title: "Feel the Breath of Mahan! Top Tips for Visiting the Bannam Tombs 　➡ CLICK!",
      content: [
        "The Bannam Tombs, spread across the open Naju plain, offer a breathtaking glimpse into Korea’s ancient past.",
        "Here are some helpful tips to make your visit more enriching and memorable!"
      ]
    },
            section8: {
      title: "📸Capture a Thousand Years – The SNS-Worthy Photo Spots of the Bannam Tombs📷",
      content: [
        "The Bannam Ancient Tombs offer a spectacular blend of open skies, grassy mounds, and serene atmosphere—making them a perfect outdoor backdrop for stunning photography all year round.",
        "The spring and autumn seasons, when the green mounds contrast beautifully with clear skies, and the golden hour sunsets behind the tombs, are especially ideal for capturing dreamy, aesthetic moments.",
        "🎞Top Photo Spots🎞",
        "Hilltop overlooking the entire tomb site",
        "→ Great for panoramic shots that convey the silence and grandeur of this historic location.",
        "Walking paths between the tombs",
        "→ Ideal for warm, candid shots of couples or families enjoying the serene surroundings.",
        "Combination of tombs and modern sculptures near the National Naju Museum",
        "→ Perfect for artsy shots that blend history and contemporary culture.",
        "Drone shooting zone",
        "→ From above, the layout of the tombs becomes a massive geometric work of art."
      ]
    },
            section9: {
      title: "🗺️Map of the Tourist Course in connection with the Bannam High-Bun County🗺️　➡ CLICK!",
      content: [
        "Start your journey in Naju with the ancient legacy of Bannam Tombs!",
        "Located in Naju, Jeollanam-do, the Bannam Ancient Tombs are a cluster of over 40 jar coffins that vividly",
        "reflect the culture of the Mahan Confederacy from the early Three Kingdoms period.",
        "After exploring the tombs, head over to the National Naju Museum to discover artifacts such as gilt-bronze crowns and ring-pommel swords, and dive deeper into the life and traditions of ancient Mahan people.",
        "Experience the harmony of history and nature through connected travel courses!",
        "Bannam Tombs are the gateway to a variety of historical and cultural sites.",
        "Naju Fortress and Geumseonggwan Pavilion offer a glimpse into the architecture of the Joseon Dynasty, while Yeongsanpo Hongeo Street is perfect for sampling local delicacies.",
        "Take a relaxing Yeongsan River cruise or enjoy modern comforts at Bitgaram Lake Park. With just one map, you can explore history, cuisine, and nature all in one trip!"
      ]
    }
  },
  ja: {
    section1: {
      title: "潘南古墳群の紹介",
      content: [
        "潘南古墳群は、古代朝鮮半島南部地域で独自の文化を形成した馬韓勢力の支配層が残した代表的な古墳遺跡です。",
        "紀元後4世紀から6世紀頃に築造されたとされます。馬韓は三韓の一つで、羅州を中心とした地域に位置し、特に潘南地域は政治的・文化的に非常に中心的な役割を果たしました。"
      ]
    },
    section2: {
      title: "位置と規模",
      content: [
        "潘南古墳群は全羅南道羅州市潘南面一帯に位置し、合計176基の古墳が分布しています。",
        "最大の封土の直径は約50メートルに達し、馬韓の権力中心地を示す重要な遺跡です。"
      ]
    },
    section3: {
      title: "古墳が語る馬韓人の暮らしと文化",
      content: [
        "潘南古墳群は単なる墓ではありません。ここは、1500年前の馬韓人の暮らし、精神、文化の精髄が積み重なったタイムカプセルです。",
        "古墳から出土した遺物一つ一つには、生存の知恵、共同体の秩序、そして生と死への深い洞察が込められています。",
        "馬韓人は農耕を中心とした定住生活を送り、川や平野に沿って村を形成して暮らしていました。",
        "豊かな穀物、清らかな水、肥沃な土壌は彼らの生計基盤となり、それを基に政治的支配体制と複合的な社会構造も発展していきました。"
      ]
    },
        section4: {
      title: "代表的な遺物ストーリー　➡ CLICK!",
      content: [
        "潘南古墳群から出土した遺物の中で、最も注目されるのは間違いなく金銅冠（こんどうかん）です。",
        "この金銅冠は、1917年に全羅南道羅州（ナジュ）市潘南面新村里で初めて発見され、その精巧な技術と象徴性から、現在でも馬韓社会における権威と葬送文化を代表する遺物とされています。"
      ]
    },
        section5: {
      title: "文明が流れた川、栄山江流域の古代史",
      content: [
        "栄山江（ヨンサンガン）流域は、古代朝鮮半島南西部において、最も重要な文化と文明の中心地の一つでした。",
        "現在の全羅南道にあたるこの地域は、豊富な水資源、肥沃な平野、そして海へのアクセスという地理的利点を生かし、数千年前から人々が定住し生活してきました。",
        "ここで発見された大型鉄器、日本のヤマト地域と類似した土器、金属装飾品などは、栄山江流域が国際的な交流の拠点であったことを示しています。",
        "そしてこの地域は単なる地方勢力にとどまらず、百済の成立にも深く関わったと考えられています。"
      ]
    },
        section6: {
      title: "過去と現在をつなぐ文化の架け橋：潘南古墳群と国立羅州博物館の連携",
      content: [
        "潘南古墳群は、馬韓文化の粋を集めた古代遺跡として、栄山江流域における考古学研究の中心となっています。",
        "そして、その価値をより深く体験できる場が、国立羅州博物館です。",
        "博物館は古墳群からも近く、現地遺跡と館内展示を結ぶ文化複合施設として機能しています。"
      ]
    },
        section7: {
      title: "馬韓の息吹を感じる最高の時間！潘南古墳群の訪問ポイント　➡ CLICK!",
      content: [
        "潘南古墳群は、古代の風景がそのまま残されたような壮大な古墳群です。",
        "訪問をより楽しく、充実したものにするためのポイントをご紹介します！"
      ]
    },
        section8: {
      title: "📸写真で残す千年の風景、潘南古墳群のSNSスポット📷",
      content: [
        "潘南古墳群は、大自然と古代の歴史が融合する壮大な屋外ミュージアムのような場所です。",
        "四季折々の風景が美しく、特に春や秋の緑豊かな風景と青空、そして夕暮れ時の光が織りなす瞬間は、SNSにぴったりの写真が撮れる絶好のチャンスです。",
        "🎞おすすめ撮影スポット🎞",
        "古墳を一望できる小高い丘の上",
        "→ 時が止まったような静寂な背景とともに、最高の一枚が残せます。",
        "古墳の間の遊歩道",
        "→ 恋人や家族と一緒に歩きながら、ナチュラルな雰囲気の写真を撮るのにぴったりです。",
        "国立羅州博物館とのコラボ風景",
        "→ 屋外彫刻と古墳が並ぶ構図は芸術的な写真におすすめです。",
        "ドローン撮影スポット",
        "→ 上空から見ると古墳の配置が一つの巨大な作品のように見えます。"
      ]
    },
            section9: {
      title: "🗺️潘南古墳群連携観光コース地図🗺️　➡ CLICK!",
      content: [
        "古代の遺産が息づく旅、潘南古墳群から始めましょう！",
        "全羅南道羅州市にある潘南古墳群は、三国時代以前の馬韓文化を今に伝える貴重な遺跡で、40基以上の甕棺古墳が集中しています。",
        "古墳を見学した後は、国立羅州博物館で金銅冠や環頭大刀などの出土品を鑑賞し、古代の生活や文化をより深く理解することができます。",
        "歴史と自然が織りなす連携観光コースで、旅の楽しさ倍増！",
        "潘南古墳群の周辺には見どころが満載です。",
        "羅州邑城や錦城館では朝鮮時代の建築美に触れることができ、栄山浦ホンオ通りでは地域の名物ホンオ料理を堪能できます。",
        "また、栄山江の遊覧船や光がらむ湖水公園では、自然の中で癒しのひとときを過ごせます。",
        "1枚の地図で、歴史・グルメ・自然をすべて味わえる旅をお楽しみください！"
      ]
    }
  }
};

function switchLanguage(lang) {
  // Section 1
  document.querySelector(".sections .fade-section:nth-child(1) h2").innerText = translations[lang].section1.title;
  const sec1Paras = document.querySelectorAll(".sections .fade-section:nth-child(1) p");
  translations[lang].section1.content.forEach((text, i) => {
    if (sec1Paras[i]) sec1Paras[i].innerText = text;
  });

  // Section 2
  document.querySelector(".sections .fade-section:nth-child(2) h2").innerText = translations[lang].section2.title;
  const sec2Paras = document.querySelectorAll(".sections .fade-section:nth-child(2) p");
  translations[lang].section2.content.forEach((text, i) => {
    if (sec2Paras[i]) sec2Paras[i].innerText = text;
  });

  // Section 3
  document.querySelector(".sections .fade-section:nth-child(3) h2").innerText = translations[lang].section3.title;
  const sec3Paras = document.querySelectorAll(".sections .fade-section:nth-child(3) p");
  translations[lang].section3.content.forEach((text, i) => {
    if (sec3Paras[i]) sec3Paras[i].innerText = text;
  });

  // Section 4
  document.querySelector(".sections .fade-section:nth-child(4) h2").innerText = translations[lang].section4.title;
  const sec4Paras = document.querySelectorAll(".sections .fade-section:nth-child(4) p");
  translations[lang].section4.content.forEach((text, i) => {
    if (sec4Paras[i]) sec4Paras[i].innerText = text;
  });

  // Section 5
  document.querySelector(".sections .fade-section:nth-child(5) h2").innerText = translations[lang].section5.title;
  const sec5Paras = document.querySelectorAll(".sections .fade-section:nth-child(5) p");
  translations[lang].section5.content.forEach((text, i) => {
    if (sec5Paras[i]) sec5Paras[i].innerText = text;
  });

    // Section 6
  document.querySelector(".sections .fade-section:nth-child(6) h2").innerText = translations[lang].section6.title;
  const sec6Paras = document.querySelectorAll(".sections .fade-section:nth-child(6) p");
  translations[lang].section6.content.forEach((text, i) => {
    if (sec6Paras[i]) sec6Paras[i].innerText = text;
  });

    // Section 7
  document.querySelector(".sections .fade-section:nth-child(7) h2").innerText = translations[lang].section7.title;
  const sec7Paras = document.querySelectorAll(".sections .fade-section:nth-child(7) p");
  translations[lang].section7.content.forEach((text, i) => {
    if (sec7Paras[i]) sec7Paras[i].innerText = text;
  });

  //   // Section 8
  // document.querySelector(".sections .fade-section:nth-child(8) h2").innerText = translations[lang].section8.title;
  // const sec8Paras = document.querySelectorAll(".sections .fade-section:nth-child(8) p");
  // translations[lang].section8.content.forEach((text, i) => {
  //   if (sec8Paras[i]) sec8Paras[i].innerText = text;
  // });
  //   const section = document.querySelector(".sections .fade-section:nth-child(8)");
  // if (!section) return;

  // section.querySelector("h2").innerText = translations[lang].section8.title;

  // const contentElements = section.querySelectorAll("p, h3, h4");
  // translations[lang].section8.content.forEach((text, i) => {
  //   if (contentElements[i]) contentElements[i].innerText = text;
  // });

  //     // Section 9
  // document.querySelector(".sections .fade-section:nth-child(9) h2").innerText = translations[lang].section9.title;
  // const sec9Paras = document.querySelectorAll(".sections .fade-section:nth-child(9) p");
  // translations[lang].section9.content.forEach((text, i) => {
  //   if (sec9Paras[i]) sec9Paras[i].innerText = text;
  // });
  //   const section = document.querySelector(".sections .fade-section:nth-child(9)");
  // if (!section) return;

  // section.querySelector("h2").innerText = translations[lang].section9.title;

  // const contentElements = section.querySelectorAll("p, h3, h4");
  // translations[lang].section9.content.forEach((text, i) => {
  //   if (contentElements[i]) contentElements[i].innerText = text;
  // });

  // Section 8
(function applySection8() {
  const section8 = document.querySelector(".sections .fade-section:nth-child(8)");
  if (!section8) return;

  // 제목 설정
  section8.querySelector("h2").innerText = translations[lang].section8.title;

  // p, h3, h4 요소에 내용 적용
  const elems8 = section8.querySelectorAll("p, h3, h4");
  translations[lang].section8.content.forEach((text, i) => {
    if (elems8[i]) elems8[i].innerText = text;
  });
})();

// Section 9
(function applySection9() {
  const section9 = document.querySelector(".sections .fade-section:nth-child(9)");
  if (!section9) return;

  // 제목 설정
  section9.querySelector("h2").innerText = translations[lang].section9.title;

  // p, h3, h4 요소에 내용 적용
  const elems9 = section9.querySelectorAll("p, h3, h4");
  translations[lang].section9.content.forEach((text, i) => {
    if (elems9[i]) elems9[i].innerText = text;
  });
})();

}

document.querySelector('.go-relic').addEventListener('click', function() {
    window.location.href = 'Relic.html';
});

document.querySelector('.go-promotion').addEventListener('click', function() {
    window.location.href = 'promotion.html';
});

document.querySelector('.go-Tourism').addEventListener('click', function() {
    window.location.href = 'Tourism.html';
});