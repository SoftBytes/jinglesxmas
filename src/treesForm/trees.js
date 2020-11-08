export const STANDARD_TREE_NAME = 'Standard'
export const LARGE_TREE_NAME = 'Large'

// prod_IJj7l2rVzMfaXC	Tree 6
// prod_IJj4eyw0urKfb1	Tree 7

// Standard Discounted prod_IL2qKR5rBwNHo8 
// Large Discounted prod_IL30KubFVJZaBg

// prod_ILkB6A8o7ejquA	Standard Tree ($10 off)
// prod_ILkAMf0WvFetDc	Large Tree ($10 off)
// prod_ILk9ZailKADbHp	Standard Tree ($5 off)
// prod_ILk9U5RNPlNgd9	Large Tree ($5 off)

export const TREES = [{
        name: STANDARD_TREE_NAME,
        height: '1.8m',
        price: 109,
        key: 'prod_IJj7l2rVzMfaXC',
        selected: true,
    },{
        name: LARGE_TREE_NAME,
        height: '2.1m',
        price: 139,
        key: 'prod_IJj4eyw0urKfb1',
    }]


export const discounts = [{
    code: 'JINGLES2020',
    value: 20,
    productKeys: { 
        [STANDARD_TREE_NAME] : 'prod_IL2qKR5rBwNHo8',
        [LARGE_TREE_NAME]: 'prod_IL30KubFVJZaBg',
    }
    }, {
    code: 'HAPPY2021',
    value: 10,
    productKeys: {
        [STANDARD_TREE_NAME] : 'prod_ILkB6A8o7ejquA', 
        [LARGE_TREE_NAME]: 'prod_ILkAMf0WvFetDc',
    }
    }, {
    code: 'ELFSGIFT5',
    value: 5,
    productKeys: {
        [STANDARD_TREE_NAME] :'prod_ILk9ZailKADbHp', 
        [LARGE_TREE_NAME]: 'prod_ILk9U5RNPlNgd9',
    }
    }]