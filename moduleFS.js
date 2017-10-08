var fs = require('fs');

module.exports = {

    appendFile: function (filename, data){
      fs.appendFile(filename, data, 'utf8', function(err){
        if(err) throw err;
        console.log('Append file has been saved')
      });
    },

    readFile: function (filename) {
      fs.readFile(filename, 'utf8', function (err, data){
        if (err) throw err;
        console.log('Read file has been read')
        
        return data
      });
    },

    readFileSync: function(filename){
      var data = fs.readFileSync(filename, 'utf8')
        console.log('Read file sync has been read')
        // console.log(data);
        return data
    },

    writeFile: function (filename, data){
      fs.writeFile(filename, data, (err) => {
        if (err) throw err;
        console.log('Write file has been saved')
      });
    }

}
