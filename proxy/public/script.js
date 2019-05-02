const addUrl = (data) => {
  console.log("inside addurl")
  var script1 = document.createElement("script");
  var script2 = document.createElement("script");
  var script3 = document.createElement("script");
  var script4 = document.createElement("script");
  script1.src = data.andrew;
  script2.src = data.heather;
  script3.src = data.anait;
  script4.src = data.aarushi;
  console.log(script1, script2, script3, script4);
  $("body").append(script1);
  $("body").append(script2);
  $("body").append(script3);
  $("body").append(script4);

}