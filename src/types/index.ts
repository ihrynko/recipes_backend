export type Ingredients = {
    ingredient: string;
    amount: number;
};

export type Recipe = {
    title: string;
    description: string;
    imageUrl: string;
    timeInMins: number;
    category: Array<string>;
    ingredients: Array<Ingredients>;
    instructions: Array<string>;
};