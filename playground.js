$(document).ready(function() {

    //read object found in objRegions.js file to
    var obj = regions;

    //the remaining loops will drill down into this object to create graphs specific to each readion
    //append theater info to body -> e.g. america, europe, apac
    for (var keysTheater1 in obj) {

      var title = keysTheater1.toUpperCase()
      $('body')
      .append('<div id='+keysTheater1+' class="theather"><h2 class="theaterTitle" style="color:#1C8ACB"><u>'+title+'</u></h2></div>')
      .append('<hr width="50%" align="left">');
    }

    //append division info to theater -> e.g. east, west, central, south europe, north europe
    $('body').children('div').each(function() {
      for (var keysTheater2 in obj) {
        if (keysTheater2 === $(this).attr('id')){
          for(var keysDivision in obj[keysTheater2]['division']){
            var title = toTitleCase(keysDivision);
            var vp = obj[keysTheater2]['division'][keysDivision]['vp'];
            var divisionUnderscore = regExUnderscore(keysDivision, " ", "__")
            $(this)
            .append('<div id="title_'+divisionUnderscore+'" class="division"><u>'+title+': <span style="font-size:12px">'+vp+'</span></u></div>')
            .append('<div id="graph_'+divisionUnderscore+'" class="divisionGraph"></div>')
          }
        }
      }
    });

    $('.divisionGraph').each(function() {

      for (var keysTheater3 in obj) {

          for(var keysDivision in obj[keysTheater3]['division']){

            if ('graph_'+regExUnderscore(keysDivision, " ", "__") === $(this).attr('id')){

              for(var keysDistrict in obj[keysTheater3]['division'][keysDivision]){

                if(keysDistrict != 'vp' && keysDistrict != null){

                  $(this)
                  .add('<svg>')
                  .append('<svg id="svg_'+regExUnderscore(keysDistrict, " ", "__")+'" width="450" height="300"></svg>');
                  var manager = obj[keysTheater3]['division'][keysDivision][keysDistrict]['manager']

                    //pass the region's district and manager name into the function found in barCharts.js file
                    d3BarCharts(keysDistrict, manager)

                }
              }
          }
        }
      }
    });

});
