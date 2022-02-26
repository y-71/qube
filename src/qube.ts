// This file is part of gltfpack and is distributed under the terms of MIT License.
import * as gltfpack from './library';

console.log('pack', gltfpack);

var wasmInterface = {
    read: function (path){
        const fileReader = new FileReader();
        return fileReader.readAsArrayBuffer(path);
    },
    write: function(path, data){
        const file = new Blob([data], {type: "application/json"});
        console.log(
            'path:', path,
            'file:', file
        );
    }
};

const args = ['', ''];

gltfpack.pack(args, wasmInterface)
    .then(function(log){
        console.log("done compressing \n",log);
    })
    .catch(function(err){
        console.error("found error\n ",err.message);
    });