// Card data structure for the game
export const cardDatabase = {
    jobCards: [
        {
            id: 'first_job',
            name: '鍛錬者',
            type: 'job',
            rarity: 'N',
            image: 'first_job',
            description: '力と体力で突き進む肉体派。運動やフィジカル系タスクとの相性が抜群。力と体力特化型。運動習慣に最適',
            stats: {
                chika: 15, // Strength
                chishi: 5,  // Wisdom
                tai: 15,    // Vitality
                kou: 5,     // Agility
                kei: 10     // Persistence
            }
        },
        {
            id: 'second_job',
            name: '学者',
            type: 'job',
            rarity: 'N',
            image: 'second_job',
            description: '知恵と持続力で学問を極める。勉強や知識系タスクとの相性が抜群。知恵と持続力特化型。学習習慣に最適',
            stats: {
                chika: 5,   // Strength
                chishi: 15, // Wisdom
                tai: 5,     // Vitality
                kou: 10,    // Agility
                kei: 15     // Persistence
            }
        },
        {
            id: 'third_job',
            name: '冒険者',
            type: 'job',
            rarity: 'N',
            image: 'third_job',
            description: '敏捷性と知恵で未知の世界を探検。多様なタスクに対応できるバランス型。冒険心に最適',
            stats: {
                chika: 10,  // Strength
                chishi: 10, // Wisdom
                tai: 10,    // Vitality
                kou: 15,    // Agility
                kei: 5      // Persistence
            }
        },
        {
            id: 'fourth_job',
            name: '守護者',
            type: 'job',
            rarity: 'N',
            image: 'fourth_job',
            description: '体力と力で仲間を守る。健康管理や体力系タスクとの相性が抜群。体力と力特化型。健康習慣に最適',
            stats: {
                chika: 12,  // Strength
                chishi: 8,  // Wisdom
                tai: 15,    // Vitality
                kou: 8,     // Agility
                kei: 7      // Persistence
            }
        },
        {
            id: 'fifth_job',
            name: '調和者',
            type: 'job',
            rarity: 'N',
            image: 'fifth_job',
            description: '知恵と敏捷性で調和を保つ。社交やコミュニケーション系タスクとの相性が抜群。知恵と敏捷性特化型。社交習慣に最適',
            stats: {
                chika: 7,   // Strength
                chishi: 12, // Wisdom
                tai: 8,     // Vitality
                kou: 15,    // Agility
                kei: 8      // Persistence
            }
        }
    ],
    weaponCards: [
        {
            id: 'card_two',
            name: '鍛錬者の剣',
            type: 'weapon',
            rarity: 'N',
            image: 'card_two',
            description: '鍛錬者に受け継がれてきた装備。鍛錬者の力を引き出すために作られた特別な一品。ジョブと合致した場合+2',
            attack: 6.0,
            compatibleJobs: ['first_job']
        }
    ],
    destinyCards: [
        {
            id: 'destiny_card',
            name: '運命カード',
            type: 'destiny',
            rarity: 'R',
            image: 'card_free',
            description: '特別な運命を呼び寄せる神秘的なカード。ランダムな効果を発動する。',
            effect: 'random_stat_boost'
        }
    ]
};

// Function to get a random card from available cards
export const getRandomCard = () => {
    const allCards = [
        ...cardDatabase.jobCards,
        ...cardDatabase.weaponCards,
        ...cardDatabase.destinyCards
    ];
    
    const randomIndex = Math.floor(Math.random() * allCards.length);
    return allCards[randomIndex];
};

// Function to get a random job card
export const getRandomJobCard = () => {
    const randomIndex = Math.floor(Math.random() * cardDatabase.jobCards.length);
    return cardDatabase.jobCards[randomIndex];
};

// Function to get a random weapon card
export const getRandomWeaponCard = () => {
    const randomIndex = Math.floor(Math.random() * cardDatabase.weaponCards.length);
    return cardDatabase.weaponCards[randomIndex];
};

// Function to get a destiny card
export const getDestinyCard = () => {
    return cardDatabase.destinyCards[0]; // Only one destiny card for now
};
