function abbreviateNumber(value) {
    let abbreviatedValue = value;
    const letters = ["", "K", "M", "B","T", "Qd", "Qn", "Sx", "Sp", "Oc", "No",
    "De", "UDe", "DDe", "TDe", "QdDe", "QnDe", "SxDe", "SpDe", "OcDe", "NoDe",
    "Vg", "UVg", "DVg", "TVg", "QdVg", "QnVg", "SxVg", "SpVg", "OcVg", "NoVg",
    "Tg", "UTg", "DTg", "TTg", "QdTg", "QnTg", "SxTg", "SpTg", "OcTg", "NoTg",
    "qg", "Uqg", "Dqg", "Tqg", "Qdqg", "Qnqg", "Sxqg", "Spqg", "Ocqg", "Noqg",
    "Qg", "UQg", "DQg", "TQg", "QdQg", "QnQg", "SxQg", "SpQg", "OcQg", "NoQg",
    "sg", "Usg", "Dsg", "Tsg", "Qdsg", "Qnsg", "Sxsg", "Spsg", "Ocsg", "Nosg",
    "Sg", "USg", "DSg", "TSg", "QdSg", "QnSg", "SxSg", "SpSg", "OcSg", "NoSg",
    "Og", "UOg", "DOg", "TOg", "QdOg", "QnOg", "SxOg", "SpOg", "OcOg", "NoOg",
    "Ng", "UNg", "DNg", "TNg", "QdNg", "QnNg", "SxNg", "SpNg", "OgNg", "NoNg",
    "Ce", "UCe", "DCe", "TCe", "QdCe", "QnCe", "SxCe", "SpCe", "OcCe", "NoCe", "DeCe",
    "UDeCe", "DDeCe", "TDeCe", "QdDeCe", "QnDeCe", "SxDeCe", "SpDeCe", "OcDeCe", "NoDeCe",
    "VgCe", "UVgCe", "DVgCe", "TVgCe", "QdVgCe", "QnVgCe", "SxVgCe", "SpVgCe", "OcVgCe", "NoVgCe",
    "TgCe", "UTgCe", "DTgCe", "QdTgCe", "QnTgCe", "SxTgCe", "SpTgCe", "OcTgDe", "NoTgCe",
    "qgCe", "UqgCe", "DqgCe", "TqgCe", "QdqgCe", "QnqgCe", "SxqgCe", "SpqgCe", "OcqgCe", "NoqgCe",
    "QgCe", "UQgCe", "DQgCe", "TQgCe", "QdQgCe", "QnQgCe", "SxQgCe", "SpQgCe", "OcQgCe", "NoQgCe",
    "sgCe", "UsgCe", "DsgCe", "TsgCe", "QdsgCe", "QnsgCe", "SxsgCe", "SpsgCe", "OcsgCe", "NosgCe",
    "SgCe", "USgCe", "DSgCe", "TSgCe", "QdSgCe", "QnSgCe", "SxSgCe", "SpSgCe", "OcSgCe", "NoSgCe",
    "OgCe", "UOgCe", "DOgCe", "TOgCe", "QdOgCe", "QnOgCe", "SxOgCe", "SpOgCe", "OcOgCe", "NoOgCe",
    "NgCe", "UNgCe", "DNgCe", "TNgCe", "QdNgCe", "QnNgCe", "SxNgCe", "SpNgCe", "OcNgCe", "NoNgCe",
    "DCe", "UDCe", "DDCe", "TDCe", "QdDCe", "QnDCe", "SxDCe", "SpDCe", "OcDCe", "NoDCe",
    "DeDCe", "UDeDCe", "DDeDCe", "TDeDCe", "QdDeDCe", "QnDeDCe", "SxDeDCe", "SpDeDCe", "OcDeDCe", "NoDeDCe",
    "VgDCe", "UVgDCe", "DVgDCe", "TVgDCe", "QdVgDCe", "QnVgDCe", "SxVgDCe", "SpVgDCe", "OcVgDCe", "NoVgDCe",
    "TgDCe", "UTgDCe", "DTgDCe", "QdTgDCe", "QnTgDCe", "SxTgDCe", "SpTgDCe", "OcTgDe", "NoTgDCe",
    "qgDCe", "UqgDCe", "DqgDCe", "TqgDCe", "QdqgDCe", "QnqgDCe", "SxqgDCe", "SpqgDCe", "OcqgDCe", "NoqgDCe",
    "QgDCe", "UQgDCe", "DQgDCe", "TQgDCe", "QdQgDCe", "QnQgDCe", "SxQgDCe", "SpQgDCe", "OcQgDCe", "NoQgDCe",
    "sgDCe", "UsgDCe", "DsgDCe", "TsgDCe", "QdsgDCe", "QnsgDCe", "SxsgDCe", "SpsgDCe", "OcsgDCe", "NosgDCe",
    "SgDCe", "USgDCe", "DSgDCe", "TSgDCe", "QdSgDCe", "QnSgDCe", "SxSgDCe", "SpSgDCe", "OcSgDCe", "NoSgDCe",
    "OgDCe", "UOgDCe", "DOgDCe", "TOgDCe", "QdOgDCe", "QnOgDCe", "SxOgDCe", "SpOgDCe", "OcOgDCe", "NoOgDCe",
    "NgDCe", "UNgDCe", "DNgDCe", "TNgDCe", "QdNgDCe", "QnNgDCe", "SxNgDCe", "SpNgDCe", "OcNgDCe", "NoNgDCe",
    "TCe", "UTCe", "DTCe", "TTCe", "QdTCe", "QnTCe", "SxTCe", "SpTCe", "OcTCe", "NoTCe",
    "DeTCe", "UDeTCe", "DDeTCe", "TDeTCe", "QdDeTCe", "QnDeTCe", "SxDeTCe", "SpDeTCe", "OcDeTCe", "NoDeTCe",
    "VgTCe", "UVgTCe", "DVgTCe", "TVgTCe", "QdVgTCe", "QnVgTCe", "SxVgTCe", "SpVgTCe", "OcVgTCe", "NoVgTCe",
    "TgTCe", "UTgTCe", "DTgTCe", "QdTgTCe", "QnTgTCe", "SxTgTCe", "SpTgTCe", "OcTgDe", "NoTgTCe",
    "qgTCe", "UqgTCe", "DqgTCe", "TqgTCe", "QdqgTCe", "QnqgTCe", "SxqgTCe", "SpqgTCe", "OcqgTCe", "NoqgTCe",
    "QgTCe", "UQgTCe", "DQgTCe", "TQgTCe", "QdQgTCe", "QnQgTCe", "SxQgTCe", "SpQgTCe", "OcQgTCe", "NoQgTCe",
    "sgTCe", "UsgTCe", "DsgTCe", "TsgTCe", "QdsgTCe", "QnsgTCe", "SxsgTCe", "SpsgTCe", "OcsgTCe", "NosgTCe",
    "SgTCe", "USgTCe", "DSgTCe", "TSgTCe", "QdSgTCe", "QnSgTCe", "SxSgTCe", "SpSgTCe", "OcSgTCe", "NoSgTCe",
    "OgTCe", "UOgTCe", "DOgTCe", "TOgTCe", "QdOgTCe", "QnOgTCe", "SxOgTCe", "SpOgTCe", "OcOgTCe", "NoOgTCe",
    "NgTCe", "UNgTCe", "DNgTCe", "TNgTCe", "QdNgTCe", "QnNgTCe", "SxNgTCe", "SpNgTCe", "OcNgTCe", "NoNgTCe"];
    let notation = 0;
    
    while (abbreviatedValue >= 1000) {
        abbreviatedValue /= 1000;
        notation++;
  }

    abbreviatedValue = abbreviatedValue.toPrecision(3);

    abbreviatedValue += letters[notation];
    return abbreviatedValue;
}
