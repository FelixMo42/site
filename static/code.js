<!doctype html>
<html>
	<head>
		<title>super link</title>

		<script type="text/javascript" src="{{ url_for('static', filename='code.js') }}"></script>
		<link rel= "stylesheet" type= "text/css" href= "{{ url_for('static', filename='style.css') }}">

		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	</head>
	<body>
		<div class="header">
			<a>load</a>
			<a onclick="newVar()">new variable</a>

			<a class="line"></a>

			<div class="dropdown">
				<button class="dropbtn">basic math
					<i class="fa fa-caret-down"></i>
				</button>
				<div class="dropdown-content">
					<a onclick="newLink('add', '<input> + <input> = <input>')">add</a>
					<a onclick="newLink('subtract', '<input> - <input> = <input>')">subtract</a>
					<a onclick="newLink('multiply', '<input> * <input> = <input>')">multiply</a>
					<a onclick="newLink('divide', '<input> / <input> = <input>')">divide</a>
				</div>
			</div>

			<div class="dropdown">
				<button class="dropbtn">units
					<i class="fa fa-caret-down"></i>
				</button>
				<div class="dropdown-content">
					<a onclick="newLink('temp_CeFa', '<input>°C = <input>°F')">celcius <> fahrenheit</a>
					<a onclick="newLink('dist_MiKi', '<input>mi = <input>km')">miles <> kilometers</a>
				</div>
			</div>

			<a class="line"></a>

			<a href="/help">help</a>
			<a href="/about">about</a>
		</div>

		<div id="variables">
			{% for name in variables %}
				<span value="{{name}}" oncontextmenu="varMenu(this); return false;">
					<span class="varName">{{name}}</span>:
					<input
						id="{{name}}"
						value="{{value[name]}}"
						placeholder="{{sets[name]}}"
						onchange="update(this.id, this.value)"
					>
					<br>
				</span>
			{% endfor %}
		</div>

		<hr>

		<div id="links">
			{% for name in links %}
				<span class="link" id="{{name}}" type="{{links[name]['name']}}" oncontextmenu="linkMenu(this); return false;">
					{{types[links[name]["name"]][-1] % tuple(list(links[name]["vars"]))}}
					<br>
				</span>
			{% endfor %}
		</div>

		<!-- POP UPS -->

		<div id="shade"></div>
		<div class="popup" id="varNamer">
			<label>Enter variable name:</label><br>
			<input type="text" id="varNamer_name" placeholder="variable name">
		</div>

		<div class="popup" id="varMenu">
			<button id="varMenu_rename">rename</button><br>
			<button id="varMenu_delete">delete</button>
		</div>

		<div class="popup" id="linkEdit">
			<span id="linkEdit_span"></span>
			<br>
			<button id="link_save" onclick="saveLink(this.parentNode)">save</button>
		</div>

		<div class="popup" id="linkMenu">
			<button id="linkMenu_edit">edit</button><br>
			<button id="linkMenu_delete">delete</button>
		</div>
	</body>
</html>
