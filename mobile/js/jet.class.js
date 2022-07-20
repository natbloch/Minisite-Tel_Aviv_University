(function(k){var q;if(!('__jquery_xdomain__'in k)&&k.browser.msie&&'XDomainRequest'in window&&!(window.XMLHttpRequest&&'withCredentials'in new XMLHttpRequest())&&document.location.href.indexOf("file:///")==-1){k['__jquery_xdomain__']=k.support.cors=true;var B=/^(((([^:\/#\?]+:)?(?:\/\/((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?]+)(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,C=k.ajaxSettings.xhr,t='XDR_SESSION_COOKIE_NAME'in window?window['XDR_SESSION_COOKIE_NAME']:"jsessionid",u='XDR_COOKIE_HEADERS'in window?window['XDR_COOKIE_HEADERS']:[],D='XDR_HEADERS'in window?window['XDR_HEADERS']:['Content-Type'],n={UNSENT:0,OPENED:1,LOADING:3,DONE:4},l=window['XDR_DEBUG']&&'console'in window,v,w,x=0;function y(c,a){if(typeof c=='string'){c=[c]}var b,d;for(b=0;b<c.length;b++){d=new RegExp('(?:^|; )'+c[b]+'=([^;]*)','i').exec(document.cookie);d=d&&d[1];if(d){a.call(null,c[b],d)}}}function E(c){if(c.length>=5){var a=c.substring(c.length<=20?0:c.length-20),b=a.length-1,d,f,h;if(a.charAt(b)==='~'){for(d=b--;b>=0&&a.charAt(b)!=='~';b--);f=parseInt(a.substring(b+1,d));if(!isNaN(f)&&f>=0&&b>=2&&a.charAt(b)==='~'){for(d=b--;b>=0&&a.charAt(b)!=='~';b--);h=parseInt(a.substring(b+1,d));if(!isNaN(h)&&b>=0&&a.charAt(b)==='~'){d=c.length-f-a.length+b;return[h,c.substring(0,d),c.substr(d,f)]}}}}return[200,c,'']}function z(c){if(typeof(c)==="object"){return c}var a=B.exec(c);return a?{href:a[0]||"",hrefNoHash:a[1]||"",hrefNoSearch:a[2]||"",domain:a[3]||"",protocol:a[4]||"",authority:a[5]||"",username:a[7]||"",password:a[8]||"",host:a[9]||"",hostname:a[10]||"",port:a[11]||"",pathname:a[12]||"",directory:a[13]||"",filename:a[14]||"",search:a[15]||"",hash:a[16]||""}:{}}function F(c){if(c.length==0){return[]}var a=[],b=0,d=0,f,h;do{f=c.indexOf(',',d);a[b]=(a[b]||'')+c.substring(d,f==-1?c.length:f);d=f+1;if(a[b].indexOf('Expires=')==-1||a[b].indexOf(',')!=-1){b++}else{a[b]+=','}}while(f>0);for(b=0;b<a.length;b++){h=a[b].indexOf('Domain=');if(h!=-1){a[b]=a[b].substring(0,h)+a[b].substring(a[b].indexOf(';',h)+1)}}return a}w=z(document.location.href).domain;v=function(){var g=this,i=new XDomainRequest(),p,o=[],A,j,m=x++,r=function(c){g.readyState=c;if(typeof g.onreadystatechange==='function'){}},s=function(c,a){if(!g.responseText){g.responseText=''}if(l){console.log('[XDR-'+m+'] request end with state '+c+' and code '+a+' and data length '+g.responseText.length)}g.status=a;if(!g.responseType){p=p||i.contentType;if(p.match(/\/json/)){g.responseType='json';g.response=g.responseText}else if(p.match(/\/xml/)){g.responseType='document';var b,d=new ActiveXObject('Microsoft.XMLDOM');d.async=false;d.loadXML(g.responseText);g.responseXML=g.response=d;if(k(d).children('error').length!=0){b=k(d).find('error');g.status=parseInt(b.attr('response_code'))}}else{g.responseType='text';g.response=g.responseText}}r(c);i=null;o=null;j=null};i.onprogress=function(){r(n.LOADING)};i.ontimeout=function(){s(n.DONE,408)};i.onerror=function(){s(n.DONE,500)};i.onload=function(){var c,a,b=E(i.responseText||'');if(l){console.log('[XDR-'+x+'] parsing cookies for header '+b[2])}c=F(b[2]);g.responseText=b[1]||'';if(l){console.log('[XDR-'+m+'] raw data:\n'+i.responseText+'\n parsed response: status='+b[0]+', header='+b[2]+', data=\n'+b[1])}for(a=0;a<c.length;a++){if(l){console.log('[XDR-'+m+'] installing cookie '+c[a])}document.cookie=c[a]+";Domain="+document.domain}s(n.DONE,b[0]);if(typeof(q.success)==="function"){q.success(b[1])}b=null};this.readyState=n.UNSENT;this.status=0;this.statusText='';this.responseType='';this.timeout=0;this.withCredentials=false;this.overrideMimeType=function(c){p=c};this.abort=function(){i.abort()};this.setRequestHeader=function(c,a){if(k.inArray(c,D)>=0){o.push({k:c,v:a})}};this.open=function(c,a){j=a;A=c;r(n.OPENED)};this.send=function(d){i.timeout=this.timeout;if(t||u||o.length){var f,h=function(c,a){var b=j.indexOf('?');if(l){console.log('[XDR-'+m+'] added parameter '+c+"="+a+" => "+j)}};for(f=0;f<o.length;f++){h(o[f].k,o[f].v)}y(t,function(c,a){var b=j.indexOf('?');if(b==-1){j+=';'+c+'='+a}else{j=j.substring(0,b)+';'+c+'='+a+j.substring(b)}if(l){console.log('[XDR-'+m+'] added cookie '+j)}});y(u,h);h('_0',''+m)}if(l){console.log('[XDR-'+m+'] opening '+j)}i.open(A,j);if(l){console.log('[XDR-'+m+'] send, timeout='+i.timeout)}i.send(d)};this.getAllResponseHeaders=function(){return''};this.getResponseHeader=function(){return null}};k.ajaxSettings.xhr=function(){var c=z(this.url).domain;q=this;if(c===""||c===w){return C.call(k.ajaxSettings)}else{try{return new v()}catch(e){}}}}})(jQuery);function getCORS(b,d,f,h){try{$.ajax({type:'post',url:b,data:d,success:f})}catch(e){if(jQuery.browser.msie&&window.XDomainRequest){var g=new XDomainRequest();g.open("get",b);g.onload=function(){f(this.responseText,'success')};g.send()}else{try{var i=function(){var c='error';var a='error';if((this.readyState==4)&&(this.status=='200')){c='success';a=this.responseText}f(a,c)};request=new proxy_xmlhttp();request.open('GET',b,true);request.onreadystatechange=i;request.send()}catch(e){}}}}function postCORS(c,a,b,d){try{jQuery.post(c,a,b,d)}catch(e){var f='';for(key in a){f=f+'&'+key+'='+a[key]}if(jQuery.browser.msie&&window.XDomainRequest){var h=new XDomainRequest();h.open("post",c);h.send(f);h.onload=function(){b(h.responseText,'success')}}else{try{request=new proxy_xmlhttp();request.open('POST',c,true);request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');request.send(f)}catch(e){}}}}

// Extensions: Objectify
$.fn.extractObject = function() {
	var accum = {};
	function add(accum, namev, value) {
		if(namev.length == 1)
			accum[namev[0]] = value;
		else {
			if(accum[namev[0]] == null)
				accum[namev[0]] = {};
			add(accum[namev[0]], namev.slice(1), value);
		}
	};
	
	this.find('input, textarea, select').each(function() {
		add(accum, $(this).attr('name').split('.'), $(this).val());
	});
	
	return accum;
};

// Prototypes
if(!Function.prototype.bind) {	
	Function.prototype.bind = function(obj) {
		if(typeof this !== 'function') {console.log('Error: Function is not callable'); return;};
		var slice = [].slice, args = slice.call(arguments, 1),  self = this, nop = $.noop(); 
		var bound = function(){
			return self.apply(this instanceof nop ? this : (obj || {}), 
			args.concat(slice.call(arguments)));    
		};
		bound.prototype = this.prototype;
		return bound;
	};
};

if(!Function.prototype.api) {	
	Function.prototype.api = function(api) {
		if(typeof this !== 'function') {console.log('Error: Function is not callable'); return;};
		this.prototype = api.prototype;
		return this;
	};
};

if (!Date.now) {
	Date.now = function () {
		return +new Date;
	}
}

var D = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var M = ["January","February","March","April","May","June","July,August","September","October","November","December"];
Date.prototype.format = function(format) {
	return format.replace(/a|A|Z|S(SS)?|ss?|mm?|HH?|hh?|D{1,4}|M{1,4}|YY(YY)?|'([^']|'')*'/g, function(str) {
		var c1 = str.charAt(0),
		ret = str.charAt(0) == "'"
		? (c1=0) || str.slice(1, -1).replace(/''/g, "'")
		: str == "a"
		? (this.getHours() < 12 ? "am" : "pm")
		: str == "A"
		? (this.getHours() < 12 ? "AM" : "PM")
		: str == "Z"
		? (("+" + -this.getTithiszoneOffset() / 60).replace(/^\D?(\D)/, "$1").replace(/^(.)(.)$/, "$10$2") + "00")
		: c1 == "S"
		? this.getMilliseconds()
		: c1 == "s"
		? this.getSeconds()
		: c1 == "H"
		? this.getHours()
		: c1 == "h"
		? (this.getHours() % 12) || 12
		: (c1 == "D" && str.length > 2)
		? D[this.getDay()].slice(0, str.length > 3 ? 9 : 3)
		: c1 == "D"
		? this.getDate()
		: (c1 == "M" && str.length > 2)
		? M[this.getMonth()].slice(0, str.length > 3 ? 9 : 3)
		: c1 == "m"
		? this.getMinutes()
		: c1 == "M"
		? this.getMonth() + 1
		: ("" + this.getFullYear()).slice(-str.length);
		
		return c1 && str.length < 4 && ("" + ret).length < str.length ? ("00" + ret).slice(-str.length) : ret;
	}.bind(this));
};

// API
var JET = function(){};

// Static methods
JET.validate = {
	maxLength : function(value, maxAllowed){
		if(value.length > Number(maxAllowed)) return true;
		else return false;
	},
	minLength : function(value, minAllowed){
		if(value.length < Number(minAllowed)) return true;
		else return false;
	},
	isEmail  : function(value){
		return (value.indexOf('@') > 0 && value.indexOf('.') > 0 && value.lastIndexOf('@') < value.lastIndexOf('.'));
	},
	isValid  : function(value){
		return (Number(value.selectedIndex) < 0 || value.options[value.selectedIndex].value < 0);
	},
	isNumber: function(value) {
		if(value.match('^\\d+$')) return false;
		else return true;
	},
	isValidCity: function(value) {
		var found = false;
		for(var i = 0; i < cdata.length; i++) {
            if(cdata[i].name == value) {
                found = true;
            }
        }
		if(!found) return true;
		else return false;
	},
	isMember : function(group){
		var value = '', i, rdbGroup = document.getElementsByName(group), l = rdbGroup.length;
		for(i = 0; i < l; i++){
			if(rdbGroup[i].checked == true) 
				return false;
		}
		return true;
	}
};

JET.prototype = {
	// Parameters
	version: '0.9',
	
	// Public methods
	validate: {
		maxLength : function(value, maxAllowed){
			if(value.length > Number(maxAllowed)) return true;
			else return false;
		},
		minLength : function(value, minAllowed){
			if(value.length < Number(minAllowed)) return true;
			else return false;
		},
		isEmail  : function(value){
			return (value.indexOf('@') > 0 && value.indexOf('.') > 0 && value.lastIndexOf('@') < value.lastIndexOf('.'));
		},
		isValid  : function(value){
			return (Number(value.selectedIndex) < 0 || value.options[value.selectedIndex].value < 0);
		},
		isNumber: function(value) {
			if(value.match('^\\d+$')) return false;
			else return true;
		},
		isValidCity: function(value) {
			var found = false;
			for(var i = 0; i < cdata.length; i++) {
				if(cdata[i].name == value) {
					found = true;
				}
			}
			if(!found) return true;
			else return false;
		},
		isMember : function(group){
			var value = '', i, rdbGroup = document.getElementsByName(group), l = rdbGroup.length;
			for(i = 0; i < l; i++){
				if(rdbGroup[i].checked == true) 
					return false;
			}
			return true;
		}
	},
	
	// Private methods
	fql: function (fql, callback, access_token) {
		if(!arguments.callee.caller) {console.log('Error: Direct reference to API methods is not allowed'); return;};
		
		if(!fql) alert('Facebook query is missing');

		var callback = callback || $.noop();
		var access_token = (!!window.access_token)? window.access_token : ((!!access_token)? access_token : "");
		
		$.ajax({
			url: 'https://api.facebook.com/method/fql.query?query=' + encodeURI(fql) + '&access_token=' + access_token +'&format=json',
			dataType: 'jsonp',
			success: function(response) {
				callback.call(this, response);
			}
		});
	},
	queryString: function(key, query) {
		if(!arguments.callee.caller) {console.log('Error: Direct reference to API methods is not allowed'); return;};
		
		var urlPath = "", queryArray = [], queryParam = [];
		urlPath = query || window.location.search.substring(1);
		if(urlPath.indexOf("&") == -1) queryArray.push(urlPath);
		else queryArray = urlPath.split("&");
		for(var i = 0; i < queryArray.length; i++){
			queryParam = queryArray[i].split("=");
			if(queryParam[0] == key) {
				return queryParam[1];
			}
		}
		return false;
	},
	serialize: function(form){
		if(!arguments.callee.caller) {console.log('Error: Direct reference to API methods is not allowed'); return;};
		
		var value = '', els = form.getElementsByTagName('*');
		for(var i = 0, l = els.length; i < l; i++) {
			var el = els[i];
			if(!el.disabled && el.name && el.name.length > 0) {
				switch(el.tagName.toLowerCase()) {
					case 'input':
						switch(el.type) {
							case 'radio':
								// Get the radio group's checked value
								var x = document.getElementsByName(el.name), s;
								for(var k = 0; k < x.length; k++){
									if(x[k].checked) s = x[k].value;
								}
								if(value.length > 0) value += '&';
								value += el.id + '=' + encodeURIComponent(s);
								break;
							case 'checkbox':
								if(el.checked){
									if(value.length > 0) value += '&';
									value += el.name + '=' + encodeURIComponent(el.value);
								}
								break;
							case 'hidden':
							case 'password':
							case 'text':
								if(value.length > 0) value += '&';
								value += el.name + '=';
								if (el.name == 'phone')
									value += form.prefix.value + '-' + encodeURIComponent(el.value);
								else
									value += encodeURIComponent(el.value);
								break;
							case 'tel':
							case 'email':
							case 'number':
								if(value.length > 0) value += '&';
								value += el.name + '=';
								value += encodeURIComponent(el.value);
								break;
						}
						break;
					case 'select':
					case 'textarea':
						if(value.length > 0) value += '&';
						value += el.name + '=' + encodeURIComponent(el.value);
						break;
				}
			}
		}
		return value;
	},
	sendLead: function(type, url, data){
		if(!arguments.callee.caller) {console.log('Error: Direct reference to API methods is not allowed'); return;};
		
		var bodyID = document.getElementsByTagName("body")[0];         
		var newPixel = document.createElement(type);
		if(type == 'script')
			newPixel.type = 'text/javascript';
			
		newPixel.src = url + '?' + $.param(data);
		bodyID.appendChild(newPixel);
	},
	externalCRM: function(o){
		var url = o.url || '',
			data = o.data || {},
			type = o.type || 'post',
			now = Date.now(),
			fid = 'f' + now,
			callback = o.complete || $.noop(),
			iframe, form;
		
		iframe = $('<iframe></iframe>').css({width:1, height:1}).attr({id:now, name: now}).appendTo('body');
		
		form = $('<form></form>').attr({'id':fid,action:url,method:type, target:now}).appendTo('body');
		
		for(var i in data){
			$('<input>').attr({
				type: 'hidden',
				id: i,
				name: i,
				value: data[i]
			}).appendTo(form);
		}
		
		$(form).submit(function(e) {
			iframe.load(function(){
				callback.call(this);
			});
		});
		
		form.submit();
	}
};


// @Class jetForm
var jetForm = function(form){
	// Parameters
	this.version = '1.0';
	this.form = form || document.forms[0];
	
	// Public methods
	this.submit = function(options){
		var options = options || {},
		_options = {
			ajax: $('#user_browser').val() == 'false',
			clear: true,
			validate: function(){return true},
			beforeSubmit: $.noop(),
			complete: $.noop(),
			error: $.noop()
		};
		
		for(var i in options)
			_options[i] = options[i];
		
		if(_options.validate()){
			this.clientParams();
			var formObject = $(this.form).extractObject();
			
			_options.beforeSubmit.call(this);
			
			if(!!_options.ajax){
				var data = this.serialize(this.form);
				
				if(!!_options.clear)	
					this.form.reset();
				
				if(this.form.method.toLowerCase() == 'get'){
					_options.complete.call(this, '', formObject);
				}
				else if(this.form.method.toLowerCase() == 'post'){
					_options.complete.call(this, '', formObject);
				}
			}
			else {
				var inputs = this.form.getElementsByTagName('input'), input, x;
				for (var i = 0; i < inputs.length; ++i) {
					if(inputs[i].type == 'radio'){
						x = document.getElementsByName(inputs[i].name), s;
						for(var k = 0; k < x.length; k++){
							if(x[k].checked) s = x[k].value;
						}
						input = document.createElement("input");
						input.setAttribute("value", s);
						input.setAttribute("name", inputs[i].id);
						input.setAttribute("type", "hidden");
						this.form.appendChild(input);
						this.form.innerHTML += '\n';
					}
				}
				
				this.form.submit();
				_options.complete.call(this, '', formObject);
			}
		}
	};
	
	this.validate = function(){
		return true;
	};
	
	this.clientParams = function(){
		$('#furl').val(document.location.href);
		$('#L').val(window.navigator.userLanguage || window.navigator.language);
		$('#R').val(screen.width + "x" + screen.height);
		$('#ref').val(this.queryString('ref') || "");
		$('#bannID').val(this.queryString('BannID') || "");
		$('#cID').val(this.queryString('cid') || "");
		/*-- Walla+ --*/
		$('#lm_supplier').val(this.queryString('lm_supplier') || "");
		$('#lm_bc').val(this.queryString('lm_bc') || "");
	};
	return this;
}.api(JET);