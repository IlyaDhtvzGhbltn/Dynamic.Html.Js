const Position = {
	beforebegin : "beforebegin",
	afterbegin : "afterbegin",
	beforeend : "beforeend",
	afterend : "afterend"
}

class Attr {
	constructor(name, value) {
		this.Name = name;
		this.Value = value;
	}

	Name;
	Value;
}

function insertHtml(selector, position, html) {
	var container = $(`${selector}`)[0];
	container.insertAdjacentHTML(position, html);
}

function createHtml(openingTag, value, attributes, closingTag = null) {
	var attributesStr = '';
	if (attributes) {
		[].forEach.call(attributes, function (x) {
			let attribut = `${x.Name}=${x.Value}`;
			attributesStr += attribut;
		});
	}
	var element = '';
	if (closingTag) {
		element = `<${openingTag} ${attributesStr}> ${value} <${closingTag}>`;
	}
	else {
		element = `<${openingTag} ${attributesStr} ${value} />`;
	}
	return element;
}


function createInsertHtml(selector, position, openingTag, value, attributes, closingTag = null) {
	var tag = createHtml(openingTag, value, attributes, closingTag);
	insertHtml(selector, position, tag);
}