import constants from '../actions/allActions'

const initial_State = {
    products: [
        {
            id: 1,
            name: "Nike Phantom Venom FG Black Red",
            img: "https://i0.wp.com/buybest.pk/wp-content/uploads/2019/09/socceraustralia_my25_4.jpg?fit=600%2C398&ssl=1",
            category: "nike",
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
        {
            id: 12,
            name: "Nike Phantom By You",
            img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5cd5ed21-1742-4273-9cca-3855e7782bcc/custom-nike-phantom-gt-elite-by-you.png",
            category: "nike",
            price: 11000,
            size: 9
        },
        {
            id: 13,
            name: "Nike Zoom SuperFly 9 Elite KM",
            img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/a4243b99-bc40-4090-bde7-2b8c5e21e649/zoom-mercurial-superfly-9-elite-km-fg-football-boot-RbvQKW.png",
            category: "nike",
            price: 7000,
            size: 9
        },
        {
            id: 14,
            name: "PUMA FUTURE 5.1 NETFIT MXSG",
            img: "https://images.puma.net/images/105788/02/fnd/AUS/w/1000/h/1000/bg/255,255,255",
            category: "puma",
            price: 7500,
            size: 7
        },
        {
            id: 15,
            name: "PREDATOR EDGE 94+ FIRM GROUND BOOTS",
            img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ae1f312f90db47218e56aed8013f1488_9366/Predator_Edge_94+_Firm_Ground_Boots_Black_HP9135_22_model.jpg",
            category: "predator",
            price: 9500,
            size: 8
        },
        {
            id: 16,
            name: "PREDATOR MUTATOR 20.1 ARTIFICIAL GRASS BOOTS",
            img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5087e4b9a4ac41d09b05abe30060d123_9366/Predator_Mutator_20.1_Artificial_Grass_Boots_Green_EH2890_01_standard.jpg",
            category: "predator",
            price: 9500,
            size: 8
        },
    ],
    added_items: [],
    total: 0,
}

function ShoppingCartReducer(state = initial_State, action) {
    switch (action.type) {
        case constants.ADD_ITEM:
            const selected_item = state.products[action.id - 1];
            const item_exist = state.added_items.find(item => item.id === action.id);
            // console.log(item_exist)
            // console.log(selected_item)

            if (item_exist) {
                selected_item.quantity += 1;
                return {
                    ...state,
                    total: state.total + selected_item.price
                }
            } else {
                selected_item.quantity = 1;
                return {
                    ...state,
                    added_items: [...state.added_items, selected_item],
                    total: state.total + selected_item.price
                }
            }

        case constants.INC_ITEM:
            // console.log(action.id)
            const sel_item = state.products.find(item => item.id === action.id);
            sel_item.quantity += 1;

            return {
                ...state,
                total: state.total + sel_item.price,
            }

        case constants.DEC_ITEM:
            const sele_item = state.products.find(item => item.id === action.id);
            sele_item.quantity -= 1;

            return {
                ...state,
                total: state.total - sele_item.price,
            }

        case constants.REMOVE_ITEM:

            return {
                ...state,
                added_items: [...state.added_items.filter((item) => { return item.id !== action.id })],
            }
        case constants.DISMANTLE_ITEM:
            const itemToRemove = state.added_items.find(item => item.id === action.id);
            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity);
            return {
                ...state,
                added_items: [...state.added_items.filter((item) => { return item.id !== action.id })],
                total: newTotal,
            }

        default:
            return state;
    }
}

export default ShoppingCartReducer;
