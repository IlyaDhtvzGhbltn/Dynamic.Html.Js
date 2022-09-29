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
	var element = '';
	var attributesStr = '';

	if (attributes) {
		[].forEach.call(attributes, function (x) {
			let attribut = `${x.Name}=${x.Value}`;
			attributesStr += attribut;
		});
	}
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

function createTable(tableAttr, thAttr, columns, rows) {

	var tableAttributesStr = '';
	var thAttributeStr = '';

	if (tableAttr) {
		[].forEach.call(attributes, function (x) {
			let attribut = `${x.Name}=${x.Value}`;
			tableAttributesStr += attribut;
		});
	}

	if (thAttr) {
		[].forEach.call(attributes, function (x) {
			let attribut = `${x.Name}=${x.Value}`;
			thAttributeStr += attribut;
		});
	}

	var tbl = `<table ${tableAttributesStr}> <thead> <tr>`;
	[].forEach.call(columns, (c) => {
		tbl += `<th  ${thAttributeStr}>${c}</th>`;
	});
	tbl += '</tr></thead><tbody>';

	[].forEach.call(rows, (r) => {
		tbl += `<tr>`;
		[].forEach.call(r, (cell) => {
			let cellContent = cell == null ? '' : cell;
			tbl += `<th ${thAttributeStr}> ${cellContent}</th>`;
		});
		tbl += `</tr>`;
	});

	tbl += `</tbody></table>`;

	return tbl;
}