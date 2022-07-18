const redhot = [];
redhot[0]="The Red Hot Chili Peppers" 
redhot[1]="Freaky Styley"
redhot[2]="The Uplift Mofo Party Plan"
redhot[3]="Mother's Milk"
redhot[4]="Blood Sugar Sex Magik"
redhot[5]="One Hot Minute"
redhot[6]="Californication"
redhot[7]="Up Close - Part I"
redhot[8]="Up Close - Part II"
redhot[9]="Red Hot Chili Peppers- By The Way"
redhot[10]="Stadium Arcadium"
redhot[11]="I'm With You"
redhot[12]="The Getaway"

const redhotyear = [];
redhotyear[0] = "1984"
redhotyear[1] = "1985"
redhotyear[2] = "1988"
redhotyear[3] = "1989"
redhotyear[4] = "1991"
redhotyear[5] = "1995"
redhotyear[6] = "1999"
redhotyear[7] = "2000"
redhotyear[8] = "2000"
redhotyear[9] = "2002"
redhotyear[10] = "2006"
redhotyear[11] = "2011"
redhotyear[12] = "2016"

var table = document.getElementById("table")

var rowcount = document.getElementById("table").rows.length;

for (var i=1; i<rowcount; i++)
{
   console.log(i);
    table.rows[i].cells[0].innerHTML=redhot[i-1]
    table.rows[i].cells[1].innerHTML=redhotyear[i-1]
}

 