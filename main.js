function calculateM1INSTS1() {
    var eln = parseFloat(document.getElementById("eln").value);
    var tdeln = parseFloat(document.getElementById("tdeln").value);
    var tas = parseFloat(document.getElementById("tas").value);
    var tdtas = parseFloat(document.getElementById("tdtas").value);
    var cap = parseFloat(document.getElementById("cap").value);
    var tdcap = parseFloat(document.getElementById("tdcap").value);
    var metro = parseFloat(document.getElementById("metro").value);
    var tdmetro = parseFloat(document.getElementById("tdmetro").value);
    var poo = parseFloat(document.getElementById("poo").value);
    var tppoo = parseFloat(document.getElementById("tppoo").value);
    var tpeln = parseFloat(document.getElementById("tpeln").value);
    var tpcap = parseFloat(document.getElementById("tpcap").value);
    var tptas = parseFloat(document.getElementById("tptas").value);
    var opto = parseFloat(document.getElementById("opto").value);
    var sec = parseFloat(document.getElementById("sec").value);
    var ang = parseFloat(document.getElementById("ang").value);

    var MOYM1INSTS1 = (((((eln * 0.6) + (tdeln * 0.4)) * 3)
     + (((tas * 0.6) + (tdtas * 0.4)) * 2)
      + (((cap * 0.6) + (tdcap * 0.4)) * 2)
       + (((metro * 0.6) + (tdmetro * 0.4)) * 2)
        + (((poo * 0.6) + (tppoo * 0.4)) * 2)
         + (tpeln)
          + (tpcap)
           + (tptas)
            + (ang)
             + (opto)
              + (sec)) / 17);

    document.getElementById("MOYM1INSTS1").value = MOYM1INSTS1;
}



function calculateM1GCS1() {
    var sm = parseFloat(document.getElementById("sm").value);
    var tdsm = parseFloat(document.getElementById("tdsm").value);
    var mds = parseFloat(document.getElementById("mds").value);
    var tdmds = parseFloat(document.getElementById("tdmds").value);
    var dds = parseFloat(document.getElementById("dds").value);
    var tddds = parseFloat(document.getElementById("tddds").value);
    var sba = parseFloat(document.getElementById("sba").value);
    var tdsba = parseFloat(document.getElementById("tdsba").value);
    var cdp = parseFloat(document.getElementById("cdp").value);
    var tpcdp = parseFloat(document.getElementById("tpcdp").value);
    var mi = parseFloat(document.getElementById("mi").value);
    var tpmi = parseFloat(document.getElementById("tpmi").value);
    var tpme = parseFloat(document.getElementById("tpme").value);
    var prs = parseFloat(document.getElementById("prs").value);
    var bat = parseFloat(document.getElementById("bat").value);
    var ang1 = parseFloat(document.getElementById("ang1").value);

    var MOYM1GCS1 = (((((sm * 0.6) + (tdsm * 0.4)) * 3)
     + (((mds * 0.6) + (tdmds * 0.4)) * 2)
      + (((dds * 0.6) + (tddds * 0.4)) * 2)
       + (((sba * 0.6) + (tdsba * 0.4)) * 2)
        + (((cdp * 0.6) + (tpcdp * 0.4)) * 2)
         + (((mi * 0.6) + (tpmi * 0.4)) * 2)
          + (tpme)
            + (ang1)
             + (prs)
              + (bat)) / 17);

    document.getElementById("MOYM1GCS1").value = MOYM1GCS1;
}





function calculateL3GCS1() {
    var rdm2 = parseFloat(document.getElementById("rdm2").value);
    var tdrdm2 = parseFloat(document.getElementById("tdrdm2").value);
    var ba1 = parseFloat(document.getElementById("ba1").value);
    var tdba1 = parseFloat(document.getElementById("tdba1").value);
    var chm = parseFloat(document.getElementById("chm").value);
    var tdchm = parseFloat(document.getElementById("tdchm").value);
    var mds2 = parseFloat(document.getElementById("mds2").value);
    var tdmds2 = parseFloat(document.getElementById("tdmds2").value);
    var mdc2 = parseFloat(document.getElementById("mdc2").value);
    var tpmdc2 = parseFloat(document.getElementById("tpmdc2").value);
    var tpmds2 = parseFloat(document.getElementById("tpmds2").value);
    var tptopo = parseFloat(document.getElementById("tptopo").value);
    var dbtp = parseFloat(document.getElementById("dbtp").value);
    var topo2 = parseFloat(document.getElementById("topo2").value);
    var hg = parseFloat(document.getElementById("hg").value);
    var trdc = parseFloat(document.getElementById("trdc").value);

    var MOYL3GCS1 = (((((rdm2 * 0.6) + (tdrdm2 * 0.4)) * 2)
     + (((ba1 * 0.6) + (tdba1 * 0.4)) * 2)
      + (((chm * 0.6) + (tdchm * 0.4)) * 2)
       + (((mds2 * 0.6) + (tdmds2 * 0.4)) * 2)
        + (mdc2)
         + (tpmdc2)
          + (tpmds2)
           + (tptopo)
            + (dbtp * 2)
             + (topo2)
              + (hg)
               + (trdc)) / 17);

    document.getElementById("MOYL3GCS1").value = MOYL3GCS1;
}



function calculateM2GCS1() {
    var bp = parseFloat(document.getElementById("bp").value);
    var tdbp = parseFloat(document.getElementById("tdbp").value);
    var pee = parseFloat(document.getElementById("pee").value);
    var tdpee = parseFloat(document.getElementById("tdpee").value);
    var gp = parseFloat(document.getElementById("gp").value);
    var tdgp = parseFloat(document.getElementById("tdgp").value);
    var os = parseFloat(document.getElementById("os").value);
    var tdos = parseFloat(document.getElementById("tdos").value);
    var psba = parseFloat(document.getElementById("psba").value);
    var tdpsba = parseFloat(document.getElementById("tdpsba").value);
    var tpmods = parseFloat(document.getElementById("tpmods").value);
    var tdb = parseFloat(document.getElementById("tdb").value);
    var pgdc = parseFloat(document.getElementById("pgdc").value);
    var rdcdm = parseFloat(document.getElementById("rdcdm").value);

    var MOYM2GCS1 = (((((bp * 0.6) + (tdbp * 0.4)) * 3)
     + (((pee * 0.6) + (tdpee * 0.4)) * 2)
      + (((gp * 0.6) + (tdgp * 0.4)) * 2)
       + (((os * 0.6) + (tdos * 0.4)) * 2)
        + (((psba * 0.6) + (tdpsba * 0.4)) * 3)
         + (tpmods * 2)
          + (rdcdm)
           + (tdb)
            + (pgdc)) / 17);

    document.getElementById("MOYM2GCS1").value = MOYM2GCS1;
}

























