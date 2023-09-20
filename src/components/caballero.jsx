import React from "react"

function Caballero(props) {
    return <section className={props.class}>
        <div className='cubo' onDoubleClick={props.dobleclic} onClick={props.oneclic} >
            <img className="cara1" src={require(`../Img/${props.image}`)} alt="" />
            <img className="cara2" src={require(`../Img/${props.image}`)} alt="" />
            <img className="cara3" src={require(`../Img/${props.image}`)} alt="" />
            <img className="cara4" src={require(`../Img/${props.image}`)} alt="" />
        </div>
        <img className={props.clase} src={require(`../Img/${props.image1}`)} alt="" />
    </section>
}
export {Caballero}
