# webapplication-to-display-product-details-using-productId-with-Nodejs
<h4>This project is to fetch product details from flipkart by using product Id.<h4>

# Languages Used
<h4>Nodejs with ExpressJs is used as backend server</h4>
<h4>Html, Css and Angular Js are used for Front-end</h4>
<br>

# Project Break-down
<h4>=> An form which takes product Id as input is created in "hello.html" in views folder</h4>
<h4>=> "index.html" file is created in views folder which acts as a parent file for all angular Js files.</h4>
<h4>=> The public directory is made static in "server.js" file.</h4>
<h3>Backend:</h3>
<h5>=> The "/searchProduct"  route  in "searchRoute.js" is used as REST api</h5>
<h5>=> A npm pacage named 'flipkart-api-affiliate-client' is used. </h5>
<h5>=> We use "doIdSearch()" function from that package to search for the product using Product Id</h5>
<h5>=> We return json data which contains product data and success message as response</h5>
<hr>
<h3>Frontend:</h3>
<h5>=> A controller named searchCtrl is created in "searchController.js" </h5>
<h5>=> The data is submitted to searchProductUsingId() function from "hello.html"</h5>
<h5>=> Then the to "/id/<product ID>" </h5>
<h5>=> For every Route Change we check if the present route has product id or not and if there is a Product Id then we send the data to "/SearchProduct" Route</h5>
<h5>=> Then we get the JSON data as response and we display that data in product.html with some Css</h5>
