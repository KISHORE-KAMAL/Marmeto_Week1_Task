let products;
let productsdiv = document.querySelector(".productsdiv")
let cartproductsdiv = document.querySelector(".cartproductsdiv")

async function getProductsData()
{
    try
    {
        products = await fetch("./products.json")
        products = await products.json()
        products.map(({id,name,image,price,quantity})=>
        {
            productsdiv.innerHTML += 
            `
            <div class="productcard" id=${id}>
                    <div class="imgdiv">
                        <img src=${image} alt="">
                    </div>
                    <div class="detailsdiv">
                        <div class="left">
                            <h4>${name}</h4>
                            <h5>$${price}</h5>
                        </div>
                        <div class="right">
                        <button onclick="addProduct(${id})" class="btn">
                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                        </button>
                        </div>
                    </div>
                </div>
            `
        })
    }
    catch(err)
    {
        console.log(err.message);
    }
}
getProductsData()

let cart = []
function addProduct(e)
{
    console.log(e);
    let finditem = products.find((item)=>
    {
        return item.id == e
    })
    let cartitem = cart.find((item)=>
    {
        return item.id == e
    })
    console.log(finditem);
    console.log(cartitem);
    if(finditem.id==e && cartitem?.id==undefined)
    {
        cart.push(finditem)
        console.log(cart);
        addCartData()
    }
    else
    {
        cartitem.quantity+=1
        console.log(cart);
        addCartData()
    }
}

cartproductsdiv.innerHTML = `
    <h2>Cart is empty....!</h2>
`;

function removeProduct(productId) {
    const indexToRemove = cart.findIndex(item => item.id === productId);

    if (indexToRemove !== -1) {
        cart.splice(indexToRemove, 1); // Remove 1 item at the found index
        addCartData(); // Update the cart display after removal
    }
    displayTotal()
}

function onsubmitForm(e){
    e.preventDefaut();
    const inputElement = document.querySelector("#input")

    var filteredCartItems = cart.filter(each => each.name.includes(inputElement))

    console.log(filteredCartItems)
}

function clearCart(){
    cart=[]
    addCartData()
}

function onChangeSelect(e){
    const element = document.getElementById("select")
    const order = element.value
    if (order === 'ASC') {
        cart.sort((a, b) => a.price - b.price);
    } else if (order === 'DESC') {
        cart.sort((a, b) => b.price - a.price);
    }
    addCartData()
}

function searchedValue(e)
{
    e.preventDefaut();
    const inputElement = document.querySelector("#input")

    var filteredCartItems = cart.filter(each => each.name.includes(inputElement))

    console.log(filteredCartItems)

}

let filter = document.querySelector(".filter")
filter.innerHTML=`
        <form>
            <div class="searching">
                <input type="text" placeholder="Enter a price" onchange=searchedValue(e) id="input"/>
                <button class="add-button" onclick={onsubmitForm(e)}>
                    <i class="fa fa-search" aria-hidden="true"></i>
                </button>
            </div>
            <div class="sorting">
                <select value="ASC" id="select" onchange={onChangeSelect()}>
                    <option value="ASC" name="filter">ASC</option>
                    <option value="DESC" name="filter">DESC</option>
                </select>
                <button class="clearbutton" onclick={clearCart(e)}>
                 Clear <i class="fa fa-times" aria-hidden="true"></i>
                </button>
            </div>
        </form>
        `


async function addCartData()
{
    try
    {
        cartproductsdiv.innerHTML = "";
        console.log(cart);
        cart.map(({id,name,image,price,quantity})=>
        {
            cartproductsdiv.innerHTML += 
            `
            <div class="productcard" id=${id}>
                    <div class="imgdiv">
                        <img src=${image} alt="">
                    </div>
                    <div class="detailsdiv">
                        <div class="left">
                            <h4>${name}</h4>
                            <h5>$${price}</h5>
                        </div>
                        <div class="right">
                        <span>${quantity}</span>
                        <button onclick="removeProduct(${id})" class="btn">
                        <i class="fa fa-times" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            `
        console.log(cart);
        displayTotal()
        })
    }
    catch(err)
    {
        console.log(err.message);
    }

}

let total=document.querySelector(".total")
console.log(total);

function displayTotal()
{
    const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const averageAmount = totalAmount / cart.length;

    if(cart.length === 0)
    {
        total.innerHTML = `<h2 style="text-align: center">Cart is empty...!</h2>`
    }
    else
    {
        total.innerHTML = `
        <h2>Cart Summary</h2>
            <br/>
            <p>Total Amount: $${totalAmount}</p>
            <hr/>
            <p>Average Amount: $${averageAmount}</p>
            <hr/>
        `;
    }
}