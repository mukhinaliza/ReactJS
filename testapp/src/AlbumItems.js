import React from 'react';
import PropTypes from 'prop-types';

const AlbumItems = ({ name, spotifyLink, releaseDate, totalTracks, listOfArtists }) => {
return (
<div>
<h3>{name}<h3>
<p>{spotifyLink}</p>
<p>{releaseDate}</p>
<p>{totalTracks}</p>
<p>{listOfArtists.join(', ')}</p>

</div>
)
}

AlbumItems.propTypes = {
	name: PropTypes.string,
	spotifyLink: PropTypes.string,
	releaseDate: PropTypes.string,
	totalTracks: PropTypes.string,
	listOfArtists: PropTypes.array
	
};

export default AlbumItems;
