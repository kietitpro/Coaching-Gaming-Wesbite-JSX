import React from "react";
import ninjaIcon from "../images/ninjaIcon.jpg";
import shroud from "../images/shroudIcon.jpg";
import xqc from "../images/xqc.jpg";

const About = () => {
  return (
    <div className="container">
      <h1 className="center-align">About Us</h1>
      <p>
        The player controls a single character from an overhead perspective and
        explores large outdoor areas and caves or dungeons, battling monsters
        and fulfilling quests from non-player characters (NPCs) to gain
        experience points and equipment. The game borrows heavily from the
        Diablo series, particularly Diablo II. All areas aside from the central
        encampments are randomly generated for increased re-playability. While
        all players on a single server can freely mingle in encampments,
        gameplay outside of encampments is highly instanced, providing every
        player or party with an isolated map to freely explore. Players can
        initially choose from six available classes to play as (Duelist,
        Marauder, Ranger, Shadow, Templar and Witch). Each of these classes are
        aligned with one or two of the three core attributes: Strength,
        Dexterity, or Intelligence. The final class, the Scion, can be unlocked
        by freeing her near the end of Act 3, and is aligned with all three
        attributes.[6] The different classes are not restricted from investing
        into skills not aligned with their core attributes, but will have easier
        access to skills that are aligned with their core attributes.[13] Items
        are randomly generated from a wide variety of basic types and endowed
        with special properties and gem sockets. They come in different rarities
        with increasingly powerful properties. This makes a large part of
        gameplay dedicated to finding well-balanced and synergistic equipment.
        Skill gems can be placed in gem sockets of armor, weapons and some types
        of rings,[8][14] giving them an active skill. As the character advances
        and levels up, the equipped skill gems also gain experience, allowing
        the skills themselves to level up and increase in potency.
      </p>
      <ul>
        <li>
          <img
            src={ninjaIcon}
            width="180px"
            height="130px"
            className="circle"
          />
          <span class="title">Ninja</span>
          <p>
            You can't just drop everything and focus on playing video games for
            a living!
          </p>
          <p>
            I like to focus on the coaching and understand what will be best for
            players to improve upon.
          </p>
        </li>
        <li>
          <img src={shroud} width="180px" height="130px" className="circle" />
          <span class="title">Shroud</span>
          <p>
            One of the best way to improve your skill is to watch your replays!
          </p>
          <p>Aiming isn't the only quality to be a good player.</p>
        </li>
        <li>
          <img src={xqc} width="180px" height="130px" className="circle" />
          <span class="title">XQC</span>
          <p>It doesn't always have to be about winning!</p>
          <p>To become a better player you must first learn how to have fun.</p>
        </li>
      </ul>
    </div>
  );
};

export default About;
