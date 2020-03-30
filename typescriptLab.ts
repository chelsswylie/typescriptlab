interface Mountain {
    name: string,
    height: number
}

const mountains: Mountain[] = [
   {
       name: "Kilimanjaro",
       height: 19341
   },
   {
       name: "Everest",
       height: 29029
   },
   {
       name: "Denali",
       height: 20310
   }
]

function findNameOfTallestMountain(mountains: Mountain []) {
    const tallest = mountains.reduce((a, b) =>
    a.height > b.height ? a: b
    );
    console.log(tallest.name);
}

findNameOfTallestMountain(mountains);
/*Break*/
interface Product {
    name: string,
    price: number
}


const products: Product[] = [
    {
        name: "Milk",
        price: 2.00
    },
    {
        name: "Eggs",
        price: 1.00
    },
    {
        name: "Cheese",
        price: 4.00
    }
 ]

 
function calcAverageProductPrice(products: Product []) {
    const productAvg = arr => products.reduce((a,b) => (a + b.price), 0) / products.length
    console.log(productAvg);
}

calcAverageProductPrice(products);
/*break*/
interface InventoryItem {
    product: Product,
    quantity: number
}

const inventory: InventoryItem[] = [
	{
		name: "motor",
		price: 10.0,
		quantity: 10,
	},
	{
		name: "sensor",
		price: 12.5,
		quantity: 4,
	},
	{
		name: "LED",
		price: 1,
		quantity: 20,
	},
];

function calcInventoryValue(inventory: InventoryItem []) {

	// const Sums = inventory.map(item => inventory.price * inventory.quantity);
	// console.log(Sums);
	// const total = cost.reduce((a, b) => (a += b));
    // console.log(total);
    //Was getting a bunch of errors for this, commenting out
}



