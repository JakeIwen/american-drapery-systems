/**********************
Create file controller
***********************/
app.controller('FileController', ['FileFactory', '$compile',
function(FileFactory, $compile) {
  const self = this;

  self.filesObject = { //store files and info here
    files: FileList,
    filesInfo: []
  };

  self.infoCounter = 0;

  self.submitFiles = function() {
    console.log('submit files clicked');
    console.log('sending these files to FileFactory: ', self.filesObject.files);
    console.log('sending this file info to FileFactory: ', self.filesObject.filesInfo);
    FileFactory.updateFiles(self.filesObject); //send filesObject to FileFactory
    // FileFactory.submitFiles(); //send files and info to server
  }

}]);//End controller