(function(p) {
	var form = document.getElementById("page").getElementsByTagName("form");
	form[0].action =  p + '//campaign.twisted.co.il/manager/';
})(document.location.protocol);

var myform = new jetForm();

$('#submit_btn').click(function(e) {

	var newsletter;
	var nameEngPattern = new RegExp("(\\w+)(\\s+)(\\w+)");
	var nameHebPattern = new RegExp("([\u0590-\u05FF])(\\s+)([\u0590-\u05FF])");
	var nameRusPattern = new RegExp("([\u0430-\u044f])(\\s+)([\u0430-\u044f])");
	var nameArbPattern = new RegExp("([\u0600-\u06FF])(\\s+)([\u0600-\u06FF])");

	myform.submit({
		validate: function(){
			if(!$('#fullname').val().match(nameHebPattern) && !$('#fullname').val().match(nameEngPattern) && !$('#fullname').val().match(nameRusPattern) && !$('#fullname').val().match(nameArbPattern)){
				alert("נא למלא שם מלא");
				return false;
			}
			if($("#prefix option:selected").val() == "בחר"){
				alert("נא לבחור קידומת");
				return false;
			}
			if(JET.validate.minLength($("#phone").val(), 1)){
				alert("שדה טלפון הוא חובה");
				return false;
			}
			if(JET.validate.minLength($("#phone").val(), 7)){
				alert("טלפון חייב להיות לפחות 9 תוים");
				return false;
			}
			if(JET.validate.isNumber($("#phone").val())){
				alert("חובה להזין מספרים בלבד בשדה הטלפון");
				return false;
			}
			if(JET.validate.minLength($("#email").val(), 1)){
				alert("נא להכניס כתובת אימייל");
				return false;
			}
			if(!JET.validate.isEmail($("#email").val())){
				alert("כתובת האימייל אינה חוקית");
				return false;
			}
			return true;
		},
		beforeSubmit: function(){
			newsletter = ((document.getElementById("news").checked) ? "כן" : "לא");
		},
		complete: function(response, data){
			var thesource;
			var fullname = data.fullname.trim(), first_name, last_name, nameParts = [];
			if(fullname.indexOf(" ") > -1){
				nameParts = fullname.split(" ");
				first_name = nameParts.shift();
				last_name = nameParts.join(" ");
			}
			else {
				first_name = last_name = fullname;
			}




			(function(p) {
				switch(data.bannID) {

					case "11670":
							thesource = "facebook_ads";
							break;
					case "11669":
							thesource = "DBM";
							break;

					case "11671":
							thesource = "facebook_tofes_lead";
							break;
					case "11673":
							thesource = "facebook_video";
							break;

					case "11674":
							thesource = "fortvision";
							break;
					case "11677":
							thesource = "instagram";
							break;
					case "11919":
							thesource = "banner_site";
							break;
					case "11672":
							thesource = "Google_Search";
							break;
					case "11679":
							thesource = "divur";
							break;
					case "11918":
							thesource = "popin";
							break;


					default:
							thesource = "other";
				}

				//Basis
				$.post('https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8', {
					oid: "00D0Y000000LyKM",
					retURL: "http://",
					first_name: first_name,
					last_name: last_name,
					phone: (data.prefix + '-' + data.phone).toString(),
					lead_source: thesource,
					email: data.email,
					emailOptOut: newsletter,
					Campaign_ID: "7011n000000PAnX"
				}).fail(function(){
					console.log('error while sending lead');
				});
				// TWISTED
				myform.sendLead('iframe', p + '//campaign.twisted.co.il/manager/api.php',{
					Event: data.eventID || '',
					BannID: data.bannID || '',
					Name: first_name || '',
					Family: last_name || '',
					Phone: (data.prefix + '-' + data.phone) || '',
					Mail: data.email || '',
					va1: newsletter || '',
					va2: data.media || '',
					va3: data.lm_supplier || '',
					va4: data.lm_bc || ''
				});
			})(document.location.protocol);

			activateThanks();
		},
		error: function(){
			alert('ארעה שגיאה בזמן שליחת הנתונים');
		}
	});
});
