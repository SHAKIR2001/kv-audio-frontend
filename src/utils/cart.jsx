export function LoadCart (){  //this function get related cart details that is stored in localStorage(browser)
    let cart = localStorage.getItem("cart")

    if(cart == null){ // new user / or he dont have put anything in the cart
        cart = {
            orderedItems : [],
            days : 1,
            startingDate : new Date()
            

            
        }
    }

}

export function formatDate(date) {  //This function is used to convert a JavaScript Date object into a clean, readable date string in the format : YYYY-MM-DD
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensure two digits
  const day = String(date.getDate()).padStart(2, '0');       // Ensure two digits

  return `${year}-${month}-${day}`;
}
