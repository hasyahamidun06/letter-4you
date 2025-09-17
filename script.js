const message = `Hye..\n yeah ik its random coding just to send you a letter, it takes hours actually just to complete this coding, idk i just wanna make it more interesting for you to read sebab mcm cliche send long text kt ws, bosan.\n erm, tbh saya tktau what to say, my mind blank, fully blank.\n\nActually i wish when i gave u so many space, u'll have something to say or ask sbb there's a lot of space already and i respect it... but its look like naa pun tunggu saya cakap something. \n\nidk but this time idk what else to say. I wish we can communicate more better after this, i wish we can try to understand each other even more better and less misscommunication and missunderstanding. I wish that after this, if kita ada tak sedap hati dgn each other, we directly ask in a good way w/o let ovt come first and w/o start any argument. All i want is that we can keep a healthy relationship w/o anybody get less love, affection and reassurance.\n\n Im sorry. Sorry for act immature, sorry for not being concern with you, sorry if i hurt you, so cause im ego. Sorry sebab buat naa terasa and sorry cause i always talk about my own feeling. Sorry for for all my mistake. I really want us to be happy together. I really want us to be in a healthy relationship. I really want us to be good for each other.\n\nI love you so much naa, i really do.\n\nLove,\n\nasya`;
;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";
  // Play music
  var music = document.getElementById("bgMusic");
  if (music) {
    music.currentTime = 0;
    music.play();
  }

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
