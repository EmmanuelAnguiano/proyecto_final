let agregar=document.getElementById('btnagregar')
agregar.addEventListener('click',()=>{
    let name=document.getElementById('name').value;
    let id=document.getElementById('id').value;
    let quantity=document.getElementById('quantity').value;
    let cost=document.getElementById('cost').value;
    let product={name:name, id:id, quantity:quantity, cost:cost};
    console.log('agregando a lista product...');
    fetch('http://localhost:1340/api/producto',{
        method:'POST',
        body:JSON.stringify(product),
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(res=>res.json())
    .then(json=>{
        let res=document.getElementById('res');
        res.innerHTML=`
        <p>SE AGREGO EL PRODUCTO CON EL ID: ${json.insertId} </p>
        `;
        document.getElementById('name').value="";
        document.getElementById('id').value="";
        document.getElementById('cost').value="";
        document.getElementById('quantity').value="";
        console.log(json)
    });
});

let listar=document.getElementById('btnlistar')
listar.addEventListener('click',()=>{
    fetch('http://localhost:1340/api/producto',{
        method:'GET',
        body:JSON.stringify(),
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(res=>res.json())
    .then(json=>{
    let lis=document.getElementById('lis');
    for(i=0;i<json.lenght;i++){
        lis.innerHTML=`
        <p>ID: ${json[i].id} </p>
        <P>NOMBRE: ${json[i].name}<p>
        <p>QUANTITY: ${json[i].quantity} </p>
        <p>COSTO: ${json[i].cost} </p>
        `;
    }
    console.log(json);
    });
});


let agregaryfacturar=document.getElementById('btnfacturar');
agregaryfacturar.addEventListener('click',()=>{
    let fac=document.getElementById('fac');
    fac.innerHTML=
    `
    <label for="fecha">FECHA:</label><br>
    <input type="text" id="fecha" name="fecha"><br>
    <label for="nombre">RFC DE CLIENTE:</label><br>
    <input type="text" id="rfc" name="rfc"><br><br>
    <input type="button" value="agregar y facturar" id="agregaryfacturar" class="agregaryfacturar">
    `
   /* let fecha=document.getElementById('fecha').value;
    let rfc=document.getElementById('rfc').value;
    let facturatotal={fecha:fecha,rfc:rfc};
    fetch('http://localhost:1340/api/producto',{
        method:'POST',
        body:JSON.stringify(facturatotal),
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(res=>res.json())
    .then(json=>{
       let list=document.getElementById('list');
        list.innerHTML=`
        <p>FACTURA GENERADA</p>
        `;
        console.log(json)
    });
    */
});

let facturar=document.getElementById('agregaryfacturar');
facturar.addEventListener('click',()=>{
    let fecha=document.getElementById('fecha').value;
    let rfc=document.getElementById('rfc').value;
    let facturatotal={fecha:fecha,rfc:rfc};
    fetch('http://localhost:1340/api/producto',{
        method:'POST',
        body:JSON.stringify(facturatotal),
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(res=>res.json())
    .then(json=>{
       let list=document.getElementById('list');
        list.innerHTML=`
        <p>FACTURA GENERADA</p>
        `;
        console.log(json)
    });
});