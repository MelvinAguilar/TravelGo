import { useState } from "react";
import { ArrowLeft } from "react-bootstrap-icons";
import classes from "./ShoppingCartView.module.scss";
import ItemContainer from "../../components/Container/ShoppingCartContainer/ItemContainer/ItemContainer";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import FooterAttribution from "../../components/Footer/FooterAttribution/FooterAttribution";

import { Link } from "react-router-dom";


const shoppingCartInformation = {

    "id": "6368945c50f24634e6069eea",  
    "id_usuario": "6368449278fb3d4a378632fc",
    "precio_total": 0.00,
    "servicios_extra": [],
    "item": [
        {

            "id_lugar":"63688fcb106a25c6e1a22f1b",
            "cant_personas": 3,
            "fecha": "2022-11-07T05:10:02.587+00:00",
            "fecha_inicio": "2022-07-08T00:00:00.000+00:00",
            "fecha_final": "2022-07-08T00:00:00.000+00:00",
            "precio_unitario": 45,
            "_id": "6368945c50f24634e6069eeb"
        },
        {

            "id_lugar":"63688fcb106a25c6e1a22f1b",
            "cant_personas": 3,
            "fecha": "2022-11-07T05:10:02.587+00:00",
            "fecha_inicio": "2022-07-08T00:00:00.000+00:00",
            "fecha_final": "2022-07-08T00:00:00.000+00:00",
            "precio_unitario": 45,
            "_id": "6368945c50f24634e6069eab"
        },
        {

            "id_lugar":"63688fcb106a25c6e1a22f1b",
            "cant_personas": 3,
            "fecha": "2022-11-07T05:10:02.587+00:00",
            "fecha_inicio": "2022-07-08T00:00:00.000+00:00",
            "fecha_final": "2022-07-08T00:00:00.000+00:00",
            "precio_unitario": 45,
            "_id": "6368945c50f24634e6069eec"
        }
    ],
};

const placeInformation = {
"id":  "63688fcb106a25c6e1a22f1b",
"nombre": "Cascada la olomina",
"descripcion_general": "El Jardín Botánico La Laguna es un parque nacional de El Salvador y jardín botánico de 46 manzanas de extensión",
"descripcion_especifica": "El Jardín Botánico La Laguna es un parque nacional de El Salvador y jardín botánico de 46 manzanas de extensión, de las cuales 4.5 manzanas están destinadas para uso público, ubicado en el fondo de un cráter volcánico, en el municipio de Antiguo Cuscatlán, departamento de La Libertad.",
"precio": 45,
"capacidad": null,
"cant_comentarios": 40,
"puntuacion_prom": 4.5,
"etiqueta": [
  "Naturaleza",
  "Parque",
  "Plantas",
  "Laguna",
  "Flora y fauna"
],
"ubicacion": {
  "departamento": "Morazán",
  "direccion": "Arambala",
},
"redes": {
  "nombre": "Facebook",
  "url": "https://es-la.facebook.com/jardin.botanicolalaguna/",
  "_id": {
    "$oid": "63688fcb106a25c6e1a22f1d"
  }
},
"servicios": [
  "Visitas escolares",
  "Fiestas infantiles",
  "Mantenimiento de jardines",
  "Invernadero"
],
"image": ["img/3.jpg", "img/3.jpg", "img/3.jpg"]
}



const CastPlaceInformation = (Data)=>{
    return {
        id_lugar: Data.id,
        nombre: Data.nombre,
        ubicacion: Data.ubicacion,
        cant_comentarios: Data.cant_comentarios,
        puntuacion_prom: Data.puntuacion_prom,
        precio: setPriceFormat(Data.precio),
        image: Data.image[0],

    }
}

const totalPerServices = (services)=>{
    let total = 0;
    if(services.length > 0){
        services.map(service=>{
            total += service;
        });
    }
    return total;
}

const totalPerItem = (cant_personas, pricePerDay, totalPerService)=>{
    return (cant_personas*pricePerDay) + totalPerService;
}

const DayCounter = (fecha_inicio, fecha_final)=>{
    const noches =  Math.round((fecha_final.getTime()-fecha_inicio.getTime())/(1000*60*60*24));
    return noches;
}

const setDateFormat = (date)=>{
    return `${date.getFullYear()}/${String(date.getMonth()).padStart(2, "0")}/${String(date.getDate()).padStart(2, "0")}`;
}

const setPriceFormat = (price)=>{
    return  price.toLocaleString("en",{
        useGrouping: false, 
        minimumFractionDigits: 2
});
}

const ShoppingCartView = ()=>{

    //useState for items in shoppingCart
    const [listItems, removeElementList] = useState(shoppingCartInformation.item);
    let total = 0;
    
    const totalPerService = totalPerServices(shoppingCartInformation.servicios_extra);
    const impuestos = 10;

    //Function remove 
    const removeElementHandler = (e)=>{
        const itemRemove = e.target.getAttribute("data-delete");
        removeElementList(listItems.filter(item=>item._id !== itemRemove));
    }

    //mapping items creation
    const mappedShoppingCart = listItems.map((item)=>{
        //calculate prices
        let castedPlaceInformation;
        const days = DayCounter(new Date(item.fecha_inicio), new Date(item.fecha_final));
        const totalPerDays = item.precio_unitario * (days===0 ? 1: days);
        const subTotal = totalPerItem(item.cant_personas, totalPerDays, totalPerService);
        total += (subTotal*0.13)+subTotal;

        //new object
        const _moreInformation = {
            "precio_unitario": item.precio_unitario,
            "noches":  days=== 0 ? 1:days,
            "sub_precio_noches": setPriceFormat(totalPerDays),
            "sub_servicios_extra": setPriceFormat(totalPerService),
            "impuestos": setPriceFormat(impuestos),
            "subtotal_item": setPriceFormat(subTotal),
            "fecha_inicio": setDateFormat((new Date(item.fecha_inicio))),
            "fecha_final": setDateFormat((new Date(item.fecha_final))),
            "cant_personas": item.cant_personas,
        }


        if(item.id_lugar == placeInformation.id)
            castedPlaceInformation = CastPlaceInformation(placeInformation)
        return <ItemContainer 
                    adventureData={castedPlaceInformation} 
                    moreInformationData={_moreInformation} 
                    key={item._id} 
                    eventHandler = {removeElementHandler} 
                    _key={item._id}/>
    });
    
    return (
        <>
        <Header />
        <main>
            <Container className={classes["shopping-cart-container"]}>
                <div className={classes["shopping-cart-introduction"]}>
                    <Link to="/" className={classes.back}>
                        <ArrowLeft/>
                        Back to home
                    </Link>
                    <div>
                        <h1>{`CARRITO (${listItems.length})`}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, proin commodo nisi montes sed volutpat rhoncus, dictum congue arcu lacinia odio viverra.</p>
                    </div>
                </div>

                <section className={classes["shopping-cart-items"]}>
                    <h2 className="sr-only">Items in shopping cart</h2>
                    {(mappedShoppingCart.length > 0) ? mappedShoppingCart : <p className={classes["empty-cart"]}>No hay elementos en el carrito</p>}
                </section>

                <div className={classes["total-container"]} id="totalContainer" >
                    <div>
                        <p className={classes["total-money"]}>
                            {`Total $${setPriceFormat(total)} USD`}
                        </p>
                        <p>+ IVA Incluido</p>
                    </div>
                    <Button modifierClass={'Button--black'}>CONTINUAR</Button>
                </div>
            </Container>
        </main>
        <FooterAttribution />
        </>
    );
}

export default ShoppingCartView;