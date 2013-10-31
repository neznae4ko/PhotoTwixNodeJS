var fs = require('fs');
var parameter_path = "./conf/parameter.json";

//Common parameters
var g_parameters = {
	printer_rx1:true,			//True if printer is a RX1 and can cut
	use_money:false,			//Use coin 
	money_value:[0.2, 0.5, 1.0],	//Possible coin value
	current_credit:0.0,
	current_template:"template_default",
	template_text:"",
	template_date:""
};

function loadParameters() {
	var data = fs.readFileSync(parameter_path);
	g_parameters = JSON.parse(data);
}

function saveParameters() {
	fs.writeFile(parameter_path, JSON.stringify(g_parameters), function(err) {
		if(err) {
		  console.log(err);
		} else {
		  console.log("Parameters saved to " + parameter_path);
		}
	}); 
}

function setParameter(name, value) {
	g_parameters[name] = value;
	saveParameters();
}

function getParameter(name) {
	loadParameters();
	return g_parameters[name];
}

function getAllParameters() {
	loadParameters();
	return g_parameters;
}

function resetParameters() {
	g_parameters.printer_rx1 = true;
	g_parameters.use_money = false;
	g_parameters.money_value = [0.2, 0.5, 1.0];	//Possible coin value
	g_parameters.current_credit = 0.0;
	g_parameters.current_template = "template_default";
	g_parameters.template_text = "";
	g_parameters.template_date = "";
	
	saveParameters();
}

exports.loadParameters = loadParameters;
exports.saveParameters = saveParameters;
exports.setParameter = setParameter;
exports.getParameter = getParameter;
exports.getAllParameters = getAllParameters;
exports.resetParameters = resetParameters;