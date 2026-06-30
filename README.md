<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Ambigai Tourism - Ooty Cab & Tours</title>

  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

  <style>
    *{margin:0;padding:0;box-sizing:border-box;font-family:Poppins,sans-serif;}
    body{scroll-behavior:smooth;}

    /* Navbar */
    nav{
      position:sticky;top:0;
      background:#0f172a;
      display:flex;justify-content:space-between;
      padding:15px 30px;
      color:white;z-index:1000;
    }
    nav h1{font-size:20px;color:#38bdf8;}
    nav ul{display:flex;gap:20px;list-style:none;}
    nav ul li a{color:white;text-decoration:none;font-size:14px;}

    /* Hero */
    .hero{
      height:90vh;
      background:url('https://images.unsplash.com/photo-1501785888041-af3ef285b470') center/cover;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      color:white;
      text-align:center;
      padding:20px;
    }
    .hero h2{font-size:40px;}
    .hero p{margin:10px 0 20px;}
    .btn{
      padding:12px 20px;
      background:#22c55e;
      color:white;
      border:none;
      border-radius:8px;
      cursor:pointer;
      text-decoration:none;
    }

    /* Sections */
    section{padding:60px 20px;text-align:center;}
    h2{margin-bottom:20px;}

    /* Fleet */
    .fleet{
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
      gap:20px;
    }
    .card{
      background:#f1f5f9;
      padding:20px;
      border-radius:12px;
      box-shadow:0 5px 10px rgba(0,0,0,0.1);
    }

    /* WhatsApp Floating Button */
    .whatsapp{
      position:fixed;
      bottom:20px;
      right:20px;
      background:#25d366;
      color:white;
      padding:15px;
      border-radius:50%;
      font-size:20px;
      text-decoration:none;
    }

    footer{
      background:#0f172a;
      color:white;
      padding:20px;
      text-align:center;
    }
  </style>
</head>

<body>

<!-- NAV -->
<nav>
  <h1>Ambigai Tourism</h1>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#fleet">Fleet</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<!-- HERO -->
<div class="hero" id="home">
  <h2>Explore Ooty with Ambigai Tourism</h2>
  <p>Premium Cab Service • Local • Outstation • Tours</p>
  <a class="btn"
     href="https://wa.me/919626172090?text=Hello%20Ambigai%20Tourism%2C%20I%20want%20to%20book%20a%20cab%20for%20Ooty%20trip">
     Book on WhatsApp
  </a>
</div>

<!-- FLEET -->
<section id="fleet">
  <h2>Our Fleet</h2>
  <div class="fleet">
    <div class="card">🚗 4 Seater</div>
    <div class="card">🚙 5 Seater SUV</div>
    <div class="card">🚐 7 Seater MUV</div>
    <div class="card">🚐 14 Seater Tempo Traveller</div>
    <div class="card">🚌 24 Seater Tourist Bus</div>
  </div>
</section>

<!-- SERVICES -->
<section id="services">
  <h2>Our Services</h2>
  <p>✔ Local Ooty Sightseeing</p>
  <p>✔ Hourly Rental</p>
  <p>✔ Outstation Trips</p>
  <p>✔ Custom Tour Packages</p>
</section>

<!-- CONTACT -->
<section id="contact">
  <h2>Contact Us</h2>
  <p>📍 Anna Nagar, Ooty - 643214</p>
  <p>📞 9626172090</p>
  <p>✉ sragency745@gmail.com</p>
</section>

<!-- FOOTER -->
<footer>
  © 2026 Ambigai Tourism | All Rights Reserved
</footer>

<!-- WhatsApp Floating -->
<a class="whatsapp"
   href="https://wa.me/919626172090"
   target="_blank">
   💬
</a>

</body>
</html>
