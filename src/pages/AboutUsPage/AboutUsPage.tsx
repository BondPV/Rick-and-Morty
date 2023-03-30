import React from 'react';
import { GLOBAL_STYLES } from '../../constants/Constants';
import styles from './AboutUsPage.module.scss';

class AboutUsPage extends React.Component {
  render() {
    return (
      <div className={GLOBAL_STYLES.CONTAINER}>
        <div className={styles.about}>
          <p>
            <span>Rick and Morty</span> is an American adult animated science-fiction sitcom created
            by Justin by Justin Roiland and Dan Harmon for Cartoon Network`s nighttime programming
            block Adult Swim. It is distributed internationally by Warner Bros. Television
            Distribution.
          </p>
          <p>
            The series follows the misadventures of Rick Sanchez, a cynical mad scientist, and his
            good-hearted but fretful grandson Morty Smith, who split their time between domestic
            life and interdimensional adventures that take place across an infinite number of
            realities, often traveling to other planets and dimensions through portals and on Rick`s
            flying saucer. The general concept of Rick and Morty relies on two conflicting
            scenarios: domestic family drama, and an alcoholic grandfather dragging his grandson
            into hijinks.
          </p>
        </div>
      </div>
    );
  }
}

export { AboutUsPage };
