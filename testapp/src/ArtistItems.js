import React from 'react';
import PropTypes from 'prop-types';

const ArtistItems = ({ name, spotifyLink, genres }) => {
return (
<div>
<h3>{name}<h3>
<p>{spotifyLink}</p>
<p>{genres.join(' ')}</p>
</div>
)
}

ArtistItems.propTypes = {
	name: PropTypes.string,
	spotifyLink: PropTypes.string,
	genres: PropTypes.array
};

export default ArtistItems;