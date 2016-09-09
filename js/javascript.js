$(document).ready(function(){

    $('.add-to-cart').click(function(){
        var id = $(this).closest('div').find('.product-id').text();
        var quantity = $(this).closest('div').find('input').val();
        window.location.href = "add_to_cart.php?id=" + id + "&quantity=" + quantity;
    });

$('.select1').change(function(){
        var singleValue = $('#selectColor1').val();
        if(singleValue == 'natural'){
            $(this).closest('div').find('.product-id').html('1');
        }else if(singleValue == 'black'){
            $(this).closest('div').find('.product-id').html('2');
        }
    });

$('.select3').change(function(){
        var y = $('#selectColor3').val();
        var x = $('#selectSize3').val();
        if(x == '10' && y == 'natural'){
            $(this).closest('div').find('.product-id').html('3');
            $('.price3').text("40.00лв.");
        }else if(x == '10' && y == 'black'){
            $(this).closest('div').find('.product-id').html('4');
            $('.price3').text("40.00лв.");
        }else if(x == '12.5' &&  y== 'natural'){
            $(this).closest('div').find('.product-id').html('5');
            $('.price3').text("50.00лв.");
        }else if(x == '12.5' && y == 'black'){
            $(this).closest('div').find('.product-id').html('6');
            $('.price3').text("50.00лв.");
        }else if(x == '15' && y == 'natural'){
            $(this).closest('div').find('.product-id').html('7');
            $('.price3').text("60.00лв.");
        }else if(x == '15' && y == 'black'){
            $(this).closest('div').find('.product-id').html('8');
            $('.price3').text("60.00лв.");
        }
    });

$('.select9').change(function(){
        var singleValue = $('#selectColor9').val();
        if(singleValue == 'natural'){
            $(this).closest('div').find('.product-id').html('9');
        }else if(singleValue == 'black'){
            $(this).closest('div').find('.product-id').html('10');
        }
    });

$('.select11').change(function(){
        var singleValue = $('#selectColor11').val();
        if(singleValue == 'natural'){
            $(this).closest('div').find('.product-id').html('11');
        }else if(singleValue == 'black'){
            $(this).closest('div').find('.product-id').html('12');
        }
    });

$('.select13').change(function(){
        var singleValue = $('#selectColor13').val();
        if(singleValue == 'natural'){
            $(this).closest('div').find('.product-id').html('13');
        }else if(singleValue == 'black'){
            $(this).closest('div').find('.product-id').html('14');
        }
    });

$('.select15').change(function(){
        var x = $('#selectSize15').val();
        var y = $('#selectMaterial15').val();
        if(x == '1x3' && y == 'yareshka'){
            $(this).closest('div').find('.product-id').html('15');
            $('.price15').text("5.00лв.");
        }else if(x == '1x3' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('16');
            $('.price15').text("5.00лв.");
        }else if(x == '1x3' && y == 'agneshka'){
            $(this).closest('div').find('.product-id').html('17');
            $('.price15').text("5.00лв.");
        }else if(x == '2x6' && y == 'yareshka'){
            $(this).closest('div').find('.product-id').html('18');
            $('.price15').text("6.00лв.");
        }else if(x == '2x6' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('19');
            $('.price15').text("6.00лв.");
        }else if(x == '2x6' && y == 'agneshka'){
            $(this).closest('div').find('.product-id').html('20');
            $('.price15').text("6.00лв.");
        }else if(x == '3x9' &&  y== 'yareshka'){
            $(this).closest('div').find('.product-id').html('21');
            $('.price15').text("7.00лв.");
        }else if(x == '3x9' &&  y== 'teleshka'){
            $(this).closest('div').find('.product-id').html('22');
            $('.price15').text("7.00лв.");
        }else if(x == '3x9' &&  y== 'agneshka'){
            $(this).closest('div').find('.product-id').html('23');
            $('.price15').text("7.00лв.");
        }else if(x == '4x12' && y == 'yareshka'){
            $(this).closest('div').find('.product-id').html('24');
            $('.price15').text("8.00лв.");
        }else if(x == '4x12' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('25');
            $('.price15').text("8.00лв.");
        }else if(x == '4x12' && y == 'agneshka'){
            $(this).closest('div').find('.product-id').html('26');
            $('.price15').text("8.00лв.");
        }else if(x == '5x20' && y == 'yareshka'){
            $(this).closest('div').find('.product-id').html('27');
            $('.price15').text("10.00лв.");
        }else if(x == '5x20' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('28');
            $('.price15').text("10.00лв.");
        }else if(x == '5x20' && y == 'agneshka'){
            $(this).closest('div').find('.product-id').html('29');
            $('.price15').text("10.00лв.");
        }
    });

$('.select30').change(function(){
        var y = $('#selectMaterial30').val();
        var x = $('#selectColor30').val();
        if(x == 'natural' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('30');
        }else if(x == 'black' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('31');
        }else if(x == 'natural' &&  y== 'bivolska'){
            $(this).closest('div').find('.product-id').html('32');
        }else if(x == 'black' && y == 'bivolska'){
            $(this).closest('div').find('.product-id').html('33');
        }
    });

$('.select34').change(function(){
        var z = $('#selectSize34').val();
        var y = $('#selectMaterial34').val();
        var x = $('#selectColor34').val();
        if(x == 'natural' && y == 'teleshka' && z =='50x35'){
            $(this).closest('div').find('.product-id').html('34');
            $('.price34').text("120.00лв.");
        }else if(x == 'black' && y == 'teleshka' && z =='50x35'){
            $(this).closest('div').find('.product-id').html('35');
            $('.price34').text("120.00лв.");
        }else if(x == 'natural' &&  y== 'bivolska' && z =='50x35'){
            $(this).closest('div').find('.product-id').html('36');
            $('.price34').text("120.00лв.");
        }else if(x == 'black' && y == 'bivolska' && z =='50x35'){
            $(this).closest('div').find('.product-id').html('37');
            $('.price34').text("120.00лв.");
        }else if(x == 'natural' && y == 'teleshka' && z =='50x65'){
            $(this).closest('div').find('.product-id').html('38');
            $('.price34').text("150.00лв.");
        }else if(x == 'black' && y == 'teleshka' && z =='50x65'){
            $(this).closest('div').find('.product-id').html('39');
            $('.price34').text("150.00лв.");
        }else if(x == 'natural' && y == 'bivolska' && z =='50x65'){
            $(this).closest('div').find('.product-id').html('40');
            $('.price34').text("150.00лв.");
        }else if(x == 'black' && y == 'bivolska' && z =='50x65'){
            $(this).closest('div').find('.product-id').html('41');
            $('.price34').text("150.00лв.");
        }
    });

$('.select42').change(function(){
        var y = $('#selectMaterial42').val();
        var x = $('#selectColor42').val();
        if(x == 'natural' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('42');
        }else if(x == 'black' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('43');
        }else if(x == 'natural' &&  y== 'bivolska'){
            $(this).closest('div').find('.product-id').html('44');
        }else if(x == 'black' && y == 'bivolska'){
            $(this).closest('div').find('.product-id').html('45');
        }
    });

$('.select46').change(function(){
        var z = $('#selectDescription46').val();
        var y = $('#selectMaterial46').val();
        var x = $('#selectColor46').val();
        if(x == 'natural' && y == 'teleshka' && z =='rapidi'){
            $(this).closest('div').find('.product-id').html('46');
            $('.price46').text("80.00лв.");
        }else if(x == 'black' && y == 'teleshka' && z =='rapidi'){
            $(this).closest('div').find('.product-id').html('47');
            $('.price46').text("80.00лв.");
        }else if(x == 'natural' &&  y== 'bivolska' && z =='rapidi'){
            $(this).closest('div').find('.product-id').html('48');
            $('.price46').text("80.00лв.");
        }else if(x == 'black' && y == 'bivolska' && z =='rapidi'){
            $(this).closest('div').find('.product-id').html('49');
            $('.price46').text("80.00лв.");
        }else if(x == 'natural' && y == 'teleshka' && z =='sarum'){
            $(this).closest('div').find('.product-id').html('50');
            $('.price46').text("100.00лв.");
        }else if(x == 'black' && y == 'teleshka' && z =='sarum'){
            $(this).closest('div').find('.product-id').html('51');
            $('.price46').text("100.00лв.");
        }else if(x == 'natural' && y == 'bivolska' && z =='sarum'){
            $(this).closest('div').find('.product-id').html('52');
            $('.price46').text("100.00лв.");
        }else if(x == 'black' && y == 'bivolska' && z =='sarum'){
            $(this).closest('div').find('.product-id').html('53');
            $('.price46').text("100.00лв.");
        }
    });

$('.select54').change(function(){
        var y = $('#selectMaterial54').val();
        var x = $('#selectColor54').val();
        if(x == 'natural' && y == 'teleshka'){

            $(this).closest('div').find('.product-id').html('54');
        }else if(x == 'black' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('55');
        }else if(x == 'natural' &&  y== 'bivolska'){
            $(this).closest('div').find('.product-id').html('56');
        }else if(x == 'black' && y == 'bivolska'){
            $(this).closest('div').find('.product-id').html('57');
        }
    });

$('.select58').change(function(){
        var y = $('#selectMaterial58').val();
        var x = $('#selectColor58').val();
        if(x == 'natural' && y == 'teleshka'){

            $(this).closest('div').find('.product-id').html('58');
        }else if(x == 'black' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('59');
        }else if(x == 'natural' &&  y== 'bivolska'){
            $(this).closest('div').find('.product-id').html('60');
        }else if(x == 'black' && y == 'bivolska'){
            $(this).closest('div').find('.product-id').html('61');
        }
    });

$('.select62').change(function(){
        var y = $('#selectMaterial62').val();
        var x = $('#selectColor62').val();
        if(x == 'natural' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('62');
        }else if(x == 'black' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('63');
        }else if(x == 'natural' &&  y== 'bivolska'){
            $(this).closest('div').find('.product-id').html('64');
        }else if(x == 'black' && y == 'bivolska'){
            $(this).closest('div').find('.product-id').html('65');
        }
    });

$('.select66').change(function(){
        var y = $('#selectMaterial66').val();
        var x = $('#selectColor66').val();
        if(x == 'natural' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('66');
        }else if(x == 'black' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('67');
        }else if(x == 'natural' &&  y== 'bivolska'){
            $(this).closest('div').find('.product-id').html('68');
        }else if(x == 'black' && y == 'bivolska'){
            $(this).closest('div').find('.product-id').html('69');
        }
    });

$('.select70').change(function(){
        var singleValue = $('#selectMaterial70').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('70');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('71');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('72');
        }
    });

$('.select73').change(function(){
        var singleValue = $('#selectMaterial73').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('73');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('74');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('75');
        }
    });

$('.select76').change(function(){
        var singleValue = $('#selectMaterial76').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('76');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('77');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('78');
        }
    });

$('.select79').change(function(){
        var singleValue = $('#selectMaterial79').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('79');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('80');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('81');
        }
    });

$('.select82').change(function(){
        var singleValue = $('#selectMaterial82').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('82');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('83');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('84');
        }
    });

$('.select85').change(function(){
        var singleValue = $('#selectMaterial85').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('85');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('86');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('87');
        }
    });

$('.select88').change(function(){
        var singleValue = $('#selectMaterial88').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('88');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('89');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('90');
        }
    });

$('.select91').change(function(){
        var singleValue = $('#selectMaterial91').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('91');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('92');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('93');
        }
    });

$('.select94').change(function(){
        var singleValue = $('#selectMaterial94').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('94');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('95');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('96');
        }
    });

$('.select97').change(function(){
        var singleValue = $('#selectMaterial97').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('97');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('98');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('99');
        }
    });

$('.select100').change(function(){
        var singleValue = $('#selectMaterial100').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('100');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('101');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('102');
        }
    });

$('.select103').change(function(){
        var singleValue = $('#selectMaterial103').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('103');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('104');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('105');
        }
    });

$('.select106').change(function(){
        var singleValue = $('#selectMaterial106').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('106');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('107');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('108');
        }
    });

$('.select109').change(function(){
        var singleValue = $('#selectMaterial109').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('109');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('110');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('111');
        }
    });

$('.select112').change(function(){
        var singleValue = $('#selectMaterial112').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('112');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('113');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('114');
        }
    });

$('.select115').change(function(){
        var singleValue = $('#selectMaterial115').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('115');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('116');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('117');
        }
    });

$('.elect118').change(function(){
        var singleValue = $('#selectMaterial118').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('118');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('119');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('120');
        }
    });

$('.select121').change(function(){
        var singleValue = $('#selectMaterial121').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('121');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('122');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('123');
        }
    });

$('.select124').change(function(){
        var singleValue = $('#selectMaterial124').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('124');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('125');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('126');
        }
    });

$('.select127').change(function(){
        var singleValue = $('#selectMaterial127').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('127');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('128');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('129');
        }
    });

$('.select130').change(function(){
        var singleValue = $('#selectMaterial130').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('130');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('131');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('132');
        }
    });

$('.select133').change(function(){
        var singleValue = $('#selectMaterial133').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('133');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('134');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('135');
        }
    });

$('.select136').change(function(){
        var singleValue = $('#selectMaterial136').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('136');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('137');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('138');
        }
    });

$('.select139').change(function(){
        var singleValue = $('#selectMaterial139').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('139');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('140');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('141');
        }
    });

$('.select142').change(function(){
        var singleValue = $('#selectMaterial142').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('142');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('143');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('144');
        }
    });

$('.select145').change(function(){
        var singleValue = $('#selectMaterial145').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('145');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('146');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('147');
        }
    });

$('.select148').change(function(){
        var singleValue = $('#selectMaterial148').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('148');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('149');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('150');
        }
    });

$('.select151').change(function(){
        var singleValue = $('#selectMaterial151').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('151');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('152');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('153');
        }
    });

$('.select154').change(function(){
        var singleValue = $('#selectMaterial154').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('154');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('155');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('156');
        }
    });

$('.select157').change(function(){
        var singleValue = $('#selectMaterial157').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('157');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('158');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('159');
        }
    });

$('.select160').change(function(){
        var singleValue = $('#selectMaterial160').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('160');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('161');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('162');
        }
    });

$('.select163').change(function(){
        var singleValue = $('#selectMaterial163').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('163');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('164');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('165');
        }
    });

$('.select166').change(function(){
        var singleValue = $('#selectMaterial166').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('166');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('167');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('168');
        }
    });

$('.select169').change(function(){
        var singleValue = $('#selectMaterial169').val();
        if(singleValue == 'teleshka'){
            $(this).closest('div').find('.product-id').html('169');
        }else if(singleValue == 'agneshka'){
            $(this).closest('div').find('.product-id').html('170');
        }else if(singleValue == 'yareshka'){
            $(this).closest('div').find('.product-id').html('171');
        }
    });

$('.select172').change(function(){
        var x = $('#selectColor172').val();
        if(x == 'natural'){
            $(this).closest('div').find('.product-id').html('172');
        }else if(x == 'black'){
            $(this).closest('div').find('.product-id').html('173');
        }
    });

$('.select174').change(function(){
        var x = $('#selectColor174').val();
        if(x == 'natural'){
            $(this).closest('div').find('.product-id').html('174');
        }else if(x == 'black'){
            $(this).closest('div').find('.product-id').html('175');
        }
    });

$('.select176').change(function(){
        var y = $('#selectMaterial176').val();
        var x = $('#selectColor176').val();
        if(x == 'black' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('176');
        }else if(x == 'black' && y == 'yareshka'){
            $(this).closest('div').find('.product-id').html('177');
        }else if(x == 'black' &&  y== 'agneshka'){
            $(this).closest('div').find('.product-id').html('178');
        }else if(x == 'natural' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('179');
        }else if(x == 'natural' && y == 'yareshka'){
            $(this).closest('div').find('.product-id').html('180');
        }else if(x == 'natural' &&  y== 'agneshka'){
            $(this).closest('div').find('.product-id').html('181');
        }else if(x == 'red' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('182');
        }else if(x == 'red' && y == 'yareshka'){
            $(this).closest('div').find('.product-id').html('183');
        }else if(x == 'red' &&  y== 'agneshka'){
            $(this).closest('div').find('.product-id').html('184');
        }else if(x == 'blue' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('185');
        }else if(x == 'blue' && y == 'yareshka'){
            $(this).closest('div').find('.product-id').html('186');
        }else if(x == 'blue' &&  y== 'agneshka'){
            $(this).closest('div').find('.product-id').html('187');
        }
    });

$('.select188').change(function(){
        var x = $('#selectColor188').val();
        var y = $('#selectMaterial188').val();
        if(x == 'black' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('188');
        }else if(x == 'natural' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('189');
        }else if(x == 'black' &&  y== 'bivolska'){
            $(this).closest('div').find('.product-id').html('190');
        }else if(x == 'natural' && y == 'bivolska'){
            $(this).closest('div').find('.product-id').html('191');
        }
    });

$('.select192').change(function(){
        var x = $('#selectColor192').val();
        var y = $('#selectMaterial192').val();
        if(x == 'black' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('192');
        }else if(x == 'natural' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('193');
        }else if(x == 'black' &&  y== 'bivolska'){
            $(this).closest('div').find('.product-id').html('194');
        }else if(x == 'natural' && y == 'bivolska'){
            $(this).closest('div').find('.product-id').html('195');
        }
    });

$('.select196').change(function(){
        var x = $('#selectColor196').val();
        var y = $('#selectMaterial196').val();
        if(x == 'black' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('196');
        }else if(x == 'natural' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('197');
        }else if(x == 'black' &&  y== 'bivolska'){
            $(this).closest('div').find('.product-id').html('198');
        }else if(x == 'natural' && y == 'bivolska'){
            $(this).closest('div').find('.product-id').html('199');
        }
    });

$('.select200').change(function(){
        var x = $('#selectColor200').val();
        var y = $('#selectMaterial200').val();
        if(x == 'black' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('200');
        }else if(x == 'natural' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('201');
        }else if(x == 'black' &&  y== 'bivolska'){
            $(this).closest('div').find('.product-id').html('202');
        }else if(x == 'natural' && y == 'bivolska'){
            $(this).closest('div').find('.product-id').html('203');
        }
    });

$('.select204').change(function(){
        var x = $('#selectColor204').val();
        var y = $('#selectMaterial204').val();
        if(x == 'black' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('204');
        }else if(x == 'natural' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('205');
        }else if(x == 'black' &&  y== 'bivolska'){
            $(this).closest('div').find('.product-id').html('206');
        }else if(x == 'natural' && y == 'bivolska'){
            $(this).closest('div').find('.product-id').html('207');
        }
    });

$('.select208').change(function(){
        var x = $('#selectColor208').val();
        var y = $('#selectMaterial208').val();
        if(x == 'black' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('208');
        }else if(x == 'natural' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('209');
        }else if(x == 'black' &&  y== 'bivolska'){
            $(this).closest('div').find('.product-id').html('210');
        }else if(x == 'natural' && y == 'bivolska'){
            $(this).closest('div').find('.product-id').html('211');
        }
    });

$('.select212').change(function(){
        var x = $('#selectColor212').val();
        var y = $('#selectMaterial212').val();
        if(x == 'black' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('212');
        }else if(x == 'natural' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('213');
        }else if(x == 'black' &&  y== 'bivolska'){
            $(this).closest('div').find('.product-id').html('214');
        }else if(x == 'natural' && y == 'bivolska'){
            $(this).closest('div').find('.product-id').html('215');
        }
    });

$('.select216').change(function(){
        var x = $('#selectColor216').val();
        var y = $('#selectMaterial216').val();
        if(x == 'black' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('216');
        }else if(x == 'natural' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('217');
        }else if(x == 'black' &&  y== 'bivolska'){
            $(this).closest('div').find('.product-id').html('218');
        }else if(x == 'natural' && y == 'bivolska'){
            $(this).closest('div').find('.product-id').html('219');
        }
    });

$('.select220').change(function(){
        var y = $('#selectMaterial220').val();
        var x = $('#selectColor220').val();
        if(x == 'black' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('220');
        }else if(x == 'natural' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('221');
        }else if(x == 'black' &&  y== 'bivolska'){
            $(this).closest('div').find('.product-id').html('222');
        }else if(x == 'natural' && y == 'bivolska'){
            $(this).closest('div').find('.product-id').html('223');
        }
    });

$('.select224').change(function(){
        var y = $('#selectMaterial224').val();
        var x = $('#selectColor224').val();
        if(x == 'black' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('224');
        }else if(x == 'natural' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('225');
        }else if(x == 'black' &&  y== 'bivolska'){
            $(this).closest('div').find('.product-id').html('226');
        }else if(x == 'natural' && y == 'bivolska'){
            $(this).closest('div').find('.product-id').html('227');
        }
    });

$('.select228').change(function(){
        var y = $('#selectMaterial228').val();
        var x = $('#selectColor228').val();
        if(x == 'black' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('228');
        }else if(x == 'natural' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('229');
        }else if(x == 'black' &&  y== 'bivolska'){
            $(this).closest('div').find('.product-id').html('230');
        }else if(x == 'natural' && y == 'bivolska'){
            $(this).closest('div').find('.product-id').html('231');
        }
    });

$('.select232').change(function(){
        var y = $('#selectMaterial232').val();
        if(y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('232');
        }else if(y == 'bivolska'){
            $(this).closest('div').find('.product-id').html('233');
        }else if(y== 'agneshka'){
            $(this).closest('div').find('.product-id').html('234');
        }else if(y == 'yareshka'){
            $(this).closest('div').find('.product-id').html('235');
        }
    });

$('.select236').change(function(){
        var y = $('#selectMaterial236').val();
        var x = $('#selectSize236').val();
        if(x == '35' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('236');
        }else if(x == '35' && y == 'bivolska'){
            $(this).closest('div').find('.product-id').html('237');
        }else if(x == '35' &&  y== 'agneshka'){
            $(this).closest('div').find('.product-id').html('238');
        }else if(x == '35' && y == 'yareshka'){
            $(this).closest('div').find('.product-id').html('239');
        }else if(x == '38' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('240');
        }else if(x == '38' && y == 'bivolska'){
            $(this).closest('div').find('.product-id').html('241');
        }else if(x == '38' &&  y== 'agneshka'){
            $(this).closest('div').find('.product-id').html('242');
        }else if(x == '38' && y == 'yareshka'){
            $(this).closest('div').find('.product-id').html('243');
        }
    });

$('.select244').change(function(){
        var y = $('#selectMaterial244').val();
        if(y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('244');
        }else if(y== 'agneshka'){
            $(this).closest('div').find('.product-id').html('245');
        }else if(y == 'yareshka'){
            $(this).closest('div').find('.product-id').html('246');
        }
    });

$('.select247').change(function(){
        var y = $('#selectColor247').val();
        if(y == 'natural'){
            $(this).closest('div').find('.product-id').html('247');
        }else if(y== 'black'){
            $(this).closest('div').find('.product-id').html('248');
        }
    });

$('.select249').change(function(){
        var y = $('#selectMaterial249').val();
        var x = $('#selectColor249').val();
        if(x == 'black' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('249');
        }else if(x == 'black' && y == 'agneshka'){
            $(this).closest('div').find('.product-id').html('250');
        }else if(x == 'black' &&  y== 'yareshka'){
            $(this).closest('div').find('.product-id').html('251');
        }else if(x == 'natural' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('252');
        }else if(x == 'natural' && y == 'agneshka'){
            $(this).closest('div').find('.product-id').html('253');
        }else if(x == 'natural' && y == 'yareshka'){
            $(this).closest('div').find('.product-id').html('254');
        }
    });

$('.select255').change(function(){
        var y = $('#selectMaterial255').val();
        var x = $('#selectColor255').val();
        if(x == 'black' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('255');
        }else if(x == 'black' && y == 'agneshka'){
            $(this).closest('div').find('.product-id').html('256');
        }else if(x == 'black' &&  y== 'yareshka'){
            $(this).closest('div').find('.product-id').html('257');
        }else if(x == 'natural' && y == 'teleshka'){
            $(this).closest('div').find('.product-id').html('258');
        }else if(x == 'natural' && y == 'agneshka'){
            $(this).closest('div').find('.product-id').html('259');
        }else if(x == 'natural' && y == 'yareshka'){
            $(this).closest('div').find('.product-id').html('260');
        }
    });

$('select').select2({dropdownAutoWidth : true});

$('#my-slideshow').bjqs({
        'height' : 520,
        'width' : 820,
        'responsive' : true,
    });
});