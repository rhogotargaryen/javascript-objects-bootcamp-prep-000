var playlist = { 
  Hozier: 'Work Song' 
}

function updatePlaylist (object, artist, songTitle) {
  if (object === playlist) {
    object[artist] = songTitle;
    return playlist;
  }
  else {
    return 'please select playlist'
  }
}