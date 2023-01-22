import React from 'react';
import Hyphenated from 'react-hyphen';

function About() {
  return (
    <div className="p-5 max-w-xl">
      <Hyphenated>
        <p className="about-p">
          <em>chez nous</em> is a restaurant run out of a residential apartment. We—the two of us, Kevin and Kim—believe a lot of restaurant overhead is unnecessary and obstructive to gastronomy. Commercial real estate costs, excessive and outdated equipment, the archaic gratuity system, abundant waste: you are actually paying the hidden price for all of this when you eat out.
        </p>
        <br/>
        <p className="about-p">
          Our dinner is different. We’ve married our Michelin experience and technique with state of the art culinary tech that has only become available in the last few years. The hours we spend in the kitchen experimenting like mad chemists regularly produce more than we can fit on our two menus. Having real creative autonomy is amazing. And we're making the most of that freedom to <em>stay true to imagination.</em> The meals we design are always evolving and sparkling, we hope, with candor and originality.
        </p>
        <br/>
        <p className="about-p">
          Right now, we're in Brooklyn. We set up a handful of tables in a living room, and when you reserve one, you are booking a full five course menu (plus unscripted surprises) with a wine and cocktail pairing. We’re cooking and expediting from the kitchen.
        </p>
        <br/>
        <p className="about-p">  
          The dinner plus pairing costs $125. The way that we’re running the service requires parties to arrive on time, because cooking is timing, and when tardiness throws off the rhythm of plating it can actually affect other tables as well. So that’s our request: come open-minded, hungry, and on time. And bring cash. There’s a $25 deposit that needs to be paid in advance, and once you arrive, you’ll pay $100. Instructions regarding the deposit will be provided upon making a reservation. The exact location will also be disclosed at that point.
        </p>
        <br/>
        <p className="about-p">
          We have a vegan menu and will try to accommodate your dietary restrictions, but please tell us in advance. You can do so when you book a reservation. 
        </p>
        <br/>
        <p className="about-p">
          Simply choose a time on our reservations page. We look forward to seeing you soon!
        </p>
      </Hyphenated>
    </div>
    )
}

export default About