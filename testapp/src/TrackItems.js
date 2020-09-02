import React from 'react';
import PropTypes from 'prop-types';

const TrackItems = ({ name, spotifyLink, duration, popularity, albumName, albumSpotifyLink, artistName, artistSpotifyLink }) => {
return (
<div>
<h3>{name}<h3>
<p>{spotifyLink}</p>
<p>{duration}</p>
<p>{popularity}</p>
<p>{albumName}</p>
<p>{albumSpotifyLink}</p>
<p>{artistName}</p>
<p>{artistSpotifyLink}</p>
</div>
)
}

TracktItems.propTypes = {
	name: PropTypes.string,
	spotifyLink: PropTypes.string,
	duration: PropTypes.string,
	popularity: PropTypes.string,
	albumName: PropTypes.string,
	albumSpotifyLink: PropTypes.string,
	artistName: PropTypes.string,
	artistSpotifyLink: PropTypes.string
};

export default TracktItems;
