import constants from '../actions/allActions'

const initial_State = {
    products: [
        {
            id: 1,
            name: "Nike Phantom Venom FG Black Red",
            img: "https://i0.wp.com/buybest.pk/wp-content/uploads/2019/09/socceraustralia_my25_4.jpg?fit=600%2C398&ssl=1",
            "category": "nike",
            price: 6000,
            size: 7
        },
        {
            id: 2,
            name: "ADIDAS ACE 16.1 PRIMEMESH IN MERCURY",
            img: "https://sportsnsports.pk/wp-content/uploads/2020/09/Adidas-ACE-16.1-Grey-gripper-1024x1024.jpg",
            category: "addidas",
            price: 5000,
            size: 8
        },
        {
            id: 3,
            name: "Adidas F10 Firm Ground Cleats Mens",
            img: "https://sportsnsports.pk/wp-content/uploads/2020/09/f10-FG-sopink1.jpg",
            category: "addidas",
            price: 6000,
            size: 7
        },
        {
            id: 4,
            name: "Phantom Venom TF Black Red",
            img: "https://sportsnsports.pk/wp-content/uploads/2020/09/2019-NIke-Phantom-Venom-TF-Black-Red-3.jpg",
            category: "nike",
            price: 4000,
            size: 6
        },
        {
            id: 5,
            name: "Adidas F5 Fg White Football Shoes",
            img: "https://sportsnsports.pk/wp-content/uploads/2020/09/runwhi-neonor-black1-f5-fg-wc-adidas-9-400x400-imadwqarxhmgdf8j.jpeg",
            category: "addidas",
            price: 8000,
            size: 8
        },
        {
            id: 6,
            name: "Mercurial Superfly 6 Elite FG Racer Blue",
            img: "https://images.stockx.com/images/Nike-Mercurial-Superfly-6-Elite-FG-Racer-Blue-GS.png?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1626898299&q=60",
            category: "mercurial",
            price: 12000,
            size: 8
        },
        {
            id: 7,
            name: "FUTURE Puma FG/AG FOOTBALL BOOTS",
            img: "https://www.futbolemotion.com/imagesarticulos/156098/750/bota-puma-future-z-1.2-fgag-bluemazing-sunblaze-surf-the-web-0.webp",
            category: "puma",
            price: 7000,
            size: 6
        },
        {
            id: 8,
            name: "Predator Asia black Orange",
            img: "https://www.dhresource.com/webp/m/0x0/f2/albu/g7/M01/1A/13/rBVaSVumPtGAO0eCAAJnN5heHHk684.jpg",
            category: "predator",
            price: 9000,
            size: 7
        },
        {
            id: 9,
            name: "predator freak orange red",
            img: "https://www.prokeepersline.nl/media/image/product/67081/md/adidas-predator-freak-1-low-fg-red-core-black-solar-red.jpg",
            category: "predator",
            price: 7000,
            size: 7
        },
        {
            id: 10,
            name: "PUMA ULTRA 1.3 FG/AG FOOTBALL BOOTS",
            img: "https://www.futbolemotion.com/imagesarticulos/156122/750/bota-puma-ultra-1.3-fgag-sunblaze-puma-white-bluemazing-0.webp",
            category: "puma",
            price: 10000,
            size: 7
        },
        {
            id: 11,
            name: "Mercurial vapor Cleats Light Green",
            img: "https://www.unisportkick.com/pub/media/catalog/product/cache/6da65727d82e2a086ee7b59ec7a3e0e9/8/2/82321uni54_3.jpg",
            category: "mercurial",
            price: 9000,
            size: 7
        },
    ],
    added_items:[],
    total:0,
}

function ShoppingCartReducer(state = initial_State, action) {
    switch (action.type) {
        case constants.ADD_ITEM:
            const selected_item = state.products[action.id-1];
            const item_exist = state.added_items.find(item => item.id === action.id);
            
            if(item_exist){
                selected_item.quantity += 1;
                return{
                    ...state,
                    total: state.total + selected_item.price
                }
            }else{
                selected_item.quantity = 1;
                return{
                    ...state,
                    added_items:[...state.added_items, selected_item],
                    total: state.total + selected_item.price
                }
            }
            break;

        // case constants.DEL_TRANS:
        // state = {
        //     ...state,
        //     transactions: [...state.transactions.filter(transaction => transaction.id !== action.payload)]
        // }
        // break;

        // case constants.EDIT_TRANS:
        // state = {
        //     ...state,
        //     transactions: [...state.transactions.map(transaction => transaction.id === action.payload.oldTransaction.id ? action.payload.newTransaction : transaction)]
        // }
        // break;
    }

    return state;
}

export default ShoppingCartReducer;
