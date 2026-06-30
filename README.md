<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ambigai Tourism | Ooty Travels</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Poppins,sans-serif;
}

body{
background:#f8f9fa;
color:#333;
}

header{
background:#0d3b66;
padding:15px 8%;
display:flex;
justify-content:space-between;
align-items:center;
position:sticky;
top:0;
z-index:1000;
}

.logo{
display:flex;
align-items:center;
gap:10px;
}

.logo img{
width:55px;
height:55px;
border-radius:50%;
}

.logo h2{
color:white;
}

nav a{
color:white;
text-decoration:none;
margin-left:20px;
font-weight:500;
}

.hero{
height:90vh;
background:url("hero.jpg") center/cover;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
position:relative;
}

.hero::before{
content:"";
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.55);
}

.hero-content{
position:relative;
color:white;
}

.hero h1{
font-size:55px;
}

.hero p{
margin:20px 0;
font-size:20px;
}

.btn{
display:inline-block;
padding:15px 30px;
background:#ff9800;
color:white;
text-decoration:none;
border-radius:8px;
font-weight:bold;
}

section{
padding:70px 8%;
}

.title{
text-align:center;
font-size:35px;
margin-bottom:40px;
color:#0d3b66;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:25px;
}

.card{
background:white;
border-radius:12px;
overflow:hidden;
box-shadow:0 5px 15px rgba(0,0,0,.1);
transition:.3s;
}

.card:hover{
transform:translateY(-8px);
}

.card img{
width:100%;
height:220px;
object-fit:cover;
}

.card h3{
padding:15px;
}

.card p{
padding:0 15px 20px;
}

.review{
background:white;
padding:20px;
border-radius:10px;
box-shadow:0 5px 15px rgba(0,0,0,.08);
}

.review h4{
color:#ff9800;
margin-bottom:10px;
}

.contact{
background:#0d3b66;
color:white;
text-align:center;
padding:50px;
}

.whatsapp{
position:fixed;
right:20px;
bottom:20px;
background:#25D366;
color:white;
width:60px;
height:60px;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
font-size:30px;
text-decoration:none;
box-shadow:0 5px 10px rgba(0,0,0,.3);
}

footer{
background:#08263d;
color:white;
text-align:center;
padding:20px;
}

</style>

</head>
<body>

<header>

<div class="logo">
<img src="logo.webp">
<h2>Ambigai Tourism</h2>
</div>

<nav>
<a href="#">Home</a>
<a href="#">Fleet</a>
<a href="#">Packages</a>
<a href="#">Reviews</a>
<a href="#">Contact</a>
</nav>

</header>

<section class="hero">

<div class="hero-content">

<h1>Explore Ooty With Ambigai Tourism</h1>

<p>Luxury Cab Service • Local Sightseeing • Outstation Trips</p>

<a class="btn"
href="https://wa.me/919626172090?text=Hello%20Ambigai%20Tourism%20I%20want%20to%20book%20a%20cab">
Book on WhatsApp
</a>

</div>

</section>

<section>

<h2 class="title">Our Fleet</h2>

<div class="cards">

<div class="card">
<img src="etios.jpg">
<h3>Sedan</h3>
<p>Comfortable 4 Seater for city and outstation trips.</p>
</div>

<div class="card">
<img src="bolero.jpg">
<h3>SUV</h3>
<p>Spacious SUV for family tours.</p>
</div>

<div class="card">
<img src="ertiga.jpg">
<h3>Ertiga</h3>
<p>Premium 7 Seater vehicle.</p>
</div>

<div class="card">
<img src="tempo.jpg">
<h3>Tempo Traveller</h3>
<p>14 to 25 Seater group travel.</p>
</div>

</div>

</section>

<section>

<h2 class="title">Customer Reviews</h2>

<div class="cards">

<div class="review">
<h4>★★★★★</h4>
<p>Excellent cab service in Ooty. Clean vehicle and friendly driver.</p>
<strong>Ramesh</strong>
</div>

<div class="review">
<h4>★★★★★</h4>
<p>Very professional service. Highly recommended.</p>
<strong>Priya</strong>
</div>

<div class="review">
<h4>★★★★★</h4>
<p>Affordable price and amazing sightseeing experience.</p>
<strong>Arun</strong>
</div>

</div>

</section>

<section class="contact">

<h2>Contact Us</h2>

<p>📍 Anna Nagar, Ooty, Tamil Nadu - 643214</p>

<p>📞 9626172090</p>

<p>✉ sragency745@gmail.com</p>

<br>

<a class="btn"
href="https://wa.me/919626172090">
Book Now
</a>

</section>

<footer>

© 2026 Ambigai Tourism | All Rights Reserved

</footer>

<a class="whatsapp"
href="https://wa.me/919626172090">
💬
</a>

</body>
</html>
