# JavaScript Dynamic Html Creation
This is a simple library for creating Html elements dynamically.
## Requirements
- jQuery lib should be installed.
## Examples

### Paired Tags
>createInsertHtml('.container', Position.afterbegin, 'span', 'span content', null, 'span')

< span> 
  span content 
< /span>

>createInsertHtml('.container', Position.afterbegin, 'b', 'b content', [new Attr('class','class-name')], 'b')

< b class="class-name"> b content < /b>

### Unpaired Tags
>createInsertHtml('.container', Position.afterbegin, 'input', '', [new Attr('type','radio')], null)

< input type="radio">

### Tables
> createTable(null, null, ['header1','header2','header3'], [['row1col1', 'row1col2', 'row1col3'], ['row2col1', 'row2col2', 'row2col3']] )
This method will create table with current structure :

<table> <thead> <tr><th>header1</th><th>header2</th><th>header3</th></tr></thead><tbody><tr><th> row1col1</th><th> row1col2</th><th> row1col3</th></tr><tr><th> row2col1</th><th> row2col2</th><th> row2col3</th></tr></tbody></table>

You also could set NULL for some cells :
> createTable(null, null, ['header1','header2','header3'], [['row1col1', null, 'row1col3'], ['row2col1', 'row2col2', null]] )

<table> <thead> <tr><th>header1</th><th>header2</th><th>header3</th></tr></thead><tbody><tr><th> row1col1</th><th> </th><th> row1col3</th></tr><tr><th> row2col1</th><th> row2col2</th><th> </th></tr></tbody></table>
