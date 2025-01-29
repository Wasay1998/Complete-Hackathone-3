export interface Product {
    _id: string;
    _type: "product";
    title: string;
    description: string;
    price: number;
    productImage: {
        asset: {
            _ref: string;
            _type: "reference";
        };
    };
    tags?: string[];
    discountPercentage?: number;
    isNew?: boolean;
}