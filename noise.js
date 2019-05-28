$(document).ready( function() {
  const keyNotes = ['c', 'd', 'e', 'f', 'g', 'a', 'b']

  keyNotes.forEach( k => {
    $(`.${k}`).click(function() {
      if ($(`#${k}Audio`)[0].paused) {
        $(`#${k}Audio`)[0].play();
      } else {
        $(`#${k}Audio`)[0].currentTime = 0;
      }
    })
    $('body').keypress((event) => {
      if (event.key === `${k}`) {
        if ($(`#${k}Audio`)[0].paused) {
          $(`#${k}Audio`)[0].play();
        } else {
          $(`#${k}Audio`)[0].currentTime = 0;
        }
      }
    })
  })
});