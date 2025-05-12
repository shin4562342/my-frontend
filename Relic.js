const translations = {
    ko: {
        section1: {
        title: "대표 유물 카테고리",
        content: [
            {
                title: "철제 무기 – 권력과 전사의 상징",
                description: "철제 무기는 마한 사회에서 권력과 전사의 상징으로 사용되었으며, 군사적 위세를 드러내는 중요한 유물입니다. 창, 검, 철촉 등 다양한 형태로 출토되어 당시의 무기 제작 기술과 전쟁 문화를 보여줍니다."
            },
            {
                title: "장신구 – 아름다움 속 권위의 상징",
                description: "금, 은, 옥으로 만든 장신구는 단순한 꾸밈을 넘어 신분과 권위를 상징하는 중요한 물건이었습니다. 특히 귀걸이, 목걸이 등은 고대 마한인의 미적 감각과 사회적 지위를 잘 보여줍니다."
            },
            {
                title: "토기 – 생활과 문화의 그릇",
                description: "토기는 일상에서 사용되던 생활용품으로 음식물 저장과 조리에 쓰였습니다. 또한 의식용으로 사용되기도 하며, 마한인의 생활과 문화, 신앙을 엿볼 수 있는 중요한 유물입니다."
            }
        ]
      }
    },
    en: {
        section1: {
        title: "Representative Relic Categories",
        content: [
            {
                title: "Iron Weapons – Symbols of Power and Warriors",
                description: "Iron weapons were used as symbols of power and warriors in Mahan society, showcasing military might. Various forms such as spears, swords, and arrowheads reveal the weapon-making skills and war culture of the time."
            },
            {
                title: "Ornaments – Symbols of Beauty and Authority",
                description: "Ornaments made of gold, silver, and jade were not just decorations but important items symbolizing status and authority. Earrings, necklaces, and other items reflect the aesthetic sense and social status of ancient Mahan people."
            },
            {
                title: "Pottery – Vessels of Life and Culture",
                description: "Pottery was used daily for storing and cooking food. It was also used in rituals, offering insights into the daily life, culture, and beliefs of the Mahan people."
            }
        ]
      }
    },
    ja: {
        section1: {
        title: "代表的な遺物カテゴリー",
        content: [
            {
                title: "鉄製武器 – 権力と戦士の象徴",
                description: "鉄製武器は馬韓社会で権力と戦士の象徴として使われ、軍事的威勢を示す重要な遺物です。槍、剣、鉄製の矢じりなど様々な形で出土し、当時の武器製作技術と戦争文化を示しています。"
            },
            {
                title: "装身具 – 美しさと権威の象徴",
                description: "金、銀、玉で作られた装身具は単なる飾りを超えて、身分と権威を象徴する重要な品物でした。特にイヤリングやネックレスなどは、古代馬韓人の美的感覚と社会的地位をよく表しています。"
            },
            {
                title: "土器 – 生活と文化の器",
                description: "土器は日常生活で使われた生活用品で、食べ物の保存や調理に使われました。また、儀式用としても使用され、馬韓人の生活や文化、信仰を垣間見ることができる重要な遺物です。"
            }
        ]
    }
  }
};
function switchLanguage(lang) {
    // Section 1 제목
    document.querySelector("main h1").innerText = translations[lang].section1.title;

    // Section 1 카드들 (내용)
    const cards = document.querySelectorAll(".relic-container .card");
    translations[lang].section1.content.forEach((item, index) => {
        const card = cards[index];
        if (card) {
            card.querySelector("h2").innerText = item.title;
            card.querySelector("p").innerText = item.description;
        }
    });
}

function changeLangAndReload(lang) {
    localStorage.setItem('selectedLang', lang);
    window.location.search = `?lang=${lang}`;
}
