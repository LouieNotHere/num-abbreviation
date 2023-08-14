function abbreviateNumber(value) {
    let abbreviatedValue = value;
    const letters = ["", "K", "M", "B","T", "Qd", "Qn", "Sx", "Sp", "Oc", "No", "De", "UDe", "DDe", "TDe", "QdDe", "QnDe", "SxDe", "SpDe", "OcDe", "NoDe", "Vg", "UVg", "DVg", "TVg", "QdVg", "QnVg", "SxVg", "SpVg", "OcVg", "NoVg", "Tg", "UTg", "DTg", "TTg", "QdTg", "QnTg", "SxTg", "SpTg", "OcTg", "NoTg", "qg", "Uqg", "Dqg", "Tqg", "Qdqg", "Qnqg", "Sxqg", "Spqg", "Ocqg", "Noqg", "Qg", "UQg", "DQg", "TQg", "QdQg", "QnQg", "SxQg", "SpQg", "OcQg", "NoQg", "sg", "Usg", "Dsg", "Tsg", "Qdsg", "Qnsg", "Sxsg", "Spsg", "Ocsg", "Nosg"];
    let notation = 0;
    
    while (abbreviatedValue >= 1000) {
        abbreviatedValue /= 1000;
        notation++;
  }

    abbreviatedValue = abbreviatedValue.toPrecision(3);

    abbreviatedValue += letters[notation];
    return abbreviatedValue;
}
