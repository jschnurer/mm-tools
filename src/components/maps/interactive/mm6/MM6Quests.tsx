import Modal from "components/layout/Modal";
import classList from "helpers/styleHelpers";
import React, { useEffect, useRef } from "react";
import { IQuestModalProps } from "../MapTypes";
import styles from "./MM6Quests.module.scss";

const MM6Quests: React.FC<IQuestModalProps> = ({
  focusQuestSlug,
  onClose,
}) => {
  const questListRef = useRef<HTMLOListElement>(null);
  const subquestListRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    if (focusQuestSlug
      && questListRef.current
      && subquestListRef.current) {
      for (let i = 0; i < questListRef.current.children.length; i++) {
        const item = questListRef.current.children.item(i);
        if (item && item.id === focusQuestSlug) {
          item.scrollIntoView();
          break;
        }
      }

      for (let i = 0; i < subquestListRef.current.children.length; i++) {
        const item = subquestListRef.current.children.item(i);
        if (item && item.id === focusQuestSlug) {
          item.scrollIntoView();
          break;
        }
      }
    }
  }, [
    focusQuestSlug,
    questListRef,
    subquestListRef,
  ])

  return (
    <Modal
      header="MM6 Quests"
      onClose={onClose}
      footer={(
        <button
          className="primary-button"
          onClick={onClose}
        >
          Close
        </button>
      )}
    >
      <h2>Quests</h2>
      <ol ref={questListRef}>
        <li id="QUEST_1">
          Show Sulman's Letter to Andover Potbello.
          <ul>
            <li>Mission: Unknown, but Seer in Castle Ironfist (#32) gives you this advice too</li>
            <li>Solution: You start the game with this quest, and with the letter. Go into the Inn of New Sorpigal and show it to Andover Potbello.</li>
            <li>Reward: 1000gp, 3.000 xp, 0 karma</li>
            <li>Award: -</li>
          </ul>

        </li>
        <li id="QUEST_2">
          Bring Sulman's Letter to Regent Wilbur Humphrey.
      <ul>
            <li>Mission: Andover Potbello in New Sorpigal (#1) (Seer in Castle Ironfist (#32) gives you this advice too)</li>
            <li>Solution: Go into the castle at Castle Ironfist and show it to Regent Wilbur Humphrey.</li>
            <li>Reward: 5000gp, 3.000 xp, 0 karma</li>
            <li>Award: <i>Delivered 6th Letter to Wilbur Humphrey</i></li>
          </ul>

        </li>
        <li id="QUEST_3">
          Find the combination to the vault door in Goblinwatch.
      <ul>
            <li>Mission: Janice in New Sorpigal (#21)</li>
            <li>Solution: Go into the Goblinwatch at New Sorpigal and bring back the Combination Scroll.</li>
            <li>Reward: 2000gp, 2.000 xp, +50 karma</li>
            <li>Award: <i>Solved the Goblinwatch Combination</i></li>
          </ul>

        </li>
        <li id="QUEST_4">
          Retrieve the Candelabra.
      <ul>
            <li>Mission: Andover Potbello in New Sorpigal (#1)</li>
            <li>Solution: Go into the Abandoned Temple at New Sorpigal, and bring back the item to him.</li>
            <li>Reward: 1000gp, 2.000 xp, -200 karma</li>
            <li>Award: <i>Retrieved the Baa Candelabra</i></li>
          </ul>

        </li>
        <li id="QUEST_5">
          Kill the Queen of the Spiders.
      <ul>
            <li>Mission: Buford T. Allman in New Sorpigal (#7)</li>
            <li>Solution: Go into the Abandoned Temple at New Sorpigal, and bring back the heart of queen to him.</li>
            <li>Reward: 1000gp, 3.000 xp, 0 karma</li>
            <li>Award: <i>Killed the Spider Queen</i></li>
          </ul>

        </li>
        <li id="QUEST_6">
          Rescue Sharry.
      <ul>
            <li>Mission: Frank Fairchild in New Sorpingal (#21)</li>
            <li>Solution: Go into the Shadow Guild Hideout at Castle Ironfist and return with her.</li>
            <li>Reward: 2000gp, 10.000 xp, 0 karma</li>
            <li>Award: <i>Rescued Sharry</i></li>
          </ul>

        </li>
        <li id="QUEST_7">
          Rescue Angela.
      <ul>
            <li>Mission: Violet Dawson in New Sorpingal (#6)</li>
            <li>Solution: Go into the Abandoned Temple at New Sorpingal and return with her.</li>
            <li>Reward: 500gp, 10 food, 1.000 xp, 0 karma</li>
            <li>Award: <i>Rescued Angela</i></li>
          </ul>

        </li>
        <li id="QUEST_8">
          Get the Chime of Harmony.
      <ul>
            <li>Mission: Janice in New Sorpingal (#21)</li>
            <li>Solution: Go into the Temple of Baa at Castle Ironfist and bring back the item.</li>
            <li>Reward: 5000gp, 10.000 xp, +50 karma</li>
            <li>Award: <i>Returned with the Chime of Harmony</i></li>
          </ul>

        </li>
        <li id="QUEST_9">
          Retrieve the Harp.
      <ul>
            <li>Mission: Andrew Besper in Castle Ironfist (#6)</li>
            <li>Solution: Go into the Dragoon's Caverns at Castle Ironfist and bring back the item.</li>
            <li>Reward: 5000gp, 10.000 xp, +50 karma</li>
            <li>Award: <i>Retrieved Andrew's Harp</i></li>
          </ul>

        </li>
        <li id="QUEST_10">
          Find and return Prince Nicolai. (#24)
      <ul>
            <li>Mission: Nobody (Talk to Prince Nikolai in castle at Castle Ironfist (#24), leave the castle, click on rest icon, Nicolai disappeares).</li>
            <li>Solution: Go into the main tent of Circus, talk to Nicolai, and return with him. While this quest is in progress, you cannot visit the castle. The circus is at Bootleg Bay (December-March), Blackshire (April-July), Mire of the Damned (August-November).</li>
            <li>Reward: 0gp, 7.500 xp, 0 karma</li>
            <li>Award: <i>Returned the Prince</i>, but not shown (BUG!).
            There are six tents at circus that each have a game that test one of six primary stats. 50gp to play each time. You can win a Lodestone, a Harpy Feather, or a Four Leaf Clover. Play in one of tent with character, who has the highest skill. In the big tent you can trade. A Lodestone is worth 1 point; a Harpy Feather is worth 3 points and a Four Leaf Clover is worth 5. You can buy a keg of wine for 10 or a golden pyramid for 30. Davis Carp is seeking Lodestones, Bonnie Rotterdam is seeking Harpy Feathers, Geoff Southy is seeking Four Leaf Clovers, Nick Fenster is seeking Kegs of Wine, and Renee Blackburn is seeking Golden Pyramids at Free Haven. But the best choice is to go to Najat Ramadi, Kerman Murian, or Irbil Baktarian at Dragonsands with pyramids, and to buy great items.
         </li>
          </ul>

        </li>
        <li id="QUEST_11">
          Rescue a Damsel in Distress.
      <ul>
            <li>Mission: Regent Wilbur Humphrey in Castle Ironfist (#24)</li>
            <li>Solution: Go into the Silver Helm Outpost at Misty Islands and return with Melody Silver.</li>
            <li>Reward: 0 gp, 15.000 xp, +50 karma</li>
            <li>Award: <i>Received promotion to (honorary) Crusader</i></li>
          </ul>

        </li>
        <li id="QUEST_12">
          Find Lord Kilburn's Shield.
      <ul>
            <li>Mission: Regent Wilbur Humphrey in Castle Ironfist (#24), and Seer in Castle Ironfist (#32) gives you this advice too</li>
            <li>Solution: Go to middle of Blackshire, open the chest and bring back the item.</li>
            <li>Reward: 5000gp, 40.000 xp, +200 karma</li>
            <li>Award: <i>Retrieved Lord Kilburn's Shield</i> (the lord gives his vote on the High Council at Free Haven)</li>
          </ul>

        </li>
        <li id="QUEST_13">
          Find the Hourglass of Time.
      <ul>
            <li>Mission: Lord Albert Newton in Misty Islands (#28), and Seer in Castle Ironfist (#32) gives you this advice too</li>
            <li>Solution: Go into the Gharik's Forge at New Sorpigal, and bring back the item.</li>
            <li>Reward: 0 gp, 50.000 xp, +200 karma</li>
            <li>Award: <i>Retrieved Hourglass of Time</i> (the lord gives his vote on the High Council at Free Haven)</li>
          </ul>

        </li>
        <li id="QUEST_14">
          Drink from the Fountain of Magic.
      <ul>
            <li>Mission: Lord Albert Newton in Misty Islands
            </li>
            <li>Solution: Go to the middle south of Bootleg Bay, drink from fountain and return.</li>
            <li>Reward: 0 gp, 15.000 xp, +50 karma</li>
            <li>Award: <i>Received promotion to (honorary) Wizard</i></li>
          </ul>

        </li>
        <li id="QUEST_15">
          Storm the Silver Helm Outpost.
      <ul>
            <li>Mission: Charles D'Sorpigal in Misty Islands (#12)</li>
            <li>Solution: Go into the Silver Helm Outpost at Misty Islands and bring back the Enemies List Scroll.</li>
            <li>Reward: 3000gp, 15.000 xp, +50 karma</li>
            <li>Award: <i>Saved the Mayor of Mist</i></li>
          </ul>

        </li>
        <li id="QUEST_16">
          Destroy the crystal in the Temple of the Fist.
      <ul>
            <li>Mission: Winston Schezar in Bootleg Bay (#9)</li>
            <li>Solution: Go into the Temple of the Fist at Bootleg Bay, destroy the crystal and return.</li>
            <li>Reward: 3000gp, 10.000 xp, +50 karma</li>
            <li>Award: <i>Destroyed the wicked crystal</i></li>
          </ul>

        </li>
        <li id="QUEST_17">
          Destroy the Devil's Outpost.
      <ul>
            <li>Mission: Lord Osric Temper in Free Haven (#72), and Seer in Castle Ironfist (#32) gives you this advice too</li>
            <li>Solution: Go into the Devil's Outpost at Kriegspire and bring back Devil Plans Scroll.</li>
            <li>Reward: the lord give his vote on the High Council at Free Haven, 40.000 xp, +200 karma</li>
          </ul>

        </li>
        <li id="QUEST_18">
          Get Knight's Nomination.
      <ul>
            <li>Mission: Lord Osric Temper in Free Haven (#72)</li>
            <li>Solution: Go into the Inn of Free Haven, talk to Chadwick Blackpool and return.</li>
            <li>Reward: 0 gp, 15.000 xp, +50 karma</li>
            <li>Award: <i>Received promotion to (honorary) Cavalier</i></li>
          </ul>

        </li>
        <li id="QUEST_19">
          Find the lost artifact.
      <ul>
            <li>Mission: Zoltan Phelps in Free Haven (#25)</li>
            <li>Solution: Go into Dragoons' Keep at Free Haven and bring back <i>Mordred</i>.</li>
            <li>Reward: 30000gp, 10.000 xp, +100 karma</li>
            <li>Award: <i>Found Zoltan's artifact</i></li>
          </ul>

        </li>
        <li id="QUEST_20">
          Rescue Sherell.
      <ul>
            <li>Mission: Carlo Tormini in Free Haven (#39)</li>
            <li>Solution: Go into Temple of Tsantsa at Bootleg Bay and bring back her.</li>
            <li>Reward: 1500gp, 10.000 xp, 0 karma</li>
            <li>Award: <i>Rescued Sherell</i></li>
          </ul>

        </li>
        <li id="QUEST_21">
          Retrieve Ethric's Skull.
      <ul>
            <li>Mission: Gabriel Cartman in Free Haven (#57)</li>
            <li>Solution: Go into Tomb of Ethric the Mad at Free Haven and bring back the item.</li>
            <li>Reward: 7500gp, 15.000 xp, 0 karma</li>
            <li>Award: <i>Retrieved Ethric's Skull</i></li>
          </ul>

        </li>
        <li id="QUEST_22">
          Defeat the Warlord.
      <ul>
            <li>Mission: Lord Osric Temper in Free Haven (#72)</li>
            <li>Solution: Go into the Warlord's Fortress at Silver Cove and bring back Discharge Paper Scroll.</li>
            <li>Reward: 0 gp, 40.000 xp, +100 karma</li>
            <li>Award: <i>Received promotion to (honorary) Champion</i></li>
          </ul>

        </li>
        <li id="QUEST_23">
          Retrieve the Crystal of Terrax.
      <ul>
            <li>Mission: Lord Albert Newton in Misty Islands (#28)</li>
            <li>Solution: Go into the Corlagon's Estate at Castle Ironfist and bring back the item.</li>
            <li>Reward: 0 gp, 30.000 xp, +100 karma</li>
            <li>Award: <i>Received promotion to (honorary) Archmage</i></li>
          </ul>

        </li>
        <li id="QUEST_24">
          Slay Longfang Witherhide.
      <ul>
            <li>Mission: Regent Wilbur Humphrey in Castle Ironfist (#24)</li>
            <li>Solution: Go into the Dragon's Lair at Mire of Damned and bring back the Dragon Claw to him.</li>
            <li>Reward: 0 gp, 30.000 xp, +100 karma</li>
            <li>Award: <i>Received promotion to (honorary) Hero</i></li>
          </ul>

        </li>
        <li id="QUEST_25">
          Destroy the Book of Liches.
      <ul>
            <li>Mission: Terry Ross in Mire of the Damned (#11)</li>
            <li>Solution: Go into the Castle Darkmoor at Mire of the Damned, touch the book and return.</li>
            <li>Reward: 5000gp, 50.000 xp, +100 karma</li>
            <li>Award: <i>Destroyed the Book of Liches</i></li>
          </ul>

        </li>
        <li id="QUEST_26">
          Kill Snergle.
      <ul>
            <li>Mission: Avinril Smythers in Inn at the Mire of the Damned (#18)</li>
            <li>Solution: Go into the Snergle's Iron Mines at the Mire of the Damned for Key to Snergle's Chambers, then go into the Snergle's Caverns at Castle Ironfist and bring back his axe.</li>
            <li>Reward: 0 gp, 20.000 xp, +100 karma, can learn Master Axe</li>
            <li>Award: <i>Killed Snergle</i></li>
          </ul>

        </li>
        <li id="QUEST_27">
          Repair the temple.
      <ul>
            <li>Mission: Lord Anthony Stone in Frozen Highlands
            </li>
            <li>Solution: Hire a Stonecutter and a Carpenter, bring them to the temple in Free Haven to repair and return.</li>
            <li>Reward: 0 gp, 15.000 xp, +50 karma</li>
            <li>Award: <i>Received promotion to (honorary) Priest</i></li>
          </ul>

        </li>
        <li id="QUEST_28">
          Capture the Prince of Thieves.
      <ul>
            <li>Mission: Lord Anthony Stone in Frozen Highlands (#2), and Seer in Castle Ironfist (#32) gives you this advice too</li>
            <li>Solution: Go into the Free Haven Sewers at Free Haven and bring him back (before you enter the Sewers, be sure you have completed the Dragoons' Caverns in the Castle Ironfist, and then Shadow Guild Hideout in the Castle Ironfist, and then Shadow Guild in the Frozen Highlands, because he has fled from them).</li>
            <li>Reward: 10.000gp, 30.000 xp, +200 karma</li>
            <li>Award: <i>Captured the Prince of Thieves</i> (the lord gives his vote on the High Council at Free Haven)</li>
          </ul>

        </li>
        <li id="QUEST_29">
          Fix the prices of all stables.
      <ul>
            <li>Mission: Lady Loretta Fleise in Silver Cove (#32), and Seer in Castle Ironfist (#32) gives you this advice too</li>
            <li>Solution: Go into the 9 stables are at: Silver Cove, Mire of the Damned, Kriegspire, Blackshire, Castle Ironfist, New Sorpigal, Frozen Highlands, two in Free Haven, talk to the owners, and return.</li>
            <li>Reward: 5000gp, 25.000 xp, -200 karma (BUG!)</li>
            <li>Award: <i>Fixed the stable prices</i> (the lady gives her vote on the High Council at Free Haven)</li>
          </ul>

        </li>
        <li id="QUEST_30">
          Visit the Altar of the Sun.
      <ul>
            <li>Mission: Lady Loretta Fleise in Silver Cove (#32)</li>
            <li>Solution: Go to the Circle of Stones at Silver Cove on an equinox or solstice (March 20<sup>th</sup>, June 21<sup>st</sup>, September 23<sup>rd</sup>, and December 21<sup>st</sup>).</li>
            <li>Reward: 0 gp, 15.000 xp, +50 karma</li>
            <li>Award: <i>Received promotion to (honorary) Great Druid</i></li>
          </ul>

        </li>
        <li id="QUEST_31">
          Deface the altar.
      <ul>
            <li>Mission: Eleanor Vanderbilt in Silver Cove (#31)</li>
            <li>Solution: Go into the Monolith west of Silver Cove, touch the altar and return.</li>
            <li>Reward: 3000gp, 15.000 xp, +50 karma</li>
            <li>Award: <i>Saved the Monolith</i></li>
          </ul>

        </li>
        <li id="QUEST_32">
          Visit the Altar of the Moon.
      <ul>
            <li>Mission: Lady Loretta Fleise in Silver Cove (#32)</li>
            <li>Solution: Go into the Temple of the Moon at Free Haven and touch the altar at midnight.</li>
            <li>Reward: 0 gp, 40.000 xp, +100 karma</li>
            <li>Award: <i>Received promotion to (honorary) Arch Druid</i></li>
          </ul>

        </li>
        <li id="QUEST_33">
          Take the Sacred Chalice.
      <ul>
            <li>Mission: Lord Anthony Stone in Frozen Highlands (#2)</li>
            <li>Solution: Go into the Temple of the Sun at Bootleg Bay, find the chalice, bring it back to the temple in Free Haven and return.</li>
            <li>Reward: 0 gp, 30.000 xp, +100 karma</li>
            <li>Award: <i>Received promotion to (honorary) High Priest</i></li>
          </ul>

        </li>
        <li id="QUEST_34">
          End winter.
      <ul>
            <li>Mission: Lord Eric von Stromgard in Frozen Highlands (#12), and Seer in Castle Ironfist (#32) gives you this advice too</li>
            <li>Solution: Go to Hermit's Hut in Kriegspire, talk to Hermit and return.</li>
            <li>Reward: 0 gp, 50.000 xp, +200 karma</li>
            <li>Award: <i>Ended winter</i> (the lord gives his vote on the High Council at Free Haven)</li>
          </ul>

        </li>
        <li id="QUEST_35">
          Retrieve the Key to the Dragon Towers.
      <ul>
            <li>Mission: Lord Eric von Stromgard in Frozen Highlands (#12)</li>
            <li>Solution: Go into Icewind Keep at Frozen Highlands, and bring back the item.</li>
            <li>Reward: 0 gp, 15.000 xp, +50 karma</li>
            <li>Award: <i>Received promotion to (honorary) Battle Mage</i></li>
          </ul>

        </li>
        <li id="QUEST_36">
          Reset all of the Dragon Towers.
      <ul>
            <li>Mission: Lord Eric von Stromgard in Frozen Highlands (#12)</li>
            <li>Solution: Click on the lock in 6 cities: Frozen Highlands, Silver Cove, Free Haven, Misty Islands, New Sorpigal, Blackshire. You can can reach theese cities with Town Portal spell easily (at master rank of Water Magic). Be sure that you have the Key to the Dragon Towers.</li>
            <li>Reward: 0 gp, 40.000 xp, +100 karma (and the towers do not fire you at last)</li>
            <li>Award: <i>Received promotion to (honorary) Warrior Mage</i></li>
          </ul>

        </li>
        <li id="QUEST_37">
          Rescue Emmanuel.
      <ul>
            <li>Mission: Joanne Cravitz in Blackshire (#11)</li>
            <li>Solution: Go into the Temple of the Snake at Blackshire and bring back him from cage.</li>
            <li>Reward: 500gp, 25.000 xp, 0 karma</li>
            <li>Award: <i>Rescued Emmanuel</i></li>
          </ul>

        </li>
        <li id="QUEST_38">
          Destroy the werewolf's altar.
      <ul>
            <li>Mission: Maria Trepan in Blackshire (#17)</li>
            <li>Solution: Go into the Lair of the Wolf at Blackshire, talk to Ghost of Baltazar, find the Peral of Purity and touch the altar.</li>
            <li>Reward: 4000gp, 20.000 xp, +100 karma</li>
            <li>Award: <i>Broke the Blackshire Curse</i></li>
          </ul>

        </li>
        <li id="QUEST_39">
          Place the statuettes.
      <ul>
            <li>Mission: Twillen in Blackshire (#20)</li>
            <li>Solution: Open the chest at house of Twillen and get the five statuettes. Go to the Bootleg Bay, Mire of the Damned, Kriegspire, Dragonsands, Sweet Water, touch the pedestals and return.</li>
            <li>Reward: 0gp, 75.000 xp, 0 karma, and the chest with random items</li>
            <li>Award: <i>Placed Twillen's statuettes</i></li>
          </ul>

        </li>
        <li id="QUEST_40">
          Find the Pearl of Putrescence.
      <ul>
            <li>Mission: Ghost of Balthazar in the Lair of the Wolf at Blackshire (#28)</li>
            <li>Solution: Kill the Werewolf Leader and bring back the item.</li>
            <li>Reward: 0gp, 5.000 xp, 0 karma</li>
            <li>Award: <i>Killed the Werewolf Leader</i></li>
          </ul>

        </li>
        <li id="QUEST_41">
          Retrieve the Jewelled Egg.
      <ul>
            <li>Mission: Emil Lime in Kriegspire (#9)</li>
            <li>Solution: Go into the Castle Kriegspire at Kriegspire and bring back the item.</li>
            <li>Reward: 5000gp, 50.000 xp, +100 karma</li>
            <li>Award: <i>Retrieved Emil's Egg</i></li>
          </ul>

        </li>
        <li id="QUEST_42">
          Find a cure for Slicker Silvertongue.
          <ul>
            <li>Mission: Regent Wilbur Humphrey in Castle Ironfist (#24), and Seer in Castle Ironfist (#32) gives you this advice too</li>
            <li>Solution: Go into the Superior Temple of Baa at Kriegspire and bring back the Letter from Zenofex Scroll.</li>
            <li>Reward: 0gp, 0 xp, 0 karma, but quest 43
            </li>
            <li>Award: -</li>
          </ul>

        </li>
        <li id="QUEST_43">
          Bring the letter detailing Silvertongue's treason to the High Council.
          <ul>
            <li>Mission: Regent Wilbur Humphrey in Castle Ironfist (#24)</li>
            <li>Solution: Go into the High Council at Free Haven, talk to Silvertongue and return.</li>
            <li>Reward: 0gp, 0 xp, +800 karma. Silvertongue leaves the council, possible to visit the Oracle if you have the support of the other five lords. Regent Wilburn Humphrey will let you use the Royal Yacht. Seer in Castle Ironfist (#32) gives you this advice long time: you must visit the Oracle.</li>
            <li>Award: <i>Exposed the Traitor on the High Council</i>, and <i>Allowed to use the Royal Yacht</i>, but not shown (BUG!)</li>
          </ul>

        </li>
        <li id="QUEST_44">
          Find Memory Crystal Alpha.
          <ul>
            <li>Mission: Oracle at Free Haven (#60), and Seer in Castle Ironfist (#32) gives you this advice too</li>
            <li>Solution: Go into the Supreme Temple of Baa at Hermit's Isle, bring back the item and restore it.</li>
            <li>Reward: 0gp, 100.000 xp, 0 karma</li>
            <li>Award: <i>Awakened the Oracle</i>, if quests 44, 45, 46, 47 are completed</li>
          </ul>

        </li>
        <li id="QUEST_45">
          Find Memory Crystal Beta.
          <ul>
            <li>Mission: Oracle at Free Haven (#60), and Seer in Castle Ironfist (#32) gives you this advice too</li>
            <li>Solution: Go into the Castle Alamos at Eel Infested Waters, bring back the item and restore it.</li>
            <li>Reward: 0gp, 100.000 xp, 0 karma</li>
            <li>Award: <i>Awakened the Oracle</i>, if quests 44, 45, 46, 47 are completed</li>
          </ul>

        </li>
        <li id="QUEST_46">
          Find Memory Crystal Delta.
          <ul>
            <li>Mission: Oracle at Free Haven (#60), and Seer in Castle Ironfist (#32) gives you this advice too</li>
            <li>Solution: Go into the Castle Darkmoor at Mire of the Damned, bring back the item and restore it.</li>
            <li>Reward: 0gp, 100.000 xp, 0 karma</li>
            <li>Award: <i>Awakened the Oracle</i>, if quests 44, 45, 46, 47 are completed</li>
          </ul>

        </li>
        <li id="QUEST_47">
          Find Memory Crystal Epsilon.
          <ul>
            <li>Mission: Oracle at Free Haven (#60), and Seer in Castle Ironfist (#32) gives you this advice too</li>
            <li>Solution: Go into the Castle Kriegspire at Kriegspire, bring back the item and restore it.</li>
            <li>Reward: 0gp, 100.000 xp, 0 karma</li>
            <li>Award: <i>Awakened the Oracle</i>, if quests 44, 45, 46, 47 are completed</li>
          </ul>

        </li>
        <li id="QUEST_48">
          Unward the doors.
          <ul>
            <li>Mission: Lord of Fire in the Hall of the Fire Lord at Bootleg Bay (#2)</li>
            <li>Solution: Touch 2 doors (need 2 ambers) and return to the lord.</li>
            <li>Reward: 0gp, 10.000 xp, 0 karma</li>
            <li>Award: <i>Aided the Lord of Fire</i></li>
          </ul>

        </li>
        <li id="QUEST_49">
          Retrieve the Control Cube.
          <ul>
            <li>Mission: Oracle at Free Haven (#60), and Seer in Castle Ironfist (#32) gives you this advice too</li>
            <li>Solution: Go into the Tomb of VARN at Dragonsand and bring back the item.</li>
            <li>Reward: 0gp, 500.000 xp, 0 karma</li>
            <li>Award: <i>Gained Access to the Control Center</i></li>
          </ul>

        </li>
        <li id="QUEST_50">
          Obtain Ancient Magic from Archibald.
          <ul>
            <li>Mission: Oracle at Free Haven (#60), and Seer in Castle Ironfist (#32) gives you this advice too</li>
            <li>Solution: Go into the Royal Library in the to of Castle Ironfist, and talk to Archibald, but be sure you have completed the quest 51.</li>
            <li>Reward: 0gp, 50.000 xp, -928 karma, <i>Ritual of the Void</i>
            </li>
            <li>Award: <i>Freed Archibald</i>, but not shown (BUG!)</li>
          </ul>

        </li>
        <li id="QUEST_51">
          Find the Third Eye.
          <ul>
            <li>Mission: Prince Nicolai Ironfist at Castle Ironfist (#24), and Seer in Castle Ironfist (#32) gives you this advice too</li>
            <li>Solution: Touch the well near Castle Ironfist and bring back the item.</li>
            <li>Reward: 0gp, 0 xp, 0 karma, Tanir's Bell (which can be used in quest 50)</li>
            <li>Award: -</li>
          </ul>
        </li>
      </ol>
      <h2>Subquests</h2>
      <ol ref={subquestListRef}>
        <li id="SUBQUEST_1">
          Bounty hunting.
      <ul>
            <li>Mission: Boss of Town Halls: Janice in New Sorpigal (#21), Earnest in Misty Islands (#12), Jake in Silver Cove (#24).</li>
            <li>Solution: Kill at least 1 noticed monster and return. Hunting list resets every month, but can run 3 hunting at the same time, because there are 3 Town Hall in Enroth.</li>
            <li>Reward: various gp, 0 xp, +(gp/100) karma</li>
            <li>Award: <i>Collected X bounties</i></li>
          </ul>
        </li>
        <li id="SUBQUEST_2">
          Show Shadow Guild letter.
      <ul>
            <li>Mission: Frank Fairchild in New Sorpigal (#21)</li>
            <li>Solution: Go into the Dragoons' Caverns at Castle Ironfist and bring back the item.</li>
            <li>Reward: 5000gp, 5.000 xp, +50 karma</li>
            <li>Award: -</li>
          </ul>
        </li>
        <li id="SUBQUEST_3">
          Bring Pearl of Purity to Wilbur Humphrey
      <ul>
            <li>Mission: Ghost of Baltazar in Lair of the Wolf at Blackshire (#28).</li>
            <li>Solution: Go into the Lair of the Wolf, talk to Ghost of Baltazar, finish the quest 38 and bring the item to Wilbur Humphrey.</li>
            <li>Reward: 0gp, 10.000 xp, 0 karma</li>
            <li>Award: -</li>
          </ul>
        </li>
        <li id="SUBQUEST_4">
          Ankh
      <ul>
            <li>Mission: Ghost of John Silver in Silver Helm Stronghold at Silver Cove (#45)</li>
            <li>Solution: Go into the stronghold, kill the warlock (Gerrard Blacknames), get the ankh, talk to Ghost of John Silver, talk to Lady Loretta Fleise at Silver Cove, and bring the item to Anthony Stone at Frozen Highlands.</li>
            <li>Reward: 5000gp, 10.000 xp, 0 karma</li>
            <li>Award: -</li>
          </ul>
        </li>
        <li id="SUBQUEST_5">
          Let you be a Baa follower.
      <ul>
            <li>Mission: Almighty Head of Baa in Superior Temple of Baa at Kriegspire (#13)</li>
            <li>Solution: Go into the temple, press the Baa Head 1,2,3,4, walk through the spiral corridor, and return.</li>
            <li>Reward: 0gp, 50.000 xp, -976 karma</li>
            <li>Award: -</li>
          </ul>
        </li>
        <li id="SUBQUEST_6">
          Pray at Baa Altars.
      <ul>
            <li>Mission: Altars of Supreme Temple in Supreme Temple of Baa at Hermit's Isle (#1)</li>
            <li>Solution: Go into the temple, press the Baa Altars of Pain, of Cold, of Fire in one room Head and touch the other 4 altar.</li>
            <li>Reward: 0gp, 0 xp, 0 karma, +10 Elemental Resistance for one character permanently</li>
            <li>Award: -</li>
          </ul>
        </li>
        <li id="SUBQUEST_7">
          Read Obelisks.
      <ul>
            <li>Mission: -</li>
            <li>
              Solution: There are 15 maps in Enroth, and every map has 1 obelisk.
              Go to every 15 place, and touch the obelisks.
              The messages of obelisks are:
              <p>
                <code>Itotecthothesaip</code>
                <code>nhrh_aherheatvdi</code>
                <code>_etecpe__ersoede</code>
                <code>t_haat_lt__en_lc</code>
                <code>hd_scawehSfdewee</code>
                <code>erbthieaeuu_,o'd</code>
                <code>_ay,enis_nn_ans_</code>
                <code>lg____gtS_cln;__</code>
                <code>aoflo'h.hbtid_p_</code>
                <code>nnaifnt_ieif_tu_</code>
                <code>d_re_e_Hpfotyhz_</code>
                <code>_t_staoi_on_oiz_</code>
                <code>oon_htfdorstusl_</code>
                <code>f_oteh__fe_h__e_</code>
                <code>_nrh__tf__cehr__</code>
              </p>
              <p>
                Let us read vertically down the column:
                <br />

                <i>In the land of the dragon to north by far northeast,
                <br />lies the cache of the captain 'neath the weight of the least.
                <br />Hid for the Ship of the Sun before her functions ceased,
                <br />lift the stone and you have won; this riddle's puzzle pieced.</i>
              </p>
            Go to the Rock at Dragonsands and touch it. The Rock is a chest.
         </li>
            <li>Reward: 250.000gp, 0 xp, 0 karma, Dark Containment book, Divine Intervention book, <i>Morgan</i>, <i>Igraine</i>, <i>Guinevere</i>. Each time the chest is opened gives you another 250,000gp. (BUG!)
         </li>
            <li>Award: <i>Solved the Obelisk Puzzle</i>, but not shown (BUG!)</li>
          </ul>
        </li>
        <li id="SUBQUEST_8">
          Be a champion.
      <ul>
            <li>Mission: Arena Master in the Arena (reachable by coach travel at Sunday from Castle Ironfist (#5))</li>
            <li>Solution: Talk to Arena Master, choose the level of combat (Page, Squire, Knight, Lord), beat the monsters and return to him for reward. Be sure that killed all monsters and all caharacter survived the combat.</li>
            <li>Reward: various gp, 0 xp, 0 karma</li>
            <li>Award: <i>X Page/Squire/Knight/Lord Arena victories</i></li>
          </ul>
        </li>
        <li id="SUBQUEST_9">
          Be a goober.
      <ul>
            <li>Mission: unknown</li>
            <li>Solution: Go into the Control Center at Free Haven and find the Proclamation Scroll.(#60)</li>
            <li>Reward: various gp, 0 xp, 0 karma</li>
            <li>Award: <i>Super-Goober</i></li>
          </ul>
        </li>
        <li id="SUBQUEST_10">
          Save Enroth.
      <ul>
            <li>Mission: Seer in Castle Ironfist (#32) gives you this advice</li>
            <li>Solution: Go into the The Hive at Sweet Water (#4), kill the Reactor and the Demon Queen. Be sure that you have the Ritual of the Void Scroll from Archibald Ironfist.</li>
            <li>Reward: 0 gp, 0 xp, 0 karma, but win the whole game</li>
            <li>Award: <i>Destroyed the Hive and saved Enroth</i></li>
          </ul>
        </li>
      </ol>
      <div className={classList(styles.attribution)}>
        All data sourced from <a href="https://the-spoiler.com/RPG/New.World.Computing/might..magic.6.1/mm6.html">MM6 Spoiler</a>.
      </div>
    </Modal>
  );
};

export default MM6Quests;