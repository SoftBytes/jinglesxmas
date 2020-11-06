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
        discounted: {
            price: 89,
            key: 'prod_IL2qKR5rBwNHo8',
        }
    },{
        name: LARGE_TREE_NAME,
        height: '2.1m',
        price: 139,
        key: 'prod_IJj4eyw0urKfb1',
        discounted: {
            price: 119,
            key: 'prod_IL30KubFVJZaBg',
        }
    }]