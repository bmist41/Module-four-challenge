const themeButtonEl = $('#theme-btn');

let isDark = true;
$('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' });

themeButtonEl.on('click', function () {
  if (isDark) {
    $('body').css({ 'background-color': '#eff5f8', color: '#fff' });
    
  } else {
    $('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' });
  }
  isDark = !isDark;
  
});

//Changes title, then changes the background theme (not sure  where the  title is  being effected)