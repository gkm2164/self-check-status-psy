interface QuestionareType {
  id: number;
  question: string;
}

interface QuestionareTypes {
  external: QuestionareType[]
  internal: QuestionareType[]
  deeper: QuestionareType[]
  spiritual: QuestionareType[]
}

export const questions: QuestionareTypes = {
  "external": [
    {
      "id": 1,
      "question": "내 삶의 방식에 만족한다.",
    },
    {
      "id": 2,
      "question": "사람들과 편하게 어울린다.",
    },
    {
      "id": 3,
      "question": "새로운 상황이 어렵다.",
    },
    {
      "id": 4,
      "question": "내 직업은 내 재능과 능력을 제대로 활용하기 어렵다.",
    },
    {
      "id": 5,
      "question": "돈을 긍정적으로 여긴다.",
    },
    {
      "id": 6,
      "question": "시간을 효율적으로 쓰지 못한다.",
    },
    {
      "id": 7,
      "question": "체력이 좋다.",
    },
    {
      "id": 8,
      "question": "책임감에 짓눌리는 느낌이다.",
    },
    {
      "id": 9,
      "question": "놀거나 쉴 시간이 없다.",
    },
    {
      "id": 10,
      "question": "시작한 일은 대체로 끝을 본다.",
    }
  ],
  "internal": [
    {
      "id": 1,
      "question": "나는 나 자신을 좋아한다.",
    },
    {
      "id": 2,
      "question": "가족과 사이가 좋다.",
    },
    {
      "id": 3,
      "question": "힘든 감정 상태를 자주 경험한다.(슬픔, 불안, 분노, 스트레스)",
    },
    {
      "id": 4,
      "question": "혼자 있을 때면 편치 않은 기분이 든다.",
    },
    {
      "id": 5,
      "question": "나 자신과 타인을 균형 있게 잘 챙긴다.",
    },
    {
      "id": 6,
      "question": "집중하여 명료하게 생각하기 어렵다.",
    },
    {
      "id": 7,
      "question": "애정 표현은 어려운 일이 아니다.",
    },
    {
      "id": 8,
      "question": "내 인간관계가 불만족스럽다.",
    },
    {
      "id": 9,
      "question": "내 감정을 정확히 아는 경우가 드물다.",
    },
    {
      "id": 10,
      "question": "내 몸과 긍정적인 관계를 맺고 있다.",
    }
  ],
  "deeper": [
    {
      "id": 1,
      "question": "나에게 무엇이 최선인지 잘 안다.",
    },
    {
      "id": 2,
      "question": "다양한 방식으로 창의력을 발휘할 수 있다.",
    },
    {
      "id": 3,
      "question": "내 무의식에서 일어나는 일에 관심이 없다.",
    },
    {
      "id": 4,
      "question": "내 직감과 내면의 안내를 좀처럼 따르지 않는다.",
    },
    {
      "id": 5,
      "question": "미래를 긍정적으로 보려 한다.",
    },
    {
      "id": 6,
      "question": "무슨 꿈을 꾸든 별로 신경 쓰지 않는다.",
    },
    {
      "id": 7,
      "question": "내가 성장, 발전하고 있다는 것을 안다.",
    },
    {
      "id": 8,
      "question": "나 자신을 치유할 능력이 있는지 잘 모르겠다.",
    },
    {
      "id": 9,
      "question": "직접 경험해보지 않은 것은 상상하기 어렵다.",
    },
    {
      "id": 10,
      "question": "자연과 연결된 느낌을 자주 받는다.",
    }
  ],
  "spiritual": [
    {
      "id": 1,
      "question": "'더 높은 힘'의 존재를 인식하고 있다.(신, 생명력, 진리, 도)",
    },
    {
      "id": 2,
      "question": "타인을 향한 사랑과 연민을 실천하려 노력한다.",
    },
    {
      "id": 3,
      "question": "나에게 영성이 딱히 중요한 것 같지는 않다.",
    },
    {
      "id": 4,
      "question": "살아 있다는 것 자체가 원대한 목적이라고는 믿지 않는다.",
    },
    {
      "id": 5,
      "question": "내 삶이 세상에 긍정적인 영향을 미치면 좋겠다.",
    },
    {
      "id": 6,
      "question": "정기적으로 영적 수련을 하지는 않는다.(명상, 사유, 기도)",
    },
    {
      "id": 7,
      "question": "생각과 감정을 잠재우는 활동에 시간을 들인다.",
    },
    {
      "id": 8,
      "question": "피상적인 활동과 생각에 쉽게 사로잡힌다.",
    },
    {
      "id": 9,
      "question": "살면서 하는 경험의 의미를 깊이 생각하지 않는 편이다.",
    },
    {
      "id": 10,
      "question": "중요한 결정을 할 때는 영적으로 '옳은'것을 따른다.",
    }
  ],
}