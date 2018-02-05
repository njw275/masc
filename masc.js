// import Typed from 'typed.js';

var typed = new Typed(".element", {
  strings: ["Music and Sound Cultures", "Music", "Music and Sound Cultures", "Music "],
  smartBackspace: true, // Default value
  loop: true,
  typeSpeed: 150,
  backSpeed: 200,
  showCursor: false
});


bios = ["<h3>Emma Chiu</h3>","<h3>Oscar Gomez</h3>","<h3>Beth Russell</h3>","<h3>Godfried Toussaint</h3>","<h3>Robert Rowe</h3>","<h3>Konstantinos Trochidis</h3>"];
blurbs = ["<p>Emma Chiu is currently a philosophy major, studying at New York University, Abu Dhabi. Her current projects with regards to the Music and Sound Cultures group include research concerning the rhythmic patterns Carnatic Indian music, and the digitization of Arabic music. She also inserted metadata in the 45s and 78s of the Eisenberg East African Music collection, and is continuing this work with additional cassette files.</p>",
          "<p>Oscar Gomez is a current student at New York University Abu Dhabi, studying Computer Science and Mathematics. Oscar has received several national and international awards in Mathematics and Computing competitions. Oscar is interested in machine learning and its applications in musical research. Oscar is currently working on the analysis of NYUAD's library collection of Arabic music, East African music, and other music from the region by creating clustering models for the data with several different approaches. This research hopes to find meaningful connections and contrasts in order to develop new browsing strategies and recommendation systems for this type of music.</p>",
          "<p>Beth Russell is the Head of the Center for Digital Scholarship and Associate Academic Librarian for the Humanities at New York University Abu Dhabi. In this role she works extensively with faculty research projects and programs in digital humanities and other technologically-engaged work, including <a href=\"http://nyuad.nyu.edu/en/research/faculty-research/akkasah.html\">Akkasah: Center for Photography at NYUAD</a> and <a href=\"http://dlib.nyu.edu/aco/\">Arabic Collections Online</a>. She oversees the Library's programs involving digitization and media technologies,GIS applications, and collaborates routinely on issues of digital storage and digital archiving. Her academic background lies in literature, journalism and educational technology as well as librarianship. Her professional service includes appointments on the Digital Research Tools (DiRT) editorial board and on the Digital Library Federation Planning Committee, among others. Her recent scholarship has centered around multiple issues in librarianship, including intellectual property perspectives at a transnational campus. Her current research focuses on faculty partnerships in the digital humanities and will be featured in her upcoming chapter “The Collaborative Project Management Model: Akkasah, an Arab Photography Project” in Digital Humanities, Libraries, & Partnerships to be published by Chandos Publishing in 2018.</p>",
          "<p>Godfried Toussaint is a Professor and the Head of the Computer Science Program at New York University Abu Dhabi, in Abu Dhabi, The United Arab Emirates. He is also an affiliate researcher in the Computer Science and Artificial Intelligence Laboratory at the Massachusetts Institute of Technology in Cambridge, MA, USA. Formerly, he taught and did research in the School of Computer Science at McGill University in Montreal, Canada in the areas of information theory, pattern recognition, textile-pattern analysis and design, computational geometry, machine learning, music information retrieval, and computational music theory. In 2005 he became a researcher in the Centre for Interdisciplinary Research in Music Media and Technology, in the Schulich School of Music at McGill University. He is a founder and co-founder of several annual international conferences and workshops, including the ACM Symposium on Computational Geometry, and the Canadian Conference on Computational Geometry. He is an editor of several journals, including Computational Geometry: Theory and Applications, the International Journal of Computational Geometry and Applications, ISRN Geometry, and the Journal of Mathematics and the Arts. He received several distinguished awards including a two-year Killam Fellowship from the Canada Council for the Arts for a project on Movable Separability of Objects in Space, and a Radcliffe Fellowship from Harvard University for the project Phylogenetic Analysis of the Musical Rhythms of the World, where he spent one year at the Radcliffe Institute for Advanced Study, and one year in the Music Department at Harvard. His research on the phylogenetic analysis of musical rhythms has been reported in several media, and was the focus of two Canadian television programs. His latest book is titled: The Geometry of Musical Rhythm, published by Chapman-Hall/CRC Press, January, 2013.For more information, please visit <a href=\"http://cgm.cs.mcgill.ca/~godfried/\">Godfried Toussaint's website</a>.</p>",
          "<p>Robert Rowe received degrees in music history & theory (B.M. Wisconsin 1976), composition (M.A. Iowa 1978), and music & cognition (Ph.D. MIT 1991). From 1978 to 1987 he lived and worked in Europe, associated with the Institute of Sonology in Utrecht, the Royal Conservatory in the Hague, the ASKO Ensemble of Amsterdam, and with IRCAM in Paris, where he developed control level software for the 4X machine. In 1990 his composition Flood Gate won first prize in the “live electroacoustic” category of the Bourges International Electroacoustic Music Competition. In 1991 he became the first composer to complete the Ph.D. in Music and Cognition at the MIT Media Laboratory and is currently Professor and Director of the Music Technology program at New York University’s Steinhardt School. His music is performed throughout North America, Europe, and Japan and is available on compact discs from Urlicht, Summit, Innova, Bridge, New World, Roméo, Quindecim, Harmonia Mundi, and the International Computer Music Association, and his book/CD-ROM projects Interactive Music Systems (1993) and Machine Musicianship (2001) are available from the MIT Press.</p>",
          "<p>Konstantinos Trochidis has a background in audio signal processing, machine learning, and music perception. He received his PhD degree in the area of Music Information Retrieval and machine learning from the Aristotle University of Thessaloniki, Greece. His PhD research focused on music emotion recognition and classification.He worked as a Postdoctoral researcher in France at the University of Burgundy (2010-2011) in Canada (2011-2013) at McGill and McMaster Universities and in Singapore at the Singapore University of Technology and Design (2013). During his postdoctoral research, he developed multimodal music recognition and recommendation systems using audio feature extraction, machine learning, and perceptual responses. He is currently working as a Research Associate in Music Computing and Machine Learning at New York University in Abu Dhabi (NYUAD). His research at NYUAD focuses on the audio content analysis of musical rhythm from the Middle East and South India and on the development of music generation systems for these musics.</p>"
          ];


$("#toAbout").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top-30
    }, 600);
});

$("#toBios").click(function() {
    $('html, body').animate({
        scrollTop: $("#bios").offset().top-100
    }, 600);
});

$("#toBiosFromAbout").click(function() {
    $('html, body').animate({
        scrollTop: $("#bios").offset().top-30
    }, 600);
});

$("#toPublications").click(function() {
    $('html, body').animate({
        scrollTop: $("#publications").offset().top-30
    }, 600);
});

$("#toProjects").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top-30
    }, 600);
});

$("#toProjectsFromAbout").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top-30
    }, 600);
});

$("img").on("click",function() {
  if($(this).hasClass("blur")){    //if clicked and blurry make unblurry 
      $(this).removeClass("blur");
      $(this).addClass("unblur");
      $(this).siblings("img").removeClass("unblur"); //if blurry and clicked make the others blurry
      $(this).siblings("img").addClass("blur");
      $(this).parent().find(".name").html(bios[ $(this).index() ]);
      $(this).parent().find(".blurb").html(blurbs[ $(this).index() ]);

  }
  else if($(this).hasClass("unblur") && $(this).siblings().hasClass("blur")){
    $(this).siblings("img").removeClass("blur");
    $(this).siblings("img").addClass("unblur");
    $(this).parent().find(".name").html("");
    $(this).parent().find(".blurb").html("");
  }
  else if ($(this).hasClass("unblur")){     //if clicked make others blurry
    $(this).siblings("img").removeClass("unblur");
    $(this).siblings("img").addClass("blur");
    $(this).parent().find(".name").html(bios[ $(this).index() ]);
    $(this).parent().find(".blurb").html(blurbs[ $(this).index() ]);
  }
  
});





