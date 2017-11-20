$(function () {
    var body = $('body');
    body.attr('oncontextmenu', 'return false;');

    body.on("mousedown", function (e) {
        switch (e.which) {
            case 1:
                console.log('Left Mouse button pressed.');
                break;
            case 2:
                console.log('Middle Mouse button pressed.');
                break;
            case 3:
                console.log('Right Mouse button pressed.');
                break;
        }
    });
});

