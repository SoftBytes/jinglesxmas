export const STANDARD_TREE_NAME = 'Standard'
export const LARGE_TREE_NAME = 'Large'

// prod_IJj7l2rVzMfaXC	Tree 6
// prod_IJj4eyw0urKfb1	Tree 7

// Standard Discounted prod_IL2qKR5rBwNHo8 
// Large Discounted prod_IL30KubFVJZaBg

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
        [STANDARD_TREE_NAME] : 'std10', 
        [LARGE_TREE_NAME]: 'large10',
    }
    }, {
    code: 'ELFSGIFT5',
    value: 5,
    productKeys: {
        [STANDARD_TREE_NAME] :'std5', 
        [LARGE_TREE_NAME]: 'large5',
    }
    }]