import { QuestionData, RankDetails } from './types';

export const QUESTIONS: QuestionData[] = [
  {
    id: 1,
    category: "Beauty & Body",
    question: "私のボディは、妖精のように軽やかで、でも女神のようにメリハリがある？🧚‍♀️",
    iconName: "Feather"
  },
  {
    id: 2,
    category: "Inner Sparkle",
    question: "魔法の野菜やサプリで、内側からキラキラオーラをチャージしてる？✨",
    iconName: "Sparkles"
  },
  {
    id: 3,
    category: "Love Shield",
    question: "悪いバイブス（ウイルス）を跳ね返す、最強のバリアを張ってる自信ある？🛡️💖",
    iconName: "ShieldHeart"
  },
  {
    id: 4,
    category: "Magic Barrier",
    question: "未来の自分を守る「聖なるお守り（ワクチン）」の準備はバッチリ？💉✨",
    iconName: "HeartHandshake"
  },
  {
    id: 5,
    category: "Soul Detox",
    question: "イライラした時は、推しや趣味の魔法で心を浄化できてる？🌈",
    iconName: "Wand"
  },
  {
    id: 6,
    category: "Dream World",
    question: "毎晩、お月様とお話ししながらグッスリ夢の世界に行けてる？🌙💤",
    iconName: "Moon"
  },
  {
    id: 7,
    category: "Purity Check",
    question: "自分を汚すような\"黒い煙\"や\"魔法の薬（お酒）\"に溺れたりしてないよね？🥺",
    iconName: "CloudFog"
  },
  {
    id: 8,
    category: "Destiny Map",
    question: "運命の相手と、100年後の未来地図を描いたことある？🗺️💕",
    iconName: "MapHeart"
  }
];

export const RANK_SYSTEM: Record<string, RankDetails> = {
  Unicorn: {
    label: 'Unicorn',
    title: '奇跡のユニコーンちゃん',
    emoji: '🦄',
    colorClass: 'text-purple-500',
    bgClass: 'bg-purple-100',
    description: "キャー！あなたの遺伝子最強すぎ！✨",
    advice: "未来は明るいし、どんな願いも叶いそう！このまま伝説になっちゃお♡"
  },
  Witch: {
    label: 'Witch',
    title: '修行中の魔法使いちゃん',
    emoji: '🧙‍♀️',
    colorClass: 'text-blue-500',
    bgClass: 'bg-blue-100',
    description: "ポテンシャルはすごいあるよ！",
    advice: "あと少し「バリア（ワクチン）」とか「睡眠」の魔法を覚えれば、最強になれるかも？"
  },
  Sloth: {
    label: 'Sloth',
    title: 'すやすやナマケモノちゃん',
    emoji: '🦥',
    colorClass: 'text-orange-500',
    bgClass: 'bg-orange-100',
    description: "あらら…？今はちょっとエネルギー不足かな🥺",
    advice: "未来のために、まずは美味しいごはん食べて寝よう！自分を大切にしてね♡"
  }
};