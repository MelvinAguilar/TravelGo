import { useEffect, useState } from "react";
import { ArrowLeft } from "react-bootstrap-icons";
import classes from "./ShoppingCartView.module.scss";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import FooterAttribution from "../../components/Footer/FooterAttribution/FooterAttribution";
import ItemContainer from "../../components/Container/ShoppingCartContainer/ItemContainer/ItemContainer";


import { Link } from "react-router-dom";
import { 
    shoppingCartApi,
    CastPlaceInformation,
    totalPerServices,
    totalPerItem,
    DayCounter,
    setDateFormat,
    setPriceFormat
    } from "../../services/shoppingCartServer";


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




const ShoppingCartView = ()=>{
    const [elements, setElements] = useState();
    const {shoppingCartData} = shoppingCartApi();

    useEffect(()=>{
        if(shoppingCartData !== null) setElements(mappedShoppingCart(shoppingCartData[0].item)
        );
    },[shoppingCartData])

    //useState for items in shoppingCart
    const [listItems, removeElementList] = useState(shoppingCartInformation.item);
    
    //Function remove 
    const removeElementHandler = (e)=>{
        const itemRemove = e.target.getAttribute("data-delete");
        removeElementList(listItems.filter(item=>item._id !== itemRemove));
    }

    let total = 0; //as global

    const mappedShoppingCart = (fetchedData)=>{
        if(!fetchedData) return;
        const totalPerService = 0;
        const impuestos = 10;
        total += 0;

        const items = fetchedData.map((item)=>{
            //calculate prices
            let castedPlaceInformation;
            const days = DayCounter(new Date(item.fecha_inicio), new Date(item.fecha_final));
            const totalPerDays = item.id_lugar.precio * (days===0 ? 1: days);
            const subTotal = totalPerItem(item.cant_personas, totalPerDays, totalPerService);
            total += (subTotal*0.13)+subTotal;
        
            //new object
            const _moreInformation = {
                "precio_unitario": item.id_lugar.precio,
                "noches":  days=== 0 ? 1:days,
                "sub_precio_noches": setPriceFormat(totalPerDays),
                "sub_servicios_extra": setPriceFormat(totalPerService),
                "impuestos": setPriceFormat(impuestos),
                "subtotal_item": setPriceFormat(subTotal),
                "fecha_inicio": setDateFormat((new Date(item.fecha_inicio))),
                "fecha_final": setDateFormat((new Date(item.fecha_final))),
                "cant_personas": item.cant_personas,
            }
            castedPlaceInformation = CastPlaceInformation(item.id_lugar);
            console.log(castedPlaceInformation);
            return <ItemContainer 
                        adventureData={castedPlaceInformation} 
                        moreInformationData={_moreInformation} 
                        key={item._id} 
                        eventHandler = {removeElementHandler} 
                        _key={item.id_lugar._id}/>
        }); 
        
        return items;
    } 
    
    //mapping items creation
    return (
        <>
        <Header />
        <main>
            <Container className={classes["shopping-cart-container"]}>
                <div className={classes["shopping-cart-introduction"]}>
                    <Link to="/" className={classes.back}>
                        <ArrowLeft/>
                        Regresar al inicio
                    </Link>
                    <div>
                        <h1>{`CARRITO (${(shoppingCartData[0].item.length)})`}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, proin commodo nisi montes sed volutpat rhoncus, dictum congue arcu lacinia odio viverra.</p>
                    </div>
                </div>

                <section className={classes["shopping-cart-items"]}>
                    <h2 className="sr-only">Items in shopping cart</h2>
                    { (elements !== undefined) ? elements : <p className={classes["empty-cart"]}>No hay elementos en el carrito</p>}
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