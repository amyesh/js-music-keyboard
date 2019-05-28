$(document).ready( function() {
  const keyNotes = ['c', 'd', 'e', 'f', 'g', 'a', 'b']

  keyNotes.forEach( k => {
    $(`.${k}`).click(function() {
        $(`#${k}Audio`)[0].play();
    })
    $('body').keypress((event) => {
      if (event.key === `${k}`) {
      $(`#${k}Audio`)[0].play();
      }
    })
  })
});