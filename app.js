$(document).ready(function() {
  var onetimecheck = true;

  // Resetting Safari's open window
  $('.safari .app-content .toolbar .container .search-field input').val(
    'rafaelklaessen.nl'
  );
  $('.safari .app-content .content iframe').attr(
    'src',
    'https://www.rafaelklaessen.nl'
  );

  // Defining that the system isn't start up so you can't log in before
  var booted = false;

  $(window).on('load', function() {
    $('.backContainer').fadeIn(400);
    $('.login').fadeIn(400);

    setTimeout(function() {
      $('.loader').fadeOut(0);
      $('body').css({ backgroundColor: '#FFFFFF' });
    }, 400);

    booted = true;
  });

  // Time
  setCurTime();

  function setCurTime() {
    var d = new Date();

    var timeHour = d.getHours();
    var timeMinute = d.getMinutes();
    var timeDay = d.getDate();
    var timeDayW = d.getDay();
    var timeMonth = d.getMonth();
    var dayW = 'Monday';
    var month = 'January';
    var m = 'AM';

    if (timeDayW === 0) {
      dayW = 'Sun';
    } else if (timeDayW === 1) {
      dayW = 'Mon';
    } else if (timeDayW === 2) {
      dayW = 'Tue';
    } else if (timeDayW === 3) {
      dayW = 'Wed';
    } else if (timeDayW === 4) {
      dayW = 'Thu';
    } else if (timeDayW === 5) {
      dayW = 'Fri';
    } else if (timeDayW === 6) {
      dayW = 'Sat';
    }

    if (timeMonth === 0) {
      month = 'Jan';
    } else if (timeMonth === 1) {
      month = 'Feb';
    } else if (timeMonth === 1) {
      month = 'Mar';
    } else if (timeMonth === 1) {
      month = 'Apr';
    } else if (timeMonth === 4) {
      month = 'May';
    } else if (timeMonth === 5) {
      month = 'Jun';
    } else if (timeMonth === 6) {
      month = 'Jul';
    } else if (timeMonth === 7) {
      month = 'Aug';
    } else if (timeMonth === 8) {
      month = 'Sep';
    } else if (timeMonth === 9) {
      month = 'Oct';
    } else if (timeMonth === 10) {
      month = 'Nov';
    } else if (timeMonth === 11) {
      month = 'Dec';
    }

    if (timeHour < 12) {
      m = 'AM';
    } else {
      m = 'PM';
    }

    if (timeMinute < 10) {
      timeMinute = '0' + timeMinute;
    }

    var fullTime = timeHour + ':' + timeMinute;

    $('.login .bar .item-container .item-time').text(fullTime + ' ' + m);
    $('main .bar .item-container .time').text(
      dayW + ' ' + month + ' ' + timeDay + ' ' + fullTime + ' ' + m
    );

    setTimeout(setCurTime, 1);
  }

  // Making windows draggable and resizable
  $('.window').draggable();

  var drag = true;

  $('.window').dblclick(function() {
    if (drag === true) {
      $(this).draggable('disable');

      $(this).css({
        resize: 'both'
      });

      drag = false;
    } else {
      $(this).draggable('enable');

      $(this).css({
        resize: 'none'
      });

      drag = true;
    }
  });

  var appPress = 'finder';

  // Setting in which app the enter key is pressed and selecting right app
  $('div').click(function() {
    appPress = $(this)
      .parents('div[app]')
      .attr('app');

    appData.selectR();
  });

  $('li').click(function() {
    appPress = $(this)
      .parents('div[app]')
      .attr('app');

    appData.selectR();
  });

  // Which apps are open and on the foreground
  var appsOpen = ['finder'];
  var rocketOpen = false;

  // Appdata
  appData = {
    finder: {
      barItems: ['Finder', 'File', 'Edit', 'View', 'Window', 'Developer', ''],
      barItemMenus: {
        Finder: [
          'Item-one',
          'Item-two',
          'Item-three',
          'Item-four',
          'Item-five'
        ],
        File: ['Item-one', 'Item-two', 'Item-three'],
        Edit: ['No options'],
        View: ['pizza'],
        Window: ['Full-screen'],
        Developer: ['Love-yah']
      },
      ver: '1.0',
      dev: 'default',
      creation: '00-12-2015'
    },
    safari: {
      barItems: [
        'Safari',
        'File',
        'Edit',
        'View',
        'Window',
        'Developer',
        'Extra'
      ],
      barItemMenus: {
        Safari: [
          'Item-one',
          'Item-two',
          'Item-three',
          'Item-four',
          'Item-five',
          'divider',
          'Bruh'
        ],
        File: ['Item-one', 'Item-two', 'Item-three'],
        Edit: ['No options'],
        View: ['<h1>As you can see, <br>0123456789</h1>'],
        Window: ['Full-screen'],
        Developer: [
          '<h3>These thing support <br><h1>html</h1><br> markup but don not mess it up <br>to much</h3>'
        ],
        Extra: [
          'Total unespected appearing <br><h1>option</h1> :O',
          'Anddd',
          'It is pretty cool'
        ]
      },
      ver: '1.0',
      dev: 'default',
      creation: '00-12-2015'
    },
    mail: {
      barItems: ['Mail', 'File', 'Edit', 'View', 'Window', 'Developer', ''],
      barItemMenus: {
        Mail: ['Item-one', 'Item-two', 'Item-three', 'Item-four', 'Item-five'],
        File: ['Item-one', 'Item-two', 'Item-three'],
        Edit: ['No options'],
        View: ['pizza'],
        Window: ['Full-screen'],
        Developer: ['Love-yah']
      },
      ver: '1.0',
      dev: 'default',
      creation: '00-12-2015'
    },
    system: {
      barItems: [
        'SystemPreferences',
        'File',
        'Edit',
        'View',
        'Window',
        'Developer',
        ''
      ],
      barItemMenus: {
        SystemPreferences: [
          'Item-one',
          'Item-two',
          'Item-three',
          'Item-four',
          'Item-five'
        ],
        File: ['Item-one', 'Item-two', 'Item-three'],
        Edit: ['No options'],
        View: ['pizza'],
        Window: ['Full-screen'],
        Developer: ['Love-yah']
      },
      ver: '1.0',
      dev: 'default',
      creation: '00-12-2015'
    },
    trash: {
      barItems: ['Trash', 'File', 'Edit', 'View', 'Window', 'Developer'],
      barItemMenus: {
        Trash: [
          'Item-one',
          'Item-two',
          'Item-three',
          'divider',
          'Item-four',
          'Item-five'
        ],
        File: ['Item-one', 'Item-two', 'Item-three'],
        Edit: ['No options'],
        View: ['pizza'],
        Window: ['Full-screen'],
        Developer: ['Love-yah']
      },
      ver: '1.0',
      dev: 'default',
      creation: '00-12-2015'
    },
    selectR: function(app) {
      var arrLength = appsOpen.length - 1;
      var item = appsOpen[arrLength];

      var barItem = appData[item].barItems;

      var menus = jQuery.each(appData[item].barItems, function(i, val) {
        var allItems = appData[item].barItems[i];

        // console.log(val);
        var datT = appData[item].barItemMenus[allItems];

        $('main .bar .tools-container .c-con')
          .eq(i + 1)
          .text('');
        $('main .bar .tools-container .c-con')
          .eq(i + 1)
          .text(val);

        var lp = $('main .bar .tools-container .c-con')
          .eq(i + 1)
          .parent()
          .find('ul');

        $('main .bar .tools-container li ul .remove').remove();

        setTimeout(function() {
          jQuery.each(datT, function(i, val) {
            if (datT[i] != 'divider') {
              lp.append(
                "<li class='remove " +
                  datT[i] +
                  "' style='display: none'>" +
                  datT[i] +
                  '</li>'
              );
            } else {
              lp.append(
                "<li class='remove divider' style='display: none;'></li>"
              );
            }

            var maxItems = $(this).length;

            lp.find('li')
              .eq(i)
              .show();
          });
        }, 0);
      });

      var versionA = appData[item].ver;
      var developer = appData[item].dev;
      var dateMade = appData[item].creation;

      // console.log(barItem + versionA + developer + dateMade);
    }
  };

  // Logging in with enter button
  // Defining that you aren't logged in
  var logI = false;

  $(document).keypress(function(e) {
    var key = e.which || e.keyCode;

    if (booted == true) {
      if (key == 13) {
        if (logI == false) {
          logIn();
          logI = true;
        } else {
          search(appPress);
        }
      } else if (key == 27) {
        if (rocketOpen == true) {
          closeRocket();
        }
      }
    }
  });

  // Setting the z-index of the windows
  $(document).bind('click', function() {
    jQuery.each(appsOpen, function(i, val) {
      var all = appsOpen[i];
      var appLoc = appsOpen.indexOf(all);

      $('.' + all).css({ 'z-index': appLoc });
    });
  });

  // Putting a window on all other windows when click
  $('.window').bind('click', function() {
    var app = $(this).attr('app');

    appT(app);

    appData.selectR();
  });

  function logIn() {
    $('.backContainer .back').addClass('activated');
    $('main').fadeIn(400);

    setTimeout(function() {
      $('.login').fadeOut(0);
    }, 400);
  }

  function addApp(app) {
    appsOpen.push(app);
  }

  function removeApp(app) {
    var appLoc = appsOpen.indexOf(app);

    if (appLoc >= 0) {
      appsOpen.splice(appLoc, 1);
    }
  }

  function appLaunch(app, appO) {
    setTimeout(function() {
      $(app).fadeIn(0);
      $(app)
        .find('.app-content')
        .addClass('activated');

      setTimeout(function() {
        $(app).css({
          border: '1px solid #BAB7BA',
          'box-shadow': '0 5px 10px rgba(0, 0, 0, 0.3)'
        });
      }, 200);
    }, 2000);

    animateLaunch('[appName = ' + appO + ']');
  }

  function animateLaunch(app) {
    var item = $('.dock .item' + app);

    item.addClass('jump');
    setTimeout(function() {
      item.removeClass('jump');
      setTimeout(function() {
        item.addClass('jump');
        setTimeout(function() {
          item.removeClass('jump');
          setTimeout(function() {
            item.append('<div class="launched"></div>');
          }, 400);
        }, 400);
      }, 500);
    }, 400);
  }

  function closeApp(appO) {
    var app = '.' + appO;

    if (appO != 'finder') {
      $(app).stop();
      $(app).fadeOut(0);

      $(app).css({
        border: 'none',
        'box-shadow': 'none'
      });

      $(app)
        .find('.app-content')
        .removeClass('activated');

      $(
        '.dockContainer .dock .item[appName = ' + appO + '] .launched'
      ).remove();

      setTimeout(function() {
        removeApp(appO);
      }, 0);
    } else {
      minimize('finder');
    }
  }

  function appT(app) {
    removeApp(app);
    addApp(app);
  }

  function search(app) {
    if ((app = 'safari')) {
      var input = $('.safari .app-content .toolbar .container input').val();

      $('.safari .content iframe').attr('src', 'http:// ' + input);
    }
  }

  // Hover effects in bar that couldn't be done with css
  $('main .bar .tools-container li:first-child').mouseover(function() {
    $(this)
      .find('img')
      .attr('src', 'images/icons/bar/logowhite.png');
  });

  $('main .bar .tools-container li:first-child').mouseleave(function() {
    $(this)
      .find('img')
      .attr('src', 'images/icons/bar/logo.png');
  });

  $('main .bar .tools-container li ul').mouseover(function() {
    $(this)
      .parents('li')
      .css({
        'background-color': '#065DC4',
        color: '#FFFFFF'
      });
  });

  $('main .bar .tools-container li ul').mouseleave(function() {
    $(this)
      .parents('li')
      .css({
        background: 'none',
        color: '#000000'
      });
  });

  // Clicking on items in the dock
  $('.dockContainer .dock .item').click(function() {
    var appO = $(this).attr('appName');
    var app = '.' + $(this).attr('appName');
    var check = appsOpen.indexOf(appO);

    var checkRocket = $(this).attr('rocket');

    if (check < 0) {
      addApp(appO);

      appLaunch(app, appO);

      // If you're in Launchpad you won't see it after you launched an app
      if (checkRocket != 'rocket') {
        closeRocket();
      }
    } else {
      appT(appO);

      // If you're in Launchpad you won't see it after you placed an app to the foreground
      if (checkRocket != 'rocket') {
        closeRocket();
      }
    }
  });

  // Setting toolbar and name
  $('.window').each(function(i) {
    var appName = $(this).attr('app');
    var addName = $(this).attr('addName');

    $('.toolbar .container')
      .eq(i)
      .append(
        "<div class='bttnContainer'><div class='bttn close'><div class='text'></div></div><div class='bttn minimize'><div class='text'></div></div><div class='bttn maximize'><div class='text'></div></div></div>"
      );

    if (addName === 'true') {
      $('.toolbar .container')
        .eq(i)
        .append(
          "<div class='nameContainer'><div class='name'><img src='images/icons/sys/map.png'/>Documents</div></div>"
        );
    }

    $('.toolbar')
      .eq(i)
      .find('.container .nameContainer .name')
      .html("<img src='images/icons/sys/map.png'/>" + appName);
  });

  // Buttons in the toolbar effects
  $('.window .app-content .toolbar .bttnContainer').mouseover(function() {
    var closeBttn = $(this).find('.close .text');
    var fadeBttn = $(this).find('.minimize .text');
    var fullBttn = $(this).find('.maximize .text');

    closeBttn.text('x');
    fadeBttn.text('-');
    fullBttn.text('+');
  });

  $('.window .app-content .toolbar .bttnContainer').mouseleave(function() {
    var closeBttn = $(this).find('.close .text');
    var fadeBttn = $(this).find('.minimize .text');
    var fullBttn = $(this).find('.maximize .text');

    closeBttn.text('');
    fadeBttn.text('');
    fullBttn.text('');
  });

  // Closing apps
  $('.window .app-content .toolbar .bttnContainer .close').click(function() {
    var appName = $(this)
      .parents('.window')
      .attr('app');

    closeApp(appName);

    setTimeout(function() {
      appData.selectR();
    }, 0);
  });

  // Rocket
  $('.launch-rocket').click(function() {
    if (rocketOpen == false) {
      $('.rocket').stop();
      $('.rocket').fadeIn(400);

      rocketOpen = true;
    } else {
      closeRocket();
    }
  });

  function closeRocket() {
    $('.rocket').stop();
    $('.rocket').fadeOut(400);

    rocketOpen = false;
  }

  // Refreshing pages in safari
  $(
    '.safari .app-content .toolbar .container .search-field .refresh-bttn'
  ).click(function() {
    var input = $('.safari .app-content .toolbar .container input').val();

    $('.safari .content iframe').attr('src', 'http:// ' + input);
  });

  // Going back and forward in history of iframe
  $('.safari .app-content .toolbar .container .pg-bttns .back').click(
    function() {
      var ifr = $('iframe').contentWindow;

      ifr.history.back();
    }
  );

  $('.safari .app-content .toolbar .container .pg-bttns .forward').click(
    function() {
      var ifr = $('iframe').contentWindow;

      ifr.history.forward();
    }
  );
});
