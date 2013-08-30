$(function() {
	const CHARSET = {
		"A" : "A",
		"B" : "Z",
		"C" : "Y",
		"D" : "X",
		"E" : "E",
		"F" : "W",
		"G" : "V",
		"H" : "T",
		"I" : "I",
		"J" : "S",
		"K" : "R",
		"L" : "Q",
		"M" : "P",
		"N" : "N",
		"O" : "O",
		"P" : "M",
		"Q" : "L",
		"R" : "K",
		"S" : "J",
		"T" : "H",
		"U" : "U",
		"V" : "G",
		"W" : "F",
		"X" : "D",
		"Y" : "C",
		"Z" : "B",
	};
	
	$("textarea").keyup(function() {
		var area = "#" + $(this).attr("id");
		var txt = $(area).val();
		
		txt = txt.toUpperCase();
		$(area).val(txt);
		
		txt = txt.replace(/[A-Z]/g, function(s) {
			return CHARSET[s];
		});
		
		if(area == "#english") {
			$("#ente-isla").val(txt);
		} else {
			$("#english").val(txt);
		}
	});
	
	//-- Reset Fields --
	$("#reset").click(function() {
		$("textarea").val("");
	});
});