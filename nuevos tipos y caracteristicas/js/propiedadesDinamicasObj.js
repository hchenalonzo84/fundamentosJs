const objetoUsuario={
    [`id_${}`]
};

const usuarios=["jon","mirna","karla","miguel","kenai"];

usuarios.forEach((users,index)=>objetoUsuario[`id_${index}`]=users)
console.log(objetoUsuario)