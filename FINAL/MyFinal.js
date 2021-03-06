
function setup()
{
    createCanvas (500,600);
}

function draw()
{
    background('#FFFFFF');
    fill(0);
    stroke(0);
    createBorders(10);

    //hair dark
    fill('#FFFFFF');
    stroke('#806517');
    strokeWeight(4);
    bezier(428,529, 410,500,390,450, 420,350);
    bezier(260,40, 190,50,140,90, 90,215);
    bezier(90,215, 75,280,100,300, 100,280);
    bezier(140,500, 170,470,190,450, 190,400);
    bezier(260,40, 270,35,290,38, 330,53);
    bezier(330,53, 470,180,380,250, 420,320);
    bezier(420,320, 450,400,380,440, 450,500);
    bezier(450,500, 460,510,440,540, 430,530);
    bezier(440,533, 445,550,420,560, 380,550);
    bezier(270,372, 250,440,320,470, 300,530);
    bezier(178,320, 170,350,200,420, 225,545);
    bezier(225,545, 235,555,245,550, 250,540);
    bezier(250,545, 270,550,290,555, 300,530);
    bezier(290,70, 250,60,210,60, 180,75);
    bezier(288,100, 240,80,190,80, 148,110);
    bezier(288,100, 220,90,150,110, 100,245);
    bezier(305,60, 320,58,340,70, 365,90);
    bezier(299,80, 330,82,360,89, 390,250);
    bezier(295,110, 320,115,340,140, 360,190);

    //hair golden
    fill('#FFFFFF');
    stroke('#FBB117');
    strokeWeight(4);
    bezier(290,140, 400,200,380,310, 340,335);
    bezier(340,335, 300,370,300,400, 380,480);
    bezier(280,135, 250,140,170,110, 120,215);
    bezier(120,215, 60,320,40,380, 120,480);
    bezier(120,480, 70,400,80,310, 125,250);
    bezier(315,400, 310,480,320,520, 350,550);
    bezier(350,550, 360,559,370,560, 378,550);
    bezier(390,280, 385,350,370,420, 410,540);
    bezier(345,350, 320,370,340,410, 355,440);
    bezier(360,475, 350,490,355,510, 375,540);
    bezier(335,445, 325,480,330,510, 360,535);
    bezier(355,215, 358,230,370,270, 360,300);

    //hair brown 2.0
    fill('#FFFFFF');
    stroke('#806517');
    strokeWeight(4);
    bezier(120,480, 80,400,90,310, 140,280);
    bezier(110,315, 140,400,150,450, 140,500);
    bezier(260,547, 300,520,255,420, 260,371);
    bezier(250,540, 260,500,250,420, 245,370);
    bezier(230,475, 236,500,227,540, 223,530);
    bezier(229,450, 234,470,225,495, 215,510);
    bezier(231,425, 232,450,223,485, 209,465);
    bezier(233,390, 230,430,225,450, 203,440);
    bezier(235,366, 230,400,220,420, 197,415);
    bezier(212,350, 215,365,210,385, 192,395);
    bezier(160,305, 162,350,190,400, 159,460);
    bezier(135,300, 140,340,160,380, 150,440);
    bezier(370,320, 350,390,360,410, 375,460);
    bezier(380,490, 370,510,380,530, 395,540);

    //head
    fill('#FFFFFF');
    stroke('#FFE87C');
    strokeWeight(4);
    line(300,360,340,328);
    bezier(340,328, 380,270,340,235 ,350,200);
    bezier(300,360, 280,370,265,375 ,230,360);
    bezier(230,360, 225,353,128,285 ,130,240);
    bezier(130,240, 127,230,126,220, 130,210);

    //face
    fill('#FFFFFF');
    stroke('#FFE87C');
    strokeWeight(3);
    line(277,305, 280,306);
    line(208,315, 200,311);
    strokeWeight(2);
    bezier(287,308, 289,305,286,303, 280,300);
    bezier(280,300, 277,303,270,280, 251,275);

    //nose
    strokeWeight(4);
    bezier(203,290, 213,300,225,310, 245,290);
    bezier(245,290, 255,285,255,275, 245,275);

    //chin
    strokeWeight(2);
    bezier(225,345, 240,340,265,340, 270,342);

    //eyes
    strokeWeight(4);
    bezier(208,220, 213,230,210,240, 205,265);
    stroke(0);

    //right eye
    strokeWeight(3);
    bezier(190,230, 180,240,160,250, 150,234);
    //eyelashes
    strokeWeight(2);
    bezier(139,235, 155,234,156,238, 140,237);
    bezier(141,240, 158,237,160,240, 142,243);
    bezier(144,246, 158,240,159,240, 150,252);
    bezier(146,248, 158,240,160,240, 152,250);
    bezier(150,246, 159,239,161,239, 150,253);
    bezier(156,245, 161,242,164,242, 159,254);
    bezier(156,254, 163,241,165,240, 160,255);
    bezier(163,254, 166,240,168,239, 168,254);
    bezier(166,254, 170,238,171,238, 172,253);
    bezier(171,253, 173,238,175,237, 175,252);
    bezier(176,253, 177,236,179,235, 179,251);
    bezier(181,250, 181,234,183,233, 184,248);
    bezier(186,247, 184,230,187,228, 188,244);

    //left eye
    strokeWeight(3);
    bezier(290,230, 275,240,255,250, 245,234);
    //eyelashes
    strokeWeight(2);
    bezier(303,232, 287,230,287,231, 301,235);
    bezier(300,238, 287,230,286,232, 299,240);
    bezier(295,242, 285,230,284,231, 292,245);
    bezier(290,245, 283,231,282,233, 287,247);
    bezier(285,248, 280,234,279,232, 282,250);
    bezier(280,251, 275,234,273,234, 277,251);
    bezier(274,252, 273,236,269,236, 272,253);
    bezier(271,253, 268,238,266,240, 268,254);
    bezier(266,254, 264,240,262,240, 263,254);
    bezier(261,254, 260,240,259,240, 258,253);
    bezier(256,253, 258,240,256,239, 253,252);
    bezier(252,252, 253,239,252,237, 249,251);
    bezier(247,250, 251,235,249,234, 244,248);
    bezier(242,246, 248,233,247,232, 240,244);

    //right eyebrow
    stroke('#6F4E37');
    fill('#6F4E37');
    strokeWeight(2);
    bezier(190,220, 189,215,140,200, 135,215);
    //left eyebrow
    bezier(300,212, 290,205,240,210, 236,222);

    //lips
    fill('#FFFFFF');
    stroke('#FFCBA4');
    strokeWeight(2);
    bezier(208,315, 225,330,255,330, 275,305);
    stroke('#F75D59');
    bezier(208,315, 230,325,260,315, 275,305);
    stroke('#FFCBA4');
    bezier(208,315, 210,316,230,316, 240,317);
    bezier(240,317, 250,308,260,316, 275,305);
    line(261,314,264,316);
    line(254,317,257,318);
    line(248,318,252,322);
    line(243,320,246,323);
    line(240,320,241,323);
    line(237,321,236,323);
    line(232,321,230,323);
    line(227,321,225,323);
    line(223,321,220,322);

    //arm
    fill('#FFFFFF');
    stroke('#EDDA74');
    strokeWeight(3);
    line(410,558, 410,586);
    strokeWeight(2);
    
    //shirt outline
    fill('#FFFFFF');
    stroke('#5E7D7E');
    strokeWeight(4);
    bezier(65,380, 30,440,25,500, 15,587);
    bezier(103,337, 107,328,111,322, 110,320);
    bezier(270,390, 290,400,310,370, 315,353);
    bezier(380,555, 380,560,375,570, 370,587);
    bezier(195,587, 212,560,211,500, 175,465);
    bezier(140,440, 130,430,110,425, 104,425);
    bezier(81,427, 70,430,50,438, 35,465);
    //bright blue lines of shirt sleeve
    stroke('#43C6DB');
    strokeWeight(6);
    bezier(21,570, 30,575,45,580, 60,586);
    bezier(27,530, 70,550,110,560, 170,586);
    bezier(34,487, 100,515,170,525, 201,550);
    bezier(60,443, 70,445,80,450, 96,455);
    line(117,461, 138,469);
    bezier(165,482, 175,485,180,490, 193,500);
    //bright blue lines of shirt
    line(63,430, 70,405);
    line(108,421, 120,362);
    line(130,428, 135,420);
    line(182,466, 198,445);
    bezier(274,415, 285,420,295,415, 312,398);
    line(202,500, 209,490);
    bezier(288,450, 292,452,296,451, 310,440);
    line(210,535, 217,527);
    line(305,485, 312,480);
    line(205,575, 232,555);
    line(308,505, 317,498);
    bezier(250,586, 275,570,290,540, 333,535);
    bezier(300,586, 325,565,355,560, 373,562);
    //shirt sleeve
    stroke(0);
    strokeWeight(2);
    line(20,575,20,587);
    line(25,578,25,587);
    line(25,540,25,566);
    line(30,580,30,587);
    line(30,537,30,568);
    line(30,500,30,525);
    line(35,582,35,587);
    line(35,539,35,570);
    line(35,493,35,527);
    line(35,470,35,482);
    line(40,584,40,587);
    line(40,541,40,572);
    line(40,495,40,529);
    line(40,465,40,484);
    line(45,586,45,587);
    line(45,543,45,574);
    line(45,497,45,531);
    line(45,457,45,486);
    line(50,587,50,587);
    line(50,545,50,576);
    line(50,499,50,533);
    line(50,451,50,488);
    line(55,547,55,578);
    line(55,501,55,535);
    line(55,447,55,490);
    line(60,549,60,580);
    line(60,503,60,537);
    line(60,448,60,491);
    line(65,551,65,582);
    line(65,505,65,539);
    line(65,450,65,493);
    line(65,438,65,440);
    line(70,553,70,585);
    line(70,507,70,541);
    line(70,452,70,495);
    line(70,436,70,441);
    line(75,555,75,587);
    line(75,509,75,543);
    line(75,454,75,497);
    line(75,434,75,443);
    line(80,557,80,587);
    line(80,510,80,545);
    line(80,456,80,499);
    line(80,432,80,445);
    line(85,559,85,587);
    line(85,511,85,547);
    line(85,458,85,500);
    line(85,435,85,447);
    line(90,561,90,587);
    line(90,513,90,549);
    line(90,460,90,502);
    line(90,443,90,449);
    line(95,563,95,587);
    line(95,514,95,551);
    line(95,462,95,504);
    line(100,565,100,587);
    line(100,516,100,553);
    line(100,464,100,506);
    line(105,567,105,587);
    line(105,518,105,555);
    line(105,466,105,507);
    line(105,428,105,429);
    line(110,569,110,587);
    line(110,519,110,557);
    line(110,474,110,509);
    line(110,429,110,442);
    line(115,571,115,587);
    line(115,521,115,559);
    line(115,479,115,511);
    line(115,431,115,453);
    line(120,573,120,587);
    line(120,523,120,561);
    line(120,484,120,512);
    line(120,467,120,472);
    line(120,433,120,455);
    line(125,575,125,587);
    line(125,525,125,563);
    line(125,469,125,513);
    line(125,435,125,457);
    line(130,577,130,587);
    line(130,526,130,565);
    line(130,471,130,515);
    line(130,437,130,459);
    line(135,579,135,587);
    line(135,527,135,567);
    line(135,473,135,516);
    line(135,440,135,461);
    line(140,580,140,587);
    line(140,528,140,569);
    line(140,504,140,517);
    line(140,444,140,463);
    line(145,582,145,587);
    line(145,530,145,571);
    line(145,501,145,519);
    line(150,584,150,587);
    line(150,531,150,573);
    line(150,495,150,521);
    line(155,586,155,587);
    line(155,533,155,575);
    line(155,490,155,523);
    line(160,587,160,587);
    line(160,535,160,577);
    line(160,485,160,524);
    line(165,537,165,579);
    line(165,488,165,526);
    line(165,478,165,478);
    line(170,539,170,581);
    line(170,490,170,528);
    line(170,474,170,479);
    line(175,541,175,583);
    line(175,492,175,530);
    line(175,471,175,481);
    line(180,543,180,585);
    line(180,496,180,532);
    line(180,476,180,484);
    line(185,545,185,587);
    line(185,499,185,534);
    line(185,482,185,487);
    line(190,548,190,587);
    line(190,503,190,536);
    line(190,489,190,490);
    line(195,551,195,580);
    line(195,505,195,540);
    line(200,554,200,567);
    line(200,519,200,543);
    //shirt part without sleeve, bottom strip
    line(310,584,310,587);
    line(315,581,315,587);
    line(320,578,320,587);
    line(325,575,325,587);
    line(330,573,330,587);
    line(335,571,335,587);
    line(340,570,340,587);
    line(345,569,345,587);
    line(350,568,350,587);
    line(355,567,355,587);
    line(360,566,360,587);
    line(365,566,365,587);
    line(370,567,370,575);
    //2nd strip
    line(350,555,350,558);
    line(345,550,345,559);
    line(340,545,340,560);
    line(335,540,335,561);
    line(330,541,330,563);
    line(325,542,325,565);
    line(320,543,320,567);
    line(315,544,315,569);
    line(310,546,310,572);
    line(305,548,305,575);
    line(300,551,300,579);
    line(295,554,295,583);
    line(290,558,290,585);
    line(285,562,285,587);
    line(280,566,280,587);
    line(275,571,275,587);
    line(270,575,270,587);
    line(265,579,265,587);
    line(260,584,260,587);
    line(255,587,255,587);
    //3rd strip
    line(330,530,330,530);
    line(325,522,325,531);
    line(320,510,320,532);
    line(315,506,315,534);
    line(310,509,310,536);
    line(305,525,305,538);
    line(300,538,300,540);
    line(280,553,280,553);
    line(273,552,275,558);
    line(266,552,270,563);
    line(259,551,265,568);
    line(252,550,260,572);
    line(246,552,255,576);
    line(240,554,250,580);
    line(234,559,244,584);
    line(229,564,238,587);
    line(224,568,231,587);
    line(219,572,225,587);
    line(213,576,218,587);
    line(208,580,211,587);
    line(203,583,205,587);
    //4th strip
    line(315,483,315,493);
    line(310,486,310,497);
    line(305,489,305,495);
    line(220,532,225,554);
    line(215,537,220,558);
    line(209,541,214,562);
    line(208,561,209,566);
    //5th strip
    line(310,445,310,475);
    line(305,449,305,479);
    line(300,452,300,478);
    line(295,455,295,465);
    line(290,455,290,456);
    line(211,496,217,522);
    line(206,503,211,526);
    //6th strip
    line(310,406,310,435);
    line(305,410,305,438);
    line(300,415,300,441);
    line(295,418,295,445);
    line(290,420,290,446);
    line(285,421,285,445);
    line(280,421,280,436);
    line(275,420,275,425);
    line(198,452,207,485);
    line(193,459,202,490);
    line(188,465,194,484);
    //7th strip
    line(310,372,310,393);
    line(305,379,305,397);
    line(300,384,300,402);
    line(295,389,295,407);
    line(290,393,290,410);
    line(285,395,285,412);
    line(280,396,280,412);
    line(275,395,275,411);
    line(270,394,270,405);
    line(192,425,196,440);
    line(188,435,191,446);
    line(185,447,186,452);
    line(180,456,181,458);
    line(178,463,178,463);
    //8th strip
    line(136,426,137,427);
    line(134,430,138,432);
    //9th strip
    line(122,367,123,367);
    line(121,373,124,373);
    line(120,379,126,379);
    line(119,385,128,386);
    line(118,391,130,393);
    line(117,397,132,400);
    line(116,403,132,407);
    line(115,409,132,414);
    line(114,415,128,420);
    line(112,421,126,426);
    //10th strip
    line(110,330,111,329);
    line(107,336,113,335);
    line(103,342,115,341);
    line(102,348,117,347);
    line(101,354,116,353);
    line(100,360,115,359);
    line(99,366,114,365);
    line(99,372,113,371);
    line(99,378,112,377);
    line(99,384,110,383);
    line(99,390,109,389);
    line(99,396,107,395);
    line(100,402,106,401);
    line(101,408,105,407);
    line(102,414,104,413);
    line(103,420,104,419);
    //10th strip part 2
    line(72,413,73,412);
    line(70,419,76,416);
    line(69,425,78,422);
    //11th strip
    line(58,400,65,390);
    line(52,414,65,399);
    line(47,426,62,410);
    line(44,436,60,420);
    line(41,446,58,430);

    //neck
    stroke('#FFE87C');
    strokeWeight(2);

    //background - green
    stroke('#00FF00');
    strokeWeight(2);
    line(15,13,15,550);
    line(20,13,20,510);
    line(25,13,25,480);
    line(30,13,30,450);
    line(35,13,35,435);
    line(40,13,40,420);
    line(45,13,45,410);
    line(50,13,50,400);
    line(55,13,55,390);
    line(60,13,60,380);
    line(65,13,65,335);
    line(70,13,70,310);
    line(75,13,75,295);
    line(80,13,80,280);
    line(85,13,85,220);
    line(90,13,90,203);
    line(95,13,95,192);
    line(100,13,100,180);
    line(105,13,105,170);
    line(110,13,110,160);
    line(115,13,115,150);
    line(120,13,120,140);
    line(125,13,125,130);
    line(130,13,130,122);
    line(135,13,135,116);
    line(140,13,140,109);
    line(145,13,145,103);
    line(150,13,150,96);
    line(155,13,155,90);
    line(160,13,160,84);
    line(165,13,165,79);
    line(170,13,170,75);
    line(175,13,175,71);
    line(180,13,180,67);
    line(185,13,185,63);
    line(190,13,190,60);
    line(195,13,195,57);
    line(200,13,200,54);
    line(205,13,205,51);
    line(210,13,210,49);
    line(215,13,215,47);
    line(220,13,220,45);
    line(225,13,225,43);
    line(230,13,230,41);
    line(235,13,235,40);
    line(240,13,240,39);
    line(245,13,245,38);
    line(250,13,250,37);
    line(255,13,255,36);
    line(260,13,260,35);
    line(265,13,265,34);
    line(270,13,270,33);
    line(275,13,275,34);
    line(280,13,280,34);
    line(285,13,285,35);
    line(290,13,290,36);
    line(295,13,295,37);
    line(300,13,300,38);
    line(305,13,305,39);
    line(310,13,310,41);
    line(315,13,315,43);
    line(320,13,320,45);
    line(325,13,325,47);
    line(330,13,330,49);
    line(335,13,335,52);
    line(340,13,340,56);
    line(345,13,345,60);
    line(350,13,350,65);
    line(355,13,355,71);
    line(360,13,360,77);
    line(365,13,365,83);
    line(370,13,370,89);
    line(375,13,375,95);
    line(380,13,380,101);
    line(385,13,385,107);
    line(390,13,390,114);
    line(395,13,395,122);
    line(400,13,400,131);
    line(405,13,405,144);
    line(410,13,410,158);
    line(415,13,415,185);
    line(415,240,415,295);
    line(415,558,415,587);
    line(420,13,420,310);
    line(420,558,420,587);
    line(425,13,425,320);
    line(425,415,425,455);
    line(425,557,425,587);
    line(430,13,430,340);
    line(430,390,430,470);
    line(430,556,430,587);
    line(435,13,435,478);
    line(435,553,435,587);
    line(440,13,440,484);
    line(440,550,440,587);
    line(445,13,445,489);
    line(445,532,445,587);
    line(450,13,450,495);
    line(450,527,450,587);
    line(455,13,455,500);
    line(455,520,455,587);
    line(460,13,460,587);
    line(465,13,465,587);
    line(470,13,470,587);
    line(475,13,475,587);
    line(480,13,480,587);
    line(485,13,485,587);
    
}

function createBorders(thickness) 
{
    // top border
    rect(0, 0, width, thickness);
    // left border
    rect(0, 0, thickness, height);
    // bottom border
    rect(0, height - thickness, width, thickness);
    // right upper border
    rect(width - thickness, 0, thickness, height - thickness);
}