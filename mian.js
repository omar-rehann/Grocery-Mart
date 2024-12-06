let allButton = document.querySelectorAll(".continer button");
let icon_shoping = document.querySelectorAll(".shop");
allButton.forEach((e) => {
    let content_product = document.querySelector(".product .content")

    e.addEventListener("click", function() {
        if (e.className === "one") {

            content_product.innerHTML = `
                <div class="row m-2">
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="img/a1.png" alt="">
                        </div>
                        <div class="title">
                            <h4>Ladies Finger 500g</h4>

                        </div>
                        <div class="price">
                            <span><del>$320</del>280</span>

                        </div>
                        <div class="click">
                            <button>Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="img/a2.png" alt="">
                        </div>
                        <div class="title">
                            <h4>Brinjal long 500g</h4>

                        </div>
                        <div class="price">
                            <span><del>$220</del>200</span>

                        </div>
                        <div class="click">
                            <button>Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="img/a3.png" alt="">
                        </div>
                        <div class="title">
                            <h4>Palak 250g</h4>

                        </div>
                        <div class="price">
                            <span><del>$120</del>80</span>

                        </div>
                        <div class="click">
                            <button>Add To Cart</button>

                        </div>

                    </div>

                </div>
            </div>  
            
            `

        } else if (e.className == "two") {
            content_product.innerHTML = `
             <div class="row m-2">
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="img/b1.png" alt="">
                        </div>
                        <div class="title">
                            <h4>Prawns (Big)</h4>

                        </div>
                        <div class="price">
                            <span><del>$320</del>280</span>

                        </div>
                        <div class="click">
                            <button>Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="img/b2.png" alt="">
                        </div>
                        <div class="title">
                            <h4>Silver Belly Fish</h4>

                        </div>
                        <div class="price">
                            <span><del>$220</del>200</span>

                        </div>
                        <div class="click">
                            <button>Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="img/b3.png" alt="">
                        </div>
                        <div class="title">
                            <h4>Prawnd Meat (Small)</h4>

                        </div>
                        <div class="price">
                            <span><del>$120</del>80</span>

                        </div>
                        <div class="click">
                            <button>Add To Cart</button>

                        </div>

                    </div>

                </div>
            </div>
            
            
            `
        } else if (e.className == "three") {

            content_product.innerHTML = `
            <div class="row m-2">
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="img/c1.png" alt="">
                        </div>
                        <div class="title">
                            <h4>Pista Soan Papdi</h4>

                        </div>
                        <div class="price">
                            <span><del>$320</del>280</span>

                        </div>
                        <div class="click">
                            <button>Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="img/c2.png" alt="">
                        </div>
                        <div class="title">
                            <h4>KARACHI Halwa Box</h4>

                        </div>
                        <div class="price">
                            <span><del>$220</del>200</span>

                        </div>
                        <div class="click">
                            <button>Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="img/c3.png" alt="">
                        </div>
                        <div class="title">
                            <h4>KARACHI Halwa Cookies</h4>

                        </div>
                        <div class="price">
                            <span><del>$120</del>80</span>

                        </div>
                        <div class="click">
                            <button>Add To Cart</button>

                        </div>

                    </div>

                </div>
            </div>
            
            `
        } else {
            e.style.background = "red";

            content_product.innerHTML = `
             <div class="row m-2">
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="img/d1.png" alt="">
                        </div>
                        <div class="title">
                            <h4>Thums Up Soft drink</h4>

                        </div>
                        <div class="price">
                            <span><del>$320</del>280</span>

                        </div>
                        <div class="click">
                            <button>Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="img/d2.png" alt="">
                        </div>
                        <div class="title">
                            <h4>Coca-Cola Can</h4>

                        </div>
                        <div class="price">
                            <span><del>$220</del>200</span>

                        </div>
                        <div class="click">
                            <button>Add To Cart</button>

                        </div>

                    </div>

                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="img/d3.png" alt="">
                        </div>
                        <div class="title">
                            <h4>Fanta PET Bottle</h4>

                        </div>
                        <div class="price">
                            <span><del>$120</del>80</span>

                        </div>
                        <div class="click">
                            <button>Add To Cart</button>

                        </div>

                    </div>

                </div>
            </div>`
        }
        allButton.forEach((l) => {
            l.style.background = ""
        })
        e.style.background = "red";

    })
});
icon_shoping.onclick = function() {
    window.href = "product.html"
}

function store_item(img, name, price) {
    let all_products = JSON.parse(window.localStorage.getItem("items")) || [];
    let product = {
        img_item: img,
        name_item: name,
        price_item: price,
    };
    all_products.push(product);
    window.localStorage.setItem("items", JSON.stringify(all_products));
    display()
}

function delete_item(index) {
    let all_products = JSON.parse(window.localStorage.getItem("items")) || [];
    all_products.splice(index, 1);
    window.localStorage.setItem("items", JSON.stringify(all_products));

    display();
}

function display() {
    let items = JSON.parse(window.localStorage.getItem("items"));
    let section_products = document.querySelector(".products");
    let add_content = '';

    if (items && items.length > 0) {
        items.forEach((result, index) => {
            add_content += `
                <div class="row m-2">
                    <div class="box">
                        <div class="image">
                            <img src="${result.img_item}" alt="">
                        </div>
                        <div class="title">
                            <h5>${result.name_item}</h5>
                            <h5>${result.price_item}</h5>
                        </div>
                        <div class="remove">
                            <i class="fa-solid fa-trash-can" onclick="delete_item(${index})"></i>
                        </div>
                    </div>
                </div>
            `;
        });
        section_products.innerHTML = add_content;
    } else {
        section_products.innerHTML = `
        <div class="row">
            <div class="image">
                <img src="img/nodata.jpg" alt="">
            </div>
        </div>
        
        `;
    }
}
display();