//include('alert.js')



//функція підтримки зображень: webpcss
function testWebP(callback) {
    var webP = new Image(); webP.onload = webP.onerror = function () { callback(webP.height == 2); }; webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    
    }
    
    testWebP(function (support) {
    if (support == true) { document.querySelector('body').classList.add('webp'); }else{ document.querySelector('body').classList.add('no-webp'); }
    
    });
    

    

function fontsStyle(params) {
    let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss'); if (file_content == '') { fs.writeFile(source_folder + '/scss/fonts.scss', '', cb); return fs.readdir(path.build.fonts, function (err, items) { if (items) { let c_fontname; for (var i = 0; i < items.length; i++) { let fontname = items[i].split('.'); fontname = fontname[0]; if (c_fontname != fontname) { fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb); } c_fontname = fontname; } } }) }
    
    }
    

    $(function(){
        $('.products__slider').slick({
            nextArrow: ' <button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>',
            prevArrow: ' <button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
            infinite: false,
            fade: true,
            responsive: [
                {
                    breakpoint: 441,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });
    });
    

    $('.questions__item-title').on(('click'), function(){
        $('.questions__item').removeClass('questions__item--active');
        $(this).parent().addClass('questions__item--active');
    });


    $('#fullpage').fullpage({
		autoScrolling:true,
        scrollHorizontally: true,
        sectionSelector: '.page-section',
	});