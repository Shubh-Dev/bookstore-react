const CHECK = 'CHECK';


 export const CheckStatus = () => {
    return { type: CHECK, payLoad: 'Under Construction' };
};

export default function Category(category = [], action) {
    switch (action.type) {
        case CHECK:
            return category.push(action.payLoad);
        default: state;
    }
};

