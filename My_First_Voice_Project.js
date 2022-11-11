const coffee = [

{name: 'cappuccino', id: 'cappuccino'},

{name: 'latte', id: 'latte'},

{name: 'americano', id: 'americano'}

];

const dessert = [

{name: 'cheesecake', id: 'cheesecake'},

{name: 'brownie', id: 'brownie'},

{name: 'apple pie', id: 'apple-pie'}

];

let coffeePattern = coffee.map(item => `${item.name}`).join('|');

let dessertPattern = dessert.map(item => `${item.name}`).join('|');

console.log(coffeePattern, dessertPattern);

// Alternatives and optional alternatives in Alan

intent('What can I get (here|)?', p => {
    p.play('You can order a coffee and a dessert');
});

intent(`Get me (a|an) $(COFFEE ${coffeePattern})`, 
       `One $(COFFEE ${coffeePattern}), (please|)`, 
       `I (need|want) (a|an) $(COFFEE ${coffeePattern})`, P => {
    P.play(`Adding one ${P.COFFEE.value} to your cart`);
});

intent(`Get me (a|an) $(DESSERT ${dessertPattern})`, 
       `One $ (DESSERT ${dessertPattern}), (please|)`, 
       `I (need|want) (a|an) $(DESSERT ${dessertPattern})`, p => {
    p.play(`Your ${p.DESSERT.value} is added`,'Sure');
});
intent('My Name is $(NAME)', P=>{
    P.play(`Thank you, ${P.NAME.value}`);
})
intent('My address is $(LOC)', P=>{
    P.play(`Thank you, we will deliver your order to ${P.LOC.value}`)
});