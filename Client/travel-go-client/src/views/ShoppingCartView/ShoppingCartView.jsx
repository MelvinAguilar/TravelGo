import { useEffect, useState } from "react";
import { ArrowLeft } from "react-bootstrap-icons";
import classes from "./ShoppingCartView.module.scss";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import FooterAttribution from "../../components/Footer/FooterAttribution/FooterAttribution";
import ItemContainer from "../../components/Container/ShoppingCartContainer/ItemContainer/ItemContainer";

import { CartX } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { 
    shoppingCartApi,
    CastPlaceInformation,
    totalPerItem,
    DayCounter,
    setDateFormat,
    setPriceFormat,
    } from "../../services/shoppingCartServer";
import { toast } from "react-toastify";

const ShoppingCartView = ()=>{
    let total = 0; //as global
    const [elements, setElements] = useState([]);
    const {shoppingCartData, removeShoppingCartItem, saveInBooking, toogleBoughtItems} = shoppingCartApi();

    useEffect(()=>{
        if(shoppingCartData !== null && shoppingCartData.length > 0) {
            setElements(shoppingCartData[0].item);
        }
    },[shoppingCartData])

    //Function remove 
    const removeElementHandler = (e)=>{
        total += total;
        const itemRemove = e.target.getAttribute("data-delete");

        const item = elements.find(item=>item.id_lugar._id === itemRemove);

        //recalculate total
        const days = DayCounter(new Date(item.fecha_inicio), new Date(item.fecha_final));
        const totalPerDays = item.id_lugar.precio * (days===0 ? 1: days);
        const subTotal = totalPerItem(item.cant_personas, totalPerDays);
        total -= ((subTotal*0.13)+subTotal);
        console.log(total);
        removeShoppingCartItem(item._id, total)
    }
    
    
    //mapping items creation
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
            const subTotal = totalPerItem(item.cant_personas, totalPerDays);
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

            return <ItemContainer 
                        adventureData={castedPlaceInformation} 
                        moreInformationData={_moreInformation} 
                        key={item._id} 
                        eventHandler = {removeElementHandler} 
                        _key={item.id_lugar._id}
                        />
        }); 
        
        return items;
    } 

    const dateFormat = (date)=>{
        date = new Date(date);
        try{
            return `${date.getFullYear()}/${String(date.getMonth()).padStart(2, "0")}/${String(date.getDate()).padStart(2, "0")}`;

        }
        catch(error){
            return;
        }

    }
    
    const onClickHandler = async()=>{
        const _toDay = new Date();
        const toDay = `${_toDay.getFullYear()}/${_toDay.getMonth()}/${_toDay.getDate()}`;
        const precio_total = total;
        let items = [];
        elements.map(item=>{

            //getting dates
            item.fecha_inicio = dateFormat(item.fecha_inicio)?dateFormat(item.fecha_inicio): item.fecha_inicio;
            item.fecha_final = dateFormat(item.fecha_final)?dateFormat(item.fecha_final): item.fecha_final;

            const newItem ={
                "id_lugar": item.id_lugar._id,
                "cant_personas": item.cant_personas,
                "fecha_inicio": item.fecha_inicio,
                "fecha_final": item.fecha_final,
                "precio_unitario": item.id_lugar.precio
            }
            items = [...items, newItem];
            toogleBoughtItems(item._id);
        });
       await saveInBooking(toDay, precio_total, items);

        location.reload();
    }   
    return (
        <>
        <Header />
        <main>
            <Container className={classes["shopping-cart-container"]}>

                {elements && elements.length > 0
                ?  
                    <>
                <div className={classes["shopping-cart-introduction"]}>
                    <Link to="/" className={classes.back}>
                        <ArrowLeft/>
                        Regresar a Inicio
                    </Link>
                    <div>
                        <h1>{`CARRITO (${(shoppingCartData[0].item.length)})`}</h1>
                        <p>Ten encuenta que tu reserva no se efecturá hasta que hayas hecho tu pago.</p>
                    </div>
                </div>

                <section className={classes["shopping-cart-items"]}>
                    <h2 className="sr-only">Tus trips</h2>
                        { (elements !== undefined) ? mappedShoppingCart(elements) : <p className={classes["empty-cart"]}>No hay elementos en el carrito</p> }
                </section>

                <div className={classes["total-container"]} id="totalContainer" >
                    <div>
                        <p className={classes["total-money"]}>
                            {`Total $${setPriceFormat(total)} USD`}
                        </p>
                        <p>+ IVA Incluido</p>
                    </div>
                    <Button modifierClass={'Button--black'} onClick = {onClickHandler}>CONTINUAR</Button>
                </div>
                    </>
                :   <div className={classes["empty-cart"]}>
                        <CartX className={classes["empty-cart__icon"]}/>
                        <h2 role="alert">No hay elementos en el carrito</h2>
                    </div>
                }
                
            </Container>
        </main>
        <FooterAttribution />
        </>
    );
}

export default ShoppingCartView;