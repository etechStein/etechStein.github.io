---
layout: default
---

<div class="home">
  <div class="full-hero hero-home">
    <div class="hero-content">
      <h1>Evil Technilogies!</h1>
      <ul class="social-list">
        <li>
          <a href="http://example.com/" class="social-link">
            <i class="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="http://example.com/" class="social-link">
            <i class="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="http://example.com/" class="social-link">
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
        Evil Technologies is the leader in evil genius hideawaies, private island aquasitions, as well as operations management for keeping those pesky "tourists out of you hair, as well as agent snaring <em>MANTRAPS</em>, which includes both "non-lethal"
        like the zaptronics zaputron mach 3, the diablo chili eye wash station, or a plain ol' dart laced with our secret dart'oherbs and spices, and "wish it was lethal"
         traps like the papercutamatic inflicts 1,000 papercuts before spraying a healthy dose of lemon juice to prevent the scurvy, the attack dogs who cannot bark, yes we breed em with no vocal cues so they'll never hear them coming, , and our complete sensory depravation chambers for those pesky long term agents that you just can't shake.
      </p>
      <p>
        We believe there are <strong>at least a billion people</strong> who can
        benefit from being subjucated under the thumb of a wise  ruler, probably more. To join
        our movement,
        <a href="https://etechstein.github.io/#email_list">sign up for our official
        email list</a> now.
      </p>
      <h3>Background</h3>
      <p>
        Learn Enough to Be Dangerous is an outgrowth of the
        <a href="http://railstutorial.org/">Ruby on Rails Tutorial</a> and the
        <a href="http://www.softcover.io/">Softcover publishing platform</a>.
        This page is part of the sample site for
        <a href="https://learnenough.com/css-tutorial"><em>Learn Enough CSS and
        Layout to Be Dangerous</em></a>, which teaches the basics of
        <strong>C</strong>ascading <strong>S</strong>tyle
        <strong>S</strong>heets, the language that allows web pages to be styled.
        Other related tutorials can be found at
        <a href="https://learnenough.com/">learnenough.com</a>.
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
      These are the two guys that made Evil Technologies &copy; <sup><quote>Doing the most good with evil!&trade;</quote></sup> the world known super organization it is today.
    </p>

    <div class="bio-wrapper">
      <div class="bio-box">
        <img src="http://placekitten.com/g/400/400">
        <h3>Dak Rambo</h3>
        <a href="http://twitter.com/etech" class="social-link">
          <i class="fa fa-twitter"></i>
        </a>
        <div class="bio-copy">
          <p>
            Known for his dazzling charm, rapier wit, and unrivaled humility,
           Dak is an aspiring world leader, usually seen wandering around with his head in book or the clouds, rumors that he's secretly a supervillain
            are slightly exaggerated.
          </p>
        </div>

        <div class="bio-box">
            <img src="http://placekitten.com/g/400/400">
            <h3>Zaphod Beeblebrox</h3>
            <a href="http://twitter.com/etech" class="social-link">
              <i class="fa fa-twitter"></i>
            </a>
            <div class="bio-copy">
              <p>
                Known for his drunken parties, two heads, and being one frooping hoop dude.,
               Zaphod is the former leader of the universe, usually found bumming around somewhere in the vacinity of beetlegeuse. Any accusations of Zaphond being a supervillian are slander and will be taken care of...I'm talking you Arthur Dent...                are slightly exaggerated.
              </p>
            </div>
      </div>
      
      </div>
    </div>
  </div>
</div>
