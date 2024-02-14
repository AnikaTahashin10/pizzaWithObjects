    class Pizza {
            constructor(name, toppings, basePrice) {
                this.name = name;
                this.toppings = toppings;
                this.basePrice = basePrice;
            }

            calculatePrice() {
                
                return this.basePrice + (this.toppings.length * 0.5); // Additional charge of $0.50 per topping
            }
        }

        class Order {
            constructor(customerName, deliveryType) {
                this.customerName = customerName;
                this.deliveryType = deliveryType;
                this.pizzas = [];
            }

            addPizza(pizza) {
                this.pizzas.push(pizza);
            }

            getTotalPrice() {
                let totalPrice = 0;
                for (let pizza of this.pizzas) {
                    totalPrice += pizza.calculatePrice();
                }
                return totalPrice;
            }

            getOrderSummary() {
                let summary = 'Order Summary:\n';
                summary += 'Customer Name: ' + this.customerName + '\n';
                summary += 'Delivery Type: ' + this.deliveryType + '\n';
                summary += 'Total Price: $' + this.getTotalPrice().toFixed(2);
                return summary;
            }
        }

        function handleSubmit(event) {
            event.preventDefault();

            const customerName = document.getElementById('customerName').value;
            const deliveryType = document.querySelector('input[name="deliveryType"]:checked').value;

            const order = new Order(customerName, deliveryType);

            const pizzas = document.querySelectorAll('.pizza');
            pizzas.forEach(pizza => {
                const name = pizza.querySelector('.name').textContent;
                const toppings = pizza.querySelector('.toppings').textContent.split(', ');
                const basePrice = parseFloat(pizza.querySelector('.basePrice').textContent);

                order.addPizza(new Pizza(name, toppings, basePrice));
            });

            console.log(order.getOrderSummary());
        }