// This file is part of gltfpack and is distributed under the terms of MIT License.
import * as gltfpack from './library';

var wasmInterface = {
    read: async function (file:File){
        return await file.arrayBuffer();
    },
    write: function(path, data){
        const file = new Blob([data], {type: "application/json"});
        console.log(
            'path:', path,
            'file:', file
        );
    }
};


export async function pack(input:File){
    await gltfpack.pack(["-i",input.name,"-o", "test.gltf"], wasmInterface)
        .then(function(log){
            console.log("done compressing \n",log);
        })
        .catch(function(err){
            console.error("found error\n ",err.message);
        });
}