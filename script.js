var check;

document.getElementById('RightProfile').addEventListener('click', function() {
    document.getElementById('RightContent').style.display = 'none';
    check = "ProfileScreen";
    document.getElementById('ProfileScreen').style.display = 'block';
});
document.getElementById('RightWeeklyLog').addEventListener('click', function() {
    document.getElementById('RightContent').style.display = 'none';
    check = "WeeklyLogPage";
    document.getElementById('WeeklyLogPage').style.display = 'block';
});
document.getElementById('RightLogbook').addEventListener('click', function() {
    document.getElementById('RightContent').style.display = 'none';
    document.getElementById('LogBookPage').style.display = 'block';
    check="LogBookPage";
});
document.getElementById('RightMarksheet').addEventListener('click', function() {
    document.getElementById('RightContent').style.display = 'none';
    document.getElementById('MarksheetPage').style.display = 'block';
    check="MarksheetPage";
});
document.getElementById('RightCertificate').addEventListener('click', function() {
    document.getElementById('RightContent').style.display = 'none';
    document.getElementById('CertificatePage').style.display = 'block';
    check="CertificatePage";
});
document.getElementById('Dashboard').addEventListener('click', function() {
    document.getElementById(check).style.display = 'none';
    document.getElementById('RightContent').style.display = 'block';
});
