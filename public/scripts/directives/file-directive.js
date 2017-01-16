/*********************
Create file directive
**********************/
app.directive('fileModel', ['$parse', function($parse) {
  return {
    restrict: 'A',//restrict to attribute
    link: function(scope, element, attrs) {
      var model = $parse(attrs.fileModel);
      var modelSetter = model.assign;
      element.bind('change', function() { //when element changes, execute this function
        scope.$apply(function() {
          console.log("File directive scope: ", scope);
          console.log("File directive element: ", element);
          console.log("File directive attrs: ", attrs);
          console.log("Images selected: ", element[0].files);
          modelSetter(scope, element[0].files);
        });
      });
    }
  };
}]);//end directive
