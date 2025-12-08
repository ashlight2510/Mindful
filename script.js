// 명언 데이터 (150개 이상)
const quotes = [
    {
        text: "삶이 있는 한 희망은 있다.",
        author: "키케로",
        category: "희망",
        comment: "아무리 어두워도 다시 빛이 드는 순간은 반드시 온다는 뜻입니다."
    },
    {
        text: "행동은 모든 성공의 기초이다.",
        author: "파블로 피카소",
        category: "성공/도전",
        comment: "생각만으로 변하는 것은 없고, 결국 움직일 때 현실이 바뀝니다."
    },
    {
        text: "성공은 준비된 자에게 온다.",
        author: "세네카",
        category: "성공/도전",
        comment: "기회는 갑작스럽게 오지만, 잡는 것은 준비된 사람입니다."
    },
    {
        text: "인생은 곱셈이다. 아무리 많은 기회가 와도 내가 '0'이면 아무것도 아니다.",
        author: "오구라 히로시",
        category: "삶/철학",
        comment: "내가 스스로를 성장시키지 않으면 모든 것이 무의미해질 수 있다는 뜻입니다."
    },
    {
        text: "성공이란 최선을 다한 결과이며, 남과 비교하지 않는 것이다.",
        author: "존 우든",
        category: "성공/도전",
        comment: "진짜 성취는 다른 사람과의 경쟁이 아니라 나와의 싸움에서 나옵니다."
    },
    {
        text: "고통 없이는 얻는 것도 없다.",
        author: "벤자민 프랭클린",
        category: "도전",
        comment: "힘듦은 성장의 가격일 뿐, 그 뒤엔 반드시 변화가 따라옵니다."
    },
    {
        text: "세상에서 가장 강한 사람은 스스로를 이긴 사람이다.",
        author: "존 밀턴",
        category: "삶/철학",
        comment: "진짜 승리는 다른 누군가가 아니라 나 자신을 통제할 수 있을 때 생깁니다."
    },
    {
        text: "우리는 우리가 반복해서 하는 것이다. 탁월함은 행동이 아니라 습관이다.",
        author: "아리스토텔레스",
        category: "성공/도전",
        comment: "매일 쌓는 작은 루틴이 결국 큰 성취를 만든다는 이야기입니다."
    },
    {
        text: "작은 일에 충실하라. 그 안에 성공의 씨앗이 있다.",
        author: "마더 테레사",
        category: "삶/철학",
        comment: "큰 목표도 결국 작은 행동의 반복에서 완성됩니다."
    },
    {
        text: "실패는 성공의 한 부분이다.",
        author: "헨리 포드",
        category: "성공/도전",
        comment: "실패는 끝이 아니라 방향을 다시 잡는 과정일 뿐입니다."
    },
    {
        text: "성공은 매일 조금씩 나아지는 것이다.",
        author: "로빈 샤르마",
        category: "성공/도전",
        comment: "단 하루의 변화보다, 누적되는 작은 발전이 진짜 힘입니다."
    },
    {
        text: "위기는 기회의 또 다른 얼굴이다.",
        author: "존 F. 케네디",
        category: "삶/철학",
        comment: "가장 힘든 순간에 새로운 문이 열리기도 합니다."
    },
    {
        text: "마음이 바뀌면 행동이 바뀌고, 행동이 바뀌면 인생이 바뀐다.",
        author: "윌리엄 제임스",
        category: "삶/철학",
        comment: "내가 생각을 바꿀 때 현실의 방향도 함께 변합니다."
    },
    {
        text: "행복은 방향이지 장소가 아니다.",
        author: "시드니 J. 해리스",
        category: "삶/철학",
        comment: "목표가 아니라 과정 속에서 행복이 만들어진다는 뜻입니다."
    },
    {
        text: "가장 어두운 밤이 가장 밝은 별을 만든다.",
        author: "존 그린",
        category: "위로",
        comment: "고통은 당신을 더 단단하고 빛나게 만드는 재료입니다."
    },
    {
        text: "인생은 10%의 사건과 90%의 반응으로 이루어진다.",
        author: "찰스 스윈돌",
        category: "삶/철학",
        comment: "문제보다 '내가 어떻게 해석하느냐'가 결국 인생을 만듭니다."
    },
    {
        text: "포기하지 않는 한 실패는 존재하지 않는다.",
        author: "김연아",
        category: "도전",
        comment: "멈추지 않는 사람은 결국 도착한다는 강한 메시지입니다."
    },
    {
        text: "비 온 뒤에 땅이 굳는다.",
        author: "한국 속담",
        category: "삶/철학",
        comment: "위기는 지나가고 난 뒤 더 단단한 기반이 되어줍니다."
    },
    {
        text: "성공은 운이 아니라 꾸준함이다.",
        author: "게리 플레이어",
        category: "성공/도전",
        comment: "운처럼 보이는 결과도 결국 꾸준함 위에서 만들어집니다."
    },
    {
        text: "미래를 예측하는 가장 좋은 방법은 미래를 만드는 것이다.",
        author: "피터 드러커",
        category: "성공/도전",
        comment: "기다리지 말고, 직접 원하는 방향으로 움직이라는 의미입니다."
    },
    {
        text: "가장 큰 위험은 아무 위험도 감수하지 않는 것이다.",
        author: "마크 주커버그",
        category: "성공/도전",
        comment: "정체된 삶은 결국 더 큰 손실로 이어집니다."
    },
    {
        text: "작은 친절은 큰 사랑을 낳는다.",
        author: "한국 속담",
        category: "사랑/관계",
        comment: "작아 보이는 배려가 관계를 따뜻하게 만듭니다."
    },
    {
        text: "분노는 잠시지만 후회는 길다.",
        author: "토머스 풀러",
        category: "인간관계",
        comment: "감정적으로 행동하면 나중에 더 큰 상처로 돌아올 수 있습니다."
    },
    {
        text: "행복은 소유보다 태도에 달려 있다.",
        author: "조셉 마피",
        category: "삶/철학",
        comment: "무엇을 갖고 있느냐보다 어떻게 바라보느냐가 중요합니다."
    },
    {
        text: "사람은 생각하는 대로 된다.",
        author: "마커스 아우렐리우스",
        category: "삶/철학",
        comment: "생각은 행동을 만들고, 행동은 결국 운명이 됩니다."
    },
    {
        text: "기회는 준비된 마음에만 온다.",
        author: "파스퇴르",
        category: "성공/도전",
        comment: "운이 아니라 준비된 사람에게 기회가 머뭅니다."
    },
    {
        text: "자신을 믿는 순간 방법은 보이기 시작한다.",
        author: "요한 볼프강 폰 괴테",
        category: "동기부여",
        comment: "자신감이 생기면 시야가 넓어지고 길이 보입니다."
    },
    {
        text: "실패를 두려워하면 아무것도 할 수 없다.",
        author: "에디슨",
        category: "도전",
        comment: "많은 기회를 놓치는 건 실패가 아니라 '시도하지 않음' 때문입니다."
    },
    {
        text: "지식보다 중요한 것은 상상력이다.",
        author: "아인슈타인",
        category: "삶/철학",
        comment: "상상력은 가능성을 넓히고 미래를 여는 힘입니다."
    },
    {
        text: "오늘의 선택이 내일의 내가 된다.",
        author: "익명",
        category: "삶/철학",
        comment: "작은 결정이 인생의 방향을 바꿉니다."
    },
    {
        text: "천천히 가더라도 멈추지 마라.",
        author: "공자",
        category: "도전",
        comment: "속도보다 중요한 것은 계속 앞으로 나아가는 자세입니다."
    },
    {
        text: "모든 성취는 시도의 결과다.",
        author: "오프라 윈프리",
        category: "성공/도전",
        comment: "시작하는 순간 이미 절반은 해낸 것입니다."
    },
    {
        text: "우리는 생각한 대로 된다.",
        author: "제임스 앨런",
        category: "삶/철학",
        comment: "생각은 습관을 만들고 습관은 삶을 만듭니다."
    },
    {
        text: "성공한 사람보다 가치 있는 사람이 되어라.",
        author: "아인슈타인",
        category: "삶/철학",
        comment: "가치는 성취보다 오래 남고 더 큰 영향을 줍니다."
    },
    {
        text: "가장 강한 사람은 가장 오래 견디는 사람이다.",
        author: "프리드리히 니체",
        category: "도전",
        comment: "지구력이 결국 승패를 결정하는 순간이 많습니다."
    },
    {
        text: "당신이 할 수 있다고 믿든 없다고 믿든, 믿는 대로 될 것이다.",
        author: "헨리 포드",
        category: "동기부여",
        comment: "믿음이 곧 행동의 방향을 만듭니다."
    },
    {
        text: "좋은 하루는 스스로 만드는 것이다.",
        author: "익명",
        category: "삶/철학",
        comment: "시작을 스스로 긍정으로 채우면 하루의 결이 달라집니다."
    },
    {
        text: "웃음은 최고의 치료제다.",
        author: "익명",
        category: "감정/위로",
        comment: "웃음은 마음을 가볍게 하고 상황을 새롭게 바라보게 해줍니다."
    },
    {
        text: "진정한 용기는 두려움을 느끼면서도 행동하는 것이다.",
        author: "넬슨 만델라",
        category: "도전",
        comment: "용기란 두려움의 부재가 아니라 두려움 속의 선택입니다."
    },
    {
        text: "오늘 걷지 않으면 내일 뛰어야 한다.",
        author: "한국 속담",
        category: "성공/도전",
        comment: "미루는 선택은 결국 더 큰 부담이 되어 돌아옵니다."
    },
    {
        text: "고통은 일시적이지만 포기는 영원하다.",
        author: "랜스 암스트롱",
        category: "도전",
        comment: "조금만 버티면 지나가지만, 포기는 흔적으로 남습니다."
    },
    {
        text: "성공은 매일의 작은 선택들이 만든다.",
        author: "익명",
        category: "성공/도전",
        comment: "크게 보이진 않지만 습관의 힘이 미래를 결정합니다."
    },
    {
        text: "모든 날이 선물이지만, 어떤 날은 포장지가 별로일 뿐이다.",
        author: "익명",
        category: "위로",
        comment: "힘든 하루도 결국 지나가며 하나의 경험이 됩니다."
    },
    {
        text: "당신의 한계는 당신이 정한 것이다.",
        author: "익명",
        category: "동기부여",
        comment: "경계선을 지우는 순간 가능성은 무한해집니다."
    },
    {
        text: "불가능은 작은 마음을 가진 사람들의 말이다.",
        author: "나폴레옹",
        category: "도전",
        comment: "의지는 불가능을 가능으로 바꿉니다."
    },
    {
        text: "기억은 희미해지지만 경험은 남는다.",
        author: "익명",
        category: "삶/철학",
        comment: "지나간 순간들은 결국 나를 만들어주는 자산입니다."
    },
    {
        text: "당신이 찾는 답은 결국 당신 안에 있다.",
        author: "익명",
        category: "삶/철학",
        comment: "외부보다 내면의 목소리가 더 정확할 때가 많습니다."
    },
    {
        text: "너무 늦었다고 생각할 때가 가장 빠르다.",
        author: "박명수",
        category: "동기부여",
        comment: "시작은 언제나 지금 이 순간이 가장 적기입니다."
    },
    {
        text: "최선을 다한 사람만이 기회를 잡는다.",
        author: "익명",
        category: "성공/도전",
        comment: "준비가 되어 있으면 우연도 기회가 됩니다."
    },
    {
        text: "사람은 혼자가 아니라 함께일 때 더 강하다.",
        author: "헬렌 켈러",
        category: "관계",
        comment: "연대감은 혼자 낼 수 없는 힘을 만들어냅니다."
    },
    {
        text: "위대한 일은 열정 없이 이루어진 적이 없다.",
        author: "랄프 왈도 에머슨",
        category: "성공/도전",
        comment: "진짜 집중과 몰입은 열정에서 시작됩니다."
    },
    {
        text: "행복은 준비된 사람에게 찾아온다.",
        author: "토마스 제퍼슨",
        category: "삶/철학",
        comment: "내 마음의 환경을 정돈할 때 행복이 보입니다."
    },
    {
        text: "눈물은 마음을 씻어준다.",
        author: "파블로 네루다",
        category: "감정/위로",
        comment: "울음은 부끄러움이 아니라 치유의 과정입니다."
    },
    {
        text: "오늘의 나는 어제 내가 만든 것이다.",
        author: "익명",
        category: "삶/철학",
        comment: "작은 습관이 오늘의 나를 완성했습니다."
    },
    {
        text: "실패는 방향을 수정하는 신호일 뿐이다.",
        author: "익명",
        category: "도전",
        comment: "실패는 멈추라는 뜻이 아니라 더 나은 길이 있다는 뜻입니다."
    },
    {
        text: "준비된 자만이 기회를 잡는다.",
        author: "아리스토텔레스",
        category: "성공/도전",
        comment: "우연을 기회로 바꾸는 힘은 준비에서 나옵니다."
    },
    {
        text: "자신을 사랑하는 것이 평생의 로맨스의 시작이다.",
        author: "오스카 와일드",
        category: "사랑",
        comment: "스스로를 사랑할 때 모든 관계가 건강해집니다."
    },
    {
        text: "사람은 나이가 들며 변하는 것이 아니라 더 '자기답게' 된다.",
        author: "익명",
        category: "삶/철학",
        comment: "시간은 본래 성향을 더 선명하게 만들어줍니다."
    },
    {
        text: "작은 배려는 큰 변화를 만든다.",
        author: "익명",
        category: "관계",
        comment: "말 한마디, 작은 행동이 주변을 따뜻하게 만듭니다."
    },
    {
        text: "건강은 모든 행복의 기초다.",
        author: "아서 쇼펜하우어",
        category: "삶/철학",
        comment: "몸과 마음이 편안해야 다른 행복도 보입니다."
    },
    {
        text: "사랑은 서로 마주 보는 것이 아니라 같은 방향을 바라보는 것이다.",
        author: "생텍쥐페리",
        category: "사랑",
        comment: "관계는 함께 성장하는 과정입니다."
    },
    {
        text: "진짜 용기는 약함을 인정하는 데서 나온다.",
        author: "브레네 브라운",
        category: "감정/위로",
        comment: "취약함을 드러낼 때 더 깊은 연결이 만들어집니다."
    },
    {
        text: "작은 승리가 큰 자신감을 만든다.",
        author: "익명",
        category: "동기부여",
        comment: "아주 작은 성공도 꾸준히 쌓이면 강력한 추진력이 됩니다."
    },
    {
        text: "기적은 준비된 자에게 일어난다.",
        author: "익명",
        category: "삶/철학",
        comment: "기회처럼 보이는 것도 사실은 노력의 결과입니다."
    },
    {
        text: "당신은 생각보다 강하다.",
        author: "익명",
        category: "위로",
        comment: "지금까지 버텨온 것만 봐도 이미 충분히 강합니다."
    },
    {
        text: "누군가의 하루를 바꿀 수 있는 힘이 당신에게 있다.",
        author: "익명",
        category: "관계",
        comment: "작은 친절이 누군가에겐 큰 위로가 될 수 있습니다."
    },
    {
        text: "어제보다 나은 오늘을 만들어라.",
        author: "익명",
        category: "동기부여",
        comment: "완벽할 필요 없이 조금만 나아지면 됩니다."
    },
    {
        text: "꿈은 이루어지는 것이 아니라 만들어가는 것이다.",
        author: "월트 디즈니",
        category: "성공/도전",
        comment: "꿈은 결과가 아니라 과정에서 완성됩니다."
    },
    {
        text: "고난은 성장의 다른 이름이다.",
        author: "익명",
        category: "삶/철학",
        comment: "아픔 속에서 우리는 더 단단해집니다."
    },
    {
        text: "오늘의 선택이 내일의 기회를 만든다.",
        author: "익명",
        category: "삶/철학",
        comment: "작은 결정도 인생의 방향에 영향을 줍니다."
    },
    {
        text: "진짜 행복은 비교하지 않는 마음에서 온다.",
        author: "익명",
        category: "삶/철학",
        comment: "비교는 만족을 빼앗고, 감사는 행복을 만듭니다."
    },
    {
        text: "어둠이 없었다면 별은 보이지 않았을 것이다.",
        author: "익명",
        category: "위로",
        comment: "어려움 속에서 진짜 소중한 것을 발견할 수 있습니다."
    },
    {
        text: "지금 하는 일이 미래의 나를 만든다.",
        author: "익명",
        category: "동기부여",
        comment: "지금의 선택이 결국 미래의 나는 결정합니다."
    },
    {
        text: "나 자신에게 친절하라.",
        author: "익명",
        category: "위로",
        comment: "남보다 나에게 더 따뜻해야 합니다."
    },
    {
        text: "혼자 가면 빨리 가지만 함께 가면 멀리 간다.",
        author: "아프리카 속담",
        category: "관계",
        comment: "협력은 혼자선 갈 수 없는 길을 가능하게 합니다."
    },
    {
        text: "내일의 나를 위해 오늘의 나를 아껴라.",
        author: "익명",
        category: "삶/철학",
        comment: "지나친 무리보다 꾸준한 관리가 중요합니다."
    },
    {
        text: "가장 큰 실패는 도전하지 않는 것이다.",
        author: "익명",
        category: "도전",
        comment: "시작하는 순간 이미 절반은 해낸 것입니다."
    },
    {
        text: "열정은 에너지를 만들고, 에너지는 행동을 만든다.",
        author: "토니 로빈스",
        category: "성공/도전",
        comment: "열정이 있어야 꾸준함이 생깁니다."
    },
    {
        text: "무엇보다 중요한 것은 멈추지 않는 것이다.",
        author: "익명",
        category: "도전",
        comment: "중간에 흔들려도 다시 걷기만 하면 됩니다."
    },
    {
        text: "자기 자신에게 솔직해져라.",
        author: "익명",
        category: "삶/철학",
        comment: "내면의 진실을 인정할 때 변화가 시작됩니다."
    },
    {
        text: "기쁨은 나누면 두 배가 된다.",
        author: "익명",
        category: "관계",
        comment: "행복은 공유될 때 더 커집니다."
    },
    {
        text: "과거는 교훈일 뿐, 미래를 결정하지 않는다.",
        author: "익명",
        category: "삶/철학",
        comment: "과거는 참고 자료이지 운명이 아닙니다."
    },
    {
        text: "작은 감사가 큰 행복을 만든다.",
        author: "익명",
        category: "삶/철학",
        comment: "감사는 마음을 부자로 만듭니다."
    },
    {
        text: "당신이 원하는 것을 세상도 원한다.",
        author: "파울로 코엘료",
        category: "삶/철학",
        comment: "진심으로 간절한 목표는 자연스럽게 길을 만들어갑니다."
    },
    {
        text: "좋은 생각은 좋은 삶을 만든다.",
        author: "익명",
        category: "삶/철학",
        comment: "마음의 방향이 삶의 결과를 결정합니다."
    },
    {
        text: "나는 내가 정한 기준으로 살아간다.",
        author: "익명",
        category: "삶/철학",
        comment: "남의 잣대가 아닌 내 기준으로 사는 것이 자유입니다."
    },
    {
        text: "가장 큰 적은 두려움이다.",
        author: "익명",
        category: "도전",
        comment: "두려움을 넘는 순간 인생이 새롭게 열립니다."
    },
    {
        text: "마음의 평화가 최고의 부자다.",
        author: "익명",
        category: "삶/철학",
        comment: "물질보다 중요한 것은 내적인 안정입니다."
    },
    {
        text: "한 번에 한 걸음이면 충분하다.",
        author: "익명",
        category: "위로",
        comment: "지금의 속도도 괜찮다. 중요한 건 멈추지 않는 것."
    },
    {
        text: "배움에는 끝이 없다.",
        author: "레오나르도 다빈치",
        category: "삶/철학",
        comment: "삶은 평생 성장의 과정입니다."
    },
    {
        text: "당신의 꿈은 당신 능력의 크기다.",
        author: "익명",
        category: "성공/도전",
        comment: "큰 꿈을 꾸는 사람만이 큰 성취를 이룬다."
    },
    {
        text: "문제는 결국 해결된다.",
        author: "익명",
        category: "위로",
        comment: "해결되지 않는 문제는 없다. 다만 시간이 다를 뿐."
    },
    {
        text: "성공은 습관, 실패도 습관이다.",
        author: "익명",
        category: "성공/도전",
        comment: "매일 반복하는 선택이 당신의 미래다."
    },
    {
        text: "진짜 강함은 부드러움 속에서 나온다.",
        author: "익명",
        category: "관계",
        comment: "따뜻함은 강함의 또 다른 형태다."
    },
    {
        text: "자신을 아끼는 것이 모든 시작이다.",
        author: "익명",
        category: "위로",
        comment: "번아웃의 첫 예방책은 자기 돌봄이다."
    },
    {
        text: "지금 이 순간이 가장 소중하다.",
        author: "익명",
        category: "삶/철학",
        comment: "과거나 미래가 아닌 현재에 집중할 때 행복이 온다."
    },
    {
        text: "도전은 나를 성장시키는 가장 빠른 길이다.",
        author: "익명",
        category: "도전",
        comment: "불편함 속에서 새로운 능력이 생긴다."
    },
    {
        text: "생각의 전환이 인생의 전환이다.",
        author: "익명",
        category: "삶/철학",
        comment: "시각을 바꾸면 같은 상황도 달라 보인다."
    },
    {
        text: "한 번의 친절이 평생을 바꿀 수 있다.",
        author: "익명",
        category: "관계",
        comment: "사소한 친절도 누군가에겐 운명을 바꿀 힘이 있다."
    },
    {
        text: "할 수 있다는 믿음이 첫걸음이다.",
        author: "익명",
        category: "동기부여",
        comment: "믿음이 없으면 어떤 행동도 시작되지 않는다."
    },
    {
        text: "성장은 불편함 속에서 시작된다.",
        author: "익명",
        category: "도전",
        comment: "편안함은 유지, 불편함은 변화다."
    },
    {
        text: "모든 것은 지나간다. 이것 또한 지나가리라.",
        author: "페르시아 속담",
        category: "위로",
        comment: "지금의 어려움도 결국엔 끝이 난다."
    },
    {
        text: "자신의 속도로 살아라.",
        author: "익명",
        category: "삶/철학",
        comment: "남의 속도에 맞추지 않아도 된다."
    },
    {
        text: "행동 없는 꿈은 환상일 뿐이다.",
        author: "익명",
        category: "성공/도전",
        comment: "현실을 바꾸는 것은 생각이 아니라 행동이다."
    },
    {
        text: "꾸준함이 모든 것을 이긴다.",
        author: "익명",
        category: "성공/도전",
        comment: "천천히라도 이어가는 힘이 결국 가장 강하다."
    },
    {
        text: "인생은 짧지만 예술은 길다.",
        author: "히포크라테스",
        category: "삶/철학",
        comment: "순간을 의미 있게 살아야 후대에 남는 가치를 만들 수 있습니다."
    },
    {
        text: "참을 수 없는 고통은 없다.",
        author: "카뮈",
        category: "위로",
        comment: "인간의 적응력은 상상을 초월합니다."
    },
    {
        text: "모든 시작은 작은 발걸음이다.",
        author: "레오 톨스토이",
        category: "동기부여",
        comment: "큰 여정도 첫 걸음에서 시작됩니다."
    },
    {
        text: "진실은 결국 승리한다.",
        author: "간디",
        category: "삶/철학",
        comment: "거짓은 일시적이지만 진실은 영원합니다."
    },
    {
        text: "자신감은 성공의 열쇠다.",
        author: "빌 게이츠",
        category: "성공/도전",
        comment: "믿음이 있어야 도전할 수 있습니다."
    },
    {
        text: "시간은 가장 귀중한 자산이다.",
        author: "스티브 잡스",
        category: "삶/철학",
        comment: "시간을 어떻게 쓰느냐가 인생을 결정합니다."
    },
    {
        text: "변화를 두려워하지 마라.",
        author: "윈스턴 처칠",
        category: "도전",
        comment: "변화는 성장의 기회입니다."
    },
    {
        text: "희망은 마지막까지 남는 것이다.",
        author: "파블로 피카소",
        category: "희망",
        comment: "희망을 잃지 않으면 끝이 아닙니다."
    },
    {
        text: "사랑은 이해하는 것이다.",
        author: "빈센트 반 고흐",
        category: "사랑",
        comment: "진정한 사랑은 상대방을 온전히 이해하는 것입니다."
    },
    {
        text: "노력은 결코 배신하지 않는다.",
        author: "타이거 우즈",
        category: "성공/도전",
        comment: "꾸준한 노력은 반드시 결과로 돌아옵니다."
    },
    {
        text: "자유는 책임을 요구한다.",
        author: "존 F. 케네디",
        category: "삶/철학",
        comment: "진정한 자유는 책임과 함께 합니다."
    },
    {
        text: "인내는 쓴 약이지만 효과는 좋다.",
        author: "소포클레스",
        category: "도전",
        comment: "인내하는 동안 성장이 일어납니다."
    },
    {
        text: "현명한 사람은 자신의 한계를 안다.",
        author: "아인슈타인",
        category: "삶/철학",
        comment: "한계를 인정하는 것도 지혜입니다."
    },
    {
        text: "친절함은 언어를 이해하지 못하는 사람도 이해할 수 있다.",
        author: "달라이 라마",
        category: "관계",
        comment: "친절은 보편적인 언어입니다."
    },
    {
        text: "성공의 비밀은 시작하는 것이다.",
        author: "마크 트웨인",
        category: "성공/도전",
        comment: "완벽함을 기다리기보다 시작하는 것이 중요합니다."
    },
    {
        text: "행복은 돈으로 살 수 없다.",
        author: "비틀스",
        category: "삶/철학",
        comment: "진짜 행복은 내면에서 나옵니다."
    },
    {
        text: "과거를 잊지 말되 과거에 살지는 마라.",
        author: "브루스 리",
        category: "삶/철학",
        comment: "과거는 교훈이지 감옥이 아닙니다."
    },
    {
        text: "위대한 일은 작은 일들의 집합이다.",
        author: "빈센트 반 고흐",
        category: "성공/도전",
        comment: "작은 노력들이 모여 큰 성취가 됩니다."
    },
    {
        text: "자신을 의심하지 마라.",
        author: "나폴레옹 힐",
        category: "동기부여",
        comment: "자신감이 있어야 목표를 이룰 수 있습니다."
    },
    {
        text: "인생은 선택의 연속이다.",
        author: "사르트르",
        category: "삶/철학",
        comment: "매 순간의 선택이 인생을 만듭니다."
    },
    {
        text: "감사하는 마음이 행복을 만든다.",
        author: "달라이 라마",
        category: "삶/철학",
        comment: "감사할수록 더 많은 것에 감사하게 됩니다."
    },
    {
        text: "꿈을 현실로 바꾸는 것은 행동이다.",
        author: "월트 디즈니",
        category: "성공/도전",
        comment: "상상만으로는 부족하고 실행이 필요합니다."
    },
    {
        text: "고난은 나를 더 강하게 만든다.",
        author: "프리드리히 니체",
        category: "도전",
        comment: "시련은 성장의 계단입니다."
    },
    {
        text: "사랑받는 것보다 사랑하는 것이 더 행복하다.",
        author: "마더 테레사",
        category: "사랑",
        comment: "사랑을 주는 사람이 더 큰 기쁨을 느낍니다."
    },
    {
        text: "현재에 집중하라.",
        author: "불교 경전",
        category: "삶/철학",
        comment: "과거와 미래가 아닌 지금이 중요합니다."
    },
    {
        text: "노력하는 사람은 운이 좋다.",
        author: "게리 플레이어",
        category: "성공/도전",
        comment: "노력하면 기회가 따라옵니다."
    },
    {
        text: "자신을 변화시키는 것이 세상을 변화시키는 것이다.",
        author: "간디",
        category: "삶/철학",
        comment: "변화는 내 안에서 시작됩니다."
    },
    {
        text: "희망은 어둠 속의 빛이다.",
        author: "마틴 루터 킹",
        category: "희망",
        comment: "가장 어두울 때 희망이 가장 밝게 빛납니다."
    },
    {
        text: "관계는 투자가 아니라 선물이다.",
        author: "익명",
        category: "관계",
        comment: "진짜 관계는 조건 없이 주고받는 것입니다."
    },
    {
        text: "용기는 두려움의 부재가 아니다.",
        author: "넬슨 만델라",
        category: "도전",
        comment: "두려움을 느끼면서도 나아가는 것이 용기입니다."
    },
    {
        text: "성공은 준비와 기회의 만남이다.",
        author: "세네카",
        category: "성공/도전",
        comment: "준비된 사람에게만 기회가 의미가 있습니다."
    },
    {
        text: "인생은 여행이다, 목적지가 아니라.",
        author: "랄프 왈도 에머슨",
        category: "삶/철학",
        comment: "과정이 목적보다 소중합니다."
    },
    {
        text: "진정한 친구는 어려울 때 나타난다.",
        author: "윌리엄 셰익스피어",
        category: "관계",
        comment: "진짜 관계는 시련을 견뎌냅니다."
    },
    {
        text: "마음의 평화를 찾아라.",
        author: "도교 경전",
        category: "삶/철학",
        comment: "내면의 평화가 진짜 행복입니다."
    },
    {
        text: "성장은 끝이 없다.",
        author: "레오나르도 다빈치",
        category: "삶/철학",
        comment: "평생 배우고 성장하는 것이 인생입니다."
    },
    {
        text: "현재가 과거와 미래를 결정한다.",
        author: "칼 구스타프 융",
        category: "삶/철학",
        comment: "지금의 선택이 모든 것을 만듭니다."
    },
    {
        text: "사랑은 조건 없이 주는 것이다.",
        author: "에리히 프롬",
        category: "사랑",
        comment: "진정한 사랑은 무조건적입니다."
    },
    {
        text: "자신을 믿는 것이 성공의 첫걸음이다.",
        author: "나폴레옹 힐",
        category: "동기부여",
        comment: "자신감이 없으면 아무것도 할 수 없습니다."
    },
    {
        text: "고통은 선택이다.",
        author: "빅터 프랭클",
        category: "삶/철학",
        comment: "어떻게 반응하느냐는 내 선택입니다."
    },
    {
        text: "희망은 절망보다 강하다.",
        author: "넬슨 만델라",
        category: "희망",
        comment: "희망을 잃지 않으면 길이 열립니다."
    },
    {
        text: "관계는 소통으로 만들어진다.",
        author: "칼 로저스",
        category: "관계",
        comment: "이해하려는 마음이 관계를 깊게 합니다."
    },
    {
        text: "변화는 불가피하다.",
        author: "헤라클레이토스",
        category: "삶/철학",
        comment: "변화를 받아들이는 것이 지혜입니다."
    },
    {
        text: "자신만의 길을 가라.",
        author: "로버트 프로스트",
        category: "삶/철학",
        comment: "남과 다른 길이 자신만의 길입니다."
    },
    {
        text: "사랑은 서로를 자유롭게 하는 것이다.",
        author: "칼 구스타프 융",
        category: "사랑",
        comment: "진정한 사랑은 소유가 아닙니다."
    },
    {
        text: "인내는 모든 것을 이긴다.",
        author: "제프리 초서",
        category: "도전",
        comment: "끝까지 버티는 사람이 승리합니다."
    },
    {
        text: "현재를 소중히 여겨라.",
        author: "불교 경전",
        category: "삶/철학",
        comment: "지금 이 순간이 가장 소중합니다."
    },
    {
        text: "희망은 절망의 밤에도 별이 빛나듯 존재한다.",
        author: "마틴 루터 킹",
        category: "희망",
        comment: "가장 어두울 때 희망이 빛을 발합니다."
    },
    {
        text: "관계는 투자가 아니라 나눔이다.",
        author: "익명",
        category: "관계",
        comment: "주고받음이 아닌 나눔이 진짜 관계입니다."
    },
    {
        text: "자신을 아끼는 것이 최우선이다.",
        author: "익명",
        category: "위로",
        comment: "자신을 돌보는 것에서 모든 것이 시작됩니다."
    },
    {
        text: "변화를 두려워하지 말고 환영하라.",
        author: "윈스턴 처칠",
        category: "도전",
        comment: "변화는 새로운 기회를 가져옵니다."
    },
    {
        text: "사랑은 이해와 용서다.",
        author: "익명",
        category: "사랑",
        comment: "완벽함보다 이해와 용서가 더 중요합니다."
    },
    {
        text: "희망은 내일을 만든다.",
        author: "마틴 루터 킹",
        category: "희망",
        comment: "희망이 있어야 미래가 있습니다."
    },
    {
        text: "관계는 시간과 정성이 필요하다.",
        author: "익명",
        category: "관계",
        comment: "진짜 관계는 투자하는 만큼 깊어집니다."
    },
    {
        text: "자신을 변화시키면 세상이 변한다.",
        author: "간디",
        category: "삶/철학",
        comment: "변화는 내 안에서 시작됩니다."
    },
    {
        text: "사랑은 조건 없이 주는 선물이다.",
        author: "에리히 프롬",
        category: "사랑",
        comment: "진정한 사랑은 보상 없이 주는 것입니다."
    },
    {
        text: "희망은 마지막까지 포기하지 않는 것이다.",
        author: "넬슨 만델라",
        category: "희망",
        comment: "희망을 잃지 않으면 끝이 아닙니다."
    }
];

// 기분별 카테고리 매핑
const moodCategoryMap = {
    "우울": ["위로", "희망", "감정/위로"],
    "불안": ["위로", "동기부여", "삶/철학"],
    "동기부여": ["동기부여", "성공/도전", "도전"],
    "지침": ["삶/철학", "성공/도전"],
    "기쁨": ["사랑", "관계", "희망"]
};

// 날짜 기반 시드 생성
function getDateSeed() {
    const today = new Date();
    const dateString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    let hash = 0;
    for (let i = 0; i < dateString.length; i++) {
        const char = dateString.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash);
}

// 시드 기반 랜덤 선택
function seededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

// 오늘의 명언 선택 (날짜 기반)
function getTodayQuote() {
    const seed = getDateSeed();
    const random = seededRandom(seed);
    const index = Math.floor(random * quotes.length);
    return quotes[index];
}

// 랜덤 명언 선택
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// 기분 기반 명언 선택
function getQuoteByMood(mood) {
    const categories = moodCategoryMap[mood] || [];
    const filteredQuotes = quotes.filter(quote => 
        categories.some(cat => quote.category.includes(cat) || quote.category === cat)
    );
    
    if (filteredQuotes.length === 0) {
        return getRandomQuote();
    }
    
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    return filteredQuotes[randomIndex];
}

// 명언 표시
function displayQuote(quote) {
    document.getElementById('quoteText').textContent = quote.text;
    document.getElementById('quoteAuthor').textContent = `— ${quote.author}`;
    document.getElementById('quoteComment').textContent = quote.comment;
    
    // 애니메이션 효과
    const card = document.getElementById('quoteCard');
    card.classList.remove('fade-in');
    void card.offsetWidth; // 리플로우 강제
    card.classList.add('fade-in');
}

// 날짜 표시
function displayDate() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const dateString = today.toLocaleDateString('ko-KR', options);
    document.getElementById('todayDate').textContent = dateString;
}

// 이미지 다운로드 (Canvas 사용)
function downloadQuoteImage() {
    const quote = {
        text: document.getElementById('quoteText').textContent,
        author: document.getElementById('quoteAuthor').textContent.replace('— ', ''),
        comment: document.getElementById('quoteComment').textContent
    };

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Canvas 크기 설정
    canvas.width = 1200;
    canvas.height = 1600;
    
    // 배경색
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 여백 설정
    const padding = 100;
    const maxWidth = canvas.width - (padding * 2);
    
    // 텍스트 스타일 설정
    ctx.fillStyle = '#2c3e50';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    
    // 명언 텍스트
    ctx.font = 'bold 48px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans KR", sans-serif';
    const textLines = wrapText(ctx, quote.text, maxWidth);
    let y = padding + 200;
    
    textLines.forEach((line, index) => {
        ctx.fillText(line, canvas.width / 2, y);
        y += 70;
    });
    
    // 저자
    y += 60;
    ctx.fillStyle = '#8b6f47';
    ctx.font = 'italic 36px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans KR", sans-serif';
    ctx.fillText(`— ${quote.author}`, canvas.width / 2, y);
    
    // 해설
    y += 120;
    ctx.fillStyle = '#7f8c8d';
    ctx.font = '28px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans KR", sans-serif';
    const commentLines = wrapText(ctx, quote.comment, maxWidth);
    commentLines.forEach((line, index) => {
        ctx.fillText(line, canvas.width / 2, y);
        y += 50;
    });
    
    // 이미지 다운로드
    canvas.toBlob(function(blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `오늘의명언_${new Date().toISOString().split('T')[0]}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
}

// 텍스트 줄바꿈 처리
function wrapText(ctx, text, maxWidth) {
    const words = text.split('');
    const lines = [];
    let currentLine = words[0];
    
    for (let i = 1; i < words.length; i++) {
        const word = words[i];
        const width = ctx.measureText(currentLine + word).width;
        if (width < maxWidth) {
            currentLine += word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }
    lines.push(currentLine);
    return lines;
}

// URL 복사
function copyUrl() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        alert('URL이 클립보드에 복사되었습니다!');
    }).catch(() => {
        // 폴백: 텍스트 선택 방식
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('URL이 클립보드에 복사되었습니다!');
    });
}

// 공유하기 (Web Share API)
function shareQuote() {
    const quote = {
        text: document.getElementById('quoteText').textContent,
        author: document.getElementById('quoteAuthor').textContent
    };
    
    const shareData = {
        title: '오늘의 인생명언',
        text: `"${quote.text}" ${quote.author}`,
        url: window.location.href
    };
    
    if (navigator.share) {
        navigator.share(shareData).catch((error) => {
            console.log('공유 실패:', error);
        });
    } else {
        // Web Share API 미지원 시 URL 복사로 대체
        copyUrl();
    }
}

// 이벤트 리스너 설정
document.addEventListener('DOMContentLoaded', function() {
    // 날짜 표시
    displayDate();
    
    // 오늘의 명언 표시
    const todayQuote = getTodayQuote();
    displayQuote(todayQuote);
    
    // 랜덤 명언 버튼
    document.getElementById('randomBtn').addEventListener('click', function() {
        const randomQuote = getRandomQuote();
        displayQuote(randomQuote);
        
        // 기분 버튼 활성화 해제
        document.querySelectorAll('.btn-mood').forEach(btn => {
            btn.classList.remove('active');
        });
    });
    
    // 기분 버튼
    document.querySelectorAll('.btn-mood').forEach(btn => {
        btn.addEventListener('click', function() {
            const mood = this.getAttribute('data-mood');
            const quote = getQuoteByMood(mood);
            displayQuote(quote);
            
            // 활성화 상태 토글
            document.querySelectorAll('.btn-mood').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // 이미지 다운로드 버튼
    document.getElementById('downloadBtn').addEventListener('click', downloadQuoteImage);
    
    // URL 복사 버튼
    document.getElementById('copyUrlBtn').addEventListener('click', copyUrl);
    
    // 공유하기 버튼
    document.getElementById('shareBtn').addEventListener('click', shareQuote);
});

