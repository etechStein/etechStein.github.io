---
layout: default
---

<div class="home">
  <div class="full-hero hero-home">
    <div class="hero-content">
      <h1>Evil Technologies!</h1>
      <ul class="social-list">
        <li>
          <a href="etechstein.github.io/" class="social-link">
            <i class="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="http://etechstein.github.io/" class="social-link">
            <i class="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="http://etechstein.github.io" class="social-link">
            <i class="fa fa-github"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>

  <div class="home-callout">
    <h1 class="callout-title">Doin the most good with evil!</h1>
    <div class="callout-copy">
      <p>
        At 3v1l T3chnologies, we are your gateway to the world of diabolical ingenuity. Inspired by the wickedly creative need to stay ahead of todays superspies, we bring you the tools and gadgets that will make your sinister dreams a reality. Whether you're a budding villain or an experienced mastermind, our cutting-edge products are designed to help you conquer the world, one dastardly plan at a time.
      </p>
      <p>
        We believe there are <strong>at least a billion people</strong> who can
        benefit from being subjucated under the thumb of a wise  ruler, probably more. To join
        our movement,
        <a href="[def]">sign up for our official
        email list</a> now.
      </p>
   </div>
  </div>

  <div class="home-section">
    <h4>Most recent post</h4>
    {% for post in site.posts limit:1 %}
      {% include post-excerpt.html %}
    {% endfor %}

  </div>

  <div class="home-section">
    <h2>THE FOUNDERS</h2>
    <p>
      This is the guy that made Evil Technologies &copy; <sup><quote>Doing the most good with evil!&trade;</quote></sup> the world known super organization it is today. Our mission is to empower the evil genius in everyone by offering high-quality products that enhance the villainous experience.
      Join us in embracing the dark side, and together, we'll reshape the world in our image.
    </p>

    <div class="bio-wrapper">
      <div class="bio-box">
        <img src="http://placekitten.com/g/400/400">
        <h3>Dr Victor Malice</h3>
        <a href="http://twitter.com/etech" class="social-link">
          <i class="fa fa-twitter"></i>
        </a>
        <div class="bio-copy">
          <p>
           Dr. Victor Malice is the brilliant and enigmatic CEO of 3v1l T3chnologies, the world's leading manufacturer of diabolical gadgets. With a doctorate in Evil Engineering from the prestigious Villainous University, Dr. Malice has dedicated his life to perfecting the art of villainy and innovation, rumors that he's secretly a supervillain
            are slightly exaggerated.
          </p>
          <strong><em><h6>Vision</h6></em></strong>
          <p> 
          As the CEO of 3v1l T3chnologies, Dr. Malice has a clear vision: to empower individuals with the tools and technology needed to achieve their wildest villainous dreams. He believes that everyone has the potential for greatness in the world of evil, and his products are designed to make that journey accessible and thrilling.
          </p>

          <strong><em><h6>Legacy</h6></em></strong>
          <p>
          With a thirst for world domination and an unyielding dedication to the world of gaming, Dr. Victor Malice is not just a CEO but a symbol of what it means to be a true evil genius. His legacy at 3v1l T3chnologies continues to inspire aspiring villains and gamers alike, pushing the boundaries of what's possible in the world of virtual villainy.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


[def]: ttps://etechstein.github.io/#email_lis