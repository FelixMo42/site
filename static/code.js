const url = window.location.href

function update(name, value) {
	data = {"name": name, "value": value}

	var Http = new XMLHttpRequest();
	Http.open("PATCH", url);
	Http.send( JSON.stringify(data) );
	Http.onreadystatechange = (e) => {
		console.log(Http.responseText)
		console.log(Http.readyState)
		if (Http.responseText == "" || Http.readyState != 4) {
			return
		}

		try {
			document.getElementById(name).classList.remove("wrong")

			data = JSON.parse(Http.responseText)
		} catch(error) {
			document.getElementById(name).classList.add("wrong")

			response = Http.responseText.split("\n")
			alert(response[0])
			data = JSON.parse(response[1])
		}

		console.log(data)

		for (var key in data) {
			document.getElementById(key).placeholder = data[key]
		}
	}
}

function newVarCallback() {
	name = this.value

	if (name == "") {
		alert("You must enter a variable name!")
		document.getElementById("varNamer_name").select()
		return
	}

	document.getElementById("variables").innerHTML += name + ": <input id='" + name + "' onchange='update(this.id, this.value)'><br>"
	document.getElementById("varNamer").style.display = "none"

	Http = new XMLHttpRequest();
	Http.open("POST", url);
	Http.send( name );
}

function newVar() {
	document.getElementById("varNamer").style.display = "block";
	document.getElementById("varNamer_name").select()
	document.getElementById("varNamer_name").onchange = newVarCallback
}
