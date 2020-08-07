var nmea = require('./nmea')

var s = [
"$GPGSA,A,3,27,08,11,10,26,21,18,16,07,20,,,1.60,0.97,1.27*0F",
"$GPGSV,3,1,12,29,75,266,39,05,48,047,,26,43,108,,15,35,157,*78",
"$GPGSV,3,2,12,21,30,292,,18,21,234,,02,18,093,,25,13,215,*7F",
"$GPGSV,3,3,12,30,11,308,,16,,333,,12,,191,,07,-4,033,*62",
"$GPRMC,085542.023,V,,,,,,,041211,,,N*45",
"$IIRMC,101639,A,4924.407,N,00108.467,W,06.2,177,230720,01,W,A*04",
"$GPGGA,085543.023,,,,,0,00,,,M,0.0,M,,0000*58",
"$IIBWC,160947,6008.160,N,02454.290,E,162.4,T,154.3,M,001.050,N,DEST*1C",
"$IIAPB,A,A,0.001,L,N,V,V,154.3,M,DEST,154.3,M,154.2,M*19",
"$APHDG,175.6,,,,*5D",
"$APHDG,132.2,2.0,W,3.9,E*40",
"$GPHDT,274.07,T*03",
"$IIHDM,201.5,M*24",
"$PRDID,-4.44,2.12,154.25*56",
"$PGRMT,GPS19x-HVS Software Version 2.20,,,,,,,,*6F",
"$IIVWR,045.0,L,12.6,N,6.5,M,23.3,K*52",
"$ECRMB,A,0.060,L,,Waypoint 110,4921.975,N,00109.838,W,2.63,199.8,5.8,V,D*65",
"$ECRMB,A,0.001,R,001,002,5431.307,N,00941.537,E,1.488,31.551,0.104,V*32",
"$APRSA,1.15,A,,*0B",
"$APRSA,1.10,A,,*0E"
];

for (var i=0; i < s.length; i++) {
    console.log(nmea.parse(s[i]));
};