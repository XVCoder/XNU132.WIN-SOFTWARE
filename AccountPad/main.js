var versions = ["1.0.0.5", "1.0.0.6","1.0.0.7"];
function ShowVersions() {
    document.write('<!DOCTYPE html><html><head><link rel="stylesheet" type="text/css" media="screen" href="main.css" /></head><body>');
    versions.forEach(element => {
        document.writeln("<a class='item' style='display:block' href='/InstallationPackages/" + element + ".rar'>版本：" + element + "</a>")
    });
    document.writeln('</body></html>');
}