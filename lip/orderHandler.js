

export const createOrder = async({name, phone, address, total, PaymentMethod, pizzas})=> {
   
    
    const res = await fetch('/api/order', {
        
        method: "POST",
        body: JSON.stringify({
            name: name,
            phone: phone,
            address: address,
            total: parseFloat(total),
            method: PaymentMethod,
            status: 1,
            pizzas: pizzas
            
            
        }),
    });
    const id =await res.json();
    return id;
}
