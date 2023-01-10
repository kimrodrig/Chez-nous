import React from 'react'

function About() {
  return (
    <div className="p-5">
     <a class="inline-block px-6 py-2.5 text-3xl leading-tight rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="collapse" href="#collapseWithScrollbar" role="button" aria-expanded="false" aria-controls="collapseWithScrollbar">
    about
  </a>
  <div class="collapse mt-4 max-h-68 overflow-y-auto p-5" id="collapseWithScrollbar">
  <p className="about-p">
        <em>chez nous</em> is a restaurant run out of a residential apartment. We—the two of us, Kevin and Kim—believe a lot of restaurant overhead is unnecessary and obstructive to a fine dining experience. Commercial real estate, excessive and outdated equipment, passionless drones on the line, delivery costs, the archaic ‘gratuity’ system, abundant waste: all of these aspects are actually sabotaging your meal when you eat out.
      </p>
      <br/>
      <p className="about-p">
        Our dinner is different. We’ve crafted a beautiful tasting menu with complete creative autonomy, since we’re working from home. And the costs—physical, financial, emotional—are lower than they would be if we had to contend with everything I listed above. So dinner is much less expensive (and better) than it would be elsewhere.
      </p>
      <br/>
      <p className="about-p">
        I don’t want to give too much away. But I want to provide a clear picture of what you might be signing up for. Right now, we're in Long Island City. We set up a handful of tables in a living room, and when you reserve one, you are booking a full four-plus course menu (including unscripted surprises) with a wine and cocktail pairing. We’re cooking and expediting from the kitchen using modern space- and energy-efficient appliances.
      </p>
      <br/>
      <p className="about-p">  
        The dinner plus pairing costs $125. The way that we’re running the service requires parties to arrive on time, because cooking is all about timing, and tardiness throws off the way courses get plated, especially in a small kitchen. So that’s our only request: come open-minded, hungry, and on time. And bring cash. There’s a $25 deposit that needs to be paid in advance, and once you arrive, you’ll pay $100. Instructions regarding the deposit will be provided upon making a reservation. The exact location will also be disclosed at that point.
      </p>
      <br/>
      <p className="about-p">
        Last Tuesday we had our friends and family dinner which went really smoothly and ended up being riotously fun. I’m attaching the menu from that dinner below. Our next dinner will be on Tuesday, January 17. We expect to keep the menu largely the same for that, but of course there will be modifications. We have a vegan menu and will try to accommodate your dietary restrictions, but please tell us in advance! You can do so when you book a reservation. We look forward to seeing you soon!
      </p>
  </div>
  
    </div>
  )
}

export default About