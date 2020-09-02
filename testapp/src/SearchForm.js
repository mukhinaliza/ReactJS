import React from 'react';

export default class SearchForm extends React.Component {
	render() {
		return(
			<>
<form name="search">
<input type="button" name="print" value="Search" />
    <input type="text" name="key" placeholder="Search"></input>
</form>
<div>
<input type="checkbox"/>
      <label for='album'>Artist</label>
      <input type="checkbox"/>
      <label for='artist'>Album</label>
      <input type="checkbox"/>
      <label for='playlist'>Playlist</label>
       <input type="checkbox"/>
      <label for='track'>Track</label>
      </div>
</>
			)
	}
}