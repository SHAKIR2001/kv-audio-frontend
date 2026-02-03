export function LoadCart (){  //this function get related cart details that is stored in localStorage(browser)
    let cart = localStorage.getItem("cart")

    if(cart == null){ // new user / or he dont have put anything in the cart
        cart = {
            orderedItems : [],
            days : 1,
            startingDate : formatDate(new Date()), //get the current day and send it to formate data function to convert that in to string
            endingDate : formatDate(new Date())  
        }

        const cartString = JSON.stringify(cart); //change the cart JSON in to String
        localStorage.setItem("cart", cartString); //save the converted(String) cart in to the localStorage(browser)
        return cart;

    }

    cart = JSON.parse(cart); //if already a cart avauilable then get the cart details in to cart
    return cart;
}

export function addToCart(cartItem){  //using this function we can add an item to the cart
    
}






export function formatDate(date) {  //This function is used to convert a JavaScript Date object into a clean, readable date string in the format : YYYY-MM-DD
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensure two digits
  const day = String(date.getDate()).padStart(2, '0');       // Ensure two digits

  return `${year}-${month}-${day}`;
}
