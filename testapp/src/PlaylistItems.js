import React from 'react';
import PropTypes from 'prop-types';

const PlaylistItems = ({ name, spotifyLink, ownerName, tracksCount }) => {
return (
<div>
<h3>{name}<h3>
<p>{spotifyLink}</p>
<p>{ownerName}</p>
<p>{tracksCount}</p>
</div>
)
}

PlaylistItems.propTypes = {
	name: PropTypes.string,
	spotifyLink: PropTypes.string,
	ownerName: PropTypes.string,
	tracksCount: PropTypes.string
	
};

export default PlaylistItems;
