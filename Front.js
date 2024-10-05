import React from 'react'

function Front() {
  return (
    <div>

  
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">E-Shop</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        {/* <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Products</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Cart</a>
                </li>
            </ul>
        </div> */}
    </nav>
    <header className="bg-primary text-white py-5">
        <div className="container d-flex align-items-center">
        <img 
        src="./logo.png"
        alt="E-Shop Logo" 
        style={{ width: '200px', height: '200px', marginRight: '30px' }} 
      />
      <div className="text-center flex-grow-1">
        <h1>WELCOME!</h1>
        {/* <p>Your one-stop shop for the best products</p> */}
        <a href="#products" className="btn btn-light btn-lg">Shop Now</a>
      </div>
    </div>
  </header>


    {/* <header class="bg-primary text-white text-center py-5">
        <h1>Welcome to Our SHOP!</h1>
        <p>Your one-stop shop for the best products</p>
        <a href="#products" class="btn btn-light btn-lg">Shop Now</a>
    </header> */}

  
    <section id="products" class="container my-5">
        <h2 class="text-center mb-4">Featured Products</h2>
        <div class="row">
            <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <img src="./dress-png-5.png" class="card-img-top" alt="Product 1"/>
                    <div class="card-body">
                        <h5 class="card-title">Product 1</h5>
                        <p class="card-text">$19.99</p>
                        <a href="#" class="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <img src="./pngtree-dress-ladies-clothes-png-image_6747149.png" class="card-img-top" alt="Product 2"/>
                    <div class="card-body">
                        <h5 class="card-title">Product 2</h5>
                        <p class="card-text">$29.99</p>
                        <a href="#" class="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <img src="./istockphoto-492462644-612x612.jpg" class="card-img-top" alt="Product 3"/>
                    <div class="card-body">
                        <h5 class="card-title">Product 3</h5>
                        <p class="card-text">$39.99</p>
                        <a href="#" class="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    </div>
  )
}

export default Front
