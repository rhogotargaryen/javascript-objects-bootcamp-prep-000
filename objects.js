var playlist = {
  Hozier: 'Work Song'
}

function updatePlaylist (object, artist, songTitle) {
    object[artist] = songTitle;
    return playlist;
  }

