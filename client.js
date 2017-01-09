$(function(){
  console.log('jQuery is working!!!!!!!!!');
  $('#newEmployeeForm').on('submit', function(event){
    event.preventDefault(); // stop the page from reloading and redirecting
    console.log('Form has been submitted!!');

    var newEmployeeArray = $(this).serializeArray(); // get the information from the form
    console.log(newEmployeeArray);

    var newEmployeeObject = {};

    // Loop through all of the input properties in the array
    // to make a single object
    for(var i = 0; i < newEmployeeArray.length; i++){
      var inputFieldName = newEmployeeArray[i].name;
      var inputFieldValue = newEmployeeArray[i].value;
      newEmployeeObject[inputFieldName] = inputFieldValue;
    }

    console.log(newEmployeeObject);
  });
});
