 # Response 🚀

 Here I'm using a responsive layout, this permits me have acess using a cellphone, tablet or desktop.
 For it, use of estrategies with the CSS units, how will I talk below.
 It was also used CSS Media Queries for add CSS costumization according to the defined breakpoint for the layout adapt to the device.
 I used the special HTML tags to have the most responsive layout possible.
  <br> <br>

 #  <img src="img/jsLogo.png"> JavaScript 
 <a href = "#gif" >Function JS</a>

 I also used JS to add functionality to my cards. In fact, all cards are added dynamically.
 Using a const "images" that receives an array of objects with the data created. And when you click on the card the image opens using a "getAttribute" based on the "id".
 

  <img src="img/site.png">
  <img src="img/resto.png"><br><br>
  <img id="gif" src="img/openImage.gif">
  <br><br>

  # CSS units:
  Layout Fixed: px (pixel)<br>
  Layout Fluid: % percent auto, Auto, vw (ViewPortHeight)<br> and vw(ViewPort Width)<br>
  Text Fixed: px.<br>
  Ex: 1px = 0.75pt or 16px = 12pt<br>
  Text Fluid: em (derived of "father") and <br>
  rem (multipled from root)
  <br> <br>

  # CSS Media Queries:
  In HTML I put the tag meta. 
  meta name="viewport" content="width=device-width, initial-scale=1.0"
  <br> <br> 

  # In Css I use the media. 
  @media (max-width: 320px) { <br>
    #form h3 { <br>
      font-size: 2rem;
   }<br>
  }
  <br><br>
  It can also be done using the atributte "meta" in link of HTML, importing a CSS file
  using the properties the same way you would use the css @media. <br>
   link <br>
    rel="stylesheet"<br>
    href="responsive.css" <br>
    media="screen and (max-width: 768px)"<br>
    link rel="stylesheet" href="print.css" media="print"