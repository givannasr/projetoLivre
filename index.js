function loadXMLDoc() {
    //XMLHttpRequest serve para interagir com servidores;
    var xmlDoc = new XMLHttpRequest();

    xmlDoc.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            leituraArquivo(this);
        }
    }

    xmlDoc.open("GET", "alunos.xml");
    xmlDoc.send();
}

loadXMLDoc()

function leituraArquivo(xml) {
    var i;
    var xmlArquivo = xml.responseXML;
    var table =
        `<tr>
        <th>nome</th>
        <th>dtNascimento</th>
        <th>ra</th>
        <th>hNotas</th>
        <th>statusMatricula</th>
        <th></th>
    </tr>`;

    var arquivo = xmlArquivo.getElementsByTagName("alunos");
    console.log(arquivo);

    for (i = 0; i < arquivo.length; i++) {
        table +=
            `<tr>
                <td>${arquivo[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue}</td>
                <td>${arquivo[i].getElementsByTagName("dtNascimento")[0].childNodes[0].nodeValue}</td>
                <td>${arquivo[i].getElementsByTagName("ra")[0].childNodes[0].nodeValue}</td>
                <td>${arquivo[i].getElementsByTagName("hNotas")[0].childNodes[0].nodeValue}</td>
                <td>${arquivo[i].getElementsByTagName("statusMatricula")[0].childNodes[0].nodeValue}</td>
                <td>
                
                </td>
            </tr>`
    }

    document.getElementById("tblAlunos7A").innerHTML = table;
}