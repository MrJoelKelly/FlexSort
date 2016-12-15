/*
  jQuery FlexSort Plugin
  Joel Kelly (Joel.Kelly@keltec.systems)
*/
(function($){
  var FlexSort; //Parent FlexSort element

  var system_options = {}

  var default_options = {
    row_name: "div.table-row",
    column_name: "div.column",
    header_row_class: "header",
    columns: [] //Array of SORTABLE columns, by default all
  }

  //Stores all data in the table
  //table.data[0] would contain an array of the first row of data, table.data[0][1] is the second column on the first row
  var table = {
    columns: [],
    data: {}
  }

  $.fn.flexSort = function(options){
    FlexSort = $(this);

    setOptions(options);
    initiate(options);
  };

  //Set default_options object to user options
  function setOptions(options){
    //Iterate through keys given in users options
    for(var key in options){
      //Check not empty value
      var empty_test = options[key]+=""; //Convert to string to perform boolean test
      if(empty_test){ //If value not empty
        //If exists in default_options, these are user-definable options
        if(key in default_options){
          //If the key exists in system_options, we need to check that the parameter passed is also valid
          if(key in system_options){
            //If a valid option from system_options
            if(!(options[key] in system_options[key])) continue //Skips rest of loop if the key doesn't have a valid value within system_options
          }

          //Validation tests
          valid = false; //Presume invalidity
          switch(key){
            default: //Any others that don't require validation, such as
              valid = true;
              break;
          };

          if(valid){
            default_options[key] = options[key]; //Update default_options values
          }
        }
      }
    }
  };

  //Adds FlexSort class to the table
  //Binds elements
  function initiate(options){
    if(options == null){
      options = "";
    }

    FlexSort.addClass('FlexSort');
    var classList = [];

    var row = -1,
        row_length = FlexSort.find(default_options.row_name + '.' + default_options.header_row_class + ' ' + default_options.column_name).length - 1; //Number of columns per row

    FlexSort.find(default_options.row_name + ' ' + default_options.column_name).each(function(index){
      var thisList = this.className.split(/\s+/); //Get list of all of this elements classes
      var columnIndex = $(this).index();

      //We only update the list of user-sortable columns if not set in options
      if(isEmpty(options.columns)){
        default_options.columns.push(thisList[1]); //We always presume first column is column_name and second is the sortable name
      }

      if(row == -1){
        table.columns.push(thisList[1]); //Add column class/'name' to our table data
      }

      //Populates our table data from all rows except the header row
      if(!$(this).closest(default_options.row_name).hasClass(default_options.header_row_class)){
        //If first column of new row, initialise array in table.data object
        if(columnIndex == 0){
          table.data[row] = new Array();
        }

        table.data[row][columnIndex] = $(this).text();
      }

      //If reached end of row, increment row
      if(columnIndex === row_length){
        row++;
      }
    })
    console.log(table);
  }

  //Used to test if an object/val is empty.
  //Return true if empty, false if not
  function isEmpty(value){
    var test_string = value+'';
    if(!test_string || value == null){
      return true;
    }else{
      return false;
    }
  }

  function sortColumn(){

  }

})(jQuery);
