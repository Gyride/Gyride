$(document).ready(function () {
    var constant = [ ["one", "two", "three"],
                     ["four", "five", "six"],
                     ["seven", "eight", "blank"] ];

    var order = [ ["one", "two", "three"],
                  ["four", "five", "six"],
                  ["seven", "eight", "blank"] ];

    var randomized = 0;

    var option = 3;

    var moves = 0;

    var arrayPosition = function (tile) {
        var position = [];

        for ( var i = 0; i < order.length; i++ ) {
            for ( var j = 0; j < order.length; j++) {
                if (order[i][j] == tile) {
                    console.log(order[i][j]);
                    position[0] = i;
                    position[1] = j;
                    return(position);
                }
            }
        }
    }

    var checkBlank = function (position) {
        var i = position[0];
        var j = position[1];

        if (order[i + 1] != undefined) {
            if (order[i + 1][j] == "blank") {
                return ("down");
            }
        } if (order[i - 1] != undefined) {
            if (order[i - 1][j] == "blank") {
                return ("up");
            }
        } if (order[i] != undefined) {
            if (order[i][j + 1] == "blank") {
                return ("right");
            }
        } if (order[i] != undefined) {
            if (order[i][j - 1] == "blank") {
                return ("left");
            }
        }
    }

    var move = function (where, position, tile, e) {
        var i = position[0];
        var j = position[1];

        if (where == "down") {
            if (i == 0) {
                $("#" + tile).animate({
                    top: 100*(i+1)/order.length + "%"
                }, 300, function () {
                });
            }

            if (i == 1) {
                $("#" + tile).animate({
                    top: 100*(i+1)/order.length + "%"
                }, 300, function () {
                });
            }

            if (i == 2) {
                $("#" + tile).animate({
                    top: 100*(i+1)/order.length + "%"
                }, 300, function () {
                });
            }

            if (i == 3) {
                $("#" + tile).animate({
                    top: 100*(i+1)/order.length + "%"
                }, 300, function () {
                });
            }

            order[i + 1][j] = tile;
            order[i][j] = "blank";
            if (e.isTrigger == undefined) {
                winCondition();
            }

        } else if (where == "up") {
          if (i == 1) {
              $("#" + tile).animate({
                  top: 100*(i-1)/order.length + "%"
              }, 300, function () {
              });
          }

          if (i == 2) {
              $("#" + tile).animate({
                  top: 100*(i-1)/order.length + "%"
              }, 300, function () {
              });
          }

          if (i == 3) {
              $("#" + tile).animate({
                  top: 100*(i-1)/order.length + "%"
              }, 300, function () {
              });
          }

          if (i == 4) {
              $("#" + tile).animate({
                  top: 100*(i-1)/order.length + "%"
              }, 300, function () {
              });
          }

            order[i - 1][j] = tile;
            order[i][j] = "blank";
            if (e.isTrigger == undefined) {
                winCondition();
            }

        } else if (where == "right") {
            if (j == 0) {
                $("#" + tile).animate({
                    left: 100*(j+1)/order.length + "%"
                }, 300, function () {
                });
            }

            if (j == 1) {
                $("#" + tile).animate({
                    left: 100*(j+1)/order.length + "%"
                }, 300, function () {
                });
            }

            if (j == 2) {
                $("#" + tile).animate({
                    left: 100*(j+1)/order.length + "%"
                }, 300, function () {
                });
            }

            if (j == 3) {
                $("#" + tile).animate({
                    left: 100*(j+1)/order.length + "%"
                }, 300, function () {
                });
            }

            order[i][j + 1] = tile;
            order[i][j] = "blank";
            if (e.isTrigger == undefined) {
                winCondition();
            }

        } else if (where == "left") {
          if (j == 1) {
              $("#" + tile).animate({
                  left: 100*(j-1)/order.length + "%"
              }, 300, function () {
              });
          }

          if (j == 2) {
              $("#" + tile).animate({
                  left: 100*(j-1)/order.length + "%"
              }, 300, function () {
              });
          }

          if (j == 3) {
              $("#" + tile).animate({
                  left: 100*(j-1)/order.length + "%"
              }, 300, function () {
              });
          }

          if (j == 4) {
              $("#" + tile).animate({
                  left: 100*(j-1)/order.length + "%"
              }, 300, function () {
              });
          }

            order[i][j - 1] = tile;
            order[i][j] = "blank";
            if (e.isTrigger == undefined) {
                winCondition();
            }
        }
    }

    var winCondition = function () {
        if ((randomized == 1) && (constant.equals(order))) {
            console.log("win")
            $("#win").toggleClass("hide");
            randomized = 0;
        }
    }

    Array.prototype.equals = function (array) {
        for(var i = 0, l = this.length; i < l; i++) {
            if (this[i] instanceof Array && array[i] instanceof Array) {
                if (!this[i].equals(array[i])) {
                    return false;
                }
            } else if (this[i] != array[i]) {
                return false;
            }
        }
        return true;
    }

    $(".content").on("click", "img", function (e) {
        moves = moves + 1;

        $("span").html("Moves: " + moves);

        var tile = $(this).attr("id");

        var pos = arrayPosition(tile);

        var where = checkBlank(pos);

        move(where, pos, tile, e);
    });

    $("#rand").on("click", function () {
        randomized = 1;
        var l = 250 * option;

        for (var i = 0; i < l; i++) {
            try{
                $("#" + order[Math.round(order.length * Math.random()-1)][Math.round(order.length * Math.random()-1)]).trigger("click");
            } catch (e) {

            }
        }
        if (!($("#win").hasClass("hide"))){
            $("#win").toggleClass("hide");
        }

        moves = 0;

        $("span").html("Moves: " + moves);
    });

    $("select").change(function(){
        var size = $("select").val();
        if (size == "3x3") {
          constant = [ ["one", "two", "three"],
                       ["four", "five", "six"],
                       ["seven", "eight", "blank"] ];

          order = [ ["one", "two", "three"],
                    ["four", "five", "six"],
                    ["seven", "eight", "blank"] ];

          randomized = 0;

          moves = 0;

          $("span").html("Moves: " + moves);

          if (option == 4) {
              for (var i = 8; i < 15; i++) {
                  $(".content img:eq(" + i + ")").toggleClass("hide");
              }
          } else if (option == 5) {
              for (var i = 8; i < 24; i++) {
                  $(".content img:eq(" + i + ")").toggleClass("hide");
              }
          }

          $(".content img").each(function(i){
            $(this).css("left", 100*((i)%(order.length))/(order.length) + "%");
            $(this).css("top", 100*(Math.floor(i/(order.length)))/(order.length) + "%");
            $(this).css("height", 100/(order.length) + "%");
            $(this).css("width", 100/(order.length) + "%");
          });

          option = 3;

        } else if (size == "4x4") {
          constant = [ ["one", "two", "three", "four"],
                       ["five", "six", "seven", "eight"],
                       ["nine", "ten", "eleven", "twelve"],
                       ["thirteen", "fourteen", "fifteen", "blank"] ];

          order = [ ["one", "two", "three", "four"],
                    ["five", "six", "seven", "eight"],
                    ["nine", "ten", "eleven", "twelve"],
                    ["thirteen", "fourteen", "fifteen", "blank"] ];

          randomized = 0;

          moves = 0;

          $("span").html("Moves: " + moves);

          if (option == 3) {
              for (var i = 8; i < 15; i++) {
                  $(".content img:eq(" + i + ")").toggleClass("hide");
              }
          } else if (option == 5) {
              for (var i = 15; i < 24; i++) {
                  $(".content img:eq(" + i + ")").toggleClass("hide");
              }
          }

          $(".content img").each(function(i){
            $(this).css("left", 100*((i)%(order.length))/(order.length) + "%");
            $(this).css("top", 100*(Math.floor(i/(order.length)))/(order.length) + "%");
            $(this).css("height", 100/(order.length) + "%");
            $(this).css("width", 100/(order.length) + "%");
          });

          option = 4;

        } else if (size == "5x5") {
          constant = [ ["one", "two", "three", "four", "five"],
                       ["six", "seven", "eight", "nine", "ten"],
                       ["eleven", "twelve", "thirteen", "fourteen", "fifteen"],
                       ["sixteen", "seventeen", "eighteen", "nineteen", "twenty"],
                       ["twentyone", "twentytwo", "twentythree", "twentyfour", "blank"] ];

          order = [ ["one", "two", "three", "four", "five"],
                    ["six", "seven", "eight", "nine", "ten"],
                    ["eleven", "twelve", "thirteen", "fourteen", "fifteen"],
                    ["sixteen", "seventeen", "eighteen", "nineteen", "twenty"],
                    ["twentyone", "twentytwo", "twentythree", "twentyfour", "blank"] ];

          randomized = 0;

          moves = 0;

          $("span").html("Moves: " + moves);

          if (option == 3) {
              for (var i = 8; i < 24; i++) {
                  $(".content img:eq(" + i + ")").toggleClass("hide");
              }
          } else if (option == 4) {
              for (var i = 15; i < 24; i++) {
                  $(".content img:eq("+ i +")").toggleClass("hide");
              }
          }

          $(".content img").each(function(i){
            $(this).css("left", 100*((i)%(order.length))/(order.length) + "%");
            $(this).css("top", 100*(Math.floor(i/(order.length)))/(order.length) + "%");
            $(this).css("height", 100/(order.length) + "%");
            $(this).css("width", 100/(order.length) + "%");
          });

          option = 5;

        }
    });
});
