# jQuery FlexSort

A basic jQuery plugin to sort tables created using CSS flexbox.

## Requirements

jQuery (Tested on v3.1.1)

flexsort.js

flexsort.css

## Functionality

Users can click on a header of a column and it will sort the table into either ascending (default on first-click) or descending order. It supports alphabetical, numerical and currency (currently only for $ and £) sorting.

## Setup

Include the necessary files stated in **Requirements** i.e.
```
<script type="text/javascript" src="/path/to/jquery-latest.js"></script>
<script type="text/javascript" src="/path/to/flexsort.js"></script>
<link rel="stylesheet" type="text/css" href="/path/to/flexsort.css">
```

Will work on all flexbox-based tables, where each row has an identical number of columns with corresponding identical classes. The basic HTML structure is:
```
<div class="mytable">
  <div class="table-row header">
    <div class="column name">Name</div>
    <div class="column price">Price</div>
    <div class="column qty">Qty</div>
  </div>
  <div class="table-row">
    <div class="column name">Rock</div>
    <div class="column price">$1.99</div>
    <div class="column qty">5</div>
  </div>
  <div class="table-row">
    <div class="column name">Paper</div>
    <div class="column price">$0.99</div>
    <div class="column qty">11</div>
  </div>
  <div class="table-row">
    <div class="column name">Scissors</div>
    <div class="column price">$2.99</div>
    <div class="column qty">15</div>
  </div>
</div>
```

Initialise the plugin on your table:
```
$(document).ready(function(){
  $("#myTable").flexsort();
});
```

You can now click on any header column and it will sort the table based on that column's values!

#### Options
There are a number of options that can be passed to flexsort in order to alter the functionality. Options are included in the initialisation of your table in the following format.
```
$(document).ready(function(){
  $("#myTable").flexsort({optionName: 'value'});
});
```
The current valid option parameters are as follows:

| OptionName    | Description   | Valid Parameters  |
| ------------- |:-------------:| :-----:|
| row_name     | Defaults to 'table-row', used to denote the div.class of each row in your table | Any valid class name |
| column_name      | Defaults to 'column', used to denote the div.class of each column within the rows of your table | Any valid class name |
| header_row_class | Defaults to 'header', used to denote the div.class of your header row | Any valid class name |
| columns | Denotes which columns are sortable within the table. Defaults to allow all columns | An array of the class names of individual columns, e.g. ["name", "age"] |
