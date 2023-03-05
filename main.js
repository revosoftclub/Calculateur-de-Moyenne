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