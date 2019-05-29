$(document).ready( function() {
  const keyNotes = ['c', 'd', 'e', 'f', 'g', 'a', 'b']

  const playNote = function(key) {
    let note = `#${key}Audio`
    if ($(note)[0].paused) {
        $(note)[0].play();
      } else {
        $(note)[0].currentTime = 0;
      }
  }

  keyNotes.forEach( k => {
    $(`.${k}`).click(function() {
      playNote(k);
    })
    $('body').keypress((event) => {
      if (event.key === `${k}`) {
        playNote(k);
      }
    })
  })
});