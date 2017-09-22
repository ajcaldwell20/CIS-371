/**
 * Created by Hans Dulimarta Fall 2017.
 * TODO: Add your name below this line
 */

/**
 * Given a node with id {rootId}, the following function finds all its descendant
 * elements having its attribute ID set. The function returns the number of
 * such elements. ALSO, for each such element this function sets its class
 * to {klazName}.
 *
 * @param rootId
 * @param klazName
 * @returns {number}
 */
function findElementsWithId(rootId, klazName) {
    /* complete this function */
    let elems = document.querySelectorAll('#' + rootId + ' [id]');

    for (let e in elems) {
        elems.className = klazName;
    }

    return elems.length;
}

/**
 * The following function finds all elements with attribute 'data-gv-row' (or
 * 'data-gv-column') and create a table of the desired dimension as a child of
 * the element.
 *
 * @returns NONE
 */
function createTable() {
    /* complete this function */
    let elems = document.querySelectorAll('[data-gv-row]');
    let lipsum = new LoremIpsum();
    let col = document.querySelectorAll('[data-gv-column]')[0].getAttribute('data-gv-column');
    let tableText = "<table align='center'>";

    for (h = 1; h <= col; h++){
        tableText += "<th>Heading" + h + "</th>";
    }
    elems.forEach(function(el) {
    for (i = 1; i <= el.getAttribute('data-gv-row'); i++ ) {
        tableText += "<tr>";

        for (c = 1; c <= col; c++){
            tableText += "<td>" + lipsum.generate(3) + "</td>";
        }

        tableText += "</tr>";
    }

        el.innerHTML = tableText;

    });
    tableText += "</table>"
}

/*
    for (i = 1; i <= row; i++) {
        tableText += "<tr>";
        for (j = 1; j <= col; j++) {
            tableText += "<td>" + lipsum.generate(3) + "</td>";
        }
        tableText += "</tr>";
        elems.innerHTML = tableText;
    }


    tableText += "</table>";
}*/
