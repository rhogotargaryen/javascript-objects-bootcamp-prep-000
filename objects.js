var playlist = {
  Hozier: 'Work Song'
}

function updatePlaylist (object, artist, songTitle) {
    var object[artist] = songTitle;
    return playlist;
  }
