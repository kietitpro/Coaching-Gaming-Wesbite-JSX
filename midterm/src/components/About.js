import React from "react";
import ninjaIcon from "../images/ninjaIcon.jpg"

const About = () => {
  return (
    <div className="container">
      <h3 className="center-align">About Us</h3>
      <p>
        The player controls a single character from an overhead perspective and explores large outdoor areas and caves or dungeons, battling monsters and fulfilling quests from non-player characters (NPCs) to gain experience points and equipment. The game borrows heavily from the Diablo series, particularly Diablo II. All areas aside from the central encampments are randomly generated for increased re-playability. While all players on a single server can freely mingle in encampments, gameplay outside of encampments is highly instanced, providing every player or party with an isolated map to freely explore.

        Players can initially choose from six available classes to play as (Duelist, Marauder, Ranger, Shadow, Templar and Witch). Each of these classes are aligned with one or two of the three core attributes: Strength, Dexterity, or Intelligence. The final class, the Scion, can be unlocked by freeing her near the end of Act 3, and is aligned with all three attributes.[6] The different classes are not restricted from investing into skills not aligned with their core attributes, but will have easier access to skills that are aligned with their core attributes.[13] Items are randomly generated from a wide variety of basic types and endowed with special properties and gem sockets. They come in different rarities with increasingly powerful properties. This makes a large part of gameplay dedicated to finding well-balanced and synergistic equipment. Skill gems can be placed in gem sockets of armor, weapons and some types of rings,[8][14] giving them an active skill. As the character advances and levels up, the equipped skill gems also gain experience, allowing the skills themselves to level up and increase in potency.
      </p>
      <ul className="collection">
        <li class="collection-item avatar">
          <img src={ninjaIcon} alt="" class="circle"/>
          <span class="title">Title</span>
          <p>First Line</p>
          <p>Second line</p>
        </li>
        <li class="collection-item avatar">
          <img src="images/yuna.jpg" alt="" class="circle"/>
          <span class="title">Title</span>
          <p>First Line</p>
          <p>Second line</p>
        </li>
        <li class="collection-item avatar">
          <img src="images/yuna.jpg" alt="" class="circle"/>
          <span class="title">Title</span>
          <p>First Line</p>
          <p>Second line</p>
        </li>
        <li class="collection-item avatar">
          <img src="images/yuna.jpg" alt="" class="circle"/>
          <span class="title">Title</span>
          <p>First Line</p>
          <p>Second line</p>
        </li>
      </ul>
    </div>
  );
};

export default About;
